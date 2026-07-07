---
title: Private Practice & Telepractice
description: Being your own compliance officer — BAAs, payer documentation, appeals, telepractice licensure, and honest marketing.
icon: ph-duotone ph-buildings
order: 5
lastReviewed: 2026-07-07
---

In private practice, every role a hospital distributes across departments lands on you: compliance officer, billing department, records custodian, marketing team. That's the real frame for LLM use here — not "can the tool do this task" but **"which of my roles does this task belong to, and what does that role require?"** Nobody is checking your work. That's the appeal and the exposure.

## The Practice Realities

- **You are the BAA decision.** No institution has vetted a tool for you. Consumer plans (ChatGPT Free/Plus, Claude Free/Pro/Max/Team) cannot be covered by a BAA — if client information touches an AI tool, you either arrange BAA-covered access yourself (API-based or eligible enterprise tools) or de-identify completely, every time. The [comparison matrix](/foundations/comparison-matrix/) has the current landscape.
- **Your documentation is the payer case.** Superbills and claims stand on CPT-coded services (92507, 92523, 92526 and friends) backed by notes that establish medical necessity on their own. LLMs organize this well — and will also happily generate necessity language your data doesn't support, which becomes your problem at audit, not the model's.
- **Denials and appeals are a writing task with rules.** An appeal answers the payer's stated denial reason with plan-of-care evidence. This is one of the highest-value LLM uses in private practice, and one where fabricated specifics are catastrophic.
- **Telepractice crosses state lines; your license may not.** Interstate practice runs through individual state licensure or ASLP-IC compact privileges, and the rules are payer-specific too. Never let a model answer "can I see this client across state lines?" — verify with the state boards and the payer.
- **Informed consent should mention AI.** If tools touch client information or generate client-facing materials, a line in your intake paperwork is cheap protection and honest practice. The [policy templates](/policies/) include adaptable language.
- **Marketing claims are regulated speech.** Generated copy loves outcomes ("proven results!"). The FTC and your ethics code do not.

## Worked Example: An Insurance Appeal

> "I am an SLP in private practice appealing a denial. The payer's stated reason: [quote the denial language]. Here is my documentation: [de-identified plan of care, progress data, medical necessity rationale]. Draft an appeal letter that responds point-by-point to the stated denial reason using only the clinical information I provided. Do not invent outcomes, percentages, or clinical details. Professional tone, but keep my clinical voice — do not over-polish."

**What to check:** Every clinical claim in the letter must exist in your records — an appeal is a representation to a payer, and an invented "client demonstrates 40% improvement" is indefensible even if the improvement is real but unmeasured. Check that the letter answers *their* denial reason rather than making the general case for therapy; models drift toward the generic argument.

## Red Flags Specific to This Setting

- Pasting client information into consumer AI tools because "it's just my practice" — solo practices carry full HIPAA obligations
- Marketing copy with outcome claims or testimonials-flavored language you can't substantiate
- Scope creep: a model will confidently help you into areas outside your competence — it has no scope of practice; you do
- Appeal or necessity language that outruns your actual data

## Related

- **Prompts:** [Prior Authorization Letter](/prompts/prior-authorization-letter/) · [Parent-Friendly Summary](/prompts/parent-friendly-summary/)
- **Policy:** [Private Practice AI Guidelines](/policies/private-practice-ai-guidelines/) — adaptable consent and disclosure language
- **Foundations:** [PHI Safety](/foundations/phi-safety/) — the de-identification discipline everything above depends on
