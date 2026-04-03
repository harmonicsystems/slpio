---
title: "Evaluation Report Organizer"
description: "Organize raw evaluation data into a structured report shell without interpreting scores or assigning severity."
category: eval-reports
settings: [school, medical, private-practice]
populations: [pediatric, adult]
domains: [language, articulation, fluency, voice, pragmatics, cognitive-linguistic, dysphagia, aac, literacy, hearing]
difficulty: intermediate
clinicalFrameworks: [functional, medical-model]
ashaPrinciples: [autonomy, nonmaleficence]
order: 4
---

## The Prompt

```
I am an SLP organizing evaluation data into a structured report. Here are my raw assessment results and observations (no identifying information included). Organize this information into the following sections: Reason for Referral, Relevant History, Assessment Procedures (list of tools administered), Results by Area (group findings by domain — receptive language, expressive language, articulation, etc.), Clinical Impressions (leave as a placeholder for me to complete), and Recommendations (leave as a placeholder for me to complete). Present scores exactly as I provide them. Do not interpret scores or assign severity levels. Do not fill in clinical impressions or recommendations — those require my professional judgment. Preserve my wording for any qualitative observations.
```

## Why This Works

- **Separates organization from interpretation** — the model handles the structural task (sorting, grouping) while the clinician retains all interpretive decisions
- **Explicit placeholders** — marking Clinical Impressions and Recommendations as placeholders makes it impossible to miss that you must write those sections yourself
- **Hard boundary on scores** — "do not interpret scores or assign severity" prevents the model from turning a standard score of 78 into "moderate impairment" on your behalf
- **Domain-based grouping** — organizing results by area matches the structure most settings expect and makes the report easier to read
- **Data integrity** — "present scores exactly as I provide them" guards against rounding, paraphrasing, or recontextualizing your numbers

## When to Use

Use after completing a comprehensive evaluation when you have raw data from multiple assessments that need to be organized into a cohesive report. Particularly helpful when you have administered 4+ instruments and need to consolidate findings efficiently.

## When NOT to Use

- Do not paste any data that includes client names, dates of birth, or facility names
- Do not use the output without writing your own Clinical Impressions and Recommendations
- Do not rely on the model to catch scoring errors — verify all numbers against your protocols

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) — scrub your input before pasting
- [Parent-Friendly Evaluation Summary](/prompts/parent-friendly-summary/) — translate the final report for families
- [Documentation workflows](/tasks/documentation/) — the broader report-writing process
