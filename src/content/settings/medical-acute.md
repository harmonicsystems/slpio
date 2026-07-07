---
title: Medical & Acute Care
description: Dysphagia, cognitive-linguistic, discharge planning, and LLM use where your note drives the next order.
icon: ph-duotone ph-hospital
order: 2
lastReviewed: 2026-07-07
---

Medical SLPs operate in high-stakes, fast-paced environments where documentation accuracy carries immediate clinical consequences — **your note is read by people who will act on it within hours.** The physician skims your bedside swallow eval before writing the diet order. Nursing reads your recommendations before the next meal. An error in a school progress note surfaces at the next review; an error here surfaces on a lunch tray.

## Regulatory Context

- **HIPAA** governs all patient information; no PHI in public tools, ever
- **BAA** (Business Associate Agreement) required for any tool handling patient data — see [what's actually covered](/foundations/comparison-matrix/) by provider
- Documentation supports medical decision-making, billing, and continuity of care
- Instrumental findings (MBSS, FEES) require clinician interpretation, never AI

## The EMR Reality

You already work inside a documentation machine — smart phrases, copy-forward, dictation, templated flowsheets. An LLM is a new instrument in an old orchestra, and it inherits the EMR's existing failure mode: **text that propagates without being re-read.** Copy-forward errors are a documented patient-safety problem; AI-generated text that gets pasted in and signed adds a second source of unexamined language. The discipline is the same one you already know from copy-forward: if you didn't verify it this time, for this patient, it doesn't go in the chart.

## Appropriate Uses

- Structuring dysphagia progress notes and session documentation
- Organizing cognitive-linguistic assessment findings into narrative format
- Drafting patient/family education materials in plain language
- Structuring prior authorization and medical necessity letters
- Summarizing discharge recommendations into readable format
- Brainstorming functional goal wording for rehab settings

## Worked Example: Organizing a Bedside Swallow Evaluation

> "I am a medical SLP organizing a bedside swallowing evaluation note. Here are my findings: [de-identified observations — presentations trialed, textures, signs/symptoms observed per trial, patient alertness and positioning, what I recommended]. Organize into: history available at bedside, presentation, trial-by-trial observations, clinical impressions AS I STATED THEM, and my recommendations AS I STATED THEM. Do not add signs I did not observe, do not interpret aspiration risk, and do not generate or upgrade diet recommendations. Keep my clinical voice."

**What to check:** The two danger zones are the impression and the recommendation — exactly where the reader acts. Confirm no observation got upgraded ("no overt signs of aspiration" is not "swallowing within functional limits"), and that the diet recommendation in the output is *your* recommendation, verbatim in substance. The [dysphagia case study](/case-studies/medical-dysphagia-documentation/) shows this exact failure caught in the wild — the plausibility of the error made it harder to detect.

## Red Flags

- Entering patient names, MRNs, or PHI into public models
- AI interpreting instrumental findings (MBSS, FEES)
- Generating diet level recommendations or aspiration risk judgments
- Copying AI language directly into medical records unread — the copy-forward failure with a new engine
- Using AI output as basis for swallowing safety decisions
- Substituting AI summaries for clinical reasoning in discharge planning

## Related

- **Workflow:** [Discharge Planning (Medical)](/workflows/discharge-planning-medical/)
- **Prompts:** [Dysphagia Bedside Note](/prompts/dysphagia-bedside-note/) · [SOAP Note Formatter](/prompts/soap-note-formatter/) · [Prior Authorization](/prompts/prior-authorization-letter/)
- **Domain:** [Dysphagia](/domains/dysphagia/) — the hard boundaries in full

**See it in practice:** [Case study — MBSS documentation and the diet-recommendation error](/case-studies/medical-dysphagia-documentation/).
