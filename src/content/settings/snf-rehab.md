---
title: Skilled Nursing & Rehab
description: PDPM, skilled-language documentation, MDS, discharge planning, and productivity-aware LLM use.
icon: ph-duotone ph-heart-half
order: 3
lastReviewed: 2026-07-07
---

SNF documentation has a property no other setting shares so directly: **what you write drives what the facility is paid.** Under PDPM, the SLP component is set by clinical characteristics your documentation establishes — presence of a swallowing disorder, a mechanically altered diet, SLP-related comorbidities, cognitive impairment. That creates a standing institutional pressure on your language, and an LLM is very good at producing language that satisfies pressure. That combination deserves your full attention.

## The Documentation Realities

- **Skilled language is a legal category, not a style.** Medicare pays for services that require the skills of an SLP. "Patient tolerated treatment well" justifies nothing; "clinician provided graded cues to trained compensatory strategy, reducing cue level from verbal + tactile to verbal only" does. An LLM can produce either — it cannot know which one actually happened.
- **Maintenance care is coverable** (Jimmo settlement) when it requires skilled judgment — improvement is not the only justification. Don't let a model's default "patient continues to progress" framing write checks your data can't cash, and don't let it talk you out of documenting skilled maintenance correctly.
- **Part B brings the 8-minute rule and timed codes.** Minutes must reflect what happened. Never let generated text imply treatment time or frequency you didn't provide.
- **Your notes feed the MDS** (Section K for swallowing/nutrition, Section C for cognition). Errors propagate from your documentation into the facility's assessment of record.
- **Productivity expectations of 85–90% are common.** That's the honest reason LLM drafting is attractive here — and the honest reason the review step gets skipped. Budget the review time as part of the task or don't use the tool.

## Worked Example: A Progress Note That Justifies Skilled Care

> "I am an SLP in a skilled nursing facility writing a Medicare Part A progress note. Here are my raw session data: [de-identified data — target, cue types and levels, accuracy, diet level, patient response]. Organize into a narrative note that documents the skilled components: what I modified, what I analyzed, what cueing I provided and how it changed. Use only the data I provided. Do not add progress, tolerance statements, or clinical observations I did not report. Keep my clinical voice — do not over-polish."

**What to check before signing:** Does every skilled-care claim trace to something in your input? Watch for inserted phrases like "steady progress toward goals," "patient motivated and engaged," or an upgraded functional status — models add these because most notes in their training data have them. If a reimbursement reviewer would ask "where's the evidence for this sentence," the sentence goes.

## Red Flags Specific to This Setting

- Using AI to inflate documentation toward a payment-relevant clinical picture — that's fraud exposure, not efficiency
- Letting polished language mask a plateau that honestly calls for discharge or a maintenance plan
- Generic functional goals ("improve swallow safety") that ignore the resident's actual meals, room, and routines
- AI-generated "improvement" narratives that contradict your own data trail from prior notes

## Related

- **Workflow:** [Discharge Planning (Medical)](/workflows/discharge-planning-medical/)
- **Prompts:** [Prior Authorization / Medical Necessity](/prompts/prior-authorization-letter/) · [Discharge Summary](/prompts/discharge-summary/)
- **Goals:** [Dysphagia goal examples](/goals/) with IDDSI-referenced criteria

**See it in practice:** [Case study — SNF progress notes](/case-studies/snf-progress-notes/).
