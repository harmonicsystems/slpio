---
title: "Progress Monitoring Batch Writing Workflow"
description: "A step-by-step process for using an LLM to draft 15-20 individualized progress notes efficiently at the end of a reporting period."
settings: [school]
populations: [pediatric]
stepCount: 4
estimatedTime: "40-60 minutes"
difficulty: intermediate
order: 3
---

End-of-quarter progress notes are a bottleneck. You have 15-20 students, each with multiple goals, and every note needs to be accurate, individualized, and defensible. This workflow uses an LLM to handle the structural repetition while you focus on what actually matters — making sure each note sounds like it was written about a real kid, because it was.

## Step 1: Compile Raw Data Across Students

**What you do:** Pull together your data sheets, session logs, tally marks, and informal notes for all students on your caseload. De-identify everything — use initials or student numbers. Group data by student, with each goal and its corresponding data points.

**Prompt:**

```
I am a school-based SLP compiling progress data for [number] students at the end of a reporting period. Here is raw data for each student, organized by student and goal (no identifying information). For each student, create a brief data summary that includes: baseline level, current level, trend direction (improving, plateauing, declining), and number of sessions/data points collected. Do not interpret progress or make recommendations — just organize and summarize the numbers.
```

**Decision point:** Check the trend calls. A student going from 20% to 35% accuracy might look like "improving" to the model, but you know that child was absent for three weeks and the recent data is inflated by heavy cueing. Your context matters more than the math.

## Step 2: Batch-Organize by Goal Type

**What you do:** Review the organized summaries from Step 1. Group students by goal area so the model can draft notes with appropriate language for each domain.

**Prompt:**

```
Here are the data summaries for my caseload, organized by student. Now reorganize them by goal area (articulation, expressive language, receptive language, fluency, pragmatics, etc.). For each goal area, list which students are working on it, their current data, and their trend. This will help me draft notes in batches by domain. Keep the student data intact — just regroup it.
```

**Decision point:** Does the grouping make sense clinically? Some goals straddle categories. A student working on "describing pictures in complete sentences" might be articulation and expressive language depending on what you are actually targeting. Make sure the grouping reflects your clinical intent, not just the surface wording.

## Step 3: Draft Progress Notes

**What you do:** Use the organized, grouped data to draft notes in batches. Feed the model one goal area at a time with all relevant students.

**Prompt:**

```
Using the data summaries below for [goal area], draft a progress note for each student. Each note should include: the goal as written, a data summary with specific numbers, a narrative statement about progress, and a recommendation (continue, modify, or discontinue with justification). Use professional language appropriate for IEP progress reports. Vary your sentence structure and word choice across students — do not use the same template or phrasing for every note.
```

**Decision point:** This is where you earn your CCCs. Read every note back-to-back. If you could swap Student A's note into Student B's report and nobody would notice, the notes are too generic. Add the details only you have: the student who finally self-corrected without a visual cue, the one who shuts down during narrative tasks but thrives in conversation, the one whose progress stalled when their classroom teacher changed. The model gives you structure. You give it a soul.

## Step 4: Quality-Check for Individualization

**What you do:** Run a final check across all drafted notes to catch repetitive language and template-sounding phrasing.

**Prompt:**

```
Here are the complete progress notes I have drafted for my caseload. Review them as a set and flag: (1) any two notes that use substantially similar phrasing or sentence structure, (2) notes that sound generic rather than individualized, (3) any inconsistency between the data numbers and the narrative description, and (4) recommendations that don't logically follow from the data trend. List specific examples so I can revise them.
```

**Decision point:** The model can catch surface-level repetition, but it cannot catch meaningful sameness. Two notes might use different words and still say nothing specific. Read each note and ask: would this note help a new SLP picking up this student mid-year understand who this kid is? If not, revise.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized raw data into student summaries | Collected data across weeks of sessions |
| Regrouped data by goal area for batching | Verified clinical accuracy of groupings |
| Drafted progress note language | Ensured each note reflects a real individual |
| Flagged repetitive or generic phrasing | Added context no data sheet can capture |
| Provided structural consistency | Made all progress and recommendation judgments |

## Pair With

- [IEP Meeting Preparation Workflow](/workflows/iep-meeting-prep/) — when progress notes feed into upcoming IEP meetings
- [Writing Goals](/tasks/writing-goals/) — for revising goals based on progress data
- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) — the primary risk in batch writing
