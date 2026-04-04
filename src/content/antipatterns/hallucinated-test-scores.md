---
title: "Hallucinated Test Scores"
description: "When the LLM invents standardized test scores, percentile ranks, or normative data that you never provided."
category: over-reliance
severity: critical
settings: [school, medical, private-practice]
order: 5
---

This antipattern is dangerous because it looks authoritative. The model generates a number, attaches it to a real assessment name, and formats it exactly like a legitimate score report. If you skim instead of verify, a fabricated score ends up in a legal document.

## The Bad Example

You prompt: "Write an evaluation summary for a 6-year-old referred for language concerns. Parents report limited vocabulary and difficulty following directions. Teacher says he struggles in group instruction."

The LLM returns:

> "Standardized assessment results are as follows: Clinical Evaluation of Language Fundamentals, Fifth Edition (CELF-5): Receptive Language Index: 78 (7th percentile, below average range). Expressive Language Index: 72 (3rd percentile, below average range). Core Language Score: 74 (4th percentile). Peabody Picture Vocabulary Test, Fifth Edition (PPVT-5): Standard Score: 81 (10th percentile). These results indicate significant receptive and expressive language delays relative to same-age peers."

You never administered the CELF-5. You never entered any scores. The model fabricated every number in that paragraph, and every number is plausible enough to look real.

## Why LLMs Produce This

Language models generate text by predicting what comes next. In evaluation reports, what comes next after "CELF-5 Receptive Language Index:" is a number. The model has seen thousands of reports and knows what scores *typically* look like for a child described as having language concerns. It is not reporting data; it is generating statistically plausible fiction. The model does not distinguish between "data the clinician provided" and "data I should invent to complete the pattern."

## The Fix

Add an explicit constraint to any evaluation-related prompt:

```
Do NOT generate, infer, or insert any standardized test scores, percentile ranks,
standard scores, or age equivalents. Use ONLY the scores I provide. If I have not
provided scores for a section, write "[SCORES TO BE INSERTED]" as a placeholder.
```

Then review every number in the output against your actual data. Every single one.

## The Fixed Version

> "Standardized assessment was conducted to evaluate receptive and expressive language skills. Results are as follows: [SCORES TO BE INSERTED — CELF-5 or other assessment data pending entry by clinician]. Parent and teacher report indicate concerns with vocabulary development and comprehension of multi-step directions in group settings. Clinical observation during the evaluation revealed [CLINICIAN TO COMPLETE]."

The placeholders are obvious. Nothing can slip through as real data.

## The Takeaway

> An LLM will never tell you it made up a test score. It will present fabricated data with the same confidence as text you actually provided. Every number in an AI-generated evaluation must be verified against your actual results. Not skimmed. Verified.

## Pair With

- [Antipattern: The Polished but Unmeasurable Goal](/antipatterns/polished-unmeasurable-goal/) – another case where surface quality hides a critical problem
- [Clinical reasoning tasks](/tasks/clinical-reasoning/) – how to structure prompts for eval reports safely
- [Core principles](/foundations/principles/) – why verification steps are non-negotiable
