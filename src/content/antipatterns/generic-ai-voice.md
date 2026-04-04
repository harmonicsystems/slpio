---
title: "Generic AI Voice"
description: "When LLM output replaces your clinical observations with polished but interchangeable language that could describe any client."
category: clinical-voice
severity: major
settings: [school, medical, snf-rehab, private-practice]
order: 2
---

You'll recognize this instantly: the LLM takes your specific, idiosyncratic session notes and returns a paragraph that sounds professional but could describe literally any client with a similar diagnosis.

## The Bad Example

**Your raw notes:**
> kid was really engaged today, kept requesting the red car during play, used 2-word combos like "more car" and "my turn" (hasn't done "my turn" before!) got frustrated when I changed the activity and threw the car once but recovered with a deep breath after I modeled it

**The LLM output:**
> "The client demonstrated increased engagement during the session. Expressive language skills were observed, including two-word combinations. The client exhibited some difficulty with transitions, which was addressed through co-regulation strategies. Overall, the session reflected positive progress toward communication goals."

Everything specific (the red car, "my turn" as a new utterance, the thrown car, the modeled deep breath) is gone. What's left is a progress note that could be copy-pasted into any chart.

## Why This Happens

LLMs are trained on vast amounts of professional writing. When you give them clinical notes, they pattern-match to the most common documentation style in their training data: **generic, hedge-heavy, professional-sounding text**. The model doesn't know that "my turn" appearing for the first time is clinically significant. It just sees two words and maps them to "two-word combinations."

## The Fix

Add an explicit instruction to your prompts:

```
Preserve the specific details from my notes — exact utterances, specific materials, specific behaviors. Do not generalize "red car" into "toys" or "my turn" into "two-word combinations." The specifics ARE the clinical data.
```

## The Fixed Version

> "Student demonstrated increased engagement during a play-based activity with a red car. Produced novel two-word combination 'my turn' — first documented use of possessive + noun for turn-taking. Also produced 'more car' (recurrence + object). Difficulty with activity transition observed: threw car once. Recovered independently after SLP modeled deep breathing strategy. Co-regulation strategy effective within 30 seconds."

Every detail from the original notes is preserved. The note is still organized and professional — but it's **this child's** note, not anyone else's.

## The Takeaway

> If you can swap a client's name into the note and it still makes sense, the note has lost its clinical value. Specificity is not just good writing — it's the evidence that you were actually in the room.

## Pair With

- [Documentation tasks](/tasks/documentation/) — how to preserve voice in structured notes
- [Pattern: Family-Centered Prompting](/patterns/family-centered-prompting/) — a philosophy that naturally produces specific notes
- [Antipattern: The Polished but Unmeasurable Goal](/antipatterns/polished-unmeasurable-goal/) — the goal-writing version of the same problem
