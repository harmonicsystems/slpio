---
title: "Claude HIPAA Coverage Is Enterprise-Only — Team Plans Don't Count"
description: "Anthropic offers BAA coverage through its API and a HIPAA-ready Enterprise plan. Free, Pro, Max, and Team plans are not covered — a common and consequential misunderstanding."
date: 2026-07-07
models: [claude]
riskLevel: caution
categories: [baa, policy, privacy]
clinicalImpact: "Only an organization-signed HIPAA-ready Enterprise plan (or an API deployment under a BAA) is eligible for PHI workflows. Personal, Pro, Max, and Team accounts are not — no matter how your workplace plan is labeled."
order: 3
---

## What's True Right Now (verified July 2026)

Anthropic offers Business Associate Agreements (BAAs) on two surfaces: the first-party API, and a **HIPAA-ready Enterprise plan**. The Enterprise path is sales-assisted — an organization's primary owner accepts a click-through BAA and explicitly enables HIPAA mode in organization settings. Coverage doesn't happen by default, even on Enterprise.

**Not covered, per Anthropic's own documentation:** Claude Free, Pro, Max, and **Team** plans, Cowork, the developer Workbench/Console, and features in beta.

## Why This Matters for SLPs

The plan names invite a dangerous assumption. "Team" sounds organizational, and organizational sounds compliant. It isn't:

- **Private practice SLPs on Team plans:** your plan cannot be covered by a BAA. Entering PHI is a HIPAA violation regardless of how professional the account tier sounds.
- **Hospital and health system SLPs:** your organization needs the HIPAA-ready Enterprise plan with HIPAA mode actually enabled — not just "an Enterprise contract." BAAs signed before December 2, 2025 covered API usage only, so even organizations with older agreements may not be covered for the chat product.
- **School-based SLPs:** FERPA (not HIPAA) governs most student records, and a BAA doesn't address FERPA at all. Districts providing school-based health services may carry dual obligations — that's a compliance-officer conversation, not a plan-tier checkbox.

## Important Limitations Even With Coverage

- **HIPAA mode is explicit.** The org owner must accept the BAA and enable it. Being on Enterprise is not enough — verify, don't assume.
- **Covered models require 30-day data retention** and aren't available with zero-data-retention configurations.
- **A BAA doesn't make everything safe.** You still follow your organization's AI policies, review every output, and de-identify where you can. Defense in depth.

## What to Do

- If your workplace tells you "we have Claude, you can use it for documentation," ask specifically: *is it the HIPAA-ready Enterprise plan, is HIPAA mode enabled, and does our BAA postdate December 2025?*
- If you're on a personal, Pro, Max, or Team plan: keep PHI out entirely. De-identification rules from [PHI Safety](/foundations/phi-safety/) apply in full.
- If you're evaluating for an organization, start from Anthropic's own coverage pages rather than vendor summaries — plan coverage has changed over time and will again.

## Sources

- [Anthropic Privacy Center: BAAs for Commercial Customers](https://privacy.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers)
- [Claude Help Center: HIPAA-ready Enterprise plans](https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans)
- [Claude Help Center: Covered Models under a BAA](https://support.claude.com/en/articles/15455031-covered-models-under-a-business-associate-agreement-baa)
