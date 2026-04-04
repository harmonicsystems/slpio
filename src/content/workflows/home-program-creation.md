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

A home program only works if the family actually does it. That means the activities need to fit into routines they already have, use materials they already own, and be explained in language that makes sense without a degree in communication sciences. This workflow helps you build home programs that are clinically targeted and practically usable, not the idealized version that assumes unlimited time and a perfectly quiet house, but the real one.

## Step 1: Identify Target Skills and Family Context

**What you do:** Select 2-4 target skills based on current therapy goals. Then write down what you know about this family's daily routines, available time, other children in the home, languages spoken, caregiver comfort level, and any barriers they have mentioned. This context shapes everything that follows. Skip it and you will produce a beautiful program that lives in a drawer.

**Prompt:**

```
I am an SLP creating a home practice program for a pediatric client. Here are the therapy goals I want to target at home (no identifying information): [list goals]. Here is what I know about the family's daily context: [describe routines, time availability, languages spoken at home, siblings, caregiver stated preferences or barriers, and any previous home program attempts that did or did not work]. Suggest 2-3 activities per goal that: (1) embed practice into routines the family already has (meals, bath time, car rides, play, bedtime), (2) require no purchased materials or only common household items, and (3) can be done in 5-10 minutes without requiring a separate "therapy time." Do not suggest activities that require a quiet, distraction-free environment unless the family specifically said they have that available.
```

**Decision point:** Look at every suggested activity and ask: would this family actually do this? If you know the parent works two jobs and has three kids under five, a nightly "language journal" is not realistic. If the family told you mornings are chaos, do not put activities at breakfast. If previous home programs went unused, figure out why before building another one. The model generates ideas based on what you described, but you have sat in this family's living room or talked to them at pickup. Trust what you know over what looks good on paper.

## Step 2: Generate Plain-Language Instructions

**What you do:** Take the activities you approved from Step 1 and turn them into instructions a caregiver can follow without you standing next to them. This is where most home programs fail. Clinicians write instructions that make sense to other clinicians but not to the person who actually has to do the activity.

**Prompt:**

```
For each of the following home activities, write caregiver instructions that include: (1) what to do, described in 2-3 simple sentences with a specific example, (2) a sample interaction showing what it sounds like in practice (a mini-script the caregiver can follow the first time), (3) what to do if the child does not respond or gets frustrated, meaning a realistic backup plan, not "redirect and try again," and (4) how to tell if the activity is working over time. Write at a conversational reading level. No jargon, no abbreviations, no terms like "phonological awareness" or "mean length of utterance." If the family speaks [language] at home, include a note about how to do the activity in that language using natural phrases they would actually say.
```

**Decision point:** Read the instructions from the caregiver's perspective. Are they clear enough that someone who has never observed a therapy session would know what to do? Is the "what to do if the child gets frustrated" section honest, or does it assume infinite patience and a perfectly regulated adult? Check the sample scripts. Do they sound like how a parent actually talks to their child, or do they sound like a clinician modeling in a session? Cut anything that reads like a textbook. Add encouragement that is genuine, not patronizing. Families do not need to be told they are "doing great" by a worksheet.

## Step 3: Create a Visual Schedule or Checklist

**What you do:** Organize the activities into a weekly format the family can stick on the fridge, keep on their phone, or tuck into a bag. The format matters as much as the content.

**Prompt:**

```
Create a simple weekly checklist for a home practice program with these activities: [list final activities]. Format it as a Monday-through-Friday grid with one activity per day (not all activities every day; rotate them so no single day is overwhelming). Include a checkbox for each day, a one-line reminder of the activity, and a small notes space where the caregiver can jot anything they noticed. Keep the whole thing to one page. Add a brief header that says something encouraging and low-pressure, like: "These are short activities to practice during your regular routines. Do what you can — any practice helps. Skip a day if you need to."
```

**Decision point:** Does the schedule match what the family told you they can manage? Five days a week might be right for one family and overwhelming for another. Some families need three days. Some need "whenever you can." Adjust the frequency before you hand it over. Also consider the delivery format — some families want a printed page, others want a photo they can save on their phone, others want you to text them a reminder each week. The model gives you the content. You deliver it in the way this specific family will actually use. And revisit the program regularly — a home program that never gets updated becomes wallpaper.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Generated activity ideas matched to described routines | Selected target skills based on clinical goals and priorities |
| Wrote plain-language caregiver instructions with examples | Verified activities fit this specific family's real life |
| Created a structured weekly checklist | Adjusted frequency, format, and delivery to family preferences |
| Included troubleshooting tips for caregivers | Brought firsthand knowledge of the family from direct interaction |
| Kept language jargon-free and conversational | Ensured cultural and linguistic responsiveness throughout |

## Pair With

- [IEP Meeting Preparation Workflow](/workflows/iep-meeting-prep/) — home programs often come up at IEP meetings
- [Early Intervention setting guide](/settings/early-intervention/) — family-centered practice principles
- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) — home programs must sound human, not clinical
