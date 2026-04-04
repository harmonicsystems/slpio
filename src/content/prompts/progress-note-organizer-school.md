---
title: "Progress Note Organizer for School-Based SLPs"
description: "Transform raw session observations into structured, defensible progress notes aligned with IEP goals."
category: documentation
settings: [school]
populations: [pediatric]
domains: [language, articulation]
difficulty: beginner
clinicalFrameworks: [functional, curriculum-based]
ashaPrinciples: [autonomy, nonmaleficence]
order: 1
---

## The Prompt

```
I am a school-based SLP. Here are my raw session notes for a student (no identifying information included). Organize these into a structured progress note with: date of service, IEP goal addressed, activity/materials used, student response data (accuracy percentage, level of cueing), clinical observations, and plan for next session. Do not add observations I didn't make. Do not change my accuracy data. Keep my clinical voice. Do not over-polish.
```

## Why This Works

This prompt succeeds because it:

- **Sets role context** — "school-based SLP" tells the model which documentation conventions matter (IEP alignment, educational relevance)
- **Provides explicit structure** — the numbered output sections prevent the model from inventing its own format
- **Guards against hallucination** — "Do not add observations I didn't make" is the single most important constraint for clinical documentation
- **Preserves clinical voice** — "Do not over-polish" prevents the model from replacing your clinical observations with generic language
- **Protects data integrity** — "Do not change my accuracy data" ensures the quantitative record stays intact

## When to Use

Use after any therapy session where you have raw notes, tally marks, or quick observations that need to become a formal progress note. This is especially valuable during progress monitoring periods when you're writing dozens of notes in a short window.

## When NOT to Use

- Do not paste in notes that contain student names, school names, or other identifiers
- Do not use this to *generate* observations you didn't make
- Do not skip the review step — read every line before it enters the record

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) — run your input through the checker first
- [Documentation workflows](/tasks/documentation/) — for report-level templates
- [Schools setting guide](/settings/schools/) — FERPA and IDEA context
