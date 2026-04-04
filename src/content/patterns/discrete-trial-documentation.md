---
title: "Discrete Trial Documentation Pattern"
description: "How to prompt LLMs when your clinical approach uses structured, data-driven discrete trial methods — maximizing precision in goals, data recording, and progress analysis."
clinicalOrientation: "Discrete trial / structured behavioral"
contrasts: "Naturalistic, play-based, child-led approaches"
settings: [school, private-practice]
populations: [pediatric]
order: 2
---

If your therapy sessions look like structured trials with clear antecedents, target responses, and consequences — your LLM prompts need to speak that language. The model will default to vague, narrative-style output unless you set explicit expectations for data precision.

## The Core Pattern

```
I use a structured, discrete-trial approach. My documentation should reflect specific trial counts, accuracy percentages, cueing hierarchies, and criterion-referenced progress. Frame all goals and notes in terms of measurable behaviors, not narrative descriptions.
```

## How This Changes Output

### Without the pattern:

> "Student is making good progress with articulation and is becoming more intelligible in conversation."

### With the pattern:

> "Across 40 trials targeting /r/ in initial position of words, student achieved 75% accuracy (30/40) at the word level with a visual model. This represents an increase from 60% (24/40) in the previous session. Cueing hierarchy: independent > visual model > auditory model > simultaneous production."

The second version gives you data you can chart, compare, and defend.

## Prompt Modifiers for Discrete Trial Work

- **"Include trial counts and accuracy percentages"** — forces quantitative output
- **"Describe the cueing hierarchy used"** — captures the support structure
- **"Organize by target and level (word, phrase, sentence, conversation)"** — matches your data tracking
- **"Include criterion for advancement"** — specifies when to move to the next level
- **"Note any error patterns observed"** — captures clinical detail for treatment planning

## Pair With

- [Progress Note Organizer prompt](/prompts/progress-note-organizer-school/) — for session-to-note workflow
- [Articulation domain](/domains/articulation-phonology/) — where discrete trial is most common
- [Pattern: Family-Centered Prompting](/patterns/family-centered-prompting/) — the contrasting approach
