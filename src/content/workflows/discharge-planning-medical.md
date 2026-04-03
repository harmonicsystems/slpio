---
title: "Discharge Planning Workflow (Medical)"
description: "A multi-step process for preparing discharge documentation, patient and family education materials, and referral letters in medical and SNF settings."
settings: [medical, snf-rehab]
populations: [adult, geriatric]
stepCount: 4
estimatedTime: "30-45 minutes"
difficulty: advanced
order: 5
---

Discharge planning in medical settings involves multiple documents for multiple audiences — the clinical team, the receiving facility, the patient and family, and the referral network. Each needs different language, different detail levels, and different emphasis. This workflow sequences those documents so each step feeds the next, while keeping your clinical judgment at the center of every prognosis and recommendation.

## Step 1: Summarize the Clinical Course

**What you do:** Compile the patient's treatment history for this episode of care: initial evaluation findings, treatment targets, progress data, current functional status, and any relevant medical events that affected treatment. De-identify everything.

**Prompt:**

```
I am an SLP preparing discharge documentation for a [medical / SNF-rehab] patient. Here is the de-identified clinical course: initial evaluation findings, treatment goals, session-by-session progress data, and current functional status. Organize this into a clinical summary that includes: reason for referral, initial presentation, treatment provided (with frequency and duration), progress on each goal with specific data, current functional status in relevant domains (swallowing, cognition-communication, voice, language), and any complicating factors that affected treatment. Use medical documentation language. Do not assign a prognosis or make discharge recommendations — I will add those.
```

**Decision point:** Review the summary for accuracy, but also for what it leaves out. The model will organize what you gave it. It will not know that this patient's family was inconsistent with thickened liquid compliance, or that the patient's cognition declined after a medication change. Add the clinical context that shapes your discharge reasoning.

## Step 2: Write Prognosis and Recommendations

**What you do:** This step is primarily yours. Draft your prognosis statement, discharge recommendations, and level-of-care determination based on the clinical summary and your professional judgment.

**Prompt (optional refinement):**

```
Here is my draft prognosis and discharge recommendations. Review for: internal consistency with the clinical data above, clarity and specificity of each recommendation (including frequency, duration, and setting for continued services if applicable), and whether I have addressed diet level, communication strategies, and caregiver training. Flag any recommendation that seems unsupported by the data I provided, but do not change my clinical conclusions.
```

**Decision point:** Prognosis is the most consequential judgment in this workflow. The model cannot tell you whether this patient will improve with continued outpatient therapy or has reached a functional plateau. That call depends on clinical factors the model cannot weigh: the patient's motivation, family support, medical trajectory, and your experience with similar presentations. Write your prognosis first, then let the model check it for consistency — not the other way around.

## Step 3: Create Patient and Family Education Materials

**What you do:** Translate your clinical recommendations into materials the patient and family can actually use at home. Consider health literacy, language needs, and the specific home environment.

**Prompt:**

```
Based on the discharge recommendations above, create patient and family education materials that cover: current diet recommendations with specific examples of safe foods and foods to avoid (if applicable), communication strategies for daily routines, exercises or home practice activities with clear instructions, warning signs that should prompt a call to the physician, and follow-up appointments or referrals needed. Write at a 6th-grade reading level. Use short sentences and bullet points. Avoid medical jargon — if a technical term is necessary, define it in plain language.
```

**Decision point:** Read the materials as if you are handing them to the family member who was most overwhelmed during the hospital stay. Are the instructions realistic for someone managing medications, wound care, and emotional adjustment at the same time? Is the list of exercises short enough that they will actually do them? Remove anything that is aspirational rather than practical.

## Step 4: Draft Referral and Transition Letters

**What you do:** Prepare communication for the receiving SLP, physician, or facility that will take over care.

**Prompt:**

```
Using the clinical summary and discharge recommendations, draft a referral letter to [outpatient SLP / receiving facility / primary care physician]. Include: a concise clinical history, current functional status, specific treatment recommendations with rationale, diet level and any precautions, goals achieved and goals still in progress, and what the receiving provider should prioritize. Use professional medical correspondence format. Be specific enough that the receiving clinician can continue care without starting from scratch.
```

**Decision point:** Does the letter communicate what the next clinician actually needs to know? There is a difference between a comprehensive medical history and a useful clinical handoff. Prioritize the information that will change what the receiving provider does on day one: current diet level, functional communication status, the strategies that worked, and the approaches that did not.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized the clinical course into a structured summary | Delivered the treatment and collected the data |
| Checked recommendations for consistency and completeness | Made all prognosis and level-of-care decisions |
| Translated clinical language into patient-friendly materials | Ensured materials fit the real home environment |
| Drafted referral letters in professional format | Prioritized what the next clinician needs to know |
| Maintained consistent formatting across documents | Applied clinical judgment at every decision point |

## Pair With

- [Documentation tasks](/tasks/documentation/) — broader documentation strategies
- [Clinical Reasoning tasks](/tasks/clinical-reasoning/) — for the prognosis and recommendation steps
- [Medical setting guide](/settings/medical/) — medical documentation standards and context
