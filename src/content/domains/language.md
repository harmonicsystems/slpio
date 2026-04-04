---
title: Language
description: Receptive and expressive language goals, documentation, and LLM-assisted workflows.
icon: ph-duotone ph-chat-dots
order: 2
---

Language disorders span receptive, expressive, vocabulary, morphosyntax, narrative, and more, making this one of the broadest domains for LLM application. The model can help organize complex assessment findings and structure nuanced goals, but the clinical reasoning behind language intervention is yours.

## LLM Strengths in This Domain

- Structuring language sample analysis summaries
- Brainstorming individualized goal wording across language subdomains
- Generating vocabulary activities tied to curriculum content
- Drafting parent-friendly progress descriptions
- Creating Tier 2 vocabulary lists from grade-level content areas
- Organizing narrative intervention hierarchies

## LLM Limitations

- Cannot analyze language samples or determine developmental level
- May generate goals that sound specific but lack clinical grounding
- Vocabulary recommendations may not match the student's cultural or linguistic background
- Cannot account for bilingual/multilingual considerations without explicit guidance
- May conflate receptive and expressive targets
- Cannot assess the interaction between language and literacy

## Prompt Templates

### Vocabulary Activity Generator

```
I am an SLP working with a 3rd grader on Tier 2 vocabulary. The current science unit is about ecosystems. Generate 10 Tier 2 vocabulary words from this topic area. For each word, provide: a student-friendly definition, an example sentence, and a brief activity idea for teaching the word in context. Keep language at a 3rd-grade comprehension level.
```

### Language Goal Brainstorm

```
I am an SLP writing language goals for a 5-year-old with an expressive language delay. The student currently uses 2-3 word combinations, has limited verb variety, and rarely uses morphological markers (-ing, -s, -ed). Brainstorm 3 measurable, observable goals that address different aspects of this profile. Each goal must include conditions, observable behavior, criteria, and measurement method. Do not use vague terms like "improve" or "increase."
```

### Assessment Summary Organizer

```
I am an SLP writing a language evaluation summary (no identifying info). Here are my raw findings from standardized and informal assessment. Organize into: receptive language findings, expressive language findings, narrative/discourse skills, pragmatic observations, and clinical impressions. Do not add interpretations I did not provide. Flag any areas where you notice the data seems incomplete.
```

## Goal Progressions

### Weak → Strong: Expressive Language

**Before:** "Student will improve expressive language skills."

*"Improve" is not measurable. No baseline, no target, no conditions, no supports.*

**After:** "Given a visual scene display and minimal verbal cueing, [Student] will combine 2+ words to request, comment, or protest across 3 different communication partners with 70% independence over 4 consecutive sessions."

### Weak → Strong: Vocabulary

**Before:** "Student will increase vocabulary as measured by curriculum-based assessment."

*Which vocabulary? What level of mastery? "Increase" tells us nothing.*

**After:** "Given pre-taught Tier 2 vocabulary from grade-level science and social studies units, [Student] will define and use targeted words in context (spoken or written) with 75% accuracy across 3 data points as measured by clinician-created probes."

### Weak → Strong: Narrative

**Before:** "Student will tell stories with better structure."

*What constitutes "better"? Which story grammar elements? What level of support?*

**After:** "Given a wordless picture book and a visual story grammar map, [Student] will produce oral narratives containing at least 4 of 6 story grammar elements (character, setting, initiating event, attempt, consequence, ending) in 3 out of 4 opportunities as measured by SLP narrative rubric."

### Weak → Strong: Morphosyntax

**Before:** "Student will use correct grammar in sentences."

*Which grammatical structures? In what context? "Correct" measured how?*

**After:** "During structured play activities with minimal verbal prompts, [Student] will produce regular past tense (-ed) in obligatory contexts with 80% accuracy across 3 consecutive 15-minute language samples."

## Before & After: Assessment Documentation

### Raw Notes
> standard scores: CELF preschool receptive 78, expressive 72, language content 75, language structure 70. informal: uses mostly nouns and some verbs, limited morphology, no consistent past tense or plurals, follows 2-step directions with repetition, 2-3 word combos mostly, some 4 word utterances with models

### Structured Output
- **Receptive Language:** CELF Preschool-3 Receptive Language Index: 78 (borderline). Follows 2-step directions with repetition required. Comprehension appears stronger than expression.
- **Expressive Language:** CELF Preschool-3 Expressive Language Index: 72 (below average). Language Content: 75. Language Structure: 70. Predominantly uses 2-3 word combinations; some 4-word utterances observed with clinician modeling.
- **Morphosyntax:** Limited morphological marker use. No consistent production of regular past tense (-ed) or regular plurals (-s) in obligatory contexts. Verb variety restricted.
- **Vocabulary:** Expressive vocabulary primarily nouns with some high-frequency verbs. Tier 2 vocabulary limited relative to age expectations.
- **Clinical Impression:** Profile consistent with an expressive language delay with particular weakness in morphosyntactic development. Receptive skills are a relative strength but remain below age expectations.

## Bilingual/Multilingual Considerations

When using LLMs for students who speak languages other than English:

- **Always specify the linguistic context** in your prompt ("This student speaks Spanish at home and English at school")
- **Do not let the model pathologize** cross-linguistic influence (e.g., adjective placement differences are not errors)
- **Verify vocabulary suggestions** against the student's actual language exposure
- **Request culturally relevant** activity ideas rather than generic ones

> LLMs can generate content in multiple languages, but they cannot assess language dominance, determine whether a pattern is a difference or a disorder, or replace a bilingual evaluation.

## Related Pages

- [Writing Goals](/tasks/writing-goals/): Full goal clarity toolkit
- [Documentation](/tasks/documentation/): Progress note and eval report templates
- [Materials & Activities](/tasks/materials/): Vocabulary activities, narrative supports
- [Literacy](/domains/literacy/): Language-literacy connection
- [Schools & Early Intervention](/settings/schools/): IEP-specific guidance
