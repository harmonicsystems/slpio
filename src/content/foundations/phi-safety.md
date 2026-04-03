---
title: PHI Safety
description: Before you paste anything into a public AI tool, run through this quick check.
icon: ph-duotone ph-shield-check
order: 2
---

Before you paste anything into a public AI tool, run through this quick check. The standards here are drawn directly from HIPAA <cite data-ref="hipaa"></cite> and FERPA <cite data-ref="ferpa"></cite> requirements.

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

## Frequently Asked Questions

### Can I use ChatGPT to write IEP goals?
Yes — if you de-identify all information first. Remove student names, school names, DOBs, and ID numbers. Use placeholders like [Student] and [School]. The AI tool should never receive information that could identify a specific child.

### Is it a HIPAA violation to paste clinical notes into ChatGPT?
If the notes contain protected health information (PHI) — names, dates of birth, diagnosis codes tied to an individual — and you're using a public tool without a Business Associate Agreement (BAA), yes, this is a HIPAA violation <cite data-ref="hipaa"></cite>. De-identify first, or use an enterprise tool with a BAA in place.

### What's the difference between a BAA tool and a public tool?
A BAA (Business Associate Agreement) is a legal contract between your organization and the AI provider that requires the provider to protect PHI <cite data-ref="hipaa-baa"></cite>. Public tools like free ChatGPT have no such agreement — anything you type may be used for training or stored indefinitely. Enterprise versions (ChatGPT Enterprise, Azure OpenAI) can have BAAs.

### Can I use AI for FERPA-protected student records?
Only with proper de-identification or through a tool that has appropriate data use agreements with your school district <cite data-ref="ferpa"></cite>. When in doubt, strip all identifying information before using any AI tool.

### What counts as "de-identified" data?
Data is considered de-identified when all 18 HIPAA identifiers are removed, including: names, geographic data smaller than a state, dates (except year), phone numbers, email addresses, Social Security numbers, medical record numbers, and biometric identifiers. For school settings, also remove student ID numbers, school names, and teacher names.
