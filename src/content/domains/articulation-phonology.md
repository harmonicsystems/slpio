---
title: Articulation & Phonology
description: LLM use for articulation and phonological disorder documentation, goals, and materials.
icon: ph-duotone ph-waveform
order: 1
---

Articulation and phonology are among the most common SLP caseload areas. LLMs can help with goal wording, session note organization, and material generation, but the speech-specific knowledge must come from you.

## LLM Strengths in This Domain

- Generating word lists by phoneme position, syllable shape, or phonological pattern
- Brainstorming minimal pair contrasts for specific processes
- Structuring progress notes with target, support level, accuracy data
- Drafting parent-friendly explanations of sound development
- Creating home practice activity lists organized by target

## LLM Limitations

- Cannot assess stimulability or phonetic placement
- May not understand the distinction between articulation and phonological process disorders
- Word lists may include developmentally inappropriate items without guidance
- Cannot interpret speech samples or connected speech data
- May not understand motor-based vs. linguistically-based intervention distinctions

## Prompt Templates

### Word List Generator

```
Generate a list of 20 words with /s/ blends in the initial position, appropriate for a 6-year-old. Include a mix of 1- and 2-syllable words. Avoid words that are culturally or contextually unusual for a school-age child. Organize by blend type (sl-, sm-, sn-, sp-, st-, sw-, sk-).
```

### Minimal Pair Generator

```
I am an SLP working on the phonological process of fronting with a 4-year-old. Generate 10 minimal pair sets contrasting velar and alveolar stops (e.g., key/tea, go/doe). Use words a preschooler would know. Include both initial and final position pairs.
```

### Progress Note for Articulation Session

```
I am an SLP. Here are my raw session notes for an articulation therapy session (no identifying info included). Organize into: target sound and position, activity type, cueing level, accuracy data (trials and percentage), behavioral observations, and plan for next session. Do not add details I did not provide.
```

## Goal Progressions

### Weak → Strong: Sound-Level Goal

**Before:** "Student will improve articulation skills as measured by therapist observation."

*No target sound. No position. No accuracy criterion. No measurement method.*

**After:** "Given a structured activity with visual supports, [Student] will produce /r/ in the initial position of words with 80% accuracy across 3 consecutive data collection sessions as measured by SLP data tracking."

### Weak → Strong: Phonological Process Goal

**Before:** "Student will reduce use of phonological processes."

*Which processes? At what linguistic level? What counts as "reduced"?*

**After:** "Given a minimal pair activity with models, [Student] will produce velar consonants /k, g/ in the initial position of words, eliminating fronting, with 75% accuracy across 4 consecutive sessions as measured by SLP data collection."

### Progression Hierarchy

A typical articulation goal should progress through these levels, and each level needs its own measurable goal:

1. **Isolation** → single sound production
2. **Syllables** → CV, VC, CVC combinations
3. **Words** → initial, medial, final positions
4. **Phrases** → carrier phrases with target words
5. **Sentences** → structured sentences with target words
6. **Conversation** → spontaneous connected speech
7. **Generalization** → across settings, listeners, contexts

> LLMs can help you draft goals at each level. They cannot tell you which level the student is ready for.

## Before & After: Session Documentation

### Raw Notes
> did /s/ blends again, tried sn- and sp- words, she got most of the sp- ones right but sn- was harder, maybe 50% on sn- and 80% on sp-, used picture cards, gave her a verbal model when she got stuck, she was really engaged today, wants stickers

### Structured Output
- **Target:** /s/ blends (/sp-/ and /sn-/) in initial position of words
- **Activity:** Picture card naming with verbal models as needed
- **Performance:**
  - /sp-/ blends: ~80% accuracy with verbal model on errors
  - /sn-/ blends: ~50% accuracy with verbal model on errors
- **Behavioral Note:** High engagement throughout session. Motivated by sticker reinforcement.
- **Clinical Interpretation:** /sp-/ approaching mastery at word level; /sn-/ requires continued practice with increased cueing. Consider adding visual placement cues for /sn-/.
- **Plan:** Continue /sn-/ at word level with visual + verbal cues. Probe /sp-/ at phrase level next session.

## Common Mistakes When Using LLMs

1. **Accepting generic word lists.** Always check that words are age-appropriate, culturally relevant, and phonetically accurate for your target.
2. **Missing phonetic context.** A word like "sun" targets /s/ in initial position, not an /s/ blend. The model doesn't always distinguish this.
3. **Confusing articulation and phonology.** If you're treating a phonological process, your goals and activities should reflect that (minimal pairs, pattern-based) rather than traditional articulation drill.
4. **Overly complex goals.** LLMs tend to make goals wordier than necessary. Simpler is better if it's still specific.

## Related Pages

- [Writing Goals](/tasks/writing-goals/): Full goal clarity toolkit with before/after examples
- [Documentation](/tasks/documentation/): Progress note templates
- [Materials & Activities](/tasks/materials/): Word lists, home programs
- [Schools & Early Intervention](/settings/schools/): IEP-specific guidance
