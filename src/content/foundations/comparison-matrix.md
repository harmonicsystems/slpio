---
title: "Model & Tool Comparison"
description: "Side-by-side comparison of AI models, tools, and platforms relevant to SLP practice, including BAA availability, strengths, and limitations."
icon: ph-duotone ph-table
order: 8
---

This page compares the major AI models and tool categories relevant to SLP practice. The goal is honest, practical guidance — not product endorsement.

## AI Models Compared

| Model | Provider | BAA Available? | Best For | Limitations | Cost Tier | Clinical Notes |
|-------|----------|---------------|----------|-------------|-----------|----------------|
| GPT-4o / GPT-4 | OpenAI | Yes (Enterprise/API) | Documentation drafting, goal writing, general clinical text | Can sound confident while being wrong; free tier has no BAA | Free–$$$ | Most widely used; strongest ecosystem of integrations |
| Claude | Anthropic | Yes (API/Enterprise) | Longer documents, nuanced writing, following detailed instructions | Smaller integration ecosystem than OpenAI | $$–$$$ | Tends toward careful, hedged output — useful for clinical writing |
| Gemini | Google | Yes (Workspace/API) | Integration with Google ecosystem, multimodal tasks | Privacy controls can be confusing across tiers; BAA scope varies | Free–$$$ | Google Workspace integration may appeal to school-based SLPs |
| Llama / Open-source | Meta / Community | N/A (self-hosted) | Full data control when self-hosted; research use | Requires technical setup; no vendor support; quality varies by model size | Free (compute costs apply) | Only truly "private" if you host it yourself — most people cannot |

## Tool Categories for SLPs

**General-purpose LLMs** (ChatGPT, Claude, Gemini): Best for brainstorming, drafting, rewording, and learning. These are not clinical tools — they are writing tools you apply to clinical work. Always de-identify input when using free tiers.

**Healthcare-specific AI** (ambient documentation tools, clinical note generators): Designed for clinical settings with built-in PHI protections. These typically require organizational contracts and BAAs. Evaluate whether they are tuned for rehab documentation or primarily for physician notes.

**Education-specific AI** (IEP writing assistants, goal banks with AI features): Built for school-based workflows. Vary widely in quality and privacy practices. Ask whether the tool stores student data and where. A polished interface does not guarantee FERPA compliance <cite data-ref="ferpa"></cite>.

**Speech-language specific tools**: This category is emerging. A small number of tools target SLP-specific workflows (therapy material generation, articulation analysis). Vet these the same way you would any other tool — check the BAA, check the data policy, check the output quality.

## BAA Availability Guide

| Provider | BAA Available | Enterprise Tier Required? | What's Covered |
|----------|--------------|--------------------------|----------------|
| OpenAI | Yes | Yes (Enterprise or API with BAA) | Data processing, storage; does not cover free or Plus tiers |
| Anthropic | Yes | Yes (API or Enterprise) | Data processing via API; consumer product (claude.ai free/pro) not covered |
| Google | Yes | Yes (Workspace with BAA add-on) | Gemini in Workspace; consumer Gmail/Gemini not covered |
| Microsoft (Azure OpenAI) | Yes | Yes (Azure agreement) | Azure-hosted models; separate from consumer Bing/Copilot |
| Self-hosted (Llama, etc.) | N/A | N/A | You control the data — but you also bear full responsibility for security |

## Choosing the Right Tool

**If you need to brainstorm therapy activities or session ideas** → Any general-purpose LLM (free tier is fine — no PHI involved).

**If you need to draft clinical documentation** → Use a BAA-covered tool, or de-identify completely before using a free tool. Review every line before signing.

**If you need to write IEP goals** → General-purpose LLMs work well for drafting. De-identify all student information. Verify goals against your clinical data — AI does not know your student.

**If you need to generate parent-friendly explanations** → Any LLM. This is a communication task, not a clinical record task. No PHI needed.

**By setting:**
- **Schools** → FERPA is your primary concern. Check if your district has approved tools. Google Workspace with BAA may already be in place.
- **Medical/hospital** → HIPAA governs. Use only BAA-covered tools for anything touching patient records. Your compliance department likely has opinions — ask them.
- **Private practice** → You are your own compliance officer. Get your own BAA if you want to use AI with client data. If that feels like too much, de-identify everything.

## What "HIPAA Compliant" Actually Means

No tool is "HIPAA compliant" by itself. HIPAA compliance is about the entire system — the tool, the agreement, the policies, and the people using it <cite data-ref="hipaa"></cite>.

- **A BAA is necessary but not sufficient.** It means the provider agrees to protect PHI. It does not mean you can paste anything you want without consequence.
- **Enterprise does not mean automatically safe.** You still need organizational policies, access controls, and staff training.
- **"HIPAA compliant" in marketing copy is a red flag**, not a green light. Ask for the BAA. Ask what data is stored, where, and for how long. If a vendor cannot answer these questions clearly, that tells you something.
- **Free tiers of major AI tools do not have BAAs.** This includes ChatGPT Free/Plus, Claude Free/Pro, and consumer Gemini. Treat them as public tools.

## A Note on the Rapidly Changing Landscape

Everything on this page has a shelf life. Models improve, pricing changes, BAA availability shifts, and new tools appear constantly. What is accurate today may not be accurate in six months.

Before making decisions based on this comparison, verify current BAA availability directly with the provider. Check your organization's approved tool list. And remember: the underlying principles — de-identify, review, disclose, and never outsource judgment — do not change, even when the tools do.
