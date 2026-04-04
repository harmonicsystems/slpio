---
title: "From Vague Praise to Actionable Feedback: AI-Assisted Clinical Supervision"
description: "A clinical supervisor uses an LLM to draft specific, evidence-linked feedback for graduate student clinicians, moving beyond generic encouragement to targeted skill development."
setting: university
population: all
domains: [language, articulation]
clinician: "University clinical supervisor, CCC-SLP, 14 years clinical experience, 6 years supervising graduate students"
scenario: "A supervisor overseeing four graduate student clinicians uses AI to prepare structured mid-semester feedback from observation notes, discovering that initial drafts default to supportive but nonspecific language."
aiRole: "Drafting structured clinical feedback from observation data with specific behavioral examples and evidence-linked recommendations"
outcome: "Supervisor develops a prompt that yields feedback with concrete behavioral references and tied to clinical competency standards, reducing feedback preparation time while increasing specificity"
order: 5
---

## Clinical Context

A clinical supervisor at a university speech-language pathology program oversaw four second-year graduate students completing their on-campus clinical practicum. Each student carried a small caseload of 3-4 clients spanning pediatric language intervention, adult articulation therapy, and school-age fluency management. At mid-semester, the supervisor was required to provide each student with a written formative evaluation covering clinical skills, professional behavior, and areas for growth, aligned with the program's competency rubric based on ASHA's KASA standards.

The supervisor had accumulated extensive observation notes across approximately 40 supervised sessions — handwritten annotations on session plans, timestamped notes from live observations, and post-session debriefing summaries. Synthesizing these into four individualized feedback documents typically required an entire weekend of writing, roughly 2-3 hours per student.

She decided to use an LLM to help convert her raw observation notes into structured feedback drafts, hoping to reduce preparation time while maintaining the specificity her students needed to develop their clinical skills.

## The Challenge

The supervisor's first attempt yielded drafts that read like supportive but content-free performance reviews. Typical output included statements like "The student demonstrates a positive therapeutic manner and is developing her clinical skills appropriately" and "Continue to build confidence in your clinical decision-making." This language, while encouraging, gave students nothing actionable. It did not reference specific sessions, identify concrete behaviors to change, or connect feedback to evidence-based clinical principles.

Graduate students at the mid-semester point need to know precisely what they are doing well (so they can replicate it), what they need to change (with specific examples), and how to change it (with concrete strategies). Generic praise and vague directives accomplish none of these goals.

## AI-Assisted Approach

The supervisor revised her approach across three iterations.

**Step 1: Structured observation data.** She organized her notes for each student into a consistent format: date, client seen, session target, specific clinician behaviors observed (both effective and ineffective), student's response to in-session feedback, and relevant competency domain from the program rubric.

**Step 2: Specificity-focused prompt.** She replaced her initial prompt with: "You are helping a clinical supervisor write formative feedback for a graduate student clinician in speech-language pathology. Using the observation data below, draft feedback organized by competency area. For each area, provide (1) a specific behavioral example from the observation data showing a strength, (2) a specific behavioral example showing an area for growth, (3) a concrete strategy or technique the student can implement in the next session. Do not use vague language like 'continue to develop' or 'shows promise.' Every statement must reference a specific observed behavior with the date and client context."

**Step 3: Competency alignment.** She added the program's competency rubric categories to the prompt so the model could organize feedback under standardized headings: Assessment, Intervention Planning, Therapeutic Technique, Clinical Documentation, Professional Communication, and Cultural Responsiveness.

## What the AI Produced

> **Intervention Planning — Strengths**
>
> During the October 7 session with Client A (school-age language), the student selected a narrative retell activity that was well-matched to the client's current goal of producing complete episodes in story grammar. The activity materials were age-appropriate, and the student prepared a visual support (story map) that scaffolded the task effectively. The client's engagement was sustained throughout the 15-minute activity, and the student collected data on story grammar elements produced, demonstrating session-level planning that connected activity design to measurable goal targets.
>
> **Intervention Planning — Area for Growth**
>
> During the October 14 session with Client B (adult articulation), the student selected a word-list drill targeting /r/ in the initial position but did not adjust the task when the client achieved 90% accuracy within the first five minutes. The remaining session time was spent on a task that was no longer at an appropriate challenge level. In the post-session debrief, the student noted she had not prepared a higher-complexity activity as a contingency.
>
> **Intervention Planning — Recommended Strategy**
>
> For each session, prepare a primary activity and at least one step-up and one step-down variation. Before the session, identify a performance threshold (e.g., 80% accuracy over 10 trials) that will trigger a shift to the next complexity level. This approach ensures real-time responsiveness to client performance without requiring in-session improvisation.

## Clinical Review & Modifications

The structured prompt produced feedback that was markedly more useful than the initial attempt. The supervisor made modifications in three areas.

First, she adjusted tone. The AI drafts were precise but read as detached — appropriate for a journal article but not for a formative conversation with a developing clinician. She added language acknowledging growth trajectories: "This is a common challenge at this stage of clinical development" and "Your awareness of this pattern during our debrief suggests readiness to implement this strategy." The supervisory relationship depends on trust, and feedback must be honest without being discouraging.

Second, she corrected instances where the AI extrapolated beyond her notes. For one student, the model generated feedback about "inconsistent data collection" based on a single session note in which the supervisor had written "data sheet not completed during session." In context, the student had been managing a behavioral escalation and appropriately prioritized the client. The supervisor revised this to reflect the full picture and reframed it as a discussion point about balancing data collection with clinical responsiveness.

Third, she added her own clinical mentoring voice to the recommended strategies. The AI suggestions were technically sound but lacked the experiential knowledge that distinguishes supervision from instruction. For example, where the AI recommended "prepare a step-up activity," the supervisor added her own guidance: "I find it helpful to write the threshold criterion directly on the session plan so it functions as a visual reminder during the session. We can practice this together during our next planning meeting."

## Outcome

The supervisor completed all four formative evaluations in approximately five hours total, compared to her typical ten to twelve hours. Three of the four students responded in their self-reflections that the mid-semester feedback was the most specific and actionable they had received in their clinical training to date. One student specifically referenced the "step-up/step-down" strategy as immediately useful and reported implementing it in the following week's sessions.

The supervisor's program director reviewed the feedback documents as part of a routine quality check and noted the consistency of format and depth of behavioral specificity across all four students.

## Reflection

The supervisor observed that the AI was most valuable as a sorting and structuring tool — it took disorganized observation notes and arranged them into a logical framework aligned with competency categories. This organizational step was where most of her writing time had historically been spent. The clinical substance of the feedback, however, still came from her notes and from her professional judgment about what each student needed to hear and when.

She noted that the AI's tendency toward detached, evaluative language was a meaningful limitation in a supervisory context. Effective clinical supervision requires not just identifying what happened but framing it in a way that supports the student's development. That framing is inherently relational and cannot be fully delegated.

She planned to continue using the approach for end-of-semester summative evaluations, with the added step of asking each student to self-evaluate first, which she would include in the prompt as additional context.

## Key Takeaways

- AI drafts of supervisory feedback default to generic, supportive language unless the prompt explicitly demands specific behavioral examples with dates and context.
- Structured observation notes are the prerequisite for useful AI output; the model cannot generate specificity from vague input.
- Clinical supervision requires relational tone calibration that AI cannot replicate; the supervisor must adjust feedback framing based on knowledge of each student's developmental trajectory and emotional readiness.
- AI is most efficient at the organizational layer of feedback preparation — sorting observations into competency categories — while the clinical mentoring layer remains a human function.
