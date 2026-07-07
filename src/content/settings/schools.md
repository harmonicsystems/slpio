---
title: Schools (K–12)
description: IDEA, IEPs, eval season, Medicaid billing, and the predetermination trap in AI-assisted IEP work.
icon: ph-duotone ph-graduation-cap
order: 1
lastReviewed: 2026-07-07
---

School-based SLPs face documentation that carries legal weight: IEPs, evaluations on statutory clocks, progress monitoring cycles, Medicaid service logs, and a constant stream of parent communication. LLMs genuinely reduce the friction here — and schools are also where AI drafting has a failure mode with a legal name.

## Regulatory Context

- **IDEA** <cite data-ref="idea-2004"></cite> governs evaluations, eligibility, and IEP requirements — including the timelines: 60 days (federal default; your state may differ) from consent to initial evaluation, annual IEP reviews, triennial reevaluations. AI can't move these clocks, but it can help you keep documentation from being the bottleneck.
- **FERPA** <cite data-ref="ferpa"></cite> protects student education records; no identifiable student data in public AI tools. District-approved tools with appropriate agreements are a different category — know which yours are.
- **FAPE** means goals must be individualized and meaningful. IEP goals are legal commitments of district resources; precision matters.
- **Medicaid billing** in schools requires service documentation that matches what was delivered. Generated session notes that drift from what actually happened aren't just sloppy — they're audit findings.

## The Predetermination Trap

Here's the schools-specific danger: **an IEP developed before the meeting violates the parent's right to participate.** Courts have found predetermination when teams arrived with finished documents and treated the meeting as a formality. An LLM makes it effortless to walk in with beautiful, complete, final-sounding goals — which is exactly the artifact you don't want in the room. Draft *inputs* (present levels from your data, goal areas, options to discuss), not *outcomes*. The polish of AI output works against you here: "DRAFT — for team discussion" should be true, not decorative.

## Worked Example: Present Levels From Real Data

> "I am a school-based SLP drafting the speech-language section of present levels (PLAAFP) for an IEP meeting. Here are my data: [de-identified assessment scores, classroom observation notes, teacher input, progress monitoring data]. Organize into a present-levels narrative that states what the student CAN do, how the disability affects access to the general education curriculum, and what the data shows. Use only the data I provided — do not add strengths, needs, or classroom impacts I did not report. Label it DRAFT. Keep my clinical voice."

**What to check:** The curriculum-impact statement is where models invent — watch for plausible classroom effects ("struggles to follow multi-step directions during instruction") that came from the model's training data, not your observation. Every sentence should trace to a data point you provided, because every sentence may be read aloud at a due process hearing.

## Red Flags

- Entering identifiable student information into public models
- Walking into an IEP meeting with AI-polished, final-sounding documents — the predetermination trap
- Using AI for eligibility or diagnostic decisions
- Medicaid service logs that describe generated content rather than delivered services
- Polished wording hiding non-measurable goals
- Letting fluent language disguise weak reasoning

## Key Workflows

- **Eval season:** assessment report structuring, score-summary narratives — see the [eval report workflow](/workflows/eval-report-writing/)
- **IEP prep:** present-level drafting from data, goal *options* for team discussion — [IEP meeting prep](/workflows/iep-meeting-prep/)
- **Progress monitoring:** note organization, data summaries in batches — [progress monitoring workflow](/workflows/progress-monitoring-batch/)
- **Parent communication:** [email drafts](/prompts/parent-email-draft/), [jargon-free summaries](/prompts/parent-friendly-summary/)

## Related

- **Prompts:** [IEP Goal Strengthener](/prompts/iep-goal-strengthener/) · [Progress Note Organizer](/prompts/progress-note-organizer-school/)
- **Goals:** [the goal bank](/goals/) — school-setting goals with four-questions structure and evidence bases
- **Policy:** [School District AI Policy template](/policies/school-district-ai-policy/)

**See it in practice:** [Case study — eval season, 8 referrals in 3 weeks](/case-studies/school-eval-season/).
