import { describe, it, expect, beforeAll } from 'vitest';
import { loadEngine } from '../helpers/load-engine.mjs';

let SLPIO;
beforeAll(() => { SLPIO = loadEngine(); });

describe('analyze', () => {
  it('reports word counts and dictionary coverage', () => {
    const r = SLPIO.engine.analyze('the cat sat');
    expect(r.words).toEqual(['the', 'cat', 'sat']);
    // "the" and "cat" are known; "sat" is not in the demo dictionary
    expect(r.knownWords.map(k => k.word)).toEqual(['the', 'cat']);
    expect(r.unknownWords).toEqual(['sat']);
    expect(r.coverage).toBeCloseTo(2 / 3, 5);
  });

  it('counts phonemes across known words only', () => {
    // "the" → DH, AH ; "cat" → K, AE, T → 5 phoneme tokens
    const r = SLPIO.engine.analyze('the cat');
    const total = Object.values(r.phonemeCounts).reduce((a, b) => a + b, 0);
    expect(total).toBe(5);
    expect(r.phonemeCounts.K).toBe(1);
    expect(r.phonemeCounts.AE).toBe(1);
    expect(r.phonemeCounts.DH).toBe(1);
  });

  it('tracks initial / medial / final position counts per phoneme', () => {
    const r = SLPIO.engine.analyze('cat');
    expect(r.positionCounts.K).toEqual({ initial: 1, medial: 0, final: 0 });
    expect(r.positionCounts.AE).toEqual({ initial: 0, medial: 1, final: 0 });
    expect(r.positionCounts.T).toEqual({ initial: 0, medial: 0, final: 1 });
  });

  it('groups phonemes by articulation group', () => {
    // cat = K(stop) AE(vowel) T(stop) → 2 stops, 1 vowel
    const r = SLPIO.engine.analyze('cat');
    expect(r.groupCounts.stop).toBe(2);
    expect(r.groupCounts.vowel).toBe(1);
  });

  it('estimates syllables using vowel-group fallback for unknown words', () => {
    // "buttercup" is unknown; spelling has 3 vowel groups → +3
    const r = SLPIO.engine.analyze('buttercup');
    expect(r.syllableEstimate).toBe(3);
  });

  it('reports the oldest acquisition age across all phonemes seen', () => {
    // "frog" = F, R, AO, G — R is late (~7yr); /AO/ vowel doesn't update maxAge
    const r = SLPIO.engine.analyze('frog');
    expect(r.maxAcquisitionAge).toBeGreaterThanOrEqual(6);
  });

  it('returns zeroed structure for empty input', () => {
    const r = SLPIO.engine.analyze('');
    expect(r.words).toEqual([]);
    expect(r.knownWords).toEqual([]);
    expect(r.coverage).toBe(0);
    expect(r.syllableEstimate).toBe(0);
  });
});

describe('wordsWith', () => {
  it('returns words containing a phoneme in any position when position omitted', () => {
    const result = SLPIO.engine.wordsWith('K');
    expect(result).toContain('cat');
    expect(result).toContain('back' in SLPIO.CMU ? 'back' : 'cat');
  });

  it('filters by position when one is provided', () => {
    const initial = SLPIO.engine.wordsWith('K', 'initial');
    expect(initial).toContain('cat');     // K is initial in "cat"
    expect(initial).not.toContain('duck'); // K is final in "duck"

    const final = SLPIO.engine.wordsWith('K', 'final');
    expect(final).toContain('duck');
    expect(final).not.toContain('cat');
  });

  it('returns empty array for phonemes not present in the dictionary subset', () => {
    expect(SLPIO.engine.wordsWith('ZZ')).toEqual([]);
  });
});

describe('tierOf', () => {
  it('returns the mapped tier for Tier-2 words', () => {
    expect(SLPIO.engine.tierOf('shimmering')).toBe(2);
    expect(SLPIO.engine.tierOf('magnificent')).toBe(2);
  });

  it('defaults unmapped words to Tier 1', () => {
    expect(SLPIO.engine.tierOf('cat')).toBe(1);
    expect(SLPIO.engine.tierOf('nonsenseword')).toBe(1);
  });

  it('is case insensitive', () => {
    expect(SLPIO.engine.tierOf('SHIMMERING')).toBe(2);
  });
});
