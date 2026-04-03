---
title: "The Overcorrection"
description: "When repeated AI-assisted revisions strip a note of its original clinical observations until it is technically polished but clinically empty."
category: clinical-voice
severity: major
settings: [school, medical, snf-rehab, private-practice]
order: 6
---

This antipattern is sneaky because each individual revision looks like an improvement. The problem only becomes visible when you compare the final version to your original observation and realize the actual clinical content is gone.

## The Bad Example

**Round 1 — Your original note:**
> "Pt produced /r/ in 'rabbit' and 'red' but couldn't get it in 'car' or 'star.' Seemed to lose tongue placement in final position. Got frustrated after 3 failed attempts at 'star' and said 'I can't do the hard ones.' We switched to a carrier phrase game and she got vocalic /ar/ in 'I see a car' 3/5 times."

**Round 2 — After asking the LLM to "make this more professional":**
> "Patient demonstrated emerging production of prevocalic /r/ with accurate productions in initial position ('rabbit,' 'red'). Final position /r/ presented with increased difficulty; patient exhibited reduced lingual stabilization in postvocalic contexts. Frustration was noted after multiple unsuccessful attempts. A structured carrier phrase activity was introduced, yielding 60% accuracy for vocalic /ar/."

**Round 3 — After asking the LLM to "tighten this up and improve the clinical language":**
> "Patient demonstrates emerging /r/ production with stronger performance in prevocalic versus postvocalic contexts. Reduced lingual stabilization contributes to decreased accuracy in final position. Structured carrier phrase tasks facilitated improved production of vocalic /ar/. Continued practice targeting postvocalic /r/ in functional contexts is recommended."

The child who said "I can't do the hard ones" is gone. The specific words that worked and failed are gone. The clinical decision to switch activities is gone. The 3/5 data point has been rounded into a vague "improved production." Three revisions turned a useful note into a template.

## Why LLMs Produce This

Each time you ask for "improvement," the model optimizes for the features it associates with professional writing: formal vocabulary, passive voice, generalized statements, and removed subjectivity. It does not know that "she said 'I can't do the hard ones'" is clinically meaningful — it reads that as informal language to be upgraded. With each pass, the model moves further from your observation and closer to its average of all clinical documentation it has seen.

## The Fix

Limit yourself to **one revision pass** with a specific, constrained instruction:

```
Reformat my notes into a SOAP note structure. Keep all specific words the client said
(in quotes), all specific data (numbers, percentages, trials), and all specific
materials or activities. Do not generalize, summarize, or remove details. If it was
in my notes, it should be in the output.
```

If the output needs further changes, make them yourself. Do not feed AI output back into the AI for polishing.

## The Fixed Version

> "Patient produced prevocalic /r/ accurately in 'rabbit' and 'red.' Postvocalic /r/ attempts were unsuccessful in 'car' and 'star' — tongue placement was lost in final position. After 3 unsuccessful attempts at 'star,' patient stated, 'I can't do the hard ones.' Activity was shifted to a carrier phrase game targeting vocalic /ar/. Patient produced /ar/ in 'I see a car' with 3/5 accuracy (60%). Will continue targeting postvocalic /r/ using carrier phrases to build confidence and accuracy."

One pass. Professional structure. Every clinical detail preserved.

## The Takeaway

> Every AI revision optimizes for polish and removes specificity. By the third pass, you have a beautiful note about nobody. Revise once, with constraints, then put the AI away and use your own judgment.

## Pair With

- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) — the single-pass version of the same drift
- [Documentation tasks](/tasks/documentation/) — how to structure revision prompts that preserve detail
- [Pattern: Human-in-the-Loop](/patterns/human-in-the-loop/) — why your clinical eye is the final authority
