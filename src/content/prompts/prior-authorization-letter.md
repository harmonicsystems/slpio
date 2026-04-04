---
title: "Prior Authorization Letter Drafter"
description: "Draft a prior authorization letter for therapy services or instrumental evaluations using medical necessity language."
category: compliance
settings: [medical, snf-rehab, private-practice]
populations: [all]
domains: [language, articulation, fluency, voice, dysphagia, cognitive-linguistic, aac]
difficulty: advanced
clinicalFrameworks: [medical-model]
ashaPrinciples: [beneficence, justice]
order: 6
---

## The Prompt

```
I am an SLP drafting a prior authorization letter to an insurance company. Here are the relevant clinical details (no identifying information). Draft a prior authorization letter that includes: the specific service or procedure being requested, a summary of the patient's diagnosis and functional limitations, the clinical rationale for medical necessity (why this service is required to restore, maintain, or prevent decline in function), prior treatment history and response, the expected goals and timeline, and references to applicable coverage criteria if I provide them. Use professional, objective language. Do not fabricate diagnoses, test results, or treatment history I did not provide. Do not guarantee outcomes.
```

## Why This Works

- **Medical necessity framing.** The prompt explicitly targets the language insurers require: restore, maintain, or prevent decline in function.
- **Functional emphasis.** Payers respond to functional limitation descriptions more than diagnostic labels alone.
- **No fabrication guardrail.** "Do not fabricate diagnoses, test results, or treatment history" prevents the model from strengthening the case with invented data.
- **Outcome honesty.** "Do not guarantee outcomes" keeps the letter clinically defensible.

## When to Use

When you need to submit a prior authorization for therapy services, instrumental swallowing evaluations (FEES, MBS), AAC devices, or continuation of treatment. Particularly useful when you are writing multiple authorization letters and need to maintain consistent medical necessity language.

## When NOT to Use

- Do not include patient names, insurance IDs, or facility-specific identifiers
- Do not submit the letter without verifying every clinical claim against the actual medical record
- Do not use this to misrepresent the patient's condition or inflate severity

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) – de-identify all clinical details before pasting
- [Documentation workflows](/tasks/documentation/) – broader documentation strategies
- [Compliance task guide](/tasks/compliance/) – regulatory and payer requirements
