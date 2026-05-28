/* assets/engine/engine.js
 *
 * The shared phoneme engine. All three tools call into this; the engine
 * itself has no DOM dependency, no fetch, no network.
 *
 * Public API (everything attached to window.SLPIO.engine):
 *
 *   tokenize(text)              → ["the", "cat", "sat"]
 *   lookup(word)                → ["DH", "AH"] | null
 *   analyze(text)               → { words, knownWords, unknownWords,
 *                                   phonemeCounts, positionCounts,
 *                                   groupCounts, acquisitionBuckets,
 *                                   maxAcquisitionAge, syllableEstimate }
 *   wordsWith(phoneme, position) → [words from dictionary matching]
 *   tierOf(word)                → 1 | 2 | 3
 *   zpdCheck(text, targetAge)   → { complexity score + flags }
 *
 * Depends on: data.js (loaded before this file).
 */

(function () {
  "use strict";

  const NS = window.SLPIO = window.SLPIO || {};
  const PHONEMES = NS.PHONEMES;
  const ACQUISITION = NS.ACQUISITION;
  const CMU = NS.CMU;
  const BECK = NS.BECK_TIER;

  // --- Tokenization -------------------------------------------------------

  function tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[^a-z'\s-]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
  }

  function lookup(word) {
    if (!word) return null;
    const w = word.toLowerCase().replace(/[^a-z']/g, "");
    return CMU[w] || null;
  }

  // --- Phoneme position helpers -------------------------------------------

  function isVowel(p) {
    return PHONEMES[p] && PHONEMES[p].group === "vowel";
  }

  // For a word's phoneme array, label each phoneme initial / medial / final.
  // Initial = before the first vowel. Final = after the last vowel.
  // Medial = anything else. Used by stimulability + analyze.
  function positionOf(phones, index) {
    const firstVowel = phones.findIndex(isVowel);
    const lastVowel = phones.length - 1 - [...phones].reverse().findIndex(isVowel);
    if (firstVowel === -1) return "medial";
    if (index < firstVowel) return "initial";
    if (index > lastVowel) return "final";
    return "medial";
  }

  function syllableCount(phones) {
    if (!phones) return 0;
    return phones.filter(isVowel).length;
  }

  // --- Acquisition bucketing ----------------------------------------------

  const ACQ_BUCKETS = [
    { label: "Early (≤3 yrs)",  min: 0, max: 3 },
    { label: "Mid (4 yrs)",     min: 4, max: 4 },
    { label: "Mid-late (5 yrs)", min: 5, max: 5 },
    { label: "Late (6–7 yrs)",  min: 6, max: 7 },
    { label: "Vowels",          min: -1, max: -1 } // handled separately
  ];

  function bucketFor(phoneme) {
    if (isVowel(phoneme)) return "Vowels";
    const age = ACQUISITION[phoneme];
    if (age == null) return null;
    for (const b of ACQ_BUCKETS) {
      if (age >= b.min && age <= b.max) return b.label;
    }
    return null;
  }

  // --- Core analysis ------------------------------------------------------

  function analyze(text) {
    const words = tokenize(text);
    const knownWords = [];
    const unknownWords = [];
    const phonemeCounts = {};       // { K: 12, AE: 8, ... }
    const positionCounts = {};      // { K: {initial:5, medial:4, final:3}, ... }
    const groupCounts = {};         // { stop: 30, fricative: 18, ... }
    const acquisitionBuckets = {};  // { "Early (≤3 yrs)": 42, ... }
    let maxAge = 0;
    let syllableEstimate = 0;

    for (const w of words) {
      const phones = lookup(w);
      if (!phones) {
        unknownWords.push(w);
        // crude syllable fallback: count vowel-group runs in the spelling
        syllableEstimate += Math.max(1, (w.match(/[aeiouy]+/g) || []).length);
        continue;
      }
      knownWords.push({ word: w, phones });
      syllableEstimate += syllableCount(phones);

      phones.forEach((p, i) => {
        phonemeCounts[p] = (phonemeCounts[p] || 0) + 1;

        const pos = positionOf(phones, i);
        positionCounts[p] = positionCounts[p] || { initial: 0, medial: 0, final: 0 };
        positionCounts[p][pos] += 1;

        const meta = PHONEMES[p];
        if (meta) {
          groupCounts[meta.group] = (groupCounts[meta.group] || 0) + 1;
        }

        const bucket = bucketFor(p);
        if (bucket) {
          acquisitionBuckets[bucket] = (acquisitionBuckets[bucket] || 0) + 1;
        }

        const age = ACQUISITION[p];
        if (age && age > maxAge) maxAge = age;
      });
    }

    return {
      words,
      knownWords,
      unknownWords,
      phonemeCounts,
      positionCounts,
      groupCounts,
      acquisitionBuckets,
      maxAcquisitionAge: maxAge,
      syllableEstimate,
      coverage: words.length ? knownWords.length / words.length : 0
    };
  }

  // --- Word search (for stimulability + minimal pairs) --------------------

  function wordsWith(phoneme, position) {
    const out = [];
    for (const word in CMU) {
      const phones = CMU[word];
      const idxs = phones
        .map((p, i) => (p === phoneme ? i : -1))
        .filter(i => i !== -1);
      if (!idxs.length) continue;
      if (!position) {
        out.push(word);
        continue;
      }
      for (const i of idxs) {
        if (positionOf(phones, i) === position) {
          out.push(word);
          break;
        }
      }
    }
    return out;
  }

  // --- Beck Tier ----------------------------------------------------------

  function tierOf(word) {
    const w = word.toLowerCase();
    return BECK[w] || 1;
  }

  // --- ZPD check ----------------------------------------------------------

  /* Heuristic developmental-fit score for a story relative to a target age.
   * Returns a small bundle of flags + reasoning. Deliberately conservative —
   * the goal is to surface obvious mismatches, not to claim authority.
   *
   * Inputs:
   *   text      — story text
   *   targetAge — child's age in years (3–7 typical)
   *
   * Output:
   *   {
   *     verdict: "below" | "appropriate" | "above" | "mixed",
   *     reasons: [string, ...],
   *     stats: { ... underlying numbers from analyze() ... },
   *     tier2Words: [word, ...],
   *     lateAcquiringPhonemes: [{phoneme, age}, ...],
   *     avgWordsPerSentence: number
   *   }
   */
  function zpdCheck(text, targetAge) {
    const stats = analyze(text);
    const sentences = (text.match(/[^.!?]+[.!?]+/g) || [text]).filter(s => s.trim());
    const avgWPS = sentences.length
      ? stats.words.length / sentences.length
      : stats.words.length;

    const tier2Words = [];
    for (const w of stats.words) {
      if (tierOf(w) === 2) tier2Words.push(w);
    }

    const lateAcquiringPhonemes = [];
    for (const p in stats.phonemeCounts) {
      const age = ACQUISITION[p];
      if (age && age > targetAge) {
        lateAcquiringPhonemes.push({ phoneme: p, age, count: stats.phonemeCounts[p] });
      }
    }
    lateAcquiringPhonemes.sort((a, b) => b.age - a.age);

    const reasons = [];

    // Sentence length heuristics — roughly Hadley's MLU expectations
    // extrapolated. Adjust as the literature suggests.
    const targetWPS = 4 + (targetAge - 3) * 1.5; // 4 at age 3, 10 at age 7
    if (avgWPS > targetWPS * 1.4) {
      reasons.push(`Sentences average ${avgWPS.toFixed(1)} words — long for age ${targetAge}.`);
    } else if (avgWPS < targetWPS * 0.6 && stats.words.length > 30) {
      reasons.push(`Sentences average ${avgWPS.toFixed(1)} words — short for age ${targetAge}.`);
    }

    if (tier2Words.length > Math.max(2, stats.words.length * 0.04)) {
      reasons.push(
        `${tier2Words.length} Tier-2 words — rich, but plan to pre-teach if reading aloud.`
      );
    }

    if (lateAcquiringPhonemes.length > 4) {
      const top = lateAcquiringPhonemes.slice(0, 3)
        .map(x => `/${PHONEMES[x.phoneme]?.ipa || x.phoneme}/`).join(", ");
      reasons.push(
        `Heavy on late-acquiring sounds (${top}) — fine to read, watch for production.`
      );
    }

    if (stats.coverage < 0.7) {
      reasons.push(
        `Dictionary coverage was ${Math.round(stats.coverage * 100)}% — verdict is approximate.`
      );
    }

    // Verdict synthesis
    let verdict = "appropriate";
    const hasAbove = reasons.some(r => /long for|Tier-2/.test(r));
    const hasBelow = reasons.some(r => /short for/.test(r));
    if (hasAbove && hasBelow) verdict = "mixed";
    else if (hasAbove) verdict = "above";
    else if (hasBelow) verdict = "below";

    if (!reasons.length) {
      reasons.push("No obvious developmental mismatches detected.");
    }

    return {
      verdict,
      reasons,
      stats,
      tier2Words,
      lateAcquiringPhonemes,
      avgWordsPerSentence: avgWPS
    };
  }

  // --- Export -------------------------------------------------------------

  NS.engine = {
    tokenize, lookup, analyze, wordsWith, tierOf, zpdCheck,
    isVowel, positionOf, syllableCount, bucketFor,
    ACQ_BUCKETS
  };
})();
