---
term: "PHI (Protected Health Information)"
aliases: ["protected health information", "patient data", "identifiable health data", "ePHI"]
slpDefinition: "Any individually identifiable health information that is created, received, maintained, or transmitted by a healthcare provider. This is the core regulatory concept governing what you can and cannot put into AI tools. PHI includes obvious identifiers like names and dates of birth, but also less obvious ones like session dates, unique therapy schedules, and combinations of diagnosis plus school district that could identify a child."
techDefinition: "A category of data defined under the HIPAA Privacy Rule (45 CFR 160.103) encompassing 18 specific identifiers linked to health information. When stored or transmitted electronically, it is called ePHI and triggers HIPAA Security Rule requirements. AI tools processing PHI must meet specific technical safeguards and require a Business Associate Agreement."
order: 8
---

## Why SLPs Need to Know This

Every time you consider using an AI tool for clinical work, the first question is: does this involve PHI? If it does, the tool must be HIPAA-compliant and covered by a Business Associate Agreement. Pasting a child's eval results, even with the name removed, into a consumer AI tool may still constitute a PHI violation if remaining details could identify the individual.

## The 18 HIPAA Identifiers SLPs Should Know

- Names, dates (birth, admission, discharge, session dates), phone/fax numbers, email addresses
- Social Security numbers, medical record numbers, health plan numbers, account numbers
- Vehicle and device identifiers, URLs, IP addresses, biometric identifiers
- Full-face photographs, any other unique identifying number or code
- **Geographic data smaller than a state** (yes, including school district names)

## Practical Guide for SLPs

1. **When in doubt, de-identify** — remove all 18 identifiers before using any AI tool that lacks a BAA
2. **Don't just remove the name** — a combination of age + diagnosis + school + session frequency can be identifying in small communities
3. **Understand that "de-identified for brainstorming" and "clinical documentation" are different use cases** — you can use a generic AI tool for de-identified brainstorming, but clinical documentation with PHI requires a HIPAA-compliant platform
4. **Remember that what you type into an AI tool may be stored** — even temporarily, input data on non-compliant platforms may be logged, cached, or used for training

## Related Terms

- **BAA (Business Associate Agreement)** — the legal contract required before an AI vendor can handle your PHI
- **Fine-Tuning** — models fine-tuned on real clinical data raise questions about whether PHI was used in training
- **Hallucination** — a model that fabricates PHI-like details (inventing a patient name or score) creates its own compliance risks
