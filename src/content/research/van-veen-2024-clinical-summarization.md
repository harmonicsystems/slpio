---
title: "Adapted LLMs Can Outperform Medical Experts in Clinical Text Summarization"
description: "Adapted large language models produced clinical summaries rated higher than those written by medical experts, supporting the copilot model of documentation assistance."
authors: "Van Veen, D., Van Uden, C., et al."
year: 2024
journal: "Nature Medicine"
doi: "https://doi.org/10.1038/s41591-024-02855-5"
relevance: cross-disciplinary
topics: [documentation, summarization]
order: 1
---

## What They Studied

Van Veen and colleagues evaluated whether large language models, when adapted for clinical use, could generate useful summaries of clinical text such as radiology reports, patient questions, progress notes, and doctor-patient dialogues. They compared LLM-generated summaries against those written by medical experts across multiple clinical summarization tasks, using both automated metrics and physician evaluation.

## What They Found

- Adapted LLMs matched or outperformed medical experts on summarization quality across most clinical text types evaluated.
- Physician readers rated LLM-generated summaries as more complete and less likely to contain inaccuracies than expert-written summaries in several tasks.
- The best-performing models were those adapted specifically for clinical text, not general-purpose models used out of the box.
- Automated evaluation metrics (like ROUGE scores) did not reliably predict physician preferences, highlighting the need for human evaluation.
- Performance varied by task type — models excelled at structured summarization but were less consistent with nuanced clinical narratives.

## Methodology

The study used a multi-task evaluation framework spanning six clinical summarization datasets. Both automated NLP metrics and blinded physician evaluations were employed to compare LLM outputs against expert-written reference summaries. A key limitation is that evaluators assessed summary quality in isolation, without access to the full patient context that would exist in real clinical workflows.

## What This Means for SLPs

- This is the strongest published evidence supporting AI as a documentation assistant — the "copilot" model where AI drafts and clinicians review.
- SLPs spend significant time writing progress notes, evaluation summaries, and treatment plans. LLM-assisted drafting could meaningfully reduce that burden.
- The finding that adapted models outperform generic ones suggests that SLP-specific prompt engineering or fine-tuning would yield better results than using ChatGPT out of the box.
- Human review remains essential — the models produced occasional inaccuracies that a clinician would catch but a patient or administrator might not.

## Limitations to Keep in Mind

- The study focused on medical specialties (radiology, general medicine) — no speech-language pathology content was included, so direct generalizability is uncertain.
- Evaluation was based on summary quality in isolation, not on downstream clinical outcomes or workflow integration.
- The "adapted" models used proprietary fine-tuning approaches that may not be available in commercial tools SLPs actually use.

## The Bottom Line

> Adapted LLMs can produce clinical summaries that rival or exceed expert quality, making a strong case for AI-assisted documentation — but clinician review remains non-negotiable.
