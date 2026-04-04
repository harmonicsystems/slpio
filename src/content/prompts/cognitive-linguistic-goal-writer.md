---
title: "Cognitive-Linguistic Goal Writer"
description: "Write functional cognitive-linguistic therapy goals for adults with TBI or dementia, anchored to real-world tasks."
category: goal-writing
settings: [medical, snf-rehab]
populations: [adult, geriatric]
domains: [cognitive-linguistic]
difficulty: advanced
clinicalFrameworks: [functional, medical-model]
ashaPrinciples: [beneficence, autonomy]
order: 12
---

## The Prompt

```
I am an SLP writing cognitive-linguistic therapy goals for an adult patient. Here is the relevant clinical information (no identifying information): diagnosis, current cognitive-linguistic profile, and the patient's functional priorities or daily tasks they want to improve. Write 3-4 measurable therapy goals that: target specific cognitive-linguistic skills (attention, memory, executive function, problem-solving, or functional communication), are tied to real-world tasks the patient needs to perform (medication management, following a schedule, communicating needs to caregivers, managing finances), include a measurable criterion (accuracy, independence level, frequency of cues), specify the condition (structured task, simulated functional activity, natural environment), and include a realistic timeframe. Do not write goals for skills I did not identify as impaired. Do not assume a diagnosis I did not provide. Prioritize functional independence over isolated cognitive drill performance.
```

## Why This Works

- **Functional anchoring** — tying goals to real-world tasks (medication management, scheduling) produces goals that are meaningful to the patient and defensible to payers
- **Diagnosis-specific guardrail** — "do not assume a diagnosis I did not provide" prevents the model from generating goals based on a condition you did not assess
- **Measurability built in** — requiring criterion, condition, and timeframe ensures goals meet documentation standards across medical and rehab settings
- **Independence over drill performance** — prioritizing functional independence aligns with best practices in cognitive rehabilitation and avoids goals that measure task accuracy without clinical relevance
- **Multiple goal options** — providing 3-4 goals lets the clinician select and adapt based on the patient's priorities and prognosis

## When to Use

When writing or updating therapy goals for adults with traumatic brain injury, stroke, dementia, or other conditions affecting cognitive-linguistic function. Especially useful when you need to translate neuropsychological profiles into functional therapy targets.

## When NOT to Use

- Do not include patient names, medical record numbers, or facility identifiers
- Do not use for pediatric populations — cognitive-linguistic development differs significantly
- Do not accept goals without verifying they match the patient's assessed impairments and stated priorities

## Pair With

- [Discharge Summary Organizer](/prompts/discharge-summary/) — document progress toward these goals at end of care
- [SOAP Note Formatter](/prompts/soap-note-formatter/) — track session-level progress on cognitive-linguistic goals
- [SNF/Rehab setting guide](/settings/snf-rehab/) — documentation standards for rehabilitation settings
