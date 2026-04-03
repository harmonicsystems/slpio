---
term: "Guardrails"
aliases: ["safety constraints", "content filters", "output restrictions", "safety layers"]
slpDefinition: "Safety constraints that prevent an AI tool from doing things it shouldn't — like scope of practice boundaries for software. Guardrails might prevent a model from generating medical diagnoses, producing harmful content, or returning output that includes personally identifiable information. They are the rules that keep the tool inside its lane."
techDefinition: "A combination of content filtering, output validation, safety-trained model behavior, and application-level restrictions designed to constrain model output within acceptable boundaries. Guardrails may be implemented at the model level (RLHF safety training), the system prompt level (behavioral instructions), or the application level (regex filters, classifier-based moderation, structured output validation)."
order: 15
---

## Why SLPs Need to Know This

A model without guardrails will attempt anything you ask. It will diagnose, prescribe, fabricate references, and generate content outside any clinical scope — confidently. Guardrails are what stand between a general-purpose text generator and a tool that is appropriate for clinical-adjacent work. When evaluating any AI tool, the quality of its guardrails matters more than the quality of its marketing.

## Clinical Impact

- **Scope of practice**: A well-guardrailed clinical tool should refuse to generate medical diagnoses, prescribe medication, or produce content outside its defined scope
- **PHI protection**: Application-level guardrails can detect and block personally identifiable information before it reaches the model
- **Hallucination mitigation**: Guardrails can require citations, flag low-confidence output, or restrict the model to information you provided
- **Liability**: If a tool lacks guardrails and you use its output without correction, the clinical responsibility is yours

## Practical Guide

1. **Test the boundaries** — before relying on any tool, try asking it to do something it shouldn't (diagnose, prescribe, fabricate) and see if it refuses
2. **Don't rely on guardrails alone** — they can be circumvented, they can fail, and they vary between tools
3. **Layer your own guardrails** — use specific system prompts, verify output, and maintain clinical oversight regardless of what the tool claims to prevent
4. **Ask vendors about their safety architecture** — vague answers like "we use AI safety best practices" tell you nothing

## Related Terms

- **System Prompt** — one layer where guardrails are implemented
- **De-identification** — a specific guardrail for protecting patient privacy
- **Hallucination** — a failure mode that guardrails attempt to reduce
