/* scripts/build-cmu-dict.mjs
 *
 * Generates public/tools/engine/cmu.js — the full pronunciation dictionary
 * for the /tools/ pages — by intersecting the CMU Pronouncing Dictionary
 * with an everyday-English frequency list.
 *
 * Why an intersection: the frequency list keeps the dictionary small enough
 * to ship (top ~40k words instead of all 134k cmudict entries, most of which
 * are proper names nobody pastes into a story checker), and cmudict filters
 * the web junk out of the frequency list (misspellings, URL fragments).
 *
 * Entries are emitted in frequency order. SLPIO.engine.wordsWith() iterates
 * the dict in insertion order, so the stimulability word list comes back
 * most-common-first for free.
 *
 * Sources (auto-downloaded into scripts/.cache/ on first run):
 *   - cmudict-0.7b — CMU Pronouncing Dictionary, Carnegie Mellon University.
 *     BSD-style license (redistribution permitted with attribution).
 *     https://raw.githubusercontent.com/Alexir/CMUdict/master/cmudict-0.7b
 *   - count_1w.txt — word frequencies from the Google Web Trillion Word
 *     Corpus, compiled by Peter Norvig. https://norvig.com/ngrams/count_1w.txt
 *
 * Usage:
 *   node scripts/build-cmu-dict.mjs [topN]   # default 40000
 *
 * The demo dictionary in public/tools/engine/data.js is always merged in,
 * so the tools' sample texts keep 100% coverage regardless of topN.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CACHE = path.join(ROOT, "scripts", ".cache");
const OUT = path.join(ROOT, "public", "tools", "engine", "cmu.js");
const DATA_JS = path.join(ROOT, "public", "tools", "engine", "data.js");

const SOURCES = {
  "cmudict-0.7b": "https://raw.githubusercontent.com/Alexir/CMUdict/master/cmudict-0.7b",
  "count_1w.txt": "https://norvig.com/ngrams/count_1w.txt",
};

const TOP_N = parseInt(process.argv[2] || "40000", 10);

async function fetchSource(name) {
  const file = path.join(CACHE, name);
  if (!existsSync(file)) {
    console.log(`downloading ${name} …`);
    const res = await fetch(SOURCES[name]);
    if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
    await mkdir(CACHE, { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
  }
  return readFile(file, "latin1");
}

// Normalize a dictionary headword the same way engine.js lookup() normalizes
// input tokens: lowercase, keep only [a-z'].
function normalize(word) {
  return word.toLowerCase().replace(/[^a-z']/g, "");
}

function parseCmudict(text) {
  const dict = new Map(); // normalized word -> "P1 P2 P3" (stress stripped)
  for (const line of text.split("\n")) {
    if (!line || line.startsWith(";;;")) continue;
    const sep = line.indexOf("  ");
    if (sep === -1) continue;
    const head = line.slice(0, sep);
    // Letters and apostrophes only. Digit/symbol headwords ("3-D", "A.M.")
    // would otherwise collapse onto plain words after normalization —
    // cmudict sorts them first, so "3-D" would claim the key "d".
    if (!/^[A-Z']+$/.test(head)) continue;
    const word = normalize(head);
    if (!word || dict.has(word)) continue;
    const phones = line
      .slice(sep + 2)
      .trim()
      .split(/\s+/)
      .map((p) => p.replace(/\d+$/, ""));
    dict.set(word, phones.join(" "));
  }
  return dict;
}

function parseFrequencyList(text) {
  const words = [];
  for (const line of text.split("\n")) {
    const tab = line.indexOf("\t");
    if (tab === -1) continue;
    words.push(line.slice(0, tab));
  }
  return words; // already in descending frequency order
}

// Extract the demo SLPIO.CMU from data.js so its words are always included.
async function loadDemoDict() {
  const code = await readFile(DATA_JS, "utf8");
  const win = {};
  new Function("window", `with (window) { ${code} }`)(win);
  return win.SLPIO.CMU;
}

const [cmuRaw, freqRaw] = await Promise.all([
  fetchSource("cmudict-0.7b"),
  fetchSource("count_1w.txt"),
]);
const cmudict = parseCmudict(cmuRaw);
const freqWords = parseFrequencyList(freqRaw);
const demo = await loadDemoDict();

const out = new Map();
for (const word of freqWords) {
  if (out.size >= TOP_N) break;
  const phones = cmudict.get(word);
  if (phones) out.set(word, phones);
}
// Contractions and possessives pass. The frequency list strips apostrophes
// ("dont", "whats"), so no apostrophe'd cmudict entry can survive the
// intersection above — yet pasted stories are full of them. Include an
// apostrophe'd entry when either (a) its stripped spelling ranks inside
// TOP_N, or (b) it's a recognizable contraction/possessive of a word that
// already made the cut ("they're" ← "they", "shouldn't" ← "should",
// "teacher's" ← "teacher"). Emit under BOTH spellings, never overwriting an
// existing entry (so "i'll" ≠ "ill" stays correct).
const freqRank = new Map(freqWords.map((w, i) => [w, i]));
const SUFFIX = /^([a-z]+)'(s|t|re|ve|ll|d|m|em)$/;
let contractions = 0;
for (const [word, phones] of cmudict) {
  if (!word.includes("'")) continue;
  const stripped = word.replace(/'/g, "");
  const rank = freqRank.get(stripped);
  let keep = rank !== undefined && rank < TOP_N;
  if (!keep) {
    const m = word.match(SUFFIX);
    if (m) {
      keep = out.has(m[1]) ||
        // n't forms: "shouldn't" → base "shouldn" → "should"
        (m[2] === "t" && m[1].endsWith("n") && out.has(m[1].slice(0, -1)));
    }
  }
  if (!keep) continue;
  if (!out.has(word)) {
    out.set(word, phones);
    contractions++;
  }
  if (!out.has(stripped)) out.set(stripped, phones);
}

let demoAppended = 0;
for (const [word, phones] of Object.entries(demo)) {
  if (!out.has(word)) {
    out.set(word, phones.join(" "));
    demoAppended++;
  }
}

const entries = [...out.entries()]
  .map(([w, p]) => `${JSON.stringify(w)}:${JSON.stringify(p)}`)
  .join(",\n");

const file = `/* public/tools/engine/cmu.js — GENERATED FILE, do not edit by hand.
 * Regenerate with: node scripts/build-cmu-dict.mjs
 *
 * Pronunciations: CMU Pronouncing Dictionary (cmudict-0.7b), Carnegie Mellon
 * University, BSD-style license. Stress markers stripped.
 * Word selection: top ${TOP_N.toLocaleString("en-US")} everyday-English words by frequency
 * (Google Web Trillion Word Corpus counts compiled by Peter Norvig),
 * intersected with cmudict. ${out.size.toLocaleString("en-US")} entries, in frequency order —
 * SLPIO.engine.wordsWith() returns matches most-common-first because of this.
 *
 * Load AFTER data.js: this file merges over the small starter dict there.
 */
(function () {
  window.SLPIO = window.SLPIO || {};
  var D = {
${entries}
  };
  for (var k in D) D[k] = D[k].split(" ");
  SLPIO.CMU = Object.assign(SLPIO.CMU || {}, D);
})();
`;

await writeFile(OUT, file, "utf8");

const kb = (Buffer.byteLength(file) / 1024).toFixed(0);
console.log(`cmudict entries parsed:  ${cmudict.size.toLocaleString("en-US")}`);
console.log(`frequency words scanned: ${freqWords.length.toLocaleString("en-US")}`);
console.log(`emitted entries:         ${out.size.toLocaleString("en-US")} (${contractions} contractions, ${demoAppended} appended from demo dict)`);
console.log(`output:                  ${path.relative(ROOT, OUT)} (${kb} KB)`);

// Smoke test: words the demo dict missed in real-world samples.
for (const probe of ["hopped", "through", "grass", "whispered", "sitting", "hello", "don't", "she's", "i'll", "ill", "xylophonic"]) {
  const hit = out.get(probe);
  console.log(`  ${probe.padEnd(12)} ${hit ? hit : "— not found"}`);
}
