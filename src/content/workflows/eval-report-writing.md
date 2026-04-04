---
title: "Evaluation Report Writing Workflow"
description: "A multi-step process for using an LLM to draft, structure, and refine a speech-language evaluation report while maintaining clinical integrity."
settings: [school, medical, private-practice]
populations: [pediatric, adult]
stepCount: 4
estimatedTime: "45-60 minutes"
difficulty: intermediate
order: 2
---

Evaluation reports carry clinical and legal weight. This workflow uses an LLM as a structural assistant, organizing your findings into a professional format, while keeping all clinical interpretation, diagnosis, and recommendations firmly in your hands.

## Step 1: Organize Test Results and Observations

**What you do:** De-identify all data. Compile standardized test scores, informal observations, case history highlights, and interview notes.

**Prompt:**

```
I am an SLP writing an evaluation report. Here are my test results and clinical observations (no identifying information). Organize these into sections: referral reason, relevant history, assessment procedures used, results by area (receptive language, expressive language, articulation/phonology, fluency, voice, pragmatics, only the areas I've included), clinical observations during testing, and a placeholder for my clinical impressions. Do not interpret scores or assign severity ratings. I will do that.
```

**Decision point:** Check that the model hasn't slipped in interpretive language. Phrases like "suggesting a deficit in..." or "indicative of..." are clinical judgments. They come from you.

## Step 2: Write Clinical Impressions

**What you do:** This step is mostly you. Write your clinical impressions, diagnostic statement, and severity ratings based on the organized data.

**Prompt (optional refinement):**

```
Here is my draft clinical impressions section. Review it for: internal consistency with the test data above, clarity of language, and completeness (does it address each area assessed?). Flag anything that seems inconsistent but do not rewrite my clinical judgments. Suggest where I might need to add supporting data for a conclusion I've drawn.
```

**Decision point:** The model is acting as a consistency checker here, not a co-author. If it flags something, investigate, but the clinical conclusions are yours.

## Step 3: Draft Recommendations

**What you do:** Write your treatment recommendations, then use the model to ensure they're complete and clear.

**Prompt:**

```
Here are my draft recommendations following a speech-language evaluation. Review for: specificity (are frequency, duration, and service delivery model included?), alignment with the findings above, and clarity for the intended audience (parents, teachers, or medical team). Do not add recommendations I haven't made. Suggest if any recommendation needs more specific language to be actionable.
```

**Decision point:** Are the recommendations truly individualized? A model will trend toward "standard" recommendations. Push back if your clinical judgment says this person needs something different.

## Step 4: Final Polish and Tone Check

**What you do:** Run the complete report through a final quality check.

**Prompt:**

```
Here is my complete evaluation report (de-identified). Review for: consistent use of terminology, professional but readable tone, any sections that are unclear or contradictory, and whether the report tells a coherent clinical narrative from referral through recommendations. Do not change my clinical conclusions. Flag any phrasing that sounds generic rather than individualized.
```

**Decision point:** Read the final report aloud. If any sentence could apply to any client with a similar profile, rewrite it to be specific to this person.

## Pair With

- [Documentation tasks](/tasks/documentation/) – broader documentation strategies
- [Clinical Reasoning tasks](/tasks/clinical-reasoning/) – for the interpretive steps
- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) – what to catch in the final review
