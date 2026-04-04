---
title: "Beyond Monolingual Norms: Organizing a Bilingual Assessment Without Pathologizing Difference"
description: "A school SLP assessing a bilingual Spanish-English child catches an LLM defaulting to English-only norms and pathologizing typical bilingual language features."
setting: school
population: pediatric
domains: [language]
clinician: "School-based SLP, 6 years experience, dual-language elementary program in a mid-size urban district"
scenario: "An SLP evaluating a bilingual Spanish-English second grader uses AI to organize assessment findings, but discovers the model interprets code-switching as a deficit and anchors all interpretive language to monolingual English norms."
aiRole: "Organizing multilingual assessment data into a structured evaluation summary"
outcome: "Clinician applies a bilingual-culturally-responsive prompting pattern to produce an evaluation that accurately distinguishes language difference from language disorder"
order: 3
---

## Clinical Context

A speech-language pathologist in a dual-language elementary school received a referral for a 7-year-old boy, D.R., whose second-grade teacher reported concerns about "limited vocabulary" and "mixing up languages in class." D.R. had been enrolled in the school's Spanish-English dual-language program since kindergarten. His home language was primarily Spanish, with English exposure increasing through school and peer interactions over the prior two years.

The clinician administered the Bilingual English-Spanish Assessment (BESA), the CELF-5 (English), selected subtests of the CELF-5 in Spanish, and collected language samples in both languages during structured narrative retell tasks. She also completed a parent interview conducted in Spanish through a bilingual liaison and gathered teacher input from both the English and Spanish instructors.

The resulting dataset was complex. D.R.'s English-only scores fell in the below-average range on several subtests, but his conceptual vocabulary, scored across both languages, fell within normal limits. His Spanish narratives demonstrated age-appropriate story grammar, while his English narratives were shorter and less syntactically complex. He code-switched fluidly between languages in conversational contexts, a pattern his parents confirmed was typical at home and in community settings.

## The Challenge

The clinician had a substantial volume of bilingual data to synthesize into a coherent evaluation summary. She turned to an LLM to help organize the findings, entering standardized scores, language sample data, and observational notes. The initial AI output presented three problems.

First, the model anchored its interpretive language to the English-only CELF-5 scores, describing D.R.'s language as "below average" and "delayed" without contextualizing these scores against monolingual norming samples. Second, the model characterized D.R.'s code-switching as "frequent language mixing suggestive of word-finding difficulties," pathologizing a typical and well-documented feature of bilingual development. Third, the model's functional impact statement focused exclusively on English classroom performance, omitting his demonstrated competence in Spanish-language instruction.

Left unrevised, this draft would have supported an eligibility determination for a language disorder that the full clinical picture did not warrant. The clinician recognized that a less experienced SLP, or one without bilingual assessment training, might not have identified these errors, particularly because the AI output was fluently written and used appropriate clinical terminology. The draft was wrong in substance but polished in form, which made it more dangerous than a poorly written report that would have prompted closer scrutiny.

## AI-Assisted Approach

The clinician recognized the problem and revised her approach using a bilingual-culturally-responsive framing.

**Step 1: Reframed prompt.** She prepended the following to her data: "This student is bilingual (Spanish-English). Do not compare his performance to monolingual English norms. Consider language transfer, code-switching as a communicative strength, and cultural communication norms. When English-only scores are reported, note that the norming sample was monolingual and scores may underestimate total language ability."

**Step 2: Dual-language data entry.** She reorganized her input to present Spanish and English data side by side rather than English first, ensuring the model weighted both languages in its synthesis.

**Step 3: Explicit instruction on code-switching.** She added: "Code-switching between Spanish and English is a typical feature of bilingual language use. Do not describe it as a deficit, confusion, or word-finding difficulty."

**Step 4: Conceptual scoring emphasis.** She instructed the model to lead with conceptual vocabulary scores (combining both languages) rather than single-language scores.

**Step 5: De-identification.** As with all AI-assisted documentation, she used only initials and removed any school name or identifying details from the prompt input before submitting it to the model.

## What the AI Produced

> D.R. is a 7-year-old bilingual Spanish-English male enrolled in a dual-language program. His language abilities were assessed in both Spanish and English using standardized measures and language sampling. On the CELF-5 (English), D.R. earned a Core Language Score of 82 (12th percentile); however, this instrument is normed on monolingual English speakers and may underestimate the language abilities of bilingual children. On the BESA, conceptual vocabulary scored across both languages fell within normal limits (standard score 94).

> Language samples collected during narrative retell tasks revealed age-appropriate story grammar elements in Spanish, including character identification, initiating events, and resolution. English narratives were shorter in length and contained simpler syntactic structures, consistent with a developing second language. Code-switching between Spanish and English was observed in conversational contexts and reflects typical bilingual communication patterns.

## Clinical Review & Modifications

The revised output was substantially more accurate, but the clinician made several modifications. She added specific examples from the language samples: D.R.'s use of complex subordinate clauses in Spanish ("cuando el perro se escapo, el nino fue a buscarlo") contrasted with his reliance on simple SVO structures in English. She included the parent report that D.R. told elaborate stories at home in Spanish with age-appropriate vocabulary, contextualizing the school-based English-only concerns.

The clinician removed a sentence in which the AI stated D.R.'s English skills were "emerging," a characterization she felt minimized his functional English ability in the classroom. She replaced it with specific data: D.R. followed multi-step English instructions with 80% accuracy in small-group settings and participated verbally in English during structured activities.

She also strengthened the distinction between difference and disorder by adding a paragraph explaining that D.R.'s language profile (stronger performance in the home language, typical bilingual features, and age-appropriate conceptual vocabulary) was consistent with typical bilingual development and did not meet criteria for a language disorder.

## Outcome

The completed evaluation report recommended that D.R. did not qualify for special education services under a speech-language impairment. The clinician provided the IEP team with specific recommendations for supporting continued English language development within the dual-language program, including strategies for the classroom teachers. The team accepted the findings. The referring teacher later acknowledged that the concerns she had raised were rooted in English-only expectations and that she had not been aware of D.R.'s strong Spanish language skills.

The clinician estimated that the AI-assisted approach saved approximately 45 minutes of report writing time compared to organizing the bilingual data manually. More importantly, the process of correcting the AI's monolingual bias forced her to articulate the rationale for a difference-versus-disorder determination more explicitly than she might have otherwise, which strengthened the report's evidentiary foundation.

## Reflection

The clinician noted that the AI's initial output was not malicious but reflected a structural bias in its training data: clinical language evaluations in English-dominant literature overwhelmingly use monolingual norms, and the model reproduced that framing by default. Without the bilingual-culturally-responsive prompting pattern, the draft would have supported an incorrect eligibility finding for a child whose language development was typical.

She observed that the corrected prompt produced a significantly better draft but still required clinical judgment to contextualize scores, add specific examples, and draw the diagnostic conclusion. The AI could organize the data; it could not determine whether a child had a disorder.

The clinician also reflected on the systemic implications. If an SLP without bilingual assessment training used an LLM for report drafting without recognizing the monolingual bias in its output, the result could be a disproportionate identification of bilingual children as language-disordered, a pattern already well-documented in the special education literature. The AI tool did not create this risk, but it could amplify it by lending a veneer of clinical authority to linguistically biased interpretations.

She planned to share the bilingual-culturally-responsive prompt framing with her district's SLP team and to include it as a standing item in her department's professional development materials for any clinician using AI-assisted documentation with multilingual students.

## Key Takeaways

- LLMs default to monolingual English norms when interpreting assessment data; bilingual-culturally-responsive framing must be explicitly included in the prompt.
- Code-switching is a predictable area of mischaracterization; prompts should proactively instruct the model to treat it as a typical bilingual feature.
- Presenting data from both languages side by side, rather than leading with English, produces more balanced AI output.
- AI can organize complex bilingual data, but the clinical distinction between language difference and language disorder remains a human judgment that no prompt engineering can replace.
- The risk of AI-amplified monolingual bias is highest when the clinician lacks bilingual assessment training; professional development on culturally responsive evaluation is a prerequisite for responsible AI use with multilingual populations.
