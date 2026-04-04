---
title: "Motivational Interviewing Style Pattern"
description: "How to prompt LLMs for documentation and communication that centers client autonomy, stated priorities, and collaborative goal-setting."
clinicalOrientation: "Motivational interviewing / client-centered"
contrasts: "Directive, compliance-focused approaches"
settings: [medical, snf-rehab, private-practice]
populations: [adult, geriatric]
order: 6
---

Adult clients in medical and rehab settings often have complicated relationships with therapy. They may not have chosen to be there. They may disagree with your recommendations. Default LLM output tends toward directive, compliance-focused language ("patient was educated on the importance of..." and "patient should adhere to...") which undermines the therapeutic alliance you're trying to build. Motivational interviewing principles belong in your documentation, not just your sessions.

## The Core Pattern

```
Use person-first, autonomy-respecting language. Frame recommendations as options rather than directives. Document the client's stated priorities and how treatment aligns with their goals.
```

This shifts the model from writing about what you told the patient to writing about what the patient wants and how you're supporting that.

## How This Changes Output

### Without the pattern:

> "Patient was educated on the importance of daily swallowing exercises. Patient was non-compliant with home program last week. Patient was advised that failure to follow through with exercises could result in continued dysphagia and aspiration risk. Will continue to encourage compliance."

### With the pattern:

> "Patient reports his primary goal is returning to eating meals with his family at the dinner table. He noted that the exercise program feels overwhelming alongside his other medical appointments. Discussed options for simplifying the home program to 2 key exercises that most directly support his goal of safe oral intake during family meals. Patient selected the Mendelsohn maneuver and effortful swallow as his preferred exercises. He expressed confidence in completing these twice daily. Plan adjusted to align with patient's stated priorities and current capacity."

The second version documents the same clinical reality (a patient not doing his exercises) but frames it in a way that preserves dignity, captures clinical reasoning, and is more likely to produce actual behavior change.

## Prompt Modifiers for Motivational Interviewing Style

- **"Document the client's stated goals in their own words"** – centers the person, not the clinician's agenda
- **"Frame recommendations as choices, not instructions"** – respects autonomy
- **"Replace 'non-compliant' with a description of barriers"** – removes judgment, adds clinical utility
- **"Include the client's confidence or readiness level"** — captures where they are in the change process
- **"Describe how the treatment plan connects to what the client values"** — makes the rationale transparent
- **"Use 'declined' rather than 'refused' for client decisions"** — small language shift, large respect difference

## When to Use

- Adult and geriatric rehab documentation where adherence is a factor
- Discharge planning notes that require patient buy-in
- Counseling-adjacent sessions for voice, fluency, or cognitive-communication
- Any context where the client's motivation and autonomy are clinically relevant

## When This Pattern Doesn't Fit

In acute care with patients who cannot participate in shared decision-making — reduced consciousness, severe cognitive impairment, emergent medical situations — directive documentation is appropriate. You document what was done and why. Motivational framing assumes a client who can engage in the conversation.

## Pair With

- [Medical Model Precision Pattern](/patterns/medical-model-precision/) — you can be both precise and person-centered in the same note
- [SNF-Rehab setting](/settings/snf-rehab/) — where patient motivation directly affects functional outcomes and discharge planning
- [Private Practice setting](/settings/private-practice/) — where the therapeutic relationship is the foundation
