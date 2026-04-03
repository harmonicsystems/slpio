---
term: "Prompt"
aliases: ["input", "query", "instruction", "prompt engineering"]
slpDefinition: "The text you type into an AI tool to tell it what you want. Think of it like a referral question — the more specific and well-structured your question, the more useful the response. A vague prompt ('write me a goal') gets a vague answer. A detailed prompt ('write an expressive language goal for a 4-year-old with CAS targeting two-word combinations at 80% accuracy') gets something you can actually use."
techDefinition: "The input text sequence that conditions a language model's output distribution. The prompt provides the context from which the model predicts the most probable next tokens. Prompt engineering — the practice of crafting effective prompts — is how users steer model behavior without modifying the model itself."
order: 4
---

## Why SLPs Need to Know This

The prompt is the single biggest lever you have over AI output quality. Most SLPs who try an LLM and get disappointed are writing prompts the way they'd type a Google search — short, vague, missing context. LLMs aren't search engines. They generate responses based on everything you give them, and what you leave out matters as much as what you include.

## Practical Guide for SLPs

- **Be specific about the clinical context** — include the client's age, diagnosis, setting, and what the output will be used for
- **Tell the model what NOT to do** — "Do not add information I haven't provided" prevents hallucinated findings
- **Specify the format** — "Write this as a SOAP note" or "Use bullet points" saves you reformatting time
- **Include your role** — "You are assisting a speech-language pathologist" sets the right frame
- **Iterate** — your first prompt is a draft. Refine it based on what comes back, just like you'd clarify a referral question

## The Clinical Analogy

A prompt is like a referral question on a consult request. "Evaluate speech" gives you almost nothing to work with. "Evaluate speech intelligibility in a 6-year-old with repaired cleft palate; teacher reports difficulty understanding the child in the classroom; please assess resonance and articulation" gives you everything you need. The same principle applies to LLMs — context drives quality.

## Related Terms

- **Hallucination** — vague prompts increase hallucination risk because the model fills in gaps with plausible-sounding fabrications
- **Temperature** — even a great prompt can produce unreliable output if the temperature is set too high
- **Context Window** — your prompt consumes part of the model's limited working memory
