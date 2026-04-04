---
title: "IEP Meeting Preparation Workflow"
description: "A step-by-step sequence for using an LLM to prepare organized, thorough IEP meeting materials, from data compilation to parent-ready summaries."
settings: [school]
populations: [pediatric]
stepCount: 5
estimatedTime: "30-45 minutes"
difficulty: intermediate
order: 1
---

This isn't a single prompt. It's a sequence. Each step builds on the previous one, with decision points where your clinical judgment overrides the tool.

## Step 1: Compile and Organize Raw Data

**What you do:** Gather your session data, progress monitoring notes, and informal observations. De-identify everything.

**Prompt:**

```
I am a school-based SLP preparing for an IEP meeting. Here is my raw progress data and session notes for the current reporting period (no identifying information). Organize this into: (1) a summary of each goal with current data level, (2) a trend analysis (improving, plateauing, declining), and (3) any patterns you notice in the data. Do not interpret the data — just organize and summarize what I've provided.
```

**Decision point:** Review the organized data. Does the trend analysis match your clinical impression? If the model says "improving" but you know the gains aren't functional, override it. You know this student.

## Step 2: Draft Present Levels

**What you do:** Take the organized data from Step 1 and draft present levels of performance.

**Prompt:**

```
Using the organized data above, draft a present levels statement that includes: current performance on each goal with specific data points, how the disability affects involvement in the general curriculum, comparison to same-age peers where relevant, and strengths the student demonstrates. Use educational language appropriate for an IEP. Do not use deficit-only framing — include what the student CAN do.
```

**Decision point:** Is the present levels statement individualized? If it could describe any student with a similar profile, it's too generic. Add the specific observations only you have.

## Step 3: Evaluate and Revise Goals

**What you do:** Review current goals against the data. Decide which goals to continue, modify, or discontinue.

**Prompt:**

```
Here are the student's current IEP goals and their data summaries. For each goal, tell me: (1) whether the data suggests the goal has been met, is in progress, or shows insufficient progress, (2) if the goal needs to be revised, what specifically should change (criterion, condition, or target behavior), and (3) a suggested revised goal if revision is needed. Do not add new goal areas I haven't identified.
```

**Decision point:** This is the highest-judgment step. The model can suggest revisions, but only you know the student's full profile, classroom demands, and family priorities. Goals that look "met" on data may still need continuation in a different context.

## Step 4: Prepare the Parent Summary

**What you do:** Convert the clinical documentation into parent-friendly language.

Use the [Parent-Friendly Evaluation Summary](/prompts/parent-friendly-summary/) prompt, adapted for progress updates rather than initial evaluations.

**Decision point:** Read the summary as if you're a parent hearing this for the first time. Is it clear? Is it honest without being alarming? Does it celebrate real progress?

## Step 5: Anticipate Questions

**What you do:** Prepare for the meeting conversation.

**Prompt:**

```
I am preparing for an IEP meeting. Based on the present levels and goal updates above, what questions might a parent, teacher, or administrator ask? For each likely question, suggest a brief, honest response that stays within my scope of practice as an SLP. Do not speculate about medical diagnoses, educational placement decisions, or topics outside speech-language pathology.
```

**Decision point:** Remove any suggested responses that feel scripted or defensive. The best preparation is knowing your data cold, not having pre-written answers.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized raw data into readable format | Collected the data across weeks of sessions |
| Identified data trends | Validated trends against clinical impression |
| Drafted present levels structure | Individualized with observations only you have |
| Suggested goal revisions | Made final decisions about student needs |
| Translated to parent-friendly language | Ensured accuracy and appropriate tone |
| Anticipated questions | Prepared authentic, relationship-centered responses |

## Pair With

- [Writing Goals](/tasks/writing-goals/) — for the goal revision step
- [IEP Goal Strengthener](/prompts/iep-goal-strengthener/) — for individual goal rewrites
- [Schools setting guide](/settings/schools/) — IDEA and IEP documentation context
