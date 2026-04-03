---
title: "Family-Centered Prompting"
description: "How to structure LLM interactions when your clinical philosophy prioritizes family involvement, coaching, and naturalistic contexts."
clinicalOrientation: "Family-centered / coaching model"
contrasts: "Clinician-directed, deficit-focused approaches"
settings: [early-intervention, private-practice, school]
populations: [pediatric]
order: 1
---

If your clinical philosophy centers family involvement — parent coaching, naturalistic intervention, routines-based support — your LLM prompts should reflect that. The model doesn't know your orientation unless you tell it.

## The Core Pattern

Every prompt should include a framing statement that establishes the philosophical lens:

```
I use a family-centered, coaching approach. My documentation should reflect parent involvement, naturalistic contexts, and functional outcomes in daily routines — not just table-top skill accuracy. Frame all suggestions through this lens.
```

This single sentence changes the character of every output that follows.

## How This Changes Output

### Without the pattern:

> "Child will produce /s/ in initial position of words with 80% accuracy in structured therapy tasks."

### With the pattern:

> "During daily routines identified by the family (mealtime, bath time, book reading), [Child] will produce /s/ in initial position of functional words (e.g., 'soap,' 'spoon,' 'stop') with 80% accuracy as reported by caregiver and confirmed by SLP observation across 3 consecutive home visits."

The second version is still measurable and defensible — but it lives in the child's real world, not the therapy room.

## Prompt Modifiers for Family-Centered Work

Add these phrases to any prompt to shift the output toward family-centered practice:

- **"Include a parent coaching component"** — ensures recommendations include what caregivers can do
- **"Frame goals in routines-based language"** — shifts from clinical tasks to daily life contexts
- **"Use strengths-based framing"** — starts with what the child and family are already doing well
- **"Include family-identified priorities"** — keeps the family's concerns central, not just clinical findings
- **"Describe strategies in plain language a caregiver can implement"** — prevents jargon-heavy recommendations

## When to Use

- Early intervention documentation where Part C requires family outcomes
- Parent-coaching session notes
- Home-based therapy programs
- Any context where the family is the primary intervention agent

## When This Pattern Doesn't Fit

If you're in a medical setting doing instrumental assessments, the family-centered framing may not suit the documentation requirements. Medical settings need clinical precision over naturalistic framing. Know your audience.

## Pair With

- [Parent-Friendly Summary prompt](/prompts/parent-friendly-summary/) — applies this philosophy to eval communication
- [Early Intervention setting](/settings/early-intervention/) — the regulatory context
- [Antipattern: The Clinic-Only Goal](/antipatterns/clinic-only-goal/) — what happens when you forget the context
