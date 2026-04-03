---
title: "Discharge Summary Organizer"
description: "Organize a treatment course into a structured discharge summary with admission status, progress, and recommendations."
category: documentation
settings: [medical, snf-rehab]
populations: [adult, geriatric]
domains: [language, articulation, fluency, voice, cognitive-linguistic, dysphagia, aac]
difficulty: intermediate
clinicalFrameworks: [functional, medical-model]
ashaPrinciples: [autonomy, beneficence]
order: 8
---

## The Prompt

```
I am an SLP writing a discharge summary. Here is my clinical information (no identifying information): admission status, treatment targets, session data, and current functional levels. Organize this into a discharge summary with the following sections: Reason for Referral and Admission Status (functional levels at start of care), Treatment Provided (goals addressed, frequency, duration of services), Progress Toward Goals (with data I provide — do not invent percentages or functional levels), Discharge Status (current functional levels), Reason for Discharge, and Recommendations (leave as a placeholder for me to complete). Use my data exactly as provided. Do not characterize progress as "significant" or "minimal" — present the data and let the numbers speak.
```

## Why This Works

- **Admission-to-discharge structure** — clearly shows the trajectory of care, which is what payers and referral sources need to see
- **Data integrity** — "do not invent percentages or functional levels" prevents fabricated progress data
- **No editorializing** — prohibiting subjective qualifiers like "significant improvement" keeps the summary factual and defensible
- **Recommendation placeholder** — discharge recommendations (home programs, outpatient referrals, follow-up) require your clinical judgment
- **Functional framing** — organizing around functional levels rather than impairment scores aligns with payer expectations and best practice

## When to Use

When a patient is being discharged from services and you need to compile the treatment course into a formal summary. Useful in acute care, inpatient rehab, SNF, or home health settings where discharge documentation is required.

## When NOT to Use

- Do not include patient names, facility names, MRN, or dates of service in your input
- Do not use the output without writing your own discharge recommendations
- Do not use for planned breaks in service — those require a different documentation format

## Pair With

- [SOAP Note Formatter](/prompts/soap-note-formatter/) — for individual session notes during the treatment course
- [PHI Safety Checker](/foundations/phi-safety/) — scrub identifiers before pasting
- [Medical setting guide](/settings/medical/) — discharge documentation standards
