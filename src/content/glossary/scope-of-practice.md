---
term: "Scope of Practice"
aliases: ["SOP", "professional scope", "ASHA scope of practice"]
slpDefinition: "The ASHA-defined boundaries of what speech-language pathologists are qualified and authorized to do, including assessment, diagnosis, treatment, and counseling for communication and swallowing disorders. AI tools do not expand, reduce, or modify your scope of practice. You are responsible for every clinical decision, whether you used an LLM to help draft it or not."
techDefinition: "Professional domain constraints that define the boundaries within which AI tools should operate when used by a specific profession. In system design terms, scope of practice functions as a hard constraint. AI outputs that recommend actions outside a user's professional scope represent a failure mode that must be actively mitigated through prompt design, fine-tuning, or guardrails."
order: 10
---

## Why SLPs Need to Know This

AI tools don't know what your scope of practice is. An LLM will happily generate a medical diagnosis, recommend a medication, or suggest a psychological intervention if you ask it to, none of which are within SLP scope. The model isn't being malicious; it simply doesn't have professional boundaries. That responsibility stays with you.

## Clinical Impact

- An LLM might suggest "refer for anxiety medication" in a fluency report, which crosses into medical/psychological territory an SLP cannot direct
- AI-generated goals may include targets that fall outside SLP scope (e.g., behavioral modification plans that belong to a BCBA)
- A model drafting a dysphagia recommendation might include diet orders that require physician sign-off
- Using AI does not change your liability. You sign the report; you own the clinical decisions

## Practical Guide for SLPs

1. **Review every AI output against your scope.** If a recommendation wouldn't be appropriate coming from you, delete it, even if it sounds clinically reasonable
2. **Use your prompt to set boundaries.** "Only include recommendations within the scope of speech-language pathology practice" helps constrain output
3. **Be especially cautious with multidisciplinary cases.** LLMs blur professional boundaries because they draw from all disciplines simultaneously
4. **Remember: AI is a tool, not a clinician.** It can draft, suggest, and organize, but clinical judgment is yours alone

## Related Terms

- **Hallucination**: a model may hallucinate recommendations that sound authoritative but fall outside SLP scope
- **Prompt**: setting scope boundaries in your prompt helps but does not guarantee the model will respect them
- **PHI**: scope of practice and HIPAA compliance are independent requirements; meeting one does not satisfy the other
