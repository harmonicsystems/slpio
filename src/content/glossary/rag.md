---
term: "RAG (Retrieval-Augmented Generation)"
aliases: ["retrieval-augmented generation", "RAG pipeline", "retrieve and generate"]
slpDefinition: "Instead of the model guessing from memory, it looks up specific documents first, then generates a response based on what it found. Like an SLP pulling a client's file and consulting ASHA's practice portal before writing a recommendation, rather than going from memory alone. The result is output tied to real sources, not statistical guesses."
techDefinition: "An architecture that combines information retrieval with language model generation. A user query is first used to search a document store (via embeddings or keyword matching), and the retrieved passages are injected into the model's context window alongside the query. The model then generates a response conditioned on both the query and the retrieved documents, reducing hallucination and enabling access to information not in the model's training data."
order: 16
---

## Why SLPs Need to Know This

RAG is the mechanism behind most AI tools that claim to "know" your organization's protocols, or to reference specific research. Without RAG, a model can only draw on its training data, which may be outdated, incomplete, or wrong. With RAG, the model consults specific documents before responding. This is the technical foundation for grounded, source-based AI output.

## The Clinical Analogy

Consider two clinicians writing a treatment recommendation. One works entirely from memory (maybe accurate, maybe not, and you can't verify either way). The other opens the client's file, pulls the relevant ASHA guideline, and writes the recommendation with both in front of them. RAG is the second clinician. The model still generates the language, but it's working from retrieved sources rather than parametric memory.

## Practical Guide

- **When a tool says "upload your documents"**, it's likely using RAG — your files become the retrieval database
- **RAG doesn't guarantee accuracy.** The model can still misinterpret, selectively quote, or blend retrieved content with generated content
- **Quality depends on the documents.** RAG over outdated or low-quality sources produces grounded but still unreliable output
- **Ask what's being retrieved.** Good RAG implementations show you which documents informed the response so you can verify

## Related Terms

- **Grounding**: the broader concept that RAG implements technically
- **Hallucination**: what RAG reduces but does not eliminate
- **Model**: RAG augments the model's capabilities without changing the model itself
