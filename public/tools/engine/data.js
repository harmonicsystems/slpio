/* assets/engine/data.js
 *
 * Lookup tables for the phoneme engine.
 * Everything here is editorial data — the kind of stuff that lives in a
 * notebook in a clinician's drawer. Keep it human-readable; this file
 * IS the source of truth and will be reviewed by hand.
 *
 * Three tables:
 *   1. PHONEMES        — articulation groupings + display labels (IPA)
 *   2. ACQUISITION     — Crowe & McLeod (2020) 90% acquisition ages
 *   3. CMU             — a small, hand-picked subset of CMU pronouncing dict
 *   4. BECK_TIER       — Tier 1/2/3 mapping for ~200 high-frequency words
 *
 * TODO before v1:
 *   - Swap CMU for the full cmudict-0.7b (~134k entries, ~3MB gzipped).
 *     Load it lazily from /assets/engine/data/cmudict-0.7b.json.
 *   - Verify ACQUISITION ages against the Crowe & McLeod 2020 paper
 *     (Crowe, K. & McLeod, S., AJSLP 29(4), 2570–2598). Current values
 *     are within the published range but should be cited line-by-line.
 *   - Expand BECK_TIER from the current ~200-word seed list using a
 *     curated corpus (e.g., Educator's Word Frequency Guide).
 */

window.SLPIO = window.SLPIO || {};

// ARPABET phoneme inventory used by CMU dict, with IPA display labels
// and articulation groupings.
SLPIO.PHONEMES = {
  // Stops
  P:  { ipa: "p",  group: "stop",      voiced: false, place: "bilabial" },
  B:  { ipa: "b",  group: "stop",      voiced: true,  place: "bilabial" },
  T:  { ipa: "t",  group: "stop",      voiced: false, place: "alveolar" },
  D:  { ipa: "d",  group: "stop",      voiced: true,  place: "alveolar" },
  K:  { ipa: "k",  group: "stop",      voiced: false, place: "velar" },
  G:  { ipa: "ɡ",  group: "stop",      voiced: true,  place: "velar" },

  // Nasals
  M:  { ipa: "m",  group: "nasal",     voiced: true,  place: "bilabial" },
  N:  { ipa: "n",  group: "nasal",     voiced: true,  place: "alveolar" },
  NG: { ipa: "ŋ",  group: "nasal",     voiced: true,  place: "velar" },

  // Fricatives
  F:  { ipa: "f",  group: "fricative", voiced: false, place: "labiodental" },
  V:  { ipa: "v",  group: "fricative", voiced: true,  place: "labiodental" },
  TH: { ipa: "θ",  group: "fricative", voiced: false, place: "dental" },
  DH: { ipa: "ð",  group: "fricative", voiced: true,  place: "dental" },
  S:  { ipa: "s",  group: "fricative", voiced: false, place: "alveolar" },
  Z:  { ipa: "z",  group: "fricative", voiced: true,  place: "alveolar" },
  SH: { ipa: "ʃ",  group: "fricative", voiced: false, place: "postalveolar" },
  ZH: { ipa: "ʒ",  group: "fricative", voiced: true,  place: "postalveolar" },
  HH: { ipa: "h",  group: "fricative", voiced: false, place: "glottal" },

  // Affricates
  CH: { ipa: "tʃ", group: "affricate", voiced: false, place: "postalveolar" },
  JH: { ipa: "dʒ", group: "affricate", voiced: true,  place: "postalveolar" },

  // Liquids
  L:  { ipa: "l",  group: "liquid",    voiced: true,  place: "alveolar" },
  R:  { ipa: "ɹ",  group: "liquid",    voiced: true,  place: "postalveolar" },

  // Glides
  W:  { ipa: "w",  group: "glide",     voiced: true,  place: "labiovelar" },
  Y:  { ipa: "j",  group: "glide",     voiced: true,  place: "palatal" },

  // Vowels (kept flat — articulation analysis treats them as one group)
  AA: { ipa: "ɑ",  group: "vowel" },
  AE: { ipa: "æ",  group: "vowel" },
  AH: { ipa: "ʌ",  group: "vowel" },
  AO: { ipa: "ɔ",  group: "vowel" },
  AW: { ipa: "aʊ", group: "vowel" },
  AY: { ipa: "aɪ", group: "vowel" },
  EH: { ipa: "ɛ",  group: "vowel" },
  ER: { ipa: "ɚ",  group: "vowel" },
  EY: { ipa: "eɪ", group: "vowel" },
  IH: { ipa: "ɪ",  group: "vowel" },
  IY: { ipa: "i",  group: "vowel" },
  OW: { ipa: "oʊ", group: "vowel" },
  OY: { ipa: "ɔɪ", group: "vowel" },
  UH: { ipa: "ʊ",  group: "vowel" },
  UW: { ipa: "u",  group: "vowel" }
};

/* 90% acquisition ages in years.
 * Source: Crowe & McLeod (2020), pooled US sample. Values reflect the
 * age at which 90% of typically-developing children produce the consonant.
 * These are scaffolding values — verify against Table 4 of the paper
 * before publishing externally.
 */
SLPIO.ACQUISITION = {
  M: 3, N: 3, H: 3, HH: 3, P: 3, W: 3, B: 3, D: 3, T: 3,
  NG: 4, K: 4, G: 4, F: 4, Y: 4,
  V: 5, S: 5, Z: 5, SH: 5, CH: 5, JH: 5, L: 5,
  R: 6, ZH: 7, TH: 7, DH: 7
};

/* Articulation cue snippets for the stimulability tool.
 * Short clinician-facing phrasing; not parent-coaching language.
 * Add references when the wording is non-obvious.
 */
SLPIO.CUES = {
  R: [
    "Bunched or retroflex — let the child pick whichever feels easier.",
    "Anchor with a high front vowel: 'EEEE-rrrr'. Tongue stays braced.",
    "Try /r/ in vocalic contexts (ar, er, ir, or, ur) before consonantal /r/."
  ],
  S: [
    "Long, quiet airstream — 'snake hiss', tongue tip behind upper teeth.",
    "Bite blocks help if the jaw closes too far.",
    "Watch for lateralization — air should exit straight forward, not over the sides."
  ],
  Z: [
    "Same place as /s/, voice on. Hand on throat to feel buzz.",
    "Pair with /s/ minimal pairs to highlight voicing contrast (sip/zip)."
  ],
  L: [
    "Tongue tip taps the alveolar ridge. Mirror helps.",
    "Light /l/ (initial) is easier than dark /l/ (final). Start initial.",
    "If gliding to /w/, try 'la la la' with exaggerated tongue elevation."
  ],
  SH: [
    "Lips rounded, tongue blade raised. 'Quiet sign' — finger to lips.",
    "Contrast with /s/: 'sip vs. ship' — feel the lip position change."
  ],
  TH: [
    "Tongue tip lightly between teeth. Voiceless = think; voiced = this.",
    "Mirror essential — visible articulator.",
    "Common substitution: /f/ for /θ/. Use 'thumb / fum' contrast."
  ],
  DH: [
    "Voiced /θ/. Same tongue placement, voice on.",
    "Function-word loaded (the, this, that, then) — easy carrier-phrase work."
  ],
  CH: [
    "Stop + fricative compound. 'Tea + sh' said quickly.",
    "Lips rounded as in /ʃ/."
  ],
  JH: [
    "Voiced /tʃ/. Same compound, voice on.",
    "'D + zh' as a slow-then-fast progression."
  ],
  K: [
    "Back of tongue lifts to soft palate. Tongue tip stays down.",
    "If fronting to /t/, try 'cough trick' — supine with chin tucked."
  ],
  G: [
    "Voiced /k/. Same place, voice on. Hand on throat for buzz feedback."
  ],
  F: [
    "Upper teeth on lower lip. Long airstream.",
    "Mirror helps — visible articulator."
  ],
  V: [
    "Voiced /f/. Same placement, add voice."
  ]
};

/* Tiny CMU-dict-style subset for demos. Format:
 *   word: [ARPABET phoneme array]
 *
 * Stress markers stripped (CMU uses 0/1/2 on vowels — we don't need them).
 * This is ~200 words: enough that "paste a child's storybook page" returns
 * meaningful output. Production = full cmudict-0.7b.
 */
SLPIO.CMU = {
  "a": ["AH"], "an": ["AE", "N"], "and": ["AE", "N", "D"], "the": ["DH", "AH"],
  "is": ["IH", "Z"], "it": ["IH", "T"], "in": ["IH", "N"], "on": ["AA", "N"],
  "at": ["AE", "T"], "to": ["T", "UW"], "of": ["AH", "V"], "for": ["F", "AO", "R"],
  "with": ["W", "IH", "TH"], "this": ["DH", "IH", "S"], "that": ["DH", "AE", "T"],
  "was": ["W", "AH", "Z"], "are": ["AA", "R"], "be": ["B", "IY"], "by": ["B", "AY"],
  "he": ["HH", "IY"], "she": ["SH", "IY"], "we": ["W", "IY"], "they": ["DH", "EY"],
  "i": ["AY"], "you": ["Y", "UW"], "me": ["M", "IY"], "my": ["M", "AY"],
  "your": ["Y", "AO", "R"], "his": ["HH", "IH", "Z"], "her": ["HH", "ER"],
  "their": ["DH", "EH", "R"], "our": ["AW", "ER"],

  // Storybook nouns
  "cat": ["K", "AE", "T"], "dog": ["D", "AO", "G"], "fish": ["F", "IH", "SH"],
  "bird": ["B", "ER", "D"], "bear": ["B", "EH", "R"], "rabbit": ["R", "AE", "B", "IH", "T"],
  "mouse": ["M", "AW", "S"], "frog": ["F", "R", "AO", "G"], "duck": ["D", "AH", "K"],
  "cow": ["K", "AW"], "pig": ["P", "IH", "G"], "horse": ["HH", "AO", "R", "S"],
  "sheep": ["SH", "IY", "P"], "goat": ["G", "OW", "T"], "fox": ["F", "AA", "K", "S"],
  "owl": ["AW", "L"], "bee": ["B", "IY"], "bug": ["B", "AH", "G"],
  "tree": ["T", "R", "IY"], "flower": ["F", "L", "AW", "ER"], "leaf": ["L", "IY", "F"],
  "rock": ["R", "AA", "K"], "sun": ["S", "AH", "N"], "moon": ["M", "UW", "N"],
  "star": ["S", "T", "AA", "R"], "sky": ["S", "K", "AY"], "rain": ["R", "EY", "N"],
  "snow": ["S", "N", "OW"], "wind": ["W", "IH", "N", "D"], "house": ["HH", "AW", "S"],
  "home": ["HH", "OW", "M"], "door": ["D", "AO", "R"], "window": ["W", "IH", "N", "D", "OW"],
  "bed": ["B", "EH", "D"], "chair": ["CH", "EH", "R"], "table": ["T", "EY", "B", "AH", "L"],
  "cup": ["K", "AH", "P"], "bowl": ["B", "OW", "L"], "spoon": ["S", "P", "UW", "N"],
  "ball": ["B", "AO", "L"], "doll": ["D", "AA", "L"], "book": ["B", "UH", "K"],
  "toy": ["T", "OY"], "car": ["K", "AA", "R"], "bus": ["B", "AH", "S"],
  "train": ["T", "R", "EY", "N"], "boat": ["B", "OW", "T"], "plane": ["P", "L", "EY", "N"],
  "boy": ["B", "OY"], "girl": ["G", "ER", "L"], "baby": ["B", "EY", "B", "IY"],
  "mom": ["M", "AA", "M"], "dad": ["D", "AE", "D"], "friend": ["F", "R", "EH", "N", "D"],

  // Verbs
  "go": ["G", "OW"], "see": ["S", "IY"], "run": ["R", "AH", "N"], "jump": ["JH", "AH", "M", "P"],
  "walk": ["W", "AO", "K"], "talk": ["T", "AO", "K"], "look": ["L", "UH", "K"],
  "sit": ["S", "IH", "T"], "stand": ["S", "T", "AE", "N", "D"], "play": ["P", "L", "EY"],
  "sing": ["S", "IH", "NG"], "eat": ["IY", "T"], "drink": ["D", "R", "IH", "NG", "K"],
  "sleep": ["S", "L", "IY", "P"], "wake": ["W", "EY", "K"], "read": ["R", "IY", "D"],
  "write": ["R", "AY", "T"], "draw": ["D", "R", "AO"], "make": ["M", "EY", "K"],
  "take": ["T", "EY", "K"], "give": ["G", "IH", "V"], "want": ["W", "AA", "N", "T"],
  "have": ["HH", "AE", "V"], "help": ["HH", "EH", "L", "P"], "love": ["L", "AH", "V"],
  "like": ["L", "AY", "K"], "find": ["F", "AY", "N", "D"], "lost": ["L", "AO", "S", "T"],
  "open": ["OW", "P", "AH", "N"], "close": ["K", "L", "OW", "Z"], "stop": ["S", "T", "AA", "P"],
  "wait": ["W", "EY", "T"], "come": ["K", "AH", "M"], "leave": ["L", "IY", "V"],

  // Descriptors
  "big": ["B", "IH", "G"], "small": ["S", "M", "AO", "L"], "little": ["L", "IH", "T", "AH", "L"],
  "tall": ["T", "AO", "L"], "short": ["SH", "AO", "R", "T"], "hot": ["HH", "AA", "T"],
  "cold": ["K", "OW", "L", "D"], "warm": ["W", "AO", "R", "M"], "cool": ["K", "UW", "L"],
  "fast": ["F", "AE", "S", "T"], "slow": ["S", "L", "OW"], "loud": ["L", "AW", "D"],
  "quiet": ["K", "W", "AY", "AH", "T"], "happy": ["HH", "AE", "P", "IY"], "sad": ["S", "AE", "D"],
  "tired": ["T", "AY", "ER", "D"], "hungry": ["HH", "AH", "NG", "G", "R", "IY"],
  "red": ["R", "EH", "D"], "blue": ["B", "L", "UW"], "green": ["G", "R", "IY", "N"],
  "yellow": ["Y", "EH", "L", "OW"], "black": ["B", "L", "AE", "K"], "white": ["W", "AY", "T"],
  "one": ["W", "AH", "N"], "two": ["T", "UW"], "three": ["TH", "R", "IY"],
  "four": ["F", "AO", "R"], "five": ["F", "AY", "V"], "six": ["S", "IH", "K", "S"],
  "seven": ["S", "EH", "V", "AH", "N"], "eight": ["EY", "T"], "nine": ["N", "AY", "N"],
  "ten": ["T", "EH", "N"],

  // Common Tier 2 candidates — words a clinician might want to identify
  // as developmentally interesting in an AI-generated story.
  "shimmering": ["SH", "IH", "M", "ER", "IH", "NG"],
  "magnificent": ["M", "AE", "G", "N", "IH", "F", "IH", "S", "AH", "N", "T"],
  "whispered": ["W", "IH", "S", "P", "ER", "D"],
  "gentle": ["JH", "EH", "N", "T", "AH", "L"],
  "curious": ["K", "Y", "UH", "R", "IY", "AH", "S"],
  "wandered": ["W", "AA", "N", "D", "ER", "D"],
  "delicate": ["D", "EH", "L", "AH", "K", "AH", "T"],
  "enormous": ["IH", "N", "AO", "R", "M", "AH", "S"],
  "silently": ["S", "AY", "L", "AH", "N", "T", "L", "IY"],
  "ancient": ["EY", "N", "SH", "AH", "N", "T"],
  "discovered": ["D", "IH", "S", "K", "AH", "V", "ER", "D"],
  "tremendous": ["T", "R", "AH", "M", "EH", "N", "D", "AH", "S"],
  "adventure": ["AE", "D", "V", "EH", "N", "CH", "ER"],
  "courage": ["K", "ER", "AH", "JH"],
  "kindness": ["K", "AY", "N", "D", "N", "AH", "S"]
};

/* Beck Tier mapping (1 = everyday, 2 = high-utility cross-domain, 3 = domain-specific).
 * Heuristic: any word in CMU above that isn't here defaults to Tier 1.
 * Editorial — expand from a frequency-banded corpus.
 */
SLPIO.BECK_TIER = {
  // Tier 2 — the words that *land* in early literacy work
  shimmering: 2, magnificent: 2, whispered: 2, gentle: 2, curious: 2,
  wandered: 2, delicate: 2, enormous: 2, silently: 2, ancient: 2,
  discovered: 2, tremendous: 2, adventure: 2, courage: 2, kindness: 2,
  // Tier 3 — domain-specific (none in our demo set; placeholder)
};
