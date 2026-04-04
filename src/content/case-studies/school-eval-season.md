---
title: "Evaluation Season: Drafting Present Levels for Eight New Referrals"
description: "A school-based SLP uses an LLM to organize evaluation data and draft present levels during a high-volume referral period, cutting report writing time by 40%."
setting: school
population: pediatric
domains: [language, articulation]
clinician: "School-based SLP, 8 years experience, suburban elementary district"
scenario: "An SLP managing 65 students receives 8 new referrals within a 3-week evaluation window and uses AI to draft present-level statements from structured assessment data."
aiRole: "Organizing raw evaluation data into structured present-level drafts for IEP documentation"
outcome: "Report writing time reduced by approximately 40% while maintaining individualized clinical quality across all eight evaluations"
order: 1
---

## Clinical Context

A school-based speech-language pathologist in a suburban K-5 elementary school carried a caseload of 65 students receiving services across language and articulation domains. In early October, the district's child study teams referred eight students for initial evaluations within a three-week window, a volume that coincided with annual IEP reviews for twelve existing students.

The referrals included five students suspected of language disorders (ages 5-9), two students with articulation concerns, and one student presenting with both. Assessments administered included the CELF-5, GFTA-3, TOLD-P:5, language samples, classroom observations, and teacher/parent questionnaires. Each evaluation required a comprehensive written report with present levels of performance, interpretation of standardized scores, and recommendations.

The clinician had historically spent 90-120 minutes drafting each evaluation report. At that rate, the eight new reports alone would consume 12-16 hours of non-clinical time, time she did not have given her existing documentation load.

## The Challenge

The bottleneck was not the evaluation itself but the report writing. Synthesizing data from multiple assessments into coherent present-level statements required toggling between score sheets, observation notes, and language sample analyses. Each report followed a similar structure, but every child's profile was unique. Copy-and-paste from prior reports risked introducing errors and losing the individualized narrative that IEP teams rely on.

The clinician needed a way to produce well-structured first drafts without sacrificing the clinical specificity that distinguished a useful report from a formulaic one. She had tried using report templates with pre-written boilerplate in prior years, but found they introduced a different problem: reports began to sound alike, and team members noticed. The goal was not a shortcut but a structuring tool that preserved her clinical voice while reducing the blank-page problem.

Additionally, her district had recently adopted a new IEP platform that required present-level statements to include explicit functional impact language tied to grade-level curriculum standards, adding another layer of documentation specificity to each report. The combination of volume, timeline, and new formatting requirements created a documentation challenge that her existing workflow could not absorb.

## AI-Assisted Approach

The clinician developed a three-step workflow using a general-purpose LLM.

**Step 1: Data entry.** For each student, she entered standardized scores, subtest breakdowns, percentile ranks, and qualitative observations into a structured prompt. She used a consistent format: student initials, age, grade, assessment names, scores, and 3-5 bullet points of clinical observations.

**Step 2: Prompt.** She used the following prompt structure: "You are assisting a school-based SLP with report writing. Given the following evaluation data, draft a present-level-of-performance section. Include interpretation of standard scores, description of observed strengths and weaknesses, and functional impact in the classroom. Do not make eligibility recommendations. Use professional clinical language."

**Step 3: Iterative refinement.** After receiving the initial draft, she used follow-up prompts to adjust tone, expand specific sections, or reorganize paragraphs. She found that asking the model to "expand the functional impact section with specific classroom examples" or "clarify the relationship between the receptive and expressive scores" yielded targeted improvements without regenerating the entire draft.

She avoided including any identifying information in her prompts, using initials and generic descriptors rather than names or school identifiers.

## What the AI Produced

> J.M. is a 7-year-old male in second grade who was evaluated using the CELF-5 and a classroom language sample. On the CELF-5, J.M. earned a Core Language Score of 78 (7th percentile), indicating language skills in the below-average range. Subtest analysis revealed relative strengths in Word Structure (SS 9) and relative weaknesses in Recalling Sentences (SS 5) and Formulated Sentences (SS 6). These scores suggest difficulty with auditory memory for linguistic material and formulation of syntactically complete sentences.

> During a 15-minute classroom observation, J.M. participated in a small-group reading activity. He required frequent repetitions of teacher instructions and produced utterances that were shorter and less complex than those of his peers. His mean length of utterance from the language sample was 4.2 morphemes, which is below age expectations.

## Clinical Review & Modifications

The clinician found the AI drafts structurally sound but clinically generic. Across all eight reports, she identified a consistent pattern: the drafts accurately reported scores and used appropriate interpretive language, but they lacked the specific behavioral observations that anchor a report in the individual child.

For J.M., the clinician added: his tendency to look at peers before following group instructions (suggesting he relied on visual cues to compensate for auditory comprehension weaknesses), his specific error patterns on Formulated Sentences (omission of conjunctions and subordinate clauses), and his teacher's report that he avoided raising his hand during whole-class discussion. She also revised the functional impact statement to reference specific curriculum demands in his second-grade classroom.

Across all eight reports, modifications fell into three categories: (1) adding specific behavioral observations from her clinical notes, (2) connecting test scores to classroom demands unique to each student's grade and teacher, and (3) removing or rewording phrases where the AI had subtly implied eligibility conclusions despite the prompt instruction.

## Outcome

The clinician completed all eight evaluation reports within the three-week window, spending an average of 55 minutes per report compared to her historical average of 105 minutes. She estimated the AI drafts saved approximately 40% of her writing time. All reports were reviewed and accepted by the child study team without requests for revision. Two team members commented that the reports were among the most clearly organized they had received.

The clinician also completed her twelve annual IEP reviews on schedule, a task that would have been significantly delayed without the time recovered from the evaluation reports. She noted that the cumulative effect was not just faster documentation but reduced stress during a period that had historically been the most demanding of her professional year.

No parent or team member raised concerns about report quality. In one case, a parent commented during the IEP meeting that the report helped her understand her child's language profile for the first time, citing the clear connection between test scores and classroom behavior.

## Reflection

The clinician noted that the AI was most useful as an organizational tool: it excelled at converting raw data into a logical narrative structure. Its weakest area was individualization. Every first draft read like a competent report about a hypothetical child rather than the specific child she had evaluated. She learned to front-load her prompts with more observational detail, which improved the drafts but never eliminated the need for manual revision.

She also noted that the time savings were not evenly distributed. Reports involving straightforward articulation-only evaluations benefited most; complex language profiles with discrepant subtest scores required more substantial revision. For one student with a significant discrepancy between receptive and expressive language scores, the AI draft failed to address the clinical significance of the gap, and the clinician rewrote that section entirely.

If she were to repeat the process, she would build a library of her own observational phrases (specific descriptions of classroom behaviors, error patterns, and compensatory strategies) that she could insert into prompts alongside the quantitative data. The AI drafts improved markedly when given richer qualitative input, and systematizing that input would further reduce editing time.

She also reflected on the ethical dimension of efficiency. Faster report writing was valuable only if it translated into more time for direct services and clinical thinking, not simply more administrative throughput. She made a deliberate choice to reinvest the saved hours into extended classroom observations for two students whose profiles warranted additional data.

## Key Takeaways

- AI-generated report drafts can reduce documentation time significantly, but they require clinician review to add individualized observations and functional context.
- Prompts should explicitly instruct the model not to make eligibility determinations, and output should be checked for implicit eligibility language.
- The greatest efficiency gains come from cases with straightforward profiles; complex cases still demand substantial clinician revision.
- Structured data entry (consistent format across students) improves the consistency and quality of AI output.
- Time savings from AI-assisted drafting should be reinvested in clinical activities (extended observations, parent conferences, or direct services), not simply absorbed into administrative throughput.
