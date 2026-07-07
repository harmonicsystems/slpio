---
title: "ChatGPT Memory Feature Now Enabled by Default"
description: "OpenAI's memory feature, which retains information across conversations, is now turned on by default for all ChatGPT Plus and Team users."
date: 2026-04-01
models: [chatgpt]
riskLevel: critical
categories: [privacy, features]
clinicalImpact: "If you have ever entered clinical content into ChatGPT on a personal, Plus, or Team account, the model may reference it in future conversations. Turn off memory and clear stored memories. Enterprise/Edu accounts default to memory off — one more reason organizational accounts beat personal ones for work use."
order: 2
---

## What Changed

OpenAI's "memory" is on by default for ChatGPT Free, Plus, Pro, and Team accounts (verified July 2026). It is off by default only for Enterprise and Edu plans, where an admin must opt in. Memory now works two ways: "saved memories" you explicitly ask it to keep, and "chat history" — insights ChatGPT gathers from all your past conversations automatically. That second mechanism is the one most users don't know about.

## Why This Matters for SLPs

Memory persistence creates a cumulative PHI risk that single-session use does not:

- **Cross-session data leakage.** If you entered a de-identified progress note in one session and a student's school name in another, the model can now combine these across conversations.
- **Shared account risk.** If multiple clinicians share a ChatGPT account (common in school settings), one clinician's clinical content may surface in another's session.
- **Demonstration risk.** If you demonstrate ChatGPT to colleagues or students, stored memories from clinical sessions may appear unexpectedly.
- **The accumulation problem.** Each individual interaction may seem safe, but memory allows the model to build a composite profile from fragments entered over weeks or months.

## What to Do

1. **Check your memory settings.** Go to Settings > Personalization > Memory. Turn it off if you use ChatGPT for any clinical-adjacent work.
2. **Clear existing memories.** In the same settings panel, select "Clear ChatGPT's memory" to remove anything already stored.
3. **Review what was stored.** Before clearing, click "Manage Memory" to see what ChatGPT remembered. If any clinical content is present, document this for your compliance records.
4. **Use Temporary Chat mode.** For clinical work, use the Temporary Chat feature (available in the model picker dropdown) which does not save history or contribute to memory.

## Context

Memory is a useful feature for personal productivity. The concern is not that memory exists — it's that it's now the default, and clinicians who were careful about per-session use may not realize their workflow assumptions have changed.

## Sources

- [OpenAI: Memory and new controls for ChatGPT](https://openai.com/index/memory-and-new-controls-for-chatgpt/)
- [OpenAI Help Center: Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)
