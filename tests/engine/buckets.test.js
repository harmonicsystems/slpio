import { describe, it, expect, beforeAll } from 'vitest';
import { loadEngine } from '../helpers/load-engine.mjs';

let SLPIO;
beforeAll(() => { SLPIO = loadEngine(); });

describe('bucketFor', () => {
  it('routes vowels to the Vowels bucket regardless of age', () => {
    expect(SLPIO.engine.bucketFor('AE')).toBe('Vowels');
    expect(SLPIO.engine.bucketFor('IY')).toBe('Vowels');
  });

  it('classifies early-acquired consonants', () => {
    // P, M, N, etc. should land in the Early bucket
    const earlySounds = ['P', 'M', 'N', 'B'];
    for (const p of earlySounds) {
      const age = SLPIO.ACQUISITION[p];
      if (age != null && age <= 3) {
        expect(SLPIO.engine.bucketFor(p)).toBe('Early (≤3 yrs)');
      }
    }
  });

  it('classifies late-acquired sounds', () => {
    // R, TH, ZH typically 6–7 yrs in Crowe & McLeod (2020)
    const lateSounds = ['R', 'TH', 'ZH'];
    for (const p of lateSounds) {
      const age = SLPIO.ACQUISITION[p];
      if (age != null && age >= 6 && age <= 7) {
        expect(SLPIO.engine.bucketFor(p)).toBe('Late (6–7 yrs)');
      }
    }
  });

  it('returns null for unknown phonemes', () => {
    expect(SLPIO.engine.bucketFor('XYZ')).toBeNull();
  });

  it('exposes the bucket definitions in canonical order', () => {
    const labels = SLPIO.engine.ACQ_BUCKETS.map(b => b.label);
    expect(labels).toEqual([
      'Early (≤3 yrs)',
      'Mid (4 yrs)',
      'Mid-late (5 yrs)',
      'Late (6–7 yrs)',
      'Vowels',
    ]);
  });
});
