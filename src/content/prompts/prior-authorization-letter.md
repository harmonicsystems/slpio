---
title: "Prior Authorization Letter Drafter"
description: "Draft a prior authorization letter for therapy services or instrumental evaluations using medical necessity language."
category: compliance
settings: [medical, snf-rehab, private-practice]
populations: [all]
domains: [language, articulation, fluency, voice, pragmatics, cognitive-linguistic, dysphagia, aac, literacy, hearing]
difficulty: advanced
clinicalFrameworks: [medical-model]
ashaPrinciples: [beneficence, justice]
order: 6
---

## The Prompt

```
I am an SLP drafting a prior authorization letter for insurance. Here is the clinical context (no identifying information): the service or evaluation being requested, the patient's relevant diagnoses, current functional limitations, and what has been tried so far. Draft a prior authorization letter that includes: a statement of the specific service requested, medical necessity justification tied to functional deficits, relevant diagnosis codes (ICD-10) if I provide them, a summary of prior treatment and why continued or new services are needed, the expected functional outcomes of the requested service, and a closing request for approval. Use formal medical language. Tie every justification to functional impact — not just impairment. Do not fabricate diagnoses, history, or functional levels I have not provided.
```

## Why This Works

- **Functional framing** — insurers approve based on functional necessity, not impairment alone; this prompt forces the justification into functional terms
- **Medical necessity language** — the output uses the phrasing insurance reviewers expect, reducing the chance of denial for formatting reasons
- **No fabrication guardrail** — "do not fabricate diagnoses, history, or functional levels" prevents the model from strengthening your case with invented information
- **Structured argument** — the letter follows the logical flow reviewers look for: what is requested, why it is needed, what has been tried, what will happen if approved
- **Diagnosis code integration** — including ICD-10 codes when provided saves a formatting step

## When to Use

When submitting prior authorization requests for therapy services, therapy extensions, or instrumental evaluations (FEES, MBS, LSVT, AAC devices). Use after you have documented the clinical rationale but need to translate it into insurance-ready language.

## When NOT to Use

- Do not include patient names, insurance IDs, dates of birth, or provider NPIs in your input
- Do not submit the letter without verifying every clinical claim against your actual records
- Do not use this for appeals — denied claims need a different argumentative structure

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) — critical before pasting any clinical context
- [Medical setting guide](/settings/medical/) — insurance and compliance context
- [Ethical Reflection Prompt](/prompts/ethical-reflection-prompt/) — reflect on AI use in compliance documents
