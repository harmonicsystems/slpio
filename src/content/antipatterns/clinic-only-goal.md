---
title: "The Clinic-Only Goal"
description: "When a goal measures performance in therapy but says nothing about the real world where the skill actually matters."
category: vague-goals
severity: major
settings: [school, early-intervention, private-practice]
order: 3
---

This antipattern is subtle because the goal *is* measurable — it just measures the wrong thing.

## The Bad Example

> "Student will produce /s/ blends in initial position of words with 80% accuracy during structured therapy activities."

This is technically measurable. You can take data on it. But it answers only one question: "Can this child say /s/ blends in my therapy room?" It says nothing about the cafeteria, the classroom, the playground, or home — the places where intelligibility actually matters.

## Why LLMs Produce This

Models default to the **easiest measurement context**: structured therapy. It's the most common goal format in training data and it's the simplest to write. Generalizing to natural contexts requires clinical reasoning about the child's environment — something the model has no access to.

## The Fix

Add a generalization context to every goal prompt:

```
Include a generalization condition — where and with whom will this skill be measured beyond the therapy room? Goals should target functional communication in the student's actual daily environments.
```

## The Fixed Version

> "In classroom activities and peer interactions, [Student] will produce /s/ blends in initial position of words with 80% accuracy across 3 consecutive observations by SLP, with generalization data collected during one non-therapy observation per month (e.g., classroom group activity, lunch conversation)."

Now the goal lives where the child lives.

## The Takeaway

> A skill performed only in therapy is a therapy skill, not a communication skill. If your goal doesn't describe the real world, you're measuring compliance, not competence.

## Pair With

- [Pattern: Family-Centered Prompting](/patterns/family-centered-prompting/) — naturally targets real-world contexts
- [IEP Goal Strengthener prompt](/prompts/iep-goal-strengthener/) — builds in context and generalization
- [Articulation domain](/domains/articulation-phonology/) — where clinic-only goals are most common
