---
term: "Grounding"
aliases: ["grounded output", "source attribution", "anchored generation"]
slpDefinition: "Connecting AI output to specific source material rather than letting the model generate from its training data alone. The difference between a student citing their textbook and a student confidently making something up. When output is grounded, you can trace claims back to specific provided text."
techDefinition: "A technique for constraining model output to information contained in provided reference documents, typically implemented through retrieval-augmented generation (RAG) or explicit citation requirements. Grounding reduces hallucination by anchoring generation to verifiable source material rather than parametric memory alone."
order: 12
---

## Why SLPs Need to Know This

Ungrounded AI output is the default. When you ask a model to "write a treatment plan for a 4-year-old with CAS," it generates text based on statistical patterns — not a specific reference. Grounded output ties the response to documents you provide: your assessment data, a specific protocol, or a peer-reviewed source. This is the difference between useful and dangerous.

## Practical Guide

1. **Provide your source material explicitly** — paste in your assessment notes, the specific protocol, or the relevant guideline rather than asking the model to work from memory
2. **Ask for citations** — instruct the model to quote or reference specific sections of what you provided
3. **Verify the grounding** — check that the model's output actually reflects your source material and hasn't drifted into generated content
4. **Watch for blending** — models will mix grounded content with ungrounded filler, often seamlessly

## The Clinical Analogy

Think of the difference between evidence-based practice and clinical folklore. A grounded response is the clinician who says "According to the Strand 2020 checklist, this client meets 8 of 10 criteria for CAS." An ungrounded response is the clinician who says "In my experience, this is probably CAS" — except the model has no experience. It only has statistical patterns.

## Related Terms

- **RAG (Retrieval-Augmented Generation)** — the primary technical method for grounding model output
- **Hallucination** — what happens when output is not grounded
- **Evidence-Based Practice** — the clinical framework that demands grounded reasoning
