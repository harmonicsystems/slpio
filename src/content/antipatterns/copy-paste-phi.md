---
title: "Copy-Paste PHI"
description: "When a clinician pastes real patient or student names, dates of birth, and diagnoses directly into a public LLM, creating an instant HIPAA or FERPA violation."
category: phi-violation
severity: critical
settings: [school, medical, snf-rehab, early-intervention, private-practice]
order: 4
---

This is the single most dangerous mistake an SLP can make with AI tools. It happens fast, it feels harmless, and it creates a compliance violation the moment you hit Enter.

## The Bad Example

> "Write a SOAP note for my session today. Here are my notes: Marcus Williams, DOB 3/14/2018, Sunshine Elementary, Mrs. Patterson's 2nd grade class. Dx: mixed receptive-expressive language disorder, ASD Level 1. Today we worked on following 2-step directions with temporal concepts. Marcus needed moderate cues for 'before/after' sequences. He eloped from the table twice. Mom reported he's been refusing to eat breakfast — possible sensory issues. Medicaid ID #4477821."

That entire block — name, date of birth, school, teacher, diagnosis, Medicaid number — is now in a third-party system you do not control. You just shared protected health information with an entity that is not a covered business associate. Under HIPAA, that is a reportable breach. Under FERPA, that is an unauthorized disclosure of education records.

## Why LLMs Produce This

The LLM did not cause this problem. You did. The model will happily accept any text you provide and generate a polished note from it. It has no mechanism to flag PHI, refuse identifying information, or warn you about compliance. It treats "Marcus Williams, DOB 3/14/2018" exactly the same as "Student A, age 7." The risk is entirely in the input, not the output.

## The Fix

De-identify **before** the text ever reaches the prompt. Build this as a non-negotiable first step in your workflow:

```
Before pasting ANY clinical information into an AI tool:
1. Replace the client's name with a placeholder: [Student], [Client], or [Patient]
2. Remove dates of birth, ID numbers, and Medicaid/insurance numbers
3. Remove school names, teacher names, and parent names
4. Remove any combination of details that could identify someone indirectly
```

This takes 30 seconds. A HIPAA breach investigation takes months.

## The Fixed Version

> "Write a SOAP note for my session today. Here are my notes: [Student], age 7, 2nd grade. Dx: mixed receptive-expressive language disorder, ASD Level 1. Today we worked on following 2-step directions with temporal concepts. [Student] needed moderate cues for 'before/after' sequences. Eloped from table twice. Parent reported refusal to eat breakfast — possible sensory issues."

Same clinical content. Same quality output. Zero compliance risk.

## The Takeaway

> The fastest way to create a HIPAA violation is to paste one into a chat window. De-identify first, every time, no exceptions. If your workflow does not include a de-identification step before AI interaction, you do not have a safe workflow.

## Pair With

- [Antipattern: Generic AI Voice](/antipatterns/generic-ai-voice/) — de-identification does not mean losing clinical detail
- [Documentation tasks](/tasks/documentation/) — building de-identification into your documentation workflow
- [Medical setting guide](/settings/medical/) — HIPAA-specific considerations for AI use
