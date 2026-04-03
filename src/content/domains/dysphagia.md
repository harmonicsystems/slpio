---
title: Dysphagia
description: Swallowing assessment, treatment documentation, and the critical limits of LLM use in dysphagia management.
icon: ph-duotone ph-drop
order: 7
---

Dysphagia management carries the highest clinical stakes in SLP practice. Errors in documentation can lead to unsafe diet recommendations, aspiration events, or inadequate follow-up. LLMs can help with documentation structure — **never with clinical decision-making**.

## LLM Strengths in This Domain

- Structuring bedside and instrumental evaluation reports
- Organizing clinical observations into standard report format
- Drafting patient/family education about diet modifications and swallowing precautions
- Structuring prior authorization for instrumental evaluations
- Summarizing treatment course for discharge documentation
- Organizing compensatory strategy trial outcomes into chart-ready format

## LLM Limitations — Critical

These are not just limitations — they are **hard boundaries**:

- **Cannot interpret MBSS or FEES findings**
- **Cannot recommend diet levels or consistencies**
- **Cannot assess aspiration risk**
- **Cannot determine Penetration-Aspiration Scale ratings**
- **Cannot evaluate compensatory strategy effectiveness**
- **Should never generate swallowing safety recommendations**
- Cannot understand the relationship between pharyngeal physiology and diet decisions
- Cannot account for patient alertness, positioning, or cognitive factors in swallowing safety

> The model structures your observations. You make the clinical decisions. In dysphagia, this line is not negotiable.

## Prompt Templates

### Bedside Swallow Evaluation Note

```
I am a medical SLP. Here are my raw observations from a bedside swallowing evaluation (no patient identifiers). Organize into: reason for referral, patient alertness and orientation, oral mechanism findings, trial consistencies and volumes, observations per consistency (including any overt signs of aspiration), compensatory strategies trialed and their effects, current diet status, and recommendations. Do not add observations I did not make. Do not recommend specific diet levels — I will determine those.
```

### Instrumental Report Organizer (MBSS/FEES)

```
I am a medical SLP. Here are my raw observations from an instrumental swallowing evaluation (no patient identifiers). Organize into: referral reason, oral phase findings, pharyngeal phase findings, Penetration-Aspiration Scale ratings per consistency (only the ratings I provide), compensatory strategy trials and their effects, and clinical recommendations. Do not add findings I did not observe. Do not recommend diet levels — I will determine those.
```

### Patient/Family Diet Education Handout

```
I need to create a patient education handout about IDDSI Level 5 (minced and moist) diet for a patient's family. Include: what this diet level means in practical terms, examples of foods that ARE and ARE NOT appropriate, preparation tips, safety precautions during meals (upright positioning, small bites, no rushing), and when to contact the SLP or nurse. Use plain language — this is for family members, not clinicians. Do not include clinical rationale for the diet level.
```

### Dysphagia Discharge Summary

```
I am an SLP preparing a discharge summary for a patient with dysphagia (no identifiers). Here are my notes: admission swallowing status, diet level changes throughout stay, treatment approaches used, current swallowing status at discharge, current diet level, and follow-up recommendations. Organize into a clear narrative format appropriate for the medical record. Do not add clinical details I did not provide.
```

## Goal Progressions

### Weak → Strong: Diet Advancement

**Before:** "Patient will improve swallowing function."

*Improve how? From what baseline? What diet level? This goal cannot justify services.*

**After:** "Patient will tolerate IDDSI Level 6 (soft & bite-sized) solids with minimal cueing for safe swallowing strategies (chin tuck, controlled bolus size) with no overt signs of aspiration across 3 consecutive meal observations."

### Weak → Strong: Compensatory Strategy Use

**Before:** "Patient will use swallowing strategies during meals."

*Which strategies? With what level of independence? How measured?*

**After:** "Patient will independently implement chin tuck and small sip size during thin liquid intake with no more than 1 verbal reminder per meal across 5 consecutive meal observations."

### Weak → Strong: Oral Care Compliance

**Before:** "Patient will improve oral hygiene."

*Not specific. Not the SLP's sole responsibility. How is this measured?*

**After:** "Patient will complete oral care protocol (tongue sweeps, cheek sweeps, tooth brushing) independently or with setup assistance before and after meals in 90% of opportunities across 1 week as documented by nursing and SLP."

## Before & After: Clinical Documentation

### Raw Notes (Bedside Eval)
> bedside eval today, pt alert and oriented, did trials of thin liquids and puree, coughing on thin liquids especially large bolus, no cough on puree, voice wet after thin sips cleared with cough, chin tuck helped some, recommend instrumental, family wants to know about diet changes, currently NPO pending eval

### Structured Output
- **Cognition/Alertness:** Alert and oriented at time of evaluation
- **Thin Liquids:** Coughing observed, particularly with large bolus volumes. Wet vocal quality post-swallow, cleared with volitional cough.
- **Puree:** No overt signs of aspiration. Tolerated without coughing.
- **Compensatory Strategy:** Chin tuck trialed with thin liquids — partial reduction in cough response.
- **Current Status:** NPO pending instrumental evaluation.
- **Recommendation:** Instrumental assessment (MBSS/FEES) to evaluate pharyngeal physiology and guide diet recommendations.
- **Follow-up:** Family education requested regarding diet modification process.

> **What the AI did:** Organized, structured, and surfaced clinical observations into readable format. **What it didn't do:** Recommend a diet level, interpret aspiration risk, or add findings that weren't in the original notes. Those decisions stay with you.

## IDDSI Reference

When writing about diet levels, use the IDDSI framework consistently <cite data-ref="iddsi"></cite>. The model can help structure your documentation around these levels, but the determination of which level is appropriate is always yours:

- **Level 0:** Thin liquids
- **Level 1:** Slightly thick
- **Level 2:** Mildly thick
- **Level 3:** Moderately thick / Liquidized
- **Level 4:** Pureed
- **Level 5:** Minced & moist
- **Level 6:** Soft & bite-sized
- **Level 7:** Regular / Easy to chew

## Related Pages

- [Documentation](/tasks/documentation/) — Report templates including instrumental reports
- [Compliance](/tasks/compliance/) — Prior authorization for instrumental evals
- [Medical & Acute Care](/settings/medical-acute/) — Hospital documentation context
- [SNF & Rehab](/settings/snf-rehab/) — Functional outcomes and discharge planning
