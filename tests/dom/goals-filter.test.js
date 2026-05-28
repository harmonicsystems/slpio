// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');

function loadFilterScript() {
  const src = readFileSync(join(root, 'src/pages/goals/index.astro'), 'utf8');
  const match = src.match(/<script is:inline>([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Could not extract goals filter script block');
  const fn = new Function(match[1]);
  fn.call(window);
}

// Build a tiny but realistic DOM mirroring the goals/index.astro structure.
// Cards carry the data-* attributes that the filter reads.
function mountGoals(cards) {
  const chipMarkup = `
    <div class="goal-filters">
      <span id="filter-count" data-total="${cards.length}">${cards.length}</span>
      <button id="clear-filters" hidden>Clear</button>
      ${[
        ['supportLevel', ['independent', 'minimal', 'moderate', 'maximum']],
        ['setting',      ['school', 'medical', 'snf-rehab']],
        ['population',   ['pediatric', 'adult', 'geriatric', 'all']],
        ['ndAffirming',  ['true']],
      ].map(([name, values]) => values.map(v =>
        `<button class="filter-chip" data-filter="${name}" data-value="${v}" aria-pressed="false">${v}</button>`
      ).join('')).join('')}
    </div>
  `;

  // Group cards by domain to mirror the real layout
  const byDomain = new Map();
  cards.forEach(c => {
    if (!byDomain.has(c.domain)) byDomain.set(c.domain, []);
    byDomain.get(c.domain).push(c);
  });

  const groupMarkup = Array.from(byDomain.entries()).map(([domain, list]) => `
    <div class="domain-group" data-domain="${domain}">
      <span class="domain-count" data-base-count="${list.length}">${list.length} goals</span>
      ${list.map(c => `
        <a class="goal-card"
           data-support-level="${c.supportLevel}"
           data-settings="${c.settings.join(',')}"
           data-populations="${c.populations.join(',')}"
           data-nd-affirming="${c.ndAffirming}">
           ${c.title}
        </a>
      `).join('')}
    </div>
  `).join('');

  document.body.innerHTML = `
    ${chipMarkup}
    ${groupMarkup}
    <div id="empty-state" hidden>No goals match.</div>
  `;
}

const FIXTURE = [
  { title: 'A', domain: 'articulation-phonology', supportLevel: 'minimal',  settings: ['school'],            populations: ['pediatric'],          ndAffirming: false },
  { title: 'B', domain: 'articulation-phonology', supportLevel: 'moderate', settings: ['medical', 'snf-rehab'], populations: ['adult', 'geriatric'], ndAffirming: false },
  { title: 'C', domain: 'pragmatics-social',      supportLevel: 'minimal',  settings: ['school'],            populations: ['pediatric'],          ndAffirming: true  },
  { title: 'D', domain: 'dysphagia',              supportLevel: 'maximum',  settings: ['snf-rehab'],         populations: ['geriatric'],          ndAffirming: false },
];

function visibleTitles() {
  return Array.from(document.querySelectorAll('.goal-card'))
    .filter(c => c.style.display !== 'none')
    .map(c => c.textContent.trim());
}

function clickChip(filter, value) {
  document.querySelector(`button[data-filter="${filter}"][data-value="${value}"]`).click();
}

describe('Goals filter', () => {
  beforeEach(() => {
    mountGoals(FIXTURE);
    loadFilterScript();
  });

  it('shows everything by default', () => {
    expect(visibleTitles()).toEqual(['A', 'B', 'C', 'D']);
    expect(document.getElementById('filter-count').textContent).toBe('4');
  });

  it('filters by support level (OR within dimension)', () => {
    clickChip('supportLevel', 'minimal');
    expect(visibleTitles().sort()).toEqual(['A', 'C']);

    clickChip('supportLevel', 'maximum'); // multi-select
    expect(visibleTitles().sort()).toEqual(['A', 'C', 'D']);
  });

  it('filters across dimensions with AND', () => {
    clickChip('supportLevel', 'minimal');
    clickChip('setting', 'school');
    clickChip('population', 'pediatric');
    expect(visibleTitles().sort()).toEqual(['A', 'C']);
  });

  it('OR-matches array fields (any setting match passes)', () => {
    clickChip('setting', 'medical'); // only B has medical
    expect(visibleTitles()).toEqual(['B']);
  });

  it('handles the ND-affirming flag as a string match', () => {
    clickChip('ndAffirming', 'true');
    expect(visibleTitles()).toEqual(['C']);
  });

  it('toggling the same chip twice clears that dimension', () => {
    clickChip('supportLevel', 'minimal');
    expect(visibleTitles().sort()).toEqual(['A', 'C']);
    clickChip('supportLevel', 'minimal'); // off
    expect(visibleTitles().sort()).toEqual(['A', 'B', 'C', 'D']);
  });

  it('shows the empty state when filters match nothing', () => {
    clickChip('setting', 'school');
    clickChip('population', 'geriatric'); // nobody is school + geriatric
    expect(visibleTitles()).toEqual([]);
    expect(document.getElementById('empty-state').hidden).toBe(false);
  });

  it('clear button resets all dimensions', () => {
    clickChip('supportLevel', 'minimal');
    clickChip('setting', 'school');
    expect(visibleTitles().length).toBeLessThan(4);

    document.getElementById('clear-filters').click();
    expect(visibleTitles()).toEqual(['A', 'B', 'C', 'D']);
    expect(document.getElementById('clear-filters').hidden).toBe(true);
  });

  it('updates per-domain counts to show "X of Y" when any filter is active', () => {
    clickChip('supportLevel', 'minimal');
    const artGroupCount = document.querySelector('.domain-group[data-domain="articulation-phonology"] .domain-count');
    expect(artGroupCount.textContent).toMatch(/1 of 2 goals/);
  });

  it('hides domain groups whose visible-count goes to zero', () => {
    clickChip('setting', 'medical');
    const pragmaticsGroup = document.querySelector('.domain-group[data-domain="pragmatics-social"]');
    expect(pragmaticsGroup.style.display).toBe('none');
  });
});
