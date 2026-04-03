---
title: PHI Safety
description: Before you paste anything into a public AI tool, run through this quick check.
icon: ph-duotone ph-shield-check
order: 2
---

Before you paste anything into a public AI tool, run through this quick check. The standards here are drawn directly from HIPAA and FERPA requirements.

## The PHI Checklist

Ask yourself these questions before submitting any prompt:

1. **Does your prompt contain any student or client names?** If yes — stop. Remove them.
2. **Does it include dates of birth, ages with other identifying info, or ID numbers?** Replace with generic placeholders.
3. **Does it mention a specific school, district, or facility name?** Use [School] or [Facility] instead.
4. **Does it include diagnosis codes or medical details tied to an identifiable person?** De-identify first.
5. **Does it contain session dates or scheduling info linked to a specific individual?** Remove the link to identity.
6. **Are you using a tool with a BAA (Business Associate Agreement) in place?** This affects what level of data you can use.

## How to Read the Results

- **Safe:** No identifiable information detected and you have a BAA in place. This prompt is safe for use with your AI tool. As always, review any output before it goes into a clinical or legal document.
- **Caution:** Your prompt appears de-identified, which is good. However, you're using a public tool without a BAA. This is acceptable for general-purpose tasks (brainstorming, reformatting) but not for anything tied to a specific student's record.
- **Unsafe:** Your prompt contains identifiable information that violates HIPAA/FERPA when entered into a public AI tool. Remove all names, dates of birth, school names, ID numbers, and identifiable details before proceeding. Replace with placeholders like [Student], [School], etc.

## De-identification Patterns

When preparing prompts, replace identifiable information with consistent placeholders:

```
[Student] or [Client]    — instead of names
[School] or [Facility]   — instead of institutions
[Age] years old           — instead of DOB
[Grade]                   — instead of specific grade + school combo
```

> The goal is simple: no prompt you send to a public AI tool should allow anyone — including the AI company — to identify a specific student, patient, or client.
