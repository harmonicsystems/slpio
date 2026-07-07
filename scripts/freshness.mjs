/* scripts/freshness.mjs
 *
 * The monthly maintenance punch list. Two reports:
 *
 *   1. Review age — every content entry by `lastReviewed` frontmatter date,
 *      never-reviewed entries grouped by collection. A lastReviewed date
 *      means a human (or verified agent pass) checked the entry against
 *      current reality on that day; absence means nobody has yet.
 *
 *   2. Link health — every external URL cited in content, checked live.
 *      Broken citations under evidence-based goals are silent credibility
 *      rot; this surfaces them before readers find them.
 *
 * Usage:
 *   npm run freshness             # both reports
 *   node scripts/freshness.mjs --no-links   # skip the network check
 *
 * Node 22+, no dependencies.
 */

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = path.join(ROOT, "src", "content");
const CHECK_LINKS = !process.argv.includes("--no-links");
const STALE_DAYS = 180; // reviewed longer ago than this gets flagged

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function frontmatterDate(source) {
  const m = source.match(/^lastReviewed:\s*["']?(\d{4}-\d{2}-\d{2})/m);
  return m ? new Date(m[1] + "T00:00:00Z") : null;
}

function externalUrls(source) {
  return [...source.matchAll(/https?:\/\/[^\s)"'<\]]+/g)]
    .map((m) => m[0].replace(/[.,;:]+$/, ""))
    .filter((u) => !u.includes("slpio.org"));
}

const files = await walk(CONTENT);
const now = Date.now();
const entries = [];
const urlSources = new Map(); // url -> [relative file paths]

for (const file of files) {
  const source = await readFile(file, "utf8");
  const rel = path.relative(CONTENT, file);
  entries.push({
    rel,
    collection: rel.split(path.sep)[0],
    reviewed: frontmatterDate(source),
  });
  for (const url of externalUrls(source)) {
    if (!urlSources.has(url)) urlSources.set(url, []);
    urlSources.get(url).push(rel);
  }
}

// ── Report 1: review age ──────────────────────────────────────────────────

console.log(`\n═══ FRESHNESS — ${entries.length} entries across src/content/ ═══\n`);

const reviewed = entries.filter((e) => e.reviewed);
const never = entries.filter((e) => !e.reviewed);

if (reviewed.length) {
  console.log(`Reviewed entries (${reviewed.length}), oldest first:`);
  reviewed
    .sort((a, b) => a.reviewed - b.reviewed)
    .forEach((e) => {
      const days = Math.floor((now - e.reviewed) / 86400000);
      const flag = days > STALE_DAYS ? "  ⚠ REVIEW DUE" : "";
      console.log(`  ${String(days).padStart(4)}d  ${e.rel}${flag}`);
    });
}

const byCollection = {};
for (const e of never) byCollection[e.collection] = (byCollection[e.collection] || 0) + 1;
console.log(`\nNever reviewed (${never.length}) by collection:`);
Object.entries(byCollection)
  .sort((a, b) => b[1] - a[1])
  .forEach(([c, n]) => console.log(`  ${String(n).padStart(4)}  ${c}`));

// ── Report 2: link health ─────────────────────────────────────────────────

if (!CHECK_LINKS) {
  console.log("\n(link check skipped — remove --no-links to run it)\n");
  process.exit(0);
}

const urls = [...urlSources.keys()];
console.log(`\n═══ LINK CHECK — ${urls.length} unique external URLs ═══\n`);

async function check(url) {
  const opts = {
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
    headers: { "User-Agent": "slpio-freshness-check/1.0 (+https://www.slpio.org)" },
  };
  try {
    let res = await fetch(url, { ...opts, method: "HEAD" });
    // Some servers reject HEAD; retry with GET before judging.
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      res = await fetch(url, { ...opts, method: "GET" });
    }
    return { url, status: res.status, location: res.headers.get("location") || undefined };
  } catch (err) {
    return { url, status: 0, error: err.name === "TimeoutError" ? "timeout" : err.message };
  }
}

const results = [];
const CONCURRENCY = 8;
for (let i = 0; i < urls.length; i += CONCURRENCY) {
  const batch = await Promise.all(urls.slice(i, i + CONCURRENCY).map(check));
  results.push(...batch);
  process.stdout.write(`  checked ${Math.min(i + CONCURRENCY, urls.length)}/${urls.length}\r`);
}
console.log("");

// 403 after a GET retry usually means bot-blocking (Cloudflare etc.), not a
// dead page — report separately so monthly runs don't cry wolf.
const blocked = results.filter((r) => r.status === 403);
const broken = results.filter((r) => (r.status === 0 || r.status >= 400) && r.status !== 403);
const redirected = results.filter((r) => r.status >= 300 && r.status < 400);

if (broken.length) {
  console.log(`\nBROKEN (${broken.length}) — fix or replace these citations:`);
  for (const r of broken) {
    console.log(`  [${r.status || r.error}] ${r.url}`);
    urlSources.get(r.url).forEach((f) => console.log(`      cited in ${f}`));
  }
}
if (blocked.length) {
  console.log(`\nBOT-BLOCKED (${blocked.length}) — likely fine; spot-check in a browser:`);
  for (const r of blocked) console.log(`  [403] ${r.url}`);
}
if (redirected.length) {
  console.log(`\nREDIRECTED (${redirected.length}) — usually fine, worth updating when convenient:`);
  for (const r of redirected) console.log(`  [${r.status}] ${r.url}\n      → ${r.location || "?"}`);
}
console.log(`\nOK: ${results.length - broken.length - blocked.length - redirected.length} · redirected: ${redirected.length} · blocked: ${blocked.length} · broken: ${broken.length}\n`);
process.exit(broken.length ? 1 : 0);
