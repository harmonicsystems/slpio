---
title: "Home Program Creation Workflow"
description: "A step-by-step process for creating parent-friendly home practice programs with activities that fit real family routines."
settings: [early-intervention, school, private-practice]
populations: [pediatric]
stepCount: 3
estimatedTime: "20-30 minutes"
difficulty: beginner
order: 6
---

A home program only works if the family actually does it. That means the activities need to fit into routines they already have, use materials they already own, and be explained in language that makes sense without a degree in communication sciences. This workflow helps you build home programs that are clinically targeted and practically usable — not the idealized version, the real one.

## Step 1: Identify Target Skills and Family Context

**What you do:** Select 2-4 target skills based on current therapy goals. Then write down what you know about this family's daily routines, available time, other children in the home, languages spoken, and any barriers they have mentioned. This context shapes everything.

**Prompt:**

```
I am an SLP creating a home practice program for a pediatric client. Here are the therapy goals I want to target at home (no identifying information): [list goals]. Here is what I know about the family's daily context: [describe routines, time availability, languages, siblings, stated preferences or barriers]. Suggest 2-3 activities per goal that: (1) embed practice into routines the family already has (meals, bath, car rides, play), (2) require no purchased materials or only common household items, and (3) can be done in 5-10 minutes. Do not suggest activities that require a quiet, distraction-free environment unless the family specifically said they have that.
```

**Decision point:** Look at every suggested activity and ask: would this family actually do this? If you know the parent works two jobs and has three kids under five, a nightly "language journal" is not realistic. If the family told you mornings are chaos, do not put activities at breakfast. The model generates ideas based on what you described — but you have sat in this family's living room or talked to them at pickup. Trust what you know.

## Step 2: Generate Plain-Language Instructions

**What you do:** Take the activities you approved from Step 1 and turn them into instructions a caregiver can follow without you standing next to them.

**Prompt:**

```
For each of the following home activities, write caregiver instructions that include: (1) what to do, described in 2-3 simple sentences, (2) an example of what it looks like (a sample interaction or script), (3) what to do if the child does not respond or gets frustrated, and (4) how to tell if the activity is working. Write at a conversational reading level — no jargon, no abbreviations, no terms like "phonological awareness" or "mean length of utterance." If the family speaks [language], include a note about how to do the activity in that language.
```

**Decision point:** Read the instructions from the caregiver's perspective. Are they clear enough that someone who has never been to a therapy session would know what to do? Is the "what to do if the child gets frustrated" section realistic, or does it assume infinite patience? Cut anything that sounds like a textbook. Add encouragement that is genuine, not patronizing.

## Step 3: Create a Visual Schedule or Checklist

**What you do:** Organize the activities into a weekly format the family can stick on the fridge or keep on their phone.

**Prompt:**

```
Create a simple weekly checklist for a home practice program with these activities: [list final activities]. Format it as a Monday-through-Friday grid with one activity per day (not all activities every day — rotate them). Include a checkbox for each day, a one-line reminder of the activity, and a notes space for the caregiver to jot anything they noticed. Keep the whole thing to one page. Add a brief header that says something like: "These are short activities to practice during your regular routines. Do what you can — any practice helps."
```

**Decision point:** Does the schedule match what the family told you they can manage? Five days a week might be right for one family and overwhelming for another. Adjust the frequency. Also consider the format — some families want a paper handout, others want a text message, others want a shared document. The model gives you the content. You deliver it in the way this family will actually use.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Generated activity ideas matched to routines | Selected target skills based on therapy goals |
| Wrote plain-language caregiver instructions | Verified activities fit this specific family's reality |
| Created a structured weekly checklist | Adjusted frequency and format to family preferences |
| Included troubleshooting tips for caregivers | Brought knowledge of the family from direct interaction |
| Kept language jargon-free | Ensured cultural and linguistic responsiveness |

## Pair With

- [IEP Meeting Preparation Workflow](/workflows/iep-meeting-prep/) — home programs often come up at IEP meetings
- [Early Intervention setting guide](/settings/early-intervention/) — family-centered practice principles
- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) — home programs must sound human, not clinical
