#!/usr/bin/env node
/*
 * Content lint for the Goal Bank.
 *
 * The Zod schema in src/content.config.ts validates frontmatter at build
 * time, but the rules in claude.md about body structure ("## Individualization
 * Guidance", "## Clinical Notes", "## Related Goals", and "##
 * Neurodiversity-Affirming Notes" when ndAffirming is true) are documented
 * only in prose. This script enforces them.
 *
 * Run: npm run lint:content
 * Exits with status 1 if any goal violates a rule.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const goalsDir = join(root, 'src/content/goals');

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}

function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { data: {}, body: src };
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim();
  }
  return { data, body: m[2] };
}

const REQUIRED_SECTIONS = [
  '## Individualization Guidance',
  '## Clinical Notes',
  '## Related Goals',
];

const errors = [];
const goalFiles = walk(goalsDir);

for (const file of goalFiles) {
  const rel = relative(root, file);
  const src = readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(src);

  for (const heading of REQUIRED_SECTIONS) {
    if (!body.includes(heading)) {
      errors.push(`${rel}: missing required section "${heading}"`);
    }
  }

  // Conditional rule: when neurodiversityAffirming is true, the body must
  // include a heading that begins with "## Neurodiversity-Affirming"
  // (Notes, Framing, "and Trauma-Aware Notes", etc. are all accepted)
  // or a standalone "## Framing" section.
  if (data.neurodiversityAffirming === 'true') {
    const hasNdHeading = /^##\s+Neurodiversity-Affirming\b/m.test(body)
      || /^##\s+Framing\b/m.test(body);
    if (!hasNdHeading) {
      errors.push(
        `${rel}: neurodiversityAffirming=true but body lacks a "## Neurodiversity-Affirming ..." or "## Framing" heading`
      );
    }
  }
}

if (goalFiles.length === 0) {
  console.error('No goal files found under src/content/goals — is the path right?');
  process.exit(1);
}

if (errors.length) {
  console.error(`\nContent lint failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):\n`);
  for (const e of errors) console.error('  - ' + e);
  console.error();
  process.exit(1);
}

console.log(`Content lint passed: ${goalFiles.length} goal files checked.`);
