---
title: "CFY Supervision Feedback Workflow"
description: "A step-by-step process for clinical supervisors to organize observation notes and prepare structured, supportive feedback for CF or graduate student clinicians."
settings: [university]
populations: [all]
stepCount: 3
estimatedTime: "20-30 minutes"
difficulty: intermediate
order: 4
---

Good supervision feedback is specific, balanced, and actionable. But after a full day of your own caseload plus observation sessions, your notes are often scattered across sticky notes, margins, and mental impressions. This workflow helps you organize raw observations into structured feedback that is honest about growth areas without flattening a new clinician's confidence.

## Step 1: Organize Observation Notes

**What you do:** Gather your observation notes from the session or reporting period. Include what you saw (specific behaviors, client interactions, clinical decisions) and any supervisee self-reflections they have shared with you. De-identify all client information.

**Prompt:**

```
I am a clinical supervisor preparing feedback for a [CF / graduate student clinician]. Here are my raw observation notes from [number] sessions (all client information de-identified). Organize these into categories: (1) clinical skills (assessment, treatment implementation, data collection), (2) professional behaviors (time management, preparation, documentation), (3) interpersonal skills (rapport with clients, communication with families/staff), and (4) clinical reasoning (in-session decision-making, ability to adjust). Under each category, list the specific observations I provided. Do not evaluate or rate them — just organize.
```

**Decision point:** Check whether the organized notes actually reflect what you observed or whether the model smoothed over something important. If you wrote "jumped to a new activity when the client got frustrated" and the model filed it under "ability to adjust," that reframing might be too generous. Your notes had a reason for the phrasing they used.

## Step 2: Draft Strengths-and-Growth Feedback

**What you do:** Review the organized observations and identify which are strengths, which are areas for growth, and which are urgent priorities. Then let the model help you draft the feedback in a structured, professional format.

**Prompt:**

```
Using the organized observations above, draft structured feedback with two sections: Strengths and Areas for Growth. For strengths, cite specific observed behaviors (not vague praise). For areas for growth, frame each one as: what was observed, why it matters clinically, and a concrete next step the clinician can take. Use a tone that is direct and honest but supportive — this person is learning. Do not soften growth areas to the point of vagueness, and do not inflate strengths beyond what the observations support.
```

**Decision point:** This is the hardest part of supervision. Read the growth areas and ask yourself: if I hand this to my supervisee, will they understand exactly what to work on? Vague feedback like "continue developing clinical reasoning skills" helps no one. But also ask: is this feedback deliverable in a conversation? If it reads like a performance improvement plan when the person is a second-semester student, adjust the framing. You know where this clinician is in their development. The model does not.

## Step 3: Prepare a Professional Development Plan

**What you do:** Translate the feedback into a forward-looking plan with specific, observable targets for the next observation period.

**Prompt:**

```
Based on the feedback above, draft a short professional development plan with 2-3 priority goals for the next [timeframe]. Each goal should include: a specific skill or behavior to develop, a measurable indicator of progress, and one concrete strategy or resource the clinician can use (e.g., self-video review, a specific reading, a modeling session with me). Keep it realistic — this person also has a full clinical and academic schedule.
```

**Decision point:** Are the goals achievable in the timeframe? A model will often suggest ambitious targets because it has no sense of how much a student is already juggling. Pick the one or two things that will make the biggest difference and let the rest wait. Also consider: does this plan reflect what the supervisee identified as their own goals? Good supervision is collaborative, not top-down.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized scattered observation notes | Made the clinical observations in real time |
| Structured feedback into strengths and growth areas | Determined which observations matter most |
| Drafted professional, balanced language | Calibrated tone to this specific clinician |
| Suggested development goals and strategies | Ensured goals are realistic and collaborative |
| Provided consistent formatting | Brought the relationship context the model cannot see |

## Pair With

- [Documentation tasks](/tasks/documentation/) — for broader documentation strategies
- [Antipattern: Over-Trusting AI Output](/antipatterns/over-trusting-ai-output/) — particularly relevant when feedback becomes part of a formal record
- [Evaluation Report Writing Workflow](/workflows/eval-report-writing/) — similar structure of organizing clinical observations into professional documents
