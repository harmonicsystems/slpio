import { describe, it, expect, beforeAll } from 'vitest';
import { loadEngine } from '../helpers/load-engine.mjs';

let SLPIO;
beforeAll(() => { SLPIO = loadEngine(); });

// These snapshot the verdict for fixed inputs. The point is that anyone
// adjusting the heuristic thresholds in engine.js (zpdCheck targetWPS
// formula, Tier-2 density, late-phoneme cutoffs) sees these tests turn
// red and has to consciously update the expected verdict — rather than
// silently re-labeling every example on the live site.
describe('zpdCheck', () => {
  it('returns a structured verdict bundle', () => {
    const r = SLPIO.engine.zpdCheck('the cat sat.', 5);
    expect(r).toHaveProperty('verdict');
    expect(r).toHaveProperty('reasons');
    expect(r).toHaveProperty('stats');
    expect(r).toHaveProperty('tier2Words');
    expect(r).toHaveProperty('lateAcquiringPhonemes');
    expect(r).toHaveProperty('avgWordsPerSentence');
  });

  it('flags a richly-vocabularied story as reading above target age', () => {
    // Pile up Tier-2 words to trigger the "above" path
    const text =
      'The curious rabbit wandered silently through the ancient forest. ' +
      'She discovered a magnificent shimmering door hidden in the gentle delicate roots. ' +
      'With tremendous courage she whispered hello to an enormous owl.';
    const r = SLPIO.engine.zpdCheck(text, 4);
    expect(['above', 'mixed']).toContain(r.verdict);
    expect(r.tier2Words.length).toBeGreaterThan(0);
  });

  it('flags very short sentences for an older target as below', () => {
    // engine requires >30 words to fire the "short" reason; build past that.
    const text = 'The cat sat. The dog ran. The bird flew. The fish swam. ' +
      'The boy ran. The girl sat. The mom cooked. The dad worked. ' +
      'The baby slept. The friend played. The owl hooted. The frog jumped.';
    const r = SLPIO.engine.zpdCheck(text, 7);
    expect(r.verdict).toBe('below');
  });

  it('returns appropriate verdict when no obvious mismatch', () => {
    const text = 'The cat sat on the mat. The dog ran to the door. The bird sang a song.';
    const r = SLPIO.engine.zpdCheck(text, 5);
    expect(r.verdict).toBe('appropriate');
  });

  it('emits a coverage warning when most words are unknown', () => {
    const text = 'xylocarp zugzwang quokka mbira tsantsa ngultrum.';
    const r = SLPIO.engine.zpdCheck(text, 5);
    expect(r.reasons.some(x => /coverage/i.test(x))).toBe(true);
  });

  it('avgWordsPerSentence falls back to total words when no sentence punctuation', () => {
    const r = SLPIO.engine.zpdCheck('the cat sat on a mat', 5);
    expect(r.avgWordsPerSentence).toBe(6);
  });

  it('lists late-acquiring phonemes above the target age', () => {
    // /R/ acquires around 6–7 yr → above a 3-year-old target
    const r = SLPIO.engine.zpdCheck('the rabbit ran.', 3);
    expect(r.lateAcquiringPhonemes.some(x => x.phoneme === 'R')).toBe(true);
  });
});
