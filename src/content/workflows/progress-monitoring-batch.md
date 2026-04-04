---
title: "Batch Progress Monitoring Notes"
description: "A workflow for drafting 15-20 progress monitoring notes at the end of a reporting period without letting them blur into generic filler."
settings: [school]
populations: [pediatric]
stepCount: 4
estimatedTime: "40-60 minutes"
difficulty: intermediate
order: 3
---

You have 18 students, the reporting period ends Friday, and every one of them needs an individualized progress note. The temptation is to batch them fast and move on. This workflow uses an LLM to handle the repetitive structure so you can focus on what actually matters: making sure each note sounds like it belongs to one specific student.

## Step 1: Compile Raw Data Across Students

**What you do:** Pull together your data sheets, session logs, tally marks, rubric scores, and informal observations for every student on your caseload. De-identify everything before it touches the model. Use initials or codes.

**Prompt:**

```
I am a school-based SLP compiling progress data for my caseload at the end of a reporting period. Here is raw data for multiple students (de-identified with codes). For each student, organize: (1) each IEP goal, (2) baseline level, (3) current data level with the most recent 3-5 data points, and (4) any notes I included about context (absences, behavior, setting changes). Present this as a structured list grouped by student. Do not interpret progress. Just organize what I gave you.
```

**Decision point:** Scan the organized output. Did you forget to include data for any student? Is the raw data actually representative, or did you have a stretch of missed sessions that skews the picture? The model organizes what you give it; it cannot flag what you left out.

## Step 2: Batch-Organize by Goal Type

**What you do:** Group students by goal area so the model can draft notes with appropriate language for each domain. This grouping lets you write articulation notes together, language notes together, and so on, which is faster and helps you maintain consistent terminology within each domain.

**Prompt:**

```
Now reorganize the same data, but group students by goal area (articulation, expressive language, receptive language, fluency, pragmatics, etc.). Within each group, list each student's goal, data trend (improving, maintaining, declining based on the numbers), and any contextual notes. This grouping will help me draft notes efficiently by domain. Still do not interpret progress or make recommendations.
```

**Decision point:** Look at the trend labels. A student whose accuracy went from 40% to 55% across a semester is technically "improving," but is that rate of progress adequate? You decide whether the pace justifies continuing the current approach or signals a need for change. The numbers do not tell the whole story. You watched this student struggle, adapt, or disengage in real time.

## Step 3: Draft Progress Notes

**What you do:** Feed each goal-area group into the model to generate draft notes. Be explicit about format requirements your district expects.

**Prompt:**

```
Using the organized data above, draft a progress monitoring note for each student's goal. Use this format: [state your district's required format, e.g., "Goal, data summary, progress rating (mastered/progressing/insufficient progress), and a 2-3 sentence narrative"]. Each note must reference specific data points from the student's own record. Do not use filler phrases like "continues to make progress" without citing numbers. Do not copy narrative language between students. Each note should reflect that student's individual trajectory.
```

**Decision point:** This is the critical step. Read every note back-to-back and ask: could I swap this note onto a different student with a similar goal and have it still make sense? If yes, the note is too generic. Add the detail that only you know: the student who finally self-corrected without a visual cue, the one who shuts down during narrative tasks but thrives in conversation, the one whose progress stalled when they switched classrooms mid-quarter.

## Step 4: Quality-Check for Individualization

**What you do:** Run a final check specifically targeting the copy-paste problem that plagues batch-drafted notes.

**Prompt:**

```
Review all of the progress notes above as a complete set. Flag any two or more notes that use substantially similar phrasing, sentence structures, or narrative descriptions. For each flag, tell me which students are involved and what language overlaps. Also flag any note that does not reference at least one specific data point unique to that student. Finally, check that each progress rating (mastered, progressing, insufficient) is consistent with the data trend described in the narrative.
```

**Decision point:** The model can catch surface-level overlap, but it cannot catch deeper sameness, notes that use different words to say the same nothing. Read each note one more time with the student's face in your mind. If the note does not remind you of that specific student, revise it yourself. Also verify that your progress ratings align with what you plan to say at the next IEP meeting. A note that says "progressing" now but leads to a "we need to change the approach" conversation later will undermine your credibility.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized raw data into structured format | Collected data across weeks of direct service |
| Grouped students by goal area for efficient batching | Validated that data trends match clinical reality |
| Drafted progress notes with required format | Ensured each note is genuinely individualized |
| Flagged overlapping language across notes | Made judgment calls on adequacy of progress |
| Checked internal consistency of ratings and narratives | Added context no data sheet captures |

## Pair With

- [IEP Meeting Preparation Workflow](/workflows/iep-meeting-prep/) – when progress notes feed into upcoming IEP meetings
- [Writing Goals](/tasks/writing-goals/) – for revising goals based on progress data
- [Schools setting guide](/settings/schools/) – IDEA documentation and reporting context
- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) – the primary risk in batch writing
