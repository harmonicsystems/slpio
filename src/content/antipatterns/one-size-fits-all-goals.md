---
title: "One-Size-Fits-All Goals"
description: "When the same prompt produces nearly identical goals for every student, differing only in the name at the top."
category: generic-output
severity: major
settings: [school, early-intervention]
order: 7
---

This antipattern appears when a clinician finds a prompt that produces a "good" goal and then uses it for every student on the caseload without changing the input details. The result: 15 students with 15 versions of the same goal.

## The Bad Example

Three students. Three prompts. Three "individualized" goals.

> **Jaylen, age 5, Pre-K:**
> "[Student] will use age-appropriate grammatical structures in sentences with 80% accuracy across 3 consecutive sessions as measured by SLP data collection."
>
> **Sofia, age 7, 2nd grade:**
> "[Student] will use age-appropriate grammatical structures in sentences with 80% accuracy across 3 consecutive sessions as measured by SLP data collection."
>
> **Amir, age 9, 4th grade:**
> "[Student] will use age-appropriate grammatical structures in sentences with 80% accuracy across 3 consecutive sessions as measured by SLP data collection."

A Pre-K student, a second grader, and a fourth grader all received the same goal. Jaylen omits verb endings in spontaneous speech. Sofia uses "him" for "he" in every sentence. Amir produces complex sentences but drops articles. None of that made it into the goals because none of it was in the prompt.

## Why LLMs Produce This

The model generates output proportional to the specificity of the input. If you prompt "Write a language goal for a 5-year-old," the model has nothing to work with except its statistical average of language goals for young children. It will produce the most common, most generic version of that goal every time. The model is not lazy — it is responding accurately to a vague request. Identical inputs produce identical outputs.

## The Fix

Include at least three student-specific details in every goal prompt:

```
Write an IEP goal for this student. Include ONLY the specific targets I describe:
- Student: [age, grade]
- Current performance: [what the student does now — exact error patterns]
- Target context: [where this skill needs to show up]
- Relevant factor: [bilingual, AAC user, sensory needs, etc.]

Do not generalize beyond the information I provide.
```

The 30 seconds it takes to add specific details saves you from writing a goal that serves nobody.

## The Fixed Version

> **Jaylen, age 5, Pre-K:**
> "During play-based activities and circle time, Jaylen will produce regular past-tense verb endings (-ed) in 3-4 word utterances (e.g., 'I jumped high,' 'he walked away') with 80% accuracy in 4 out of 5 sessions, as measured by SLP data collection."
>
> **Sofia, age 7, 2nd grade:**
> "In structured language tasks and classroom discussion, Sofia will use subjective pronouns (he, she, they) in place of objective forms in sentences (e.g., 'He is running' vs. 'Him is running') with 80% accuracy across 3 consecutive sessions, as measured by SLP data collection."
>
> **Amir, age 9, 4th grade:**
> "In written and oral narrative tasks, Amir will include articles (a, an, the) in complex sentences containing dependent clauses with 80% accuracy across 3 consecutive data sessions, as measured by SLP data collection and classroom writing samples."

Same accuracy criterion. Completely different goals. Because the prompts contained completely different clinical information.

## The Takeaway

> An LLM cannot individualize what you do not describe. If your prompt could apply to any student on your caseload, the goal will too. The specificity of the output is limited by the specificity of the input.

## Pair With

- [Antipattern: The Polished but Unmeasurable Goal](/antipatterns/polished-unmeasurable-goal/) — generic goals often have measurability problems too
- [IEP Goal Strengthener prompt](/prompts/iep-goal-strengthener/) — forces student-specific input
- [Antipattern: The Clinic-Only Goal](/antipatterns/clinic-only-goal/) — another way goals lose individual context
