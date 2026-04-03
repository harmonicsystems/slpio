---
title: How LLMs Work
description: A mental model for clinicians — not a computer science lecture.
icon: ph-duotone ph-brain
order: 3
---

You don't need to understand transformer architectures to use language models well. But you do need a mental model for what these tools are actually doing — so you can predict where they'll help and where they'll fail.

## What a language model does

A large language model (LLM) is a system trained on enormous amounts of text to predict what comes next in a sequence. When you type a prompt, it generates a response by predicting the most likely continuation — word by word.

This means:

- **It doesn't "know" things.** It produces text that statistically resembles what it was trained on.
- **It doesn't reason.** It pattern-matches. When the output looks like reasoning, that's because reasoning-shaped text was common in its training data.
- **It doesn't remember your students.** Each conversation starts fresh (unless you're using a tool with memory features, which has its own privacy implications).

## Why this matters for clinical work

Understanding this helps you predict failure modes:

- **Hallucination:** The model will confidently generate plausible-sounding details it invented. This is not a bug — it's how the system works. Always verify.
- **Generic output:** The model defaults to the most common patterns in its training data. Clinical writing that sounds "professional but generic" is the model doing exactly what it's designed to do. Your job is to push past that.
- **Confidentiality gaps:** The model doesn't understand HIPAA. It processes whatever you give it. The responsibility for de-identification is entirely yours.

## The right mental model

Think of an LLM as a **very fast, very well-read writing assistant who has never met a patient, never attended an IEP meeting, and has no clinical judgment.** It can organize your notes, suggest phrasing, and structure documents — but it cannot replace the clinician in the loop.

> The model produces language. You produce meaning.
