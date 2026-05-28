import { describe, it, expect, beforeAll } from 'vitest';
import { loadEngine } from '../helpers/load-engine.mjs';

let SLPIO;
beforeAll(() => { SLPIO = loadEngine(); });

describe('tokenize', () => {
  it('lowercases and splits on whitespace', () => {
    expect(SLPIO.engine.tokenize('The CAT sat')).toEqual(['the', 'cat', 'sat']);
  });

  it('returns an empty array for falsy input', () => {
    expect(SLPIO.engine.tokenize('')).toEqual([]);
    expect(SLPIO.engine.tokenize(null)).toEqual([]);
    expect(SLPIO.engine.tokenize(undefined)).toEqual([]);
  });

  it('strips punctuation but preserves apostrophes and hyphens', () => {
    expect(SLPIO.engine.tokenize("don't stop, please.")).toEqual(["don't", 'stop', 'please']);
    expect(SLPIO.engine.tokenize('well-known fact')).toEqual(['well-known', 'fact']);
  });

  it('collapses runs of whitespace', () => {
    expect(SLPIO.engine.tokenize('a   b\t\nc')).toEqual(['a', 'b', 'c']);
  });
});

describe('lookup', () => {
  it('returns ARPABET phones for known words', () => {
    expect(SLPIO.engine.lookup('cat')).toEqual(['K', 'AE', 'T']);
    expect(SLPIO.engine.lookup('the')).toEqual(['DH', 'AH']);
  });

  it('is case insensitive', () => {
    expect(SLPIO.engine.lookup('CAT')).toEqual(['K', 'AE', 'T']);
  });

  it('returns null for unknown words', () => {
    expect(SLPIO.engine.lookup('notarealword')).toBeNull();
    expect(SLPIO.engine.lookup('')).toBeNull();
    expect(SLPIO.engine.lookup(null)).toBeNull();
  });

  it('strips non-letter punctuation before lookup', () => {
    expect(SLPIO.engine.lookup('cat,')).toEqual(['K', 'AE', 'T']);
  });
});
