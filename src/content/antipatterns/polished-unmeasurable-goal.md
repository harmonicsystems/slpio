---
title: "The Polished but Unmeasurable Goal"
description: "When AI-generated goals sound professional but fail the most basic test: can you actually measure this?"
category: measurability
severity: critical
settings: [school]
order: 1
---

This is the most common antipattern when SLPs use LLMs for goal writing. The output reads well — complete sentences, professional vocabulary, appropriate-sounding structure — but it fails the fundamental question: **How would you take data on this?**

## The Bad Example

> "Student will demonstrate improved pragmatic language skills by engaging in more appropriate social interactions with peers across various school settings as observed by the speech-language pathologist."

This goal sounds great. A parent reading it would think, "That seems thorough." An administrator might approve it without question.

**But try to take data on it.** What counts as "improved"? What's "more appropriate"? What does "various school settings" mean: two? Five? The cafeteria and the playground? "As observed by the SLP" — during what? A 30-minute session? A full school day?

## Why LLMs Produce This

Language models optimize for **fluent, professional-sounding text**. Measurability is not a property the model evaluates. It has no concept of "can a clinician actually track this?" It generates language that *looks* like a good goal because it matches the surface pattern of goals in its training data.

## The Fix

After any LLM generates a goal, apply the **Three-Question Test**:

1. **What exact behavior am I counting?** (If you can't name it, it's not measurable.)
2. **What does success look like as a number?** (Percentage, frequency, duration, or count.)
3. **Could another SLP take the same data and get the same result?** (If not, the criteria are too subjective.)

## The Fixed Version

> "Given a structured small-group activity with 2-3 peers, [Student] will initiate a topic-relevant conversational turn (comment, question, or response) in 4 out of 5 opportunities across 3 consecutive sessions, as measured by SLP data collection during weekly pragmatic language group."

Now you know: **what** (topic-relevant conversational turn), **how much** (4/5 opportunities), **how consistently** (3 consecutive sessions), **in what context** (small-group, 2-3 peers), and **who measures** (SLP during group).

## The Takeaway

> If a goal reads beautifully but you can't picture yourself taking data on it during a session, the LLM did its job (writing) and you need to do yours (clinical measurement design).

## Pair With

- [IEP Goal Strengthener prompt](/prompts/iep-goal-strengthener/) – the prompt that fixes this
- [Writing Goals tasks](/tasks/writing-goals/) – the full goal-writing framework
- [Schools setting guide](/settings/schools/) – why measurability is legally required under IDEA <cite data-ref="idea-2004"></cite>
