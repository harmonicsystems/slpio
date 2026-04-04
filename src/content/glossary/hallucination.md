---
term: "Hallucination"
aliases: ["confabulation", "fabrication", "making things up"]
slpDefinition: "When an LLM generates information that sounds authoritative but is factually incorrect, like a confident student who guesses rather than saying 'I don't know.' In clinical contexts, this means the model may invent test scores, cite nonexistent studies, or fabricate treatment recommendations."
techDefinition: "A model output that is not grounded in the training data or input prompt, produced because the model generates statistically likely next tokens rather than retrieving verified facts. Hallucinations are an inherent property of generative models, not a bug that will be fixed."
order: 1
---

## Why SLPs Need to Know This

Hallucination is the single biggest risk when using LLMs for clinical documentation. A model can confidently produce a test score you didn't provide, a recommendation you didn't make, or a reference that doesn't exist. Because the output reads fluently, it's easy to miss.

## Clinical Impact

- A hallucinated standardized test score in an eval report could change eligibility determination
- A fabricated reference in a literature review undermines your credibility
- A "recommended" therapy approach the model invented could be clinically inappropriate
- A hallucinated medication interaction in a dysphagia context could be dangerous

## How to Protect Against It

1. **Never trust output without verification,** especially numbers, names, and recommendations
2. **Tell the model not to add information.** "Do not add findings I did not provide" is your strongest defense
3. **Check references independently.** If the model cites a study, verify it exists
4. **Be especially cautious with lists.** Models love to extend lists by adding plausible-sounding items that weren't in your input
