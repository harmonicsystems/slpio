---
term: "De-identification"
aliases: ["de-id", "anonymization", "data scrubbing", "PHI removal"]
slpDefinition: "Removing all identifying information from clinical data before it enters any AI tool. This is not optional. Under HIPAA, 18 categories of identifiers must be stripped — names, dates, locations, medical record numbers, and more. If you paste a client's eval into ChatGPT with their name attached, you have created a reportable breach."
techDefinition: "The process of removing or transforming personally identifiable information (PII) and protected health information (PHI) from datasets, typically following the HIPAA Safe Harbor method (removal of 18 identifier types) or Expert Determination method. Automated de-identification tools use NER (named entity recognition) models to detect and redact identifying elements."
order: 13
---

## Why SLPs Need to Know This

Every major AI tool (ChatGPT, Claude, Gemini) processes your input on external servers. Unless you have a signed BAA and a HIPAA-compliant enterprise agreement, any client data you enter is potentially exposed. De-identification is the non-negotiable first step before clinical data touches any AI tool.

## The 18 HIPAA Identifiers

Strip all of these before entering data into any AI system:

1. Names
2. Geographic data smaller than a state
3. All dates (except year) related to an individual
4. Phone numbers
5. Fax numbers
6. Email addresses
7. Social Security numbers
8. Medical record numbers
9. Health plan beneficiary numbers
10. Account numbers
11. Certificate/license numbers
12. Vehicle identifiers and serial numbers
13. Device identifiers and serial numbers
14. Web URLs
15. IP addresses
16. Biometric identifiers
17. Full-face photographs
18. Any other unique identifying number or code

## Practical Guide

- **Replace, don't just delete** — use placeholders like [CLIENT] or [DOB] so the text remains usable
- **Watch for indirect identifiers** — a rare diagnosis plus an age plus a school district can identify a child even without a name
- **Automate where possible** — manual de-identification is error-prone under time pressure
- **Check your output too** — if the model generates a response that somehow includes identifying information you provided, that output is also a risk

## Related Terms

- **Guardrails** — safety constraints that may include automatic PHI detection
- **HIPAA** — the federal law governing health information privacy
