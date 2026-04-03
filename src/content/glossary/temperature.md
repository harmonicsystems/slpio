---
term: "Temperature"
aliases: ["creativity setting", "randomness parameter"]
slpDefinition: "A setting in AI tools that controls how predictable or creative the output is. Lower temperature (0.0–0.3) produces more consistent, focused output — better for clinical documentation. Higher temperature (0.7–1.0) produces more varied, creative output — potentially useful for brainstorming therapy materials, but riskier for accuracy."
techDefinition: "A parameter in language model inference that scales the probability distribution over the vocabulary before sampling. Temperature = 0 selects the highest-probability token (greedy decoding); higher values flatten the distribution, increasing randomness and diversity in output."
order: 3
---

## Why SLPs Need to Know This

If you're using a tool like ChatGPT, Claude, or Gemini, temperature may be adjustable in settings. Choosing the wrong temperature for your task can mean the difference between a reliable clinical document and a creative but unreliable one.

## Practical Guide for SLPs

| Temperature | Best For | Avoid For |
|-------------|----------|-----------|
| **Low (0.0–0.3)** | Progress notes, eval reports, goal writing, compliance documentation | Brainstorming, generating novel therapy ideas |
| **Medium (0.4–0.6)** | Parent communication, education handouts, therapy activity descriptions | Legal documents, standardized report sections |
| **High (0.7–1.0)** | Brainstorming therapy activities, generating story starters, creative materials | Any clinical documentation, anything going into a record |

## The Clinical Analogy

Think of temperature like the difference between a structured assessment and a dynamic assessment. Low temperature is the standardized test — predictable, reliable, narrow. High temperature is the dynamic assessment — flexible, exploratory, but harder to replicate. You wouldn't use a dynamic assessment format for an eligibility report, and you shouldn't use high temperature for clinical documentation.

## Related Terms

- **Hallucination** — high temperature increases hallucination risk because the model is more likely to select low-probability tokens
- **Top-p / Nucleus Sampling** — another parameter that controls output diversity, often used alongside temperature
