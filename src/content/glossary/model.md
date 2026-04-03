---
term: "Model"
aliases: ["AI model", "language model", "LLM", "large language model"]
slpDefinition: "A trained AI system that generates text by predicting what comes next — like a clinician's accumulated knowledge and pattern recognition, except it has no clinical judgment, no ethics, no licensure, and no understanding of what it's saying. It recognizes patterns in language. It does not understand patients."
techDefinition: "A neural network trained on large volumes of text data to predict the probability of the next token in a sequence. Models like GPT-4, Claude, and Gemini are transformer-based architectures with billions of parameters that encode statistical relationships between words, but contain no explicit knowledge base or reasoning engine."
order: 11
---

## Why SLPs Need to Know This

When someone says "the AI knows how to write eval reports," they mean a model has seen enough text to produce plausible-sounding clinical language. It does not know what an eval report is for, what's at stake, or whether its output is clinically appropriate. Understanding this distinction is the foundation for using these tools responsibly.

## The Clinical Analogy

A model is like a graduate student who has read every textbook and journal article ever published — but has never seen a patient. They can produce fluent clinical language because they've seen the patterns. They cannot exercise judgment because they have no clinical experience, no supervisory relationship, and no accountability. You would never let that student sign a report. The same applies here.

## Clinical Impact

- Models produce output that reads as confident regardless of accuracy
- No model has been trained specifically on your client's needs, your setting, or your state's regulations
- Different models (GPT-4, Claude, Gemini) have different strengths and failure modes — none are validated clinical tools
- A model cannot tell you when it's wrong, and it will not flag its own errors

## Related Terms

- **Temperature** — controls how predictable or variable the model's output is
- **Hallucination** — when the model generates plausible but false information
- **System Prompt** — the hidden instructions that shape how a model behaves in a given tool
