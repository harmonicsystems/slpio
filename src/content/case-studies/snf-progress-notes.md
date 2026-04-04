---
title: "Skilled Language: Batch-Writing SNF Progress Notes That Justify Continued Services"
description: "An SNF SLP develops a prompt template that produces weekly progress notes with the functional outcome measures and skilled-service justification required for Medicare reimbursement."
setting: snf-rehab
population: geriatric
domains: [cognitive-linguistic, dysphagia]
clinician: "SNF-based SLP, 11 years experience, 120-bed skilled nursing and rehabilitation facility"
scenario: "An SLP managing 28 patients uses AI to batch-write weekly progress notes, discovering that initial drafts lack the skilled-service framing and functional outcome language required by Medicare documentation standards."
aiRole: "Drafting weekly progress notes from structured treatment data with skilled-service justification"
outcome: "Clinician develops a reusable prompt template that produces notes meeting Medicare documentation standards, reducing weekly documentation time from 6 hours to under 4 hours"
order: 4
---

## Clinical Context

A speech-language pathologist at a 120-bed skilled nursing and rehabilitation facility carried a caseload of 28 patients across cognitive-linguistic and dysphagia domains. The caseload included post-stroke patients in short-term rehabilitation, residents with progressive dementia receiving maintenance therapy, and patients recovering from surgical procedures affecting swallowing. Each patient required weekly progress notes that documented treatment activities, patient response, functional progress, and justification for continued skilled services.

The clinician's weekly documentation cycle consumed approximately six hours, typically completed in the evenings and on weekends. Each note required not only a summary of what occurred in therapy but also a clear articulation of why the services required the skills of a licensed speech-language pathologist, a Medicare requirement that distinguished reimbursable skilled therapy from activities that could be performed by non-professional staff.

She began using an LLM to draft notes from her session data, entering treatment targets, patient performance data, cueing levels, and functional observations for each patient.

## The Challenge

The initial AI-generated notes were clinically accurate but documentarily insufficient. They read like session summaries rather than skilled-service justifications. A typical draft might state: "Patient participated in word-finding activities and was able to name 7 out of 10 items with moderate cueing." While factually correct, this language did not meet Medicare's documentation threshold. It failed to explain why the activity required a licensed SLP, how performance related to functional goals, or what clinical reasoning guided the session.

Medicare auditors and reviewers look for documentation that demonstrates medical necessity and skilled intervention. Notes lacking this language risk claim denials, recoupment, and, in pattern cases, suspension of billing privileges. The stakes were not academic.

## AI-Assisted Approach

The clinician spent two weeks iterating on her prompt before arriving at a reliable template.

**Step 1: Data format.** She created a standardized input format for each patient: diagnosis, therapy focus, specific activity, performance data (accuracy, cueing level, trials), comparison to prior session, functional relevance, and discharge goal.

**Step 2: First prompt attempt.** Her initial prompt ("Write a progress note for a patient in skilled nursing") produced the generic summaries described above.

**Step 3: Skilled-service prompt template.** After reviewing Medicare documentation guidelines, she revised the prompt: "Draft a weekly skilled therapy progress note for an SNF patient. For each treatment activity, explain (1) the specific skilled technique used and why it requires a licensed SLP, (2) the patient's measurable performance compared to prior session, (3) how performance relates to a functional goal, and (4) why continued skilled services are medically necessary. Use objective data. Do not use subjective language like 'patient enjoyed' or 'patient was pleasant.' Frame all interventions in terms of skilled clinical reasoning."

**Step 4: Batch processing.** She processed 5-7 patients per sitting, entering structured data and generating drafts sequentially, then reviewing all notes in a single editing pass.

## What the AI Produced

> **Cognitive-Linguistic Treatment – Skilled Progress Note**
>
> Patient continues to receive skilled speech-language pathology services targeting functional expressive language for basic needs communication. Today's session utilized a semantic feature analysis approach to address word retrieval deficits secondary to left CVA. This technique requires the clinical expertise of a licensed SLP to select appropriate semantic cues, grade task complexity based on real-time error analysis, and modify cueing hierarchies in response to patient performance.
>
> Patient named 8/10 target items related to daily care needs (e.g., medication names, personal care items) with phonemic cueing, compared to 6/10 with phonemic cueing in the prior session. Self-cueing strategies (first-sound retrieval) were emerging, with patient independently generating the initial phoneme for 3/10 items without clinician prompting. This represents progress toward the functional goal of independently communicating basic care needs to nursing staff with minimal cueing by discharge.
>
> Continued skilled services are indicated. The patient demonstrates incremental gains that require ongoing skilled modification of cueing hierarchies and generalization training to functional contexts. Discharge criteria have not yet been met.

## Clinical Review & Modifications

The skilled-service prompt template produced substantially better drafts than the initial attempts. However, the clinician identified recurring issues that required consistent modification.

First, the AI tended to overstate progress. Phrases like "demonstrates steady improvement" appeared even when data showed plateau or minimal change. The clinician replaced these with precise language: "Performance was unchanged from the prior session at 6/10 with moderate cueing" or "Accuracy decreased from 80% to 65%, attributed to increased fatigue during the afternoon session." Accurate representation of plateau was particularly important for patients on maintenance therapy, where justification centered on preventing decline rather than documenting gains.

Second, the AI's skilled-service justification, while structurally correct, sometimes sounded formulaic across patients. The clinician individualized these sections by adding patient-specific clinical reasoning; for example, noting that a particular patient's apraxia of speech required real-time articulatory placement cueing that could not be performed by a restorative nursing aide.

Third, she removed instances where the AI fabricated plausible-sounding functional context. In one draft, the model stated a patient "used the target vocabulary during a mealtime interaction," an event the clinician had not reported in her data. She flagged this as a hallucination risk and added a note to her template: "Only reference events and contexts I have included in the data. Do not infer or generate functional scenarios."

## Outcome

After implementing the revised template, the clinician reduced her weekly documentation time from approximately six hours to three hours and forty-five minutes. Over the following quarter, none of her progress notes were flagged during the facility's internal Medicare compliance audit, a first in her tenure. Her director of rehabilitation requested a copy of her prompt template to share with the occupational and physical therapy staff as a model for skilled-service documentation language.

The clinician also reported an unexpected benefit: the process of designing the prompt template required her to articulate Medicare's documentation logic more explicitly than she ever had. This exercise improved her own understanding of what auditors look for and made her more efficient even when writing notes manually on days when she chose not to use the AI tool.

## Reflection

The clinician observed that the core challenge was not generating text but generating the right kind of text. Generic clinical notes and Medicare-compliant progress notes are different documents with different rhetorical purposes, and the AI needed explicit instruction to produce the latter. She noted that the prompt template essentially encoded Medicare's documentation logic — what reviewers look for, how skilled service is defined, what triggers a denial — in a form the model could follow.

She cautioned that the time savings could create a false sense of security. A note that reads well is not necessarily a note that is accurate. She maintained a policy of never signing a note without verifying every data point against her session records, particularly after the hallucinated mealtime interaction incident.

She also reflected on the difference between short-term rehab patients showing measurable gains and long-term residents on maintenance therapy. For maintenance patients, the justification for skilled services centers on preventing decline rather than documenting progress, and the AI struggled with this framing unless explicitly instructed. She added a maintenance-specific variation to her prompt template that emphasized the clinical reasoning behind sustaining current function and the consequences of service withdrawal.

If she were to advise a colleague adopting this workflow, her primary recommendation would be to never skip the verification step, regardless of time pressure. A signed note with fabricated details is worse than a late note.

## Key Takeaways

- Medicare documentation requires specific skilled-service justification language that generic clinical prompts do not produce; the prompt must explicitly encode what auditors look for.
- AI-generated notes may overstate progress or fabricate plausible functional contexts; clinicians must verify all data points against session records before signing.
- Batch processing saves time, but a single editing pass at the end requires sustained attention to prevent approval of inaccurate details across multiple notes.
- A well-designed prompt template is a shareable clinical resource that can improve documentation consistency across an entire rehabilitation department.
