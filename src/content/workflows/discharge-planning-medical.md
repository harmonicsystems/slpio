---
title: "Discharge Planning Documentation Workflow"
description: "A multi-step process for preparing discharge summaries, patient and family education materials, and referral letters in medical and skilled nursing settings."
settings: [medical, snf-rehab]
populations: [adult, geriatric]
stepCount: 4
estimatedTime: "30-45 minutes"
difficulty: advanced
order: 5
---

Discharge documentation carries weight beyond the chart. It determines what happens to the patient after they leave your care: whether they get outpatient services, whether the family understands the home diet recommendations, whether the next provider has enough information to pick up where you left off. This workflow sequences those documents so each step feeds the next, while keeping your clinical judgment at the center of every prognosis and level-of-care decision.

## Step 1: Compile Treatment Course and Outcomes

**What you do:** Gather your treatment logs, standardized assessment results (admission and discharge), functional outcome measures, and clinical observations across the episode of care. Include any relevant medical events that affected treatment (medication changes, surgical complications, changes in alertness or participation). De-identify all patient information.

**Prompt:**

```
I am an SLP in a [medical / SNF-rehab] setting preparing discharge documentation. Here is de-identified data from the full episode of care: admission assessment results, treatment targets and approaches used, progress data by session or week, and discharge assessment results. Organize this into: (1) a clinical summary listing each area addressed with the approach used and frequency, (2) a comparison of admission and discharge performance levels for each area, (3) functional status at discharge including diet level, communication status, and cognitive-linguistic function as applicable, and (4) any complicating factors I noted that affected the treatment course. Do not assign prognosis ratings or make discharge recommendations; I will do that.
```

**Decision point:** Does the organized summary accurately represent the trajectory of care? A patient who plateaued early and maintained is clinically different from one who made late gains. The model shows you endpoints; you know the arc. Check that the summary does not make a flat trajectory look like meaningful progress just because the admission and discharge numbers differ slightly.

## Step 2: Draft Discharge Summary and Recommendations

**What you do:** Write the formal discharge summary, including your prognosis and level-of-care recommendations. Start the prognosis yourself before involving the model. This is the most consequential clinical judgment in the workflow.

**Prompt:**

```
Using the clinical summary above, draft a discharge summary that includes: reason for referral, brief treatment course with frequency and duration, outcomes by area with specific data, current functional status, and discharge recommendations. Use these specific recommendations (I am providing them; do not generate your own): [insert your recommendations regarding outpatient therapy, home health, caregiver training, follow-up, diet level, or discontinuation of services]. Use professional medical documentation style appropriate for the medical record. Do not include prognosis language. I will write that section myself and add it.
```

**Decision point:** Prognosis is yours. The model cannot weigh the patient's motivation, family support system, medical complexity, cognitive status, or insurance reality. A patient with "good potential for further gains" on paper might have no access to outpatient services or a family that cannot manage the home program. A patient whose data looks flat might thrive with a different approach in a different setting. Write the prognosis yourself, every time. Then check that your recommendations are internally consistent: do not recommend outpatient therapy three times per week if you rated the prognosis as poor for further functional change.

## Step 3: Create Patient and Family Education Materials

**What you do:** Translate clinical recommendations into materials the patient and family can actually use at home. Think about who will be reading this at 10 PM when something goes wrong.

**Prompt:**

```
Based on the discharge recommendations above, create patient and family education materials that include: (1) a plain-language summary of current abilities and what to expect in the coming weeks, (2) specific home recommendations with step-by-step instructions (safe swallowing strategies, communication strategies, cognitive-linguistic exercises — only the areas that apply to this patient), (3) warning signs that should prompt a call to the physician, with clear language about what to do and who to call, and (4) follow-up information including scheduled appointments and referrals. Write at a 6th-grade reading level. Use short sentences and bullet points. Do not use clinical jargon — if a clinical term is necessary, define it in parentheses immediately after.
```

**Decision point:** Read the materials as if you are handing them to the family member who was least present during the hospital stay. Will they understand what to do Tuesday morning when the patient is home and no clinician is there to answer questions? Is the swallowing safety section clear enough that someone could follow it without a demonstration? If the family speaks a language other than English, these materials need to be translated or adapted — flag that for your team. Also verify that the reading level genuinely matches. A document full of bullet points can still be incomprehensible if each bullet contains complex instructions.

## Step 4: Draft Referral and Transition Letters

**What you do:** Prepare communication for the receiving provider or facility, focusing on what they need to know to continue care without starting over.

**Prompt:**

```
Draft a referral letter to [outpatient SLP / home health agency / receiving SNF — specify] that includes: current functional status in all relevant domains, treatment provided and the patient's response to each approach, outstanding goals with current performance levels, specific recommendations for continued treatment focus and approach, diet level and any precautions, and caregiver training completed and still needed. Use professional clinical language appropriate for an SLP audience. Include enough detail that the receiving clinician could begin the first session with a clear plan. Do not minimize remaining deficits or overstate progress.
```

**Decision point:** Is the referral letter honest about where the patient is? There is pressure, sometimes subtle, sometimes not, to paint a rosier picture at discharge than the data supports. The receiving clinician needs the truth. If the patient is at 60% accuracy on modified diet management with maximal cues, say that. If the family has been inconsistent with strategy use, note it. The next clinician's treatment plan depends on the accuracy of what you hand them.

## What the LLM Did vs. What You Did

| The LLM | You |
|---------|-----|
| Organized the full episode of care into a structured summary | Delivered the treatment and collected the data |
| Drafted the discharge summary in medical documentation style | Determined prognosis and level-of-care recommendations |
| Created plain-language patient and family education materials | Verified materials match the family's literacy, language, and reality |
| Drafted referral letter with clinical detail for the next provider | Ensured honest representation of status and remaining needs |
| Maintained consistent terminology and formatting | Made every judgment call about safety, access, and continuity |

## Pair With

- [Evaluation Report Writing Workflow](/workflows/eval-report-writing/) – similar documentation rigor in a different context
- [Medical setting guide](/settings/medical-acute/) – medical documentation standards and payer considerations
- [Antipattern: Hallucinated Test Scores](/antipatterns/hallucinated-test-scores/) – critical in medical documentation where errors carry patient safety risk
