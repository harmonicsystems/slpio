---
term: "Fine-Tuning"
aliases: ["fine-tune", "domain adaptation", "specialized training"]
slpDefinition: "The process of taking a general-purpose AI model and training it further on specialized data to make it better at a specific task or domain. Think of it like the difference between a generalist SLP fresh out of grad school and one who has completed a medical SLP externship — same foundational training, but the specialist has additional experience that makes them more effective in that setting."
techDefinition: "A transfer learning technique in which a pre-trained language model undergoes additional training on a smaller, domain-specific dataset. Fine-tuning adjusts the model's weights to improve performance on targeted tasks while retaining general language capabilities. It is distinct from prompt engineering, which steers behavior without modifying the model."
order: 7
---

## Why SLPs Need to Know This

When vendors claim their AI tool is "built for SLPs" or "designed for healthcare," they usually mean one of two things: they fine-tuned a base model on clinical data, or they just wrapped a generic model in a healthcare-themed interface. The difference matters enormously. A fine-tuned model may genuinely understand clinical terminology and documentation patterns better. A wrapper with clever prompts may look similar on the surface but lack that deeper specialization.

## Clinical Impact

- Fine-tuned models may produce more accurate clinical terminology and documentation formats
- A model fine-tuned on medical notes will handle "WNL," "mod," and "x3" better than a generic model
- Fine-tuning does NOT eliminate hallucination — a specialized model can still fabricate information confidently
- The quality of fine-tuning depends entirely on the training data — a model fine-tuned on poor documentation learns poor documentation

## Practical Guide for SLPs

1. **Ask vendors what "specialized" means** — is the model actually fine-tuned on clinical SLP data, or is it a generic model with a clinical prompt template?
2. **Don't assume fine-tuning equals accuracy** — a fine-tuned model still needs the same verification you'd give any LLM output
3. **Understand that you can't fine-tune most consumer tools yourself** — fine-tuning requires technical resources and training data, which is why it's typically done by vendors, not individual clinicians
4. **Look for evidence** — a vendor claiming clinical fine-tuning should be able to describe what data they trained on and how they validated performance

## Related Terms

- **Hallucination** — fine-tuning reduces but does not eliminate hallucination risk
- **Temperature** — fine-tuning and temperature are independent controls; a fine-tuned model still benefits from low temperature for clinical tasks
- **PHI** — any fine-tuning on real patient data raises serious HIPAA concerns about how that data was obtained and handled
