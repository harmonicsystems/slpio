---
title: "Evaluation Report Organizer"
description: "Organize raw evaluation data into a structured report framework without interpreting scores or assigning severity."
category: eval-reports
settings: [school, medical, private-practice]
populations: [pediatric, adult]
domains: [language, articulation, fluency, voice, pragmatics, cognitive-linguistic]
difficulty: intermediate
clinicalFrameworks: [functional, medical-model]
ashaPrinciples: [autonomy, nonmaleficence]
order: 4
---

## The Prompt

```
I am an SLP organizing evaluation data into a structured report. Here are my raw findings (no identifying information). My data includes: referral reason, relevant history, assessment tools administered, scores and observations by area, and any notable behaviors during testing. Organize this information into the following sections: Reason for Referral, Relevant History, Assessment Procedures (list of tools administered), Results by Area (group findings by domain: receptive language, expressive language, articulation, fluency, voice, etc.), Clinical Impressions (leave as a placeholder for me to complete), and Recommendations (leave as a placeholder for me to complete). Do not interpret scores or assign severity levels. Present the data as I recorded it. Do not invent history or findings I did not provide. Maintain my clinical terminology.
```

### What to include in your raw findings

- **Referral reason** — who referred and why
- **Relevant history** — medical, developmental, educational, or therapeutic background
- **Assessment tools** — names of tests administered, subtests used
- **Scores** — standard scores, percentile ranks, age equivalents as recorded
- **Observations** — testing behavior, engagement, notable responses, language samples

## Why This Works

- **Separates organization from interpretation.** The model structures data while the clinician retains all diagnostic reasoning.
- **Explicit placeholders.** Clinical Impressions and Recommendations are left for the clinician, preventing the model from generating diagnostic conclusions.
- **Hard boundary on scores.** "Do not interpret scores or assign severity" stops the model from converting standard scores into clinical labels.
- **Domain grouping.** Organizing results by area mirrors standard evaluation report formats across settings.
- **Terminology preservation.** "Maintain my clinical terminology" prevents the model from substituting its own phrasing.

## When to Use

Use when you have completed an evaluation and have raw data (test scores, observations, case history notes) that need to be organized into a formal report structure. Particularly useful when you are managing multiple evaluations and need to reduce formatting time.

## When NOT to Use

- Do not paste data containing client names, dates of birth, or facility names
- Do not rely on the model to interpret scores; that is your clinical responsibility
- Do not use the placeholders as-is in a final report; fill them in yourself

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) – de-identify before pasting
- [Parent-Friendly Evaluation Summary](/prompts/parent-friendly-summary/) – translate the finished report for families
- [Documentation task guide](/tasks/documentation/) – full evaluation workflow
