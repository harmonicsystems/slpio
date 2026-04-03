---
title: "Dysphagia Bedside Evaluation Note"
description: "Structure bedside swallowing evaluation observations into a organized clinical note without recommending diet levels."
category: documentation
settings: [medical, snf-rehab]
populations: [adult, geriatric]
domains: [dysphagia]
difficulty: intermediate
clinicalFrameworks: [medical-model]
ashaPrinciples: [nonmaleficence, autonomy]
order: 5
---

## The Prompt

```
I am an SLP documenting a bedside swallowing evaluation. Here are my clinical observations (no identifying information). Organize them into a structured bedside swallow evaluation note with these sections: Reason for Referral, Relevant Medical History, Oral Mechanism Exam Findings, Trials Presented (texture, volume, patient response, signs of aspiration risk), Clinical Observations (cough response, voice quality changes, oral residue, timing), and a placeholder for Diet Recommendations and Instrumental Referral Decision. Report only what I observed. Do not recommend diet texture levels or liquid consistency — that is my clinical decision. Do not assign aspiration risk ratings. Do not suggest whether an instrumental evaluation is needed.
```

## Why This Works

- **Hard boundary on diet recommendations** — diet level decisions carry direct safety consequences and must remain with the clinician who observed the patient
- **Observation-focused structure** — separating what was trialed from what was observed keeps the note factual and defensible
- **No risk stratification** — preventing the model from labeling aspiration risk avoids false confidence in a machine-generated safety judgment
- **Placeholder for decisions** — forces the clinician to actively make and document the diet and referral decisions themselves

## When to Use

After completing a bedside swallowing evaluation when you have detailed observations that need to be organized into a formal note. Useful when you need to document quickly between patients in acute care or SNF settings.

## When NOT to Use

- Do not include patient names, room numbers, MRN, or facility names in your input
- Do not use the output as a substitute for clinical decision-making about diet levels
- Do not use for instrumental evaluation reports (FEES, MBS) — those require different documentation structures

## Pair With

- [PHI Safety Checker](/foundations/phi-safety/) — verify no identifiers before pasting
- [Discharge Summary](/prompts/discharge-summary/) — when the patient is ready for discharge
- [Medical setting guide](/settings/medical/) — documentation standards for medical SLP
