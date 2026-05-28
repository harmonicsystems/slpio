import { describe, it, expect, beforeAll } from 'vitest';
import { loadEngine } from '../helpers/load-engine.mjs';

let SLPIO;
beforeAll(() => { SLPIO = loadEngine(); });

describe('positionOf', () => {
  // CAT = ["K", "AE", "T"] — first vowel at index 1, last vowel at index 1
  it('labels consonant before first vowel as initial', () => {
    expect(SLPIO.engine.positionOf(['K', 'AE', 'T'], 0)).toBe('initial');
  });

  it('labels the vowel itself as medial', () => {
    expect(SLPIO.engine.positionOf(['K', 'AE', 'T'], 1)).toBe('medial');
  });

  it('labels consonant after last vowel as final', () => {
    expect(SLPIO.engine.positionOf(['K', 'AE', 'T'], 2)).toBe('final');
  });

  // RABBIT = ["R", "AE", "B", "IH", "T"] — vowels at 1 and 3
  it('distinguishes medial consonants between two vowels', () => {
    expect(SLPIO.engine.positionOf(['R', 'AE', 'B', 'IH', 'T'], 0)).toBe('initial');
    expect(SLPIO.engine.positionOf(['R', 'AE', 'B', 'IH', 'T'], 2)).toBe('medial');
    expect(SLPIO.engine.positionOf(['R', 'AE', 'B', 'IH', 'T'], 4)).toBe('final');
  });

  it('handles vowel-initial words (e.g. AN)', () => {
    // AN = ["AE", "N"] — vowel at 0, consonant at 1 is final
    expect(SLPIO.engine.positionOf(['AE', 'N'], 0)).toBe('medial');
    expect(SLPIO.engine.positionOf(['AE', 'N'], 1)).toBe('final');
  });

  it('treats all-consonant strings as medial (no vowel found)', () => {
    expect(SLPIO.engine.positionOf(['K', 'T'], 0)).toBe('medial');
    expect(SLPIO.engine.positionOf(['K', 'T'], 1)).toBe('medial');
  });
});

describe('isVowel', () => {
  it('returns true for ARPABET vowels', () => {
    expect(SLPIO.engine.isVowel('AE')).toBe(true);
    expect(SLPIO.engine.isVowel('IY')).toBe(true);
  });

  it('returns false for consonants', () => {
    expect(SLPIO.engine.isVowel('K')).toBe(false);
    expect(SLPIO.engine.isVowel('SH')).toBe(false);
  });

  it('returns false for unknown phonemes', () => {
    expect(SLPIO.engine.isVowel('XYZ')).toBeFalsy();
  });
});

describe('syllableCount', () => {
  it('counts vowels in a phone array', () => {
    expect(SLPIO.engine.syllableCount(['K', 'AE', 'T'])).toBe(1);
    expect(SLPIO.engine.syllableCount(['R', 'AE', 'B', 'IH', 'T'])).toBe(2);
  });

  it('handles empty and null', () => {
    expect(SLPIO.engine.syllableCount([])).toBe(0);
    expect(SLPIO.engine.syllableCount(null)).toBe(0);
  });
});
