---
title: "Medical Model Precision Pattern"
description: "How to prompt LLMs for maximum clinical precision in medical documentation: instrumental reports, diagnostic statements, and acute care notes."
clinicalOrientation: "Medical model / diagnostic precision"
contrasts: "Functional, strengths-based approaches"
settings: [medical, snf-rehab]
populations: [adult, geriatric]
order: 4
---

In acute care and medical settings, your documentation lives alongside physician notes, radiology reports, and nursing assessments. Vague language undermines your credibility and your patient's care. When the audience is the medical team, your LLM output needs to match the precision standard of that record.

## The Core Pattern

```
Use precise medical terminology. Include specific anatomical references, standardized scale scores, and objective measurements. Frame findings in diagnostic language appropriate for the medical record.
```

This tells the model to stop hedging and start documenting like a clinician writing for other clinicians.

## How This Changes Output

### Without the pattern:

> "Patient is having difficulty swallowing and sometimes coughs when drinking thin liquids. Recommend thickened liquids and a follow-up swallow study."

### With the pattern:

> "Videofluoroscopic swallow study revealed reduced hyolaryngeal excursion and delayed laryngeal vestibule closure with thin liquids (IDDSI Level 0), resulting in trace penetration to the level of the vocal folds (PAS score 3) and aspiration with thin liquids on 2/5 trials (PAS score 7). Vallecular residue was moderate with puree consistencies (IDDSI Level 4), cleared with a single dry swallow. Pyriform sinus residue was mild. Epiglottic retroflexion was intact. Recommend diet modification to mildly thick liquids (IDDSI Level 2), chin tuck with thin liquid medications, and re-evaluation in 2 weeks or with clinical change."

The second version is defensible, specific, and useful to every member of the care team.

## Prompt Modifiers for Medical Precision

- **"Include standardized scale scores (PAS, FOIS, ASHA NOMS)"** – anchors findings to validated measures
- **"Reference specific anatomical structures"** – eliminates ambiguity in what was observed
- **"Use IDDSI terminology for diet recommendations"** – ensures consistency with international standards
- **"State objective measurements before clinical interpretation"** – separates data from judgment
- **"Include severity descriptors (mild, moderate, severe) tied to observable criteria"** – makes severity ratings transparent
- **"Document what was trialed and the outcome of each trial"** – captures clinical reasoning

## When to Use

- Instrumental swallow study reports (VFSS, FEES)
- Acute care evaluation and discharge documentation
- SNF initial evaluations and MDS-related documentation
- Diagnostic reports for voice, resonance, or motor speech disorders
- Any documentation that will be read by physicians, nurses, or case managers

## When This Pattern Doesn't Fit

Patient-facing materials, family counseling notes, and educational team reports need a different register. Medical jargon in an IEP present levels statement or a parent letter will alienate your audience. Match your precision to your reader.

## Pair With

- [Discrete Trial Documentation Pattern](/patterns/discrete-trial-documentation/) — shares the emphasis on quantitative precision
- [Medical setting](/settings/medical-acute/) — the regulatory and documentation context
- [SNF-Rehab setting](/settings/snf-rehab/) — where medical precision meets productivity demands
