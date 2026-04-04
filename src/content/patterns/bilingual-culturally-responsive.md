---
title: "Bilingual & Culturally Responsive Pattern"
description: "How to prompt LLMs to avoid monolingual-normed assumptions and produce culturally responsive documentation for bilingual clients."
clinicalOrientation: "Bilingual / culturally responsive"
contrasts: "Monolingual-normed, English-centric approaches"
settings: [school, early-intervention, private-practice]
populations: [pediatric, adult]
order: 5
---

LLMs are trained overwhelmingly on English text and will default to monolingual English norms unless you intervene. This means they'll flag typical bilingual development as disordered, ignore code-switching as a communicative strength, and recommend English-only strategies. If you serve bilingual clients, you need to correct this at the prompt level.

## The Core Pattern

```
This client is bilingual. Do not compare their performance to monolingual English norms. Consider language transfer, code-switching as a strength, and cultural communication norms.
```

This single framing statement prevents the most common errors LLMs make with bilingual clients.

## How This Changes Output

### Without the pattern:

> "Student demonstrates below-average vocabulary skills with a standard score of 78 on the PPVT-5. He frequently mixes Spanish and English within sentences, suggesting word-finding difficulties. Narrative skills are below grade level based on English language sample analysis. Recommend speech-language therapy to address expressive language delays."

### With the pattern:

> "Student's English vocabulary on the PPVT-5 yielded a standard score of 78; however, this measure is normed on monolingual English speakers and likely underestimates his total conceptual vocabulary across both languages. When scored using a conceptual scoring approach across Spanish and English (BESOS), total vocabulary fell within normal limits. Code-switching between Spanish and English within sentences was observed and reflects typical bilingual language use — not a word-finding deficit. Narrative skills were assessed in both languages; Spanish narratives demonstrated age-appropriate story grammar elements. Recommend continued dual-language support. Current evidence does not support a diagnosis of language disorder."

The first version pathologizes bilingualism. The second one gets the diagnosis right.

## Prompt Modifiers for Bilingual / Culturally Responsive Work

- **"Specify the client's language history and current use patterns"** — gives the model context to reason about bilingual development
- **"Note which assessment tools are normed for bilingual populations and which are not"** — prevents invalid score interpretation
- **"Describe code-switching as typical bilingual behavior"** — stops the model from treating it as disordered
- **"Include cultural communication norms relevant to this client"** — prevents misidentifying cultural differences as deficits
- **"Use conceptual scoring when reporting vocabulary"** — reflects total linguistic knowledge, not English-only counts
- **"Recommend bilingual support strategies, not English-only intervention"** — aligns with research on bilingual language development

## When to Use

- Evaluations of bilingual children where English-normed tests were administered
- IEP documentation for students in dual-language or ESL programs
- Diagnostic reports where you need to differentiate language difference from language disorder
- Any documentation for a client whose home language is not English

## When This Pattern Doesn't Fit

If the client is a monolingual English speaker, this framing adds unnecessary complexity. It's also not a substitute for actual bilingual assessment — if you didn't assess in both languages, the pattern can't fix that gap. The prompt improves documentation; it doesn't replace clinical competence.

## Pair With

- [Neurodiversity-Affirming Pattern](/patterns/neurodiversity-affirming/) — both patterns push back against deficit-default language
- [Family-Centered Prompting](/patterns/family-centered-prompting/) — family input is essential for understanding language use across contexts
- [School setting](/settings/schools/) — where bilingual students are most often misidentified
