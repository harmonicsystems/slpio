// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');

// Pull the inline <script> block out of the .astro file and run it in the
// jsdom window so the IIFE wires its listeners to our test DOM.
function loadPhiCheckerScript() {
  const src = readFileSync(join(root, 'src/components/PhiChecker.astro'), 'utf8');
  const match = src.match(/<script is:inline>([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Could not extract PhiChecker script block');
  const fn = new Function(match[1]);
  fn.call(window);
}

// Mirror the question markup the .astro template renders, so the script
// finds exactly the structure it expects.
function mountPhiChecker() {
  document.body.innerHTML = `
    <div class="phi-checker" id="phi-checker">
      <ul class="phi-questions">
        ${Array.from({ length: 6 }, () => `
          <li class="phi-question">
            <span>Q</span>
            <div class="phi-toggle">
              <button data-answer="yes">Yes</button>
              <button data-answer="no">No</button>
            </div>
          </li>
        `).join('')}
      </ul>
      <div class="phi-result" id="phi-result"></div>
    </div>
  `;
}

// Click the answer button for a given question index (0-based).
// PHI questions 0–4 are content questions; question 5 is the BAA question.
function answer(qIndex, value) {
  const questions = document.querySelectorAll('.phi-question');
  const btn = questions[qIndex].querySelector(`button[data-answer="${value}"]`);
  btn.click();
}

describe('PhiChecker verdict logic', () => {
  beforeEach(() => {
    mountPhiChecker();
    loadPhiCheckerScript();
  });

  it('hides the result panel until all 6 questions are answered', () => {
    answer(0, 'no');
    answer(1, 'no');
    const result = document.getElementById('phi-result');
    expect(result.style.display).toBe('none');
  });

  it('reports "safe" when no PHI is present and a BAA is in place', () => {
    for (let i = 0; i < 5; i++) answer(i, 'no');
    answer(5, 'yes'); // BAA = yes
    const result = document.getElementById('phi-result');
    expect(result.className).toContain('safe');
    expect(result.innerHTML).toMatch(/You're good/i);
  });

  it('reports "caution" when no PHI but no BAA', () => {
    for (let i = 0; i < 5; i++) answer(i, 'no');
    answer(5, 'no'); // BAA = no
    const result = document.getElementById('phi-result');
    expect(result.className).toContain('caution');
    expect(result.innerHTML).toMatch(/Proceed with caution/i);
  });

  it('reports "unsafe" the moment any PHI question is yes — even with BAA', () => {
    answer(0, 'yes'); // contains a name
    for (let i = 1; i < 5; i++) answer(i, 'no');
    answer(5, 'yes'); // BAA yes
    const result = document.getElementById('phi-result');
    expect(result.className).toContain('unsafe');
    expect(result.innerHTML).toMatch(/Do not send/i);
  });

  it('reports "unsafe" when PHI is present and no BAA', () => {
    answer(2, 'yes'); // school name
    for (const i of [0, 1, 3, 4]) answer(i, 'no');
    answer(5, 'no');
    const result = document.getElementById('phi-result');
    expect(result.className).toContain('unsafe');
  });

  it('updates verdict when a user changes their answer', () => {
    for (let i = 0; i < 5; i++) answer(i, 'no');
    answer(5, 'yes');
    expect(document.getElementById('phi-result').className).toContain('safe');

    // User realizes they DID include a name
    answer(0, 'yes');
    expect(document.getElementById('phi-result').className).toContain('unsafe');
  });

  it('only counts the most recent answer per question', () => {
    for (let i = 0; i < 5; i++) answer(i, 'yes');
    for (let i = 0; i < 5; i++) answer(i, 'no'); // toggle back
    answer(5, 'yes');
    expect(document.getElementById('phi-result').className).toContain('safe');
  });
});
