---
term: "BAA (Business Associate Agreement)"
aliases: ["business associate agreement", "HIPAA agreement", "BA agreement"]
slpDefinition: "The legal contract between you (or your employer) and a third-party service provider that establishes how they will protect patient data. This is the bright line that determines whether an AI tool is safe for clinical work involving patient information or limited to de-identified brainstorming. No BAA means no PHI, period."
techDefinition: "A contract required under HIPAA (45 CFR 164.502(e)) between a covered entity and a business associate that handles protected health information. The BAA specifies permitted uses and disclosures of PHI, requires appropriate safeguards, and establishes breach notification obligations. Cloud-based AI services that process PHI must execute a BAA with the covered entity."
order: 9
---

## Why SLPs Need to Know This

A BAA is not optional and it is not a formality. If you are entering patient information into an AI tool and that vendor has not signed a BAA with your organization, you are in violation of HIPAA. This applies even if the tool feels private, even if you trust the company, and even if you delete the conversation afterward.

## Clinical Impact

- **With a BAA:** You can use the tool for documentation that includes patient details — names, dates, scores, session notes
- **Without a BAA:** You are limited to fully de-identified use: brainstorming therapy ideas, drafting templates, generating parent education materials with no patient information
- Many popular AI tools (including free tiers of ChatGPT and Claude) do **not** have BAAs unless your organization has specifically negotiated one
- Some vendors offer HIPAA-eligible tiers at higher price points. The free version and the enterprise version of the same tool may have very different compliance profiles

## Practical Guide for SLPs

1. **Ask your employer before using any AI tool clinically.** The BAA is typically signed at the organizational level, not by individual clinicians
2. **Don't assume a tool is covered.** "HIPAA-compliant" in marketing materials is not the same as having a signed BAA with your organization
3. **Check the tier.** A vendor may offer a BAA only on their enterprise or healthcare plan, not on the version you're using
4. **Keep it simple: no BAA = no patient data.** When in doubt, de-identify everything and use the tool only for non-PHI tasks

## Related Terms

- **PHI**: the category of data that triggers the BAA requirement
- **Scope of Practice**: a BAA addresses legal compliance; it does not change your professional responsibility to verify AI output
