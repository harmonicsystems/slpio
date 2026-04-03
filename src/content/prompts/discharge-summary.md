---
title: "Discharge Summary Organizer"
description: "Organize treatment course data into a structured discharge summary with admission status, progress, and recommendations."
category: documentation
settings: [medical, snf-rehab]
populations: [adult, geriatric]
domains: [language, cognitive-linguistic, dysphagia, voice]
difficulty: intermediate
clinicalFrameworks: [functional, medical-model]
ashaPrinciples: [autonomy, beneficence]
order: 8
---

## The Prompt

```
I am an SLP writing a discharge summary. Here is my treatment data (no identifying information). Organize this into a discharge summary with the following sections: Admission Status (baseline functional levels at start of care), Treatment Provided (frequency, duration, and types of intervention), Progress Toward Goals (compare admission and discharge performance for each goal), Discharge Status (current functional levels), Reason for Discharge, and Recommendations (placeholder for me to complete — include home exercise program, follow-up, or referral sections as applicable). Do not interpret my data beyond what I have stated. Do not assign functional levels I did not report. Preserve my terminology and data exactly.
```

## Why This Works

- **Admission-to-discharge arc** — structuring around functional change over time tells the clinical story payers and referral sources need
- **Goal-by-goal progress** — comparing baseline to discharge for each goal provides clear, defensible outcome documentation
- **Recommendations as placeholder** — discharge recommendations involve clinical judgment about continued need and should come from the clinician
- **Data preservation** — "do not assign functional levels I did not report" prevents the model from generating FIM scores or severity ratings you did not assess

## When to Use

At the point of discharge from skilled therapy services, when you have accumulated session data, progress notes, and goal tracking that need to be consolidated into a single summary document.

## When NOT to Use

- Do not paste notes containing patient names, facility names, or dates of service
- Do not use this for patients who are transferring to another level of care without adapting the template
- Do not submit without verifying that all data points match your clinical records

## Pair With

- [SOAP Note Formatter](/prompts/soap-note-formatter/) — for individual session documentation during the treatment course
- [PHI Safety Checker](/foundations/phi-safety/) — de-identify before pasting
- [SNF/Rehab setting guide](/settings/snf-rehab/) — discharge planning context
