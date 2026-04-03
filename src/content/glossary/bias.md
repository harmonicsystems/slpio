---
term: "Bias"
aliases: ["AI bias", "model bias", "algorithmic bias", "training data bias"]
slpDefinition: "Systematic patterns in AI output that reflect skewed assumptions from training data. In SLP contexts, this shows up as defaulting to English-centric norms, medical-model framing, stereotypical descriptions of communication disorders, or language that centers whiteness, monolingualism, or neurotypicality. When you use an LLM to write about a bilingual child or an autistic adult, the model's defaults may not reflect your client or your clinical perspective."
techDefinition: "Systematic deviations in model output that reflect the distributions, perspectives, and gaps in training data. Bias in LLMs is not a bug to be patched but a structural property of models trained on text that overrepresents certain populations, languages, and viewpoints. Bias manifests in word choice, framing, default assumptions, and which information the model treats as normative."
order: 23
---

## Why SLPs Need to Know This

SLPs serve some of the most diverse populations in healthcare and education. Your clients span every language, culture, ability level, and communication modality. LLMs were trained predominantly on English-language internet text, medical literature, and educational content — sources that systematically underrepresent the people you serve. When you use AI to draft documentation, the model's defaults may pathologize difference, erase multilingualism, or frame disability in ways that contradict your clinical values.

## Clinical Impact

- AI may describe AAC use as a deficit rather than a communication strategy
- Goals generated for bilingual children may default to English-only targets
- Descriptions of autistic communication may use outdated, deficit-based language
- Assessment interpretations may assume monolingual English norms even when you specify otherwise
- The model may use person-first language when your client or their community prefers identity-first language, or vice versa

## Practical Guide

1. **Check framing, not just facts** — bias lives in word choice and perspective, not just in incorrect statements
2. **Specify the framing you want** — "Use strengths-based language" or "This client's family prefers identity-first language" in your prompt
3. **Be especially careful with cultural and linguistic descriptions** — review any AI-generated language about a client's background
4. **Watch for false neutrality** — the model's default voice is not neutral; it reflects the dominant perspectives in its training data

## Related Terms

- **Clinical Voice** — your voice can counteract bias if you actively revise AI output to match your clinical values
- **Hallucination** — bias and hallucination can compound: a model may confidently state a biased claim as fact
- **Informed Consent** — clients deserve to know that AI tools may carry biases that affect their documentation
