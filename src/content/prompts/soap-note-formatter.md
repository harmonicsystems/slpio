---
title: "SOAP Note Formatter"
description: "Convert raw therapy session notes into structured SOAP format with Subjective, Objective, Assessment, and Plan sections."
category: documentation
settings: [medical, snf-rehab, private-practice]
populations: [adult, geriatric]
domains: [language, cognitive-linguistic, dysphagia, voice, fluency]
difficulty: beginner
clinicalFrameworks: [medical-model]
ashaPrinciples: [autonomy, nonmaleficence]
order: 9
---

## The Prompt

```
I am an SLP converting session notes into SOAP format. Here are my raw notes from today's session (no identifying information). Organize them into SOAP format: Subjective (patient/caregiver report, self-assessment, complaints), Objective (what you measured — tasks performed, accuracy data, cues provided, functional observations), Assessment (placeholder for my clinical interpretation of today's session), Plan (placeholder for my plan for next session). Place information in the correct section based on its nature. Do not change my data or accuracy percentages. Do not add clinical observations I did not make. Do not fill in the Assessment or Plan sections — those require my clinical judgment.
```

## Why This Works

- **Correct categorization** — the model sorts raw notes into the right SOAP section, which is the most time-consuming part of formatting
- **Assessment and Plan as placeholders** — these sections require clinical reasoning that must come from the treating clinician
- **Data integrity** — "do not change my data or accuracy percentages" protects the quantitative record
- **No invented observations** — prevents the model from padding the Objective section with findings you did not document

## When to Use

After any therapy session where you have quick notes, data sheets, or observations that need to become a formal SOAP note. Particularly valuable in high-caseload medical or SNF settings where you are writing multiple notes per day.

## When NOT to Use

- Do not paste notes containing patient names or medical record numbers
- Do not use the Assessment and Plan placeholders as-is — complete them yourself
- Do not rely on the model to determine which observations are clinically significant

## Pair With

- [Discharge Summary Organizer](/prompts/discharge-summary/) — for end-of-care documentation
- [PHI Safety Checker](/foundations/phi-safety/) — de-identify before pasting
- [Medical setting guide](/settings/medical-acute/) — SOAP documentation conventions
