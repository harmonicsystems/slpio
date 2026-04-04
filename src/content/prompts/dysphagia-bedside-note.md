---
title: "Dysphagia Bedside Evaluation Note"
description: "Structure bedside swallowing evaluation observations into a clear clinical note without recommending diet levels."
category: documentation
settings: [medical, snf-rehab]
populations: [adult, geriatric]
domains: [dysphagia]
difficulty: intermediate
clinicalFrameworks: [medical-model]
ashaPrinciples: [nonmaleficence, beneficence]
order: 5
---

## The Prompt

```
I am an SLP documenting a bedside swallowing evaluation. Here are my raw clinical observations (no identifying information). Organize these into a structured bedside swallow evaluation note with the following sections: Reason for Referral, Relevant Medical History, Oral Mechanism Exam Findings, Trials Presented (consistency, volume, patient response), Clinical Observations (signs of aspiration risk, oral phase observations, laryngeal function indicators), and Clinical Impressions (placeholder for me to complete). Do not recommend diet texture levels or liquid consistencies. I will determine those. Do not add signs or symptoms I did not report. Present my observations exactly as stated.
```

## Why This Works

- **Hard boundary on diet recommendations.** Diet level decisions carry direct patient safety implications and must remain with the evaluating clinician.
- **Structured trial documentation.** Organizing by consistency and volume mirrors standard clinical swallow evaluation formats.
- **No symptom fabrication.** "Do not add signs or symptoms I did not report" prevents the model from inserting textbook findings that were not observed.
- **Preserves clinical observations.** The model organizes without reinterpreting what you saw, heard, or palpated.

## When to Use

After completing a bedside swallowing evaluation when you have raw notes, observations, and trial data that need to be organized into a formal clinical note. Useful in high-volume medical or SNF settings where documentation turnaround is critical.

## When NOT to Use

- Do not include patient names, medical record numbers, or facility identifiers
- Do not use this for instrumental evaluation reports (FEES, MBS), which require different frameworks
- Do not use the output without reviewing every clinical observation for accuracy
- Do not let the model's organization influence your clinical judgment about aspiration risk

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) – de-identify before pasting
- [Discharge Summary Organizer](/prompts/discharge-summary/) – for documenting the full treatment course
- [Medical setting guide](/settings/medical-acute/) – acute care documentation context
