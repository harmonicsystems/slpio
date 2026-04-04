---
title: "The Scope Creep"
description: "When the LLM generates recommendations outside the SLP's scope of practice, including medication suggestions, educational placements, or medical diagnoses."
category: ethical
severity: major
settings: [school, medical, snf-rehab, private-practice]
order: 8
---

This antipattern is dangerous because it sounds helpful. The model generates a thorough, confident recommendation section, and buried in it is a suggestion that no SLP should be making in a clinical document.

## The Bad Example

You prompt: "Write recommendations for a 4-year-old evaluation report. The child has significant language delays, attention difficulties, limited eye contact, and repetitive play behaviors."

The LLM returns:

> "Recommendations: (1) Speech-language therapy 2x/week targeting receptive and expressive language skills. (2) The communication profile and behavioral observations are consistent with Autism Spectrum Disorder; a formal diagnostic evaluation by a developmental pediatrician is strongly recommended. (3) The child's attention difficulties may benefit from a trial of low-dose stimulant medication, which should be discussed with the child's pediatrician. (4) Placement in a self-contained special education classroom with a low student-to-teacher ratio is recommended to support communication and behavioral needs. (5) Occupational therapy evaluation is recommended to address potential sensory processing concerns."

Recommendation 1 is appropriate. Recommendation 2 implies a diagnosis. Recommendation 3 suggests medication. Recommendation 4 makes a placement decision. Recommendation 5 may be acceptable as a referral, depending on your setting. Three out of five recommendations are outside the SLP's scope, and any of them in a signed report could create serious professional liability.

## Why LLMs Produce This

The model does not understand professional scope of practice. It has been trained on text from physicians, psychologists, educators, OTs, and SLPs without any boundary between them. When it generates "recommendations," it draws from all of those professions simultaneously. A thorough recommendation section, to the model, means covering all possible angles, regardless of who is qualified to make each recommendation.

## The Fix

Add explicit scope constraints to any prompt that generates recommendations or diagnostic impressions:

```
Generate recommendations within the SLP scope of practice ONLY. Do not:
- Diagnose or suggest diagnoses for conditions outside speech-language pathology
- Recommend medications or medication changes
- Make educational placement recommendations
- Recommend specific therapies outside SLP scope (OT, PT, behavioral)
  unless framed as "referral for evaluation by [qualified professional]"

Frame any cross-disciplinary concerns as: "Referral to [specific professional]
for evaluation of [observed behavior] is recommended."
```

## The Fixed Version

> "Recommendations: (1) Speech-language therapy 2x/week targeting receptive and expressive language goals. (2) Referral to a developmental pediatrician for comprehensive evaluation of observed behavioral and social communication patterns, including limited eye contact and repetitive play behaviors. (3) Referral to the child's pediatrician to discuss attention-related concerns observed during the evaluation. (4) The IEP team should consider the level of support needed to address communication demands across school settings. (5) Referral for occupational therapy evaluation to assess potential sensory processing concerns noted during the speech-language evaluation."

The clinical observations are still documented. Every concern is still raised. But each recommendation is either within scope or framed as a referral to the appropriate professional.

## The Takeaway

> An LLM will cross every professional boundary you do not draw. If your prompt does not define scope, the output will not respect it. You are the clinician who signs the report. Make sure every recommendation in it is one you are qualified to make.

## Pair With

- [Antipattern: Hallucinated Test Scores](/antipatterns/hallucinated-test-scores/) – another case where the model adds authoritative-sounding content you did not provide
- [Clinical reasoning tasks](/tasks/clinical-reasoning/) – structuring eval prompts with scope guardrails
- [Medical setting guide](/settings/medical-acute/) – scope of practice considerations in healthcare settings
