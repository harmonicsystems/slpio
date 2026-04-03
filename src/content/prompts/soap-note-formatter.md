---
title: "SOAP Note Formatter"
description: "Convert raw session notes into properly structured SOAP format with clear separation of subjective, objective, assessment, and plan."
category: documentation
settings: [medical, snf-rehab, private-practice]
populations: [adult, geriatric]
domains: [language, articulation, fluency, voice, cognitive-linguistic, dysphagia, aac]
difficulty: beginner
clinicalFrameworks: [medical-model]
ashaPrinciples: [autonomy, nonmaleficence]
order: 9
---

## The Prompt

```
I am an SLP converting my raw session notes into SOAP format. Here are my notes from today's session (no identifying information). Organize them into SOAP format: Subjective (patient/caregiver report, complaints, self-assessment), Objective (measurable data — accuracy percentages, cue levels, number of trials, task performance, standardized tool results), Assessment (leave as a placeholder for my clinical interpretation), Plan (leave as a placeholder for my next-session plan). Place each piece of information in the correct SOAP section based on its nature. Do not move my data between sections. Do not add clinical observations I did not make. Do not fill in the Assessment or Plan — those require my professional reasoning.
```

## Why This Works

- **Correct categorization** — the model sorts your raw observations into the right SOAP section, which is the tedious part of SOAP formatting
- **Assessment and Plan placeholders** — these sections contain your clinical reasoning and should never be machine-generated
- **Data stays put** — "do not move my data between sections" prevents the model from relocating an objective measure into the subjective section or vice versa
- **No invented observations** — the hallucination guardrail is critical for medical documentation that may be audited

## When to Use

After any treatment session when you have quick notes, data tallies, or observations that need to be formatted into a SOAP note for the medical record. Especially helpful when you are behind on documentation and need to process multiple sessions efficiently.

## When NOT to Use

- Do not include patient names, room numbers, MRN, or facility identifiers in your input
- Do not submit SOAP notes without writing your own Assessment and Plan sections
- Do not use for evaluation reports — SOAP format is for treatment sessions

## Pair With

- [Discharge Summary](/prompts/discharge-summary/) — compile SOAP notes into a discharge narrative
- [PHI Safety Checker](/foundations/phi-safety/) — scrub your input before pasting
- [Medical setting guide](/settings/medical/) — SOAP documentation conventions
