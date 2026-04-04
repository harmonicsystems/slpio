---
title: "CFY Supervision Feedback Workflow"
description: "A structured process for clinical supervisors to organize observation notes and draft actionable, supportive feedback for CF or graduate student clinicians."
settings: [university]
populations: [all]
stepCount: 3
estimatedTime: "20-30 minutes"
difficulty: intermediate
order: 4
---

Giving honest clinical feedback is one of the hardest things supervisors do. Too gentle and the clinician does not grow. Too blunt and they shut down. After a full day of your own caseload plus observation sessions, your notes are often scattered across sticky notes, margins, and mental impressions. This workflow helps you organize those raw observations into structured feedback that is both direct and developmental — without outsourcing the relationship part to a language model.

## Step 1: Organize Observation Notes

**What you do:** Gather your raw observation notes from the session or sessions you are reviewing. Include timestamps, direct quotes from the clinician, specific clinical behaviors you observed, and any patterns across sessions. Also pull in any supervisee self-reflections they have shared. De-identify all client information before any of this reaches the model.

**Prompt:**

```
I am a clinical supervisor in speech-language pathology preparing feedback for a supervisee (CF or graduate student clinician). Here are my raw observation notes from recent sessions (all client information removed). Organize these into categories: (1) clinical skill areas (assessment, treatment implementation, data collection, clinical writing), (2) interpersonal skills (rapport with clients, communication with families, collaboration with team members), (3) professional behaviors (time management, preparation, self-reflection, documentation timeliness), and (4) clinical reasoning (in-session decision-making, adjusting to client responses, knowing when to scaffold vs. when to wait). Under each category, list the specific behaviors I observed with any direct quotes or examples I noted. Do not evaluate or rate them — just organize.
```

**Decision point:** Does the organized list reflect what you actually saw, or did the model over-sort a nuanced observation into a neat box? A clinician who "moved to a new activity when the client became frustrated" could be filed under flexibility or avoidance — and that distinction matters enormously. If you wrote it down because it concerned you, do not let the model reframe it as a strength. Your notes had a reason for the phrasing they used.

## Step 2: Draft Strengths-and-Growth Feedback

**What you do:** Use the organized observations to draft feedback that names specific strengths before addressing growth areas. Be concrete in both directions — vague praise is as unhelpful as vague criticism.

**Prompt:**

```
Using the organized observations above, draft structured feedback with two sections: Strengths and Growth Areas. For each strength, cite a specific observed behavior and explain why it matters clinically — not "great rapport" but what the clinician specifically did that built rapport. For each growth area, describe: what was observed, why it matters for client outcomes, and a concrete next step the clinician can take in their next session. Use direct but respectful professional language appropriate for a developing clinician. Do not soften growth areas to the point of vagueness, and do not inflate strengths beyond what the observations support.
```

**Decision point:** Read the growth areas carefully and ask yourself two questions. First: is this specific enough that the clinician will know exactly what to do differently? "Work on your questioning strategies" is useless. "When you asked three yes/no questions in a row, try replacing the second and third with open-ended probes" is actionable. Second: is this deliverable in a real conversation? If it reads like a performance improvement plan when the person is a second-semester student still finding their footing, adjust the framing. You know where this clinician is emotionally. The model does not.

## Step 3: Prepare Professional Development Plan

**What you do:** Translate the feedback into a forward-looking development plan with concrete targets, timelines, and support structures. This is what the supervisee takes away and works on between now and your next formal review.

**Prompt:**

```
Based on the feedback above, draft a short professional development plan with 2-3 priority goals for the next supervision period. For each goal, include: (1) the specific skill or behavior to develop, (2) one concrete action step the clinician can take independently (e.g., self-video review of a session, practicing a specific technique with a peer, reading a targeted article), (3) how I as supervisor will support them (modeling, co-treatment, live coaching, resource sharing), and (4) what observable change would indicate progress. Keep it realistic for a [CF / graduate student — specify which] who also has a full clinical and academic schedule. Do not include more than 3 goals — focus matters more than comprehensiveness.
```

**Decision point:** Is this plan achievable? A graduate student in their first clinical placement and a CF nine months into their fellowship year need fundamentally different things. The model does not know where this clinician is emotionally — whether they are confident and ready for a push, or overwhelmed and needing scaffolding before stretch goals. Match the plan to the person, not just the skill gaps. And check: does this plan reflect what the supervisee identified as their own priorities? Supervision works best when it is collaborative, not top-down.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized scattered observation notes by category | Made the clinical observations in real time |
| Drafted strengths with cited behavioral examples | Validated that strengths are genuine, not inflated |
| Framed growth areas with concrete next steps | Ensured feedback is honest, specific, and deliverable |
| Created a development plan with measurable targets | Matched the plan to the clinician's readiness and needs |
| Maintained professional, balanced tone throughout | Brought the relationship context no model can see |

## Pair With

- [Evaluation Report Writing Workflow](/workflows/eval-report-writing/) — similar structure of organizing observations into professional documents
- [Clinical Reasoning tasks](/tasks/clinical-reasoning/) — for supervisees developing diagnostic thinking
- [Antipattern: Hallucinated Test Scores](/antipatterns/hallucinated-test-scores/) — relevant when supervisees use LLMs in their own clinical work
