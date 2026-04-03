---
term: "System Prompt"
aliases: ["system message", "system instructions", "meta-prompt"]
slpDefinition: "Hidden instructions that shape how an AI tool behaves before you ever interact with it. Like an IEP that governs a therapy session — the student doesn't read the IEP, but it determines the goals, the approach, and the boundaries. The system prompt sets the model's role, constraints, tone, and behavior rules."
techDefinition: "The initial instruction set in a conversational AI message sequence, typically invisible to the end user, that establishes the model's persona, capabilities, limitations, and behavioral constraints. System prompts are processed before user input and take precedence in shaping model output, though they can be overridden or ignored by sufficiently adversarial input."
order: 14
---

## Why SLPs Need to Know This

Every AI tool you use has a system prompt shaping its behavior — you just can't see it. When a tool marketed to SLPs says "designed for clinical documentation," the difference between that and generic ChatGPT is largely the system prompt. Understanding this helps you evaluate tools critically and write better instructions yourself.

## The Clinical Analogy

The system prompt is the IEP behind the session. The student never reads it, but it determines what happens: what goals are targeted, what approaches are used, what accommodations are in place, and what success looks like. Similarly, the system prompt tells the model what role to play, what to include, what to avoid, and how to format output — all before you type a single word.

## Practical Guide

- **When using ChatGPT or Claude directly**, you can write your own system prompt (or "custom instructions") — this is one of your strongest tools for getting reliable output
- **Good system prompts for clinical work include**: "Do not add information I did not provide," "Use professional clinical language," "If you are unsure, say so"
- **When evaluating vendor tools**, ask what instructions the system prompt includes — this tells you more about the tool than the marketing does
- **System prompts are not foolproof** — a user can sometimes override them, and the model can drift from them in long conversations

## Related Terms

- **Guardrails** — safety constraints that may be implemented partly through the system prompt
- **Model** — the system prompt shapes the model's behavior but does not change the model itself
- **Temperature** — another configurable parameter that affects output alongside the system prompt
