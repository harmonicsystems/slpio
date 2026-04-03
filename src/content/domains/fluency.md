---
title: Fluency
description: Stuttering, cluttering, and LLM use for documentation and goal writing in fluency therapy.
icon: ph-duotone ph-metronome
order: 3
---

Fluency therapy involves complex clinical reasoning around attitudes, behaviors, and functional communication. LLMs can help with documentation structure, but the nuance of fluency intervention requires deep clinician involvement.

## LLM Strengths in This Domain

- Structuring session notes that capture both behavioral data and attitudinal observations
- Brainstorming goal wording that addresses communication attitudes, not just frequency counts
- Drafting parent/teacher education materials about stuttering
- Organizing information about cluttering vs. stuttering presentations
- Creating self-advocacy scripts and practice scenarios
- Structuring desensitization hierarchy plans

## LLM Limitations

- Cannot assess stuttering severity or analyze disfluency types
- May default to outdated fluency-shaping approaches
- May not distinguish between stuttering modification and fluency-shaping philosophies
- Cannot capture the emotional and social dimensions that drive treatment decisions
- May generate goals that pathologize stuttering rather than supporting communicative confidence
- Cannot understand covert stuttering or avoidance behaviors from a description alone

## Prompt Templates

### Fluency Session Note Organizer

```
I am an SLP specializing in fluency. Here are my raw session notes (no identifying info). Organize into: targets addressed (behavioral and/or attitudinal), activities used, observed disfluency types and frequency (if collected), student's self-report or affect, and plan for next session. Do not add observations I did not include. Maintain the student's own language when I've quoted them.
```

### Parent/Teacher Education Draft

```
I need to write a brief handout for a classroom teacher about how to support a student who stutters. Cover: what stuttering is (briefly), what NOT to do (don't finish sentences, don't say "slow down"), what TO do (maintain eye contact, give wait time, respond to content not form), and when to contact the SLP. Keep it under 300 words, warm and practical. Do not use clinical jargon.
```

### Desensitization Activity Ideas

```
I am an SLP working on stuttering desensitization with a 10-year-old. The student is currently comfortable with voluntary stuttering in the therapy room but avoids it in the classroom. Suggest a graduated hierarchy of 6-8 desensitization activities that bridge from therapy room to classroom, from low-risk to higher-risk situations. Keep activities practical and school-appropriate.
```

## Goal Progressions

### Weak → Strong: Fluency Rate Goal

**Before:** "Student will increase fluency to 90% in conversation."

*Frames stuttering as the problem. Doesn't account for severity, type, or context. Sets an arbitrary fluency percentage.*

**After:** "During structured conversation tasks, [Student] will use self-selected fluency management strategies (easy onset, pull-outs) to manage moments of stuttering with 70% self-correction rate across 3 consecutive sessions as measured by SLP observation."

### Weak → Strong: Self-Advocacy Goal

**Before:** "Student will tell others about their stuttering."

*No context, no criteria, no measurement. "Tell others" is too vague.*

**After:** "Given a structured opportunity (e.g., sharing with a trusted peer or teacher), [Student] will use a prepared self-advocacy statement about stuttering in 3 out of 4 opportunities across 2 consecutive sessions as measured by SLP observation and student self-report."

### Weak → Strong: Attitudinal Goal

**Before:** "Student will have a better attitude about speaking."

*Not observable. Not measurable. Not appropriate for an IEP.*

**After:** "[Student] will self-rate communication confidence using a 5-point visual scale before and after speaking tasks, demonstrating an average increase of 1+ point across 4 consecutive data collection sessions."

## Key Considerations

### Neurodiversity-Affirming Practice

- Goals should support **communicative confidence**, not eliminate stuttering
- Avoid goals that frame stuttering as failure
- Include the student's own perspective in goal-setting when appropriate
- Document attitudinal shifts alongside behavioral changes
- Consider whether the student wants to work on fluency modification, communication confidence, or both

### Cluttering

LLMs are even less reliable for cluttering-related content. If your student presents with cluttering, be extra cautious:

- The model may conflate stuttering and cluttering
- Rate control and self-monitoring goals are structured differently than stuttering goals
- Always specify "cluttering" in your prompts to avoid generic fluency advice

## Before & After: Session Documentation

### Raw Notes
> worked on pull-outs today, he's getting better at catching blocks before they get tense, did reading passages and conversation, about 60% self-correction rate during reading, less during conversation maybe 40%, he said he felt "okay" about it but noticed he still avoids some words in class, we talked about that

### Structured Output
- **Targets:** Pull-out technique (stuttering modification); self-monitoring of blocks
- **Activities:** Oral reading passages; structured conversation
- **Behavioral Data:**
  - Reading: ~60% self-correction of blocks using pull-outs
  - Conversation: ~40% self-correction of blocks using pull-outs
- **Student Self-Report:** Described feeling "okay" about therapy performance. Reported continued word avoidance in classroom settings.
- **Clinical Note:** Self-correction rate is higher during structured reading than spontaneous conversation, consistent with the increased cognitive demand of conversation. Word avoidance in classroom suggests desensitization work is an appropriate next focus.
- **Plan:** Continue pull-out practice in conversation. Begin classroom-based desensitization hierarchy. Discuss avoidance patterns with student to identify specific triggers.

## Related Pages

- [Writing Goals](/tasks/writing-goals/) — Goal clarity toolkit
- [Documentation](/tasks/documentation/) — Session note templates
- [Schools & Early Intervention](/settings/schools/) — IEP context
- [Pragmatics & Social Communication](/domains/pragmatics-social/) — Overlapping social concerns
