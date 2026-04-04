---
title: Documentation
description: Turn messy session notes into structured clinical documentation, with your judgment doing the real work.
icon: ph-duotone ph-note-pencil
order: 2
category: documentation
---

Documentation is where LLMs shine brightest as clinical tools — not writing for you, but organizing *with* you. The model structures; you verify.

## Progress Notes

### School-Based Example

**Raw session notes:**
> worked on /s/ blends today, still struggling with initial position, used minimal pairs, about 60% accuracy with verbal cues, seemed frustrated toward end of session, mom asked about home practice

**Structured output:**
- **Target:** /s/ blends, initial position
- **Activity:** Minimal pair contrasts
- **Performance:** 60% accuracy with verbal cueing
- **Clinical Note:** Student demonstrated frustration toward end of session, suggesting possible fatigue or task difficulty. Consider adjusting session pacing or task complexity.
- **Follow-up:** Mother inquired about home practice opportunities — send suggested activities.

### Medical Example

**Raw session notes:**
> bedside eval today, pt alert and oriented, did trials of thin liquids and puree, coughing on thin liquids especially large bolus, no cough on puree, voice wet after thin sips cleared with cough, chin tuck helped some, recommend instrumental, family wants to know about diet changes, currently NPO pending eval

**Structured output:**
- **Cognition/Alertness:** Alert and oriented at time of evaluation
- **Thin Liquids:** Coughing observed, particularly with large bolus volumes. Wet vocal quality post-swallow, cleared with volitional cough.
- **Puree:** No overt signs of aspiration. Tolerated without coughing.
- **Compensatory Strategy:** Chin tuck trialed with thin liquids — partial reduction in cough response.
- **Current Status:** NPO pending instrumental evaluation.
- **Recommendation:** Instrumental assessment (MBSS/FEES) to evaluate pharyngeal physiology and guide diet recommendations.
- **Follow-up:** Family education requested regarding diet modification process.

> **What the AI did:** Organized, structured, and surfaced clinical observations into readable format. **What it didn't do:** Recommend a diet level, interpret aspiration risk, or add findings that weren't in the original notes. Those decisions stay with you.

## Prompt Templates

### Progress Note Organizer

```
I am an SLP. Here are my raw session notes for a student (no identifying info included). Help me organize these into a structured progress note with: target skill, level of support, performance data, context, and clinical interpretation. Do not add details I did not provide.
```

### Discharge Summary Draft

```
I am an SLP preparing a discharge summary for a patient in [acute care / inpatient rehab / SNF] (no identifying info included). Here are my notes on: admission status, treatment targets, progress observed, and current functional status. Help me organize this into a structured discharge summary with: reason for referral, treatment provided, functional outcomes, current status, and follow-up recommendations. Do not add clinical details I did not provide.
```

### Instrumental Report Organizer

```
I am a medical SLP. Here are my raw observations from an instrumental swallowing evaluation (no patient identifiers included). Help me organize these into a structured report with: referral reason, oral phase findings, pharyngeal phase findings, Penetration-Aspiration Scale ratings per consistency, compensatory strategy trials and their effects, and clinical recommendations. Do not add findings I did not observe. Do not recommend diet levels — I will determine those.
```
