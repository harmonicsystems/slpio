---
title: Cognitive-Linguistic
description: Attention, memory, executive function, and LLM use in cognitive rehabilitation documentation.
icon: ph-duotone ph-brain
order: 6
---

Cognitive-linguistic intervention spans attention, memory, executive function, problem-solving, and social cognition. These are complex, multi-dimensional targets that require careful goal writing, and LLMs are most helpful here for structuring documentation rather than generating clinical content.

## LLM Strengths in This Domain

- Organizing cognitive-linguistic assessment findings into structured narratives
- Brainstorming functional goals tied to daily living activities
- Structuring session notes that capture both task performance and functional implications
- Drafting patient/family education about cognitive-communication changes
- Organizing multi-session progress data into summary narratives
- Structuring discharge summaries for cognitive-linguistic rehab

## LLM Limitations

- Cannot interpret standardized cognitive assessments (MoCA, RBANS, CLQT)
- May generate goals that are task-specific rather than functionally meaningful
- Cannot account for the interaction between cognitive and linguistic demands
- May not understand the progression of cognitive recovery post-stroke or TBI
- Cannot distinguish between cognitive deficits and language deficits
- May not understand compensatory vs. restorative approaches

## Prompt Templates

### Cognitive-Linguistic Eval Summary

```
I am a medical SLP writing a cognitive-linguistic evaluation summary (no patient identifiers). Here are my raw findings from standardized and informal assessment including: orientation, attention, memory, executive function, and functional communication observations. Organize into sections by cognitive domain with: test/task name, performance description, and functional impact. Do not interpret standardized scores beyond what I've provided. Include a summary of functional implications for discharge planning.
```

### Functional Goal Brainstorm

```
I am an SLP writing cognitive-linguistic goals for a patient in inpatient rehab following left CVA (no patient identifiers). The patient demonstrates deficits in: auditory comprehension of multi-step directions, word retrieval, and sequencing of multi-step tasks. Brainstorm 3 functional goals tied to daily living activities (not abstract therapy tasks). Each goal must include: functional context, observable behavior, measurable criteria, and cueing level. Goals should reflect what the patient needs to do to function safely at home.
```

### Family Education Handout

```
I need to create a handout for a family member explaining cognitive-communication changes after stroke. Cover: what cognitive-communication means (not just speech), how attention, memory, and problem-solving affect communication, 5-6 practical strategies the family can use (give one direction at a time, reduce background noise, allow extra processing time, use written cues), and when to contact the SLP. Keep it under 400 words, warm, and non-clinical.
```

## Goal Progressions

### Weak → Strong: Memory

**Before:** "Patient will demonstrate improved memory for daily activities."

*Which type of memory? What activities? "Improved" from what baseline?*

**After:** "Patient will recall and follow a 3-step morning self-care routine using a written checklist, requiring no more than 1 verbal cue per step, across 3 consecutive sessions."

### Weak → Strong: Cognitive-Communication (from original site)

**Before:** "Patient will demonstrate improved cognitive-communication skills for daily living."

*Which cognitive-communication skills? What does "improved" look like? What daily activities? This reads like an AI-generated placeholder.*

**After:** "Given a structured multi-step activity (e.g., meal preparation sequence, medication management task), patient will complete 3-step written directions with no more than 1 verbal cue per step in 4 out of 5 trials across 2 consecutive sessions."

### Weak → Strong: Attention

**Before:** "Patient will attend to tasks for longer periods."

*Which tasks? What counts as attending? How long is the baseline?*

**After:** "Patient will sustain attention to a structured tabletop task (sorting, matching, sequencing) for 10+ consecutive minutes with no more than 2 redirections per session across 3 consecutive sessions."

## Before & After: Session Documentation

### Raw Notes
> worked on sequencing and following written directions today, did a recipe task - making a sandwich, she got the steps right when they were written but skipped step 3 when I gave them verbally, needed 2 cues to go back and check the written list, attention was good for about 15 min then faded, oriented x3 today, pleasant and cooperative

### Structured Output
- **Orientation:** Oriented x3 (person, place, time)
- **Target Areas:** Sequential task completion; written vs. verbal direction following
- **Activity:** Functional sequencing task (sandwich preparation) with written and verbal directions
- **Performance:**
  - Written directions: Completed all steps in correct order with 2 verbal cues to reference checklist
  - Verbal directions: Omitted step 3 of 5-step sequence; did not self-correct without written support
- **Attention:** Sustained attention to task for approximately 15 minutes before observable decline in engagement and accuracy
- **Behavioral Observations:** Pleasant, cooperative, engaged with task. Did not spontaneously use compensatory strategy (written checklist) without prompting.
- **Clinical Interpretation:** Stronger performance with written supports confirms benefit of external compensatory strategies. Verbal-only direction following remains impaired at 3+ step level. Goal: increase independent use of written checklists as compensatory strategy.
- **Plan:** Continue functional sequencing tasks with written support. Introduce self-prompting to reference checklist independently. Extend sustained attention target to 20 minutes.

## Related Pages

- [Writing Goals](/tasks/writing-goals/): Goal clarity with medical examples
- [Documentation](/tasks/documentation/): Discharge summaries, eval reports
- [Medical & Acute Care](/settings/medical-acute/): Hospital documentation context
- [SNF & Rehab](/settings/snf-rehab/): Functional outcomes and insurance justification
