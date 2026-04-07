# SLP/IO Field Guide — slpio.org

## Context

slpio.org is a multi-page Astro site for SLP/IO — a clinician-first field guide for speech-language pathologists navigating LLMs in clinical practice. It's a Harmonic Systems project built by an SLP and software developer in the Hudson Valley, NY.

**Deployed on Cloudflare Pages** via `wrangler.toml`. The `index.html` at the root is the OLD single-page site — do not edit it. All development happens in the Astro codebase under `src/`.

## Architecture

### Astro Content Collections (`src/content/`)
- `prompts/` — Individual prompt templates (progress notes, IEP goals, parent emails, prior auth, etc.)
- `domains/` — Clinical domain guides (articulation, language, fluency, voice, dysphagia, AAC, etc.)
- `foundations/` — Core principles, PHI safety, prompt patterns, evidence base, model comparison
- `settings/` — Setting-specific guides (schools, medical, SNF, early intervention, private practice)
- `tasks/` — Task-based guides (documentation, goal writing, communication, compliance)
- `patterns/` — Clinical prompt patterns (neurodiversity-affirming, medical model, family-centered, etc.)
- `antipatterns/` — Before/after examples of common AI misuse in SLP
- `case-studies/` — De-identified clinical scenarios showing real workflows
- `workflows/` — Multi-step clinical workflow guides
- `policies/` — Adaptable AI governance templates for different settings
- `glossary/` — Terms defined from both clinical and technical perspectives
- `research/` — Structured summaries of peer-reviewed studies
- `resources/` — Changelog, media literacy, references

### Key Components (`src/components/`)
- `PromptDemo.astro` — Interactive demo on home page showing pre-generated prompt/response examples
- `ChatWidget.astro` — Chat widget (do not modify system prompt)
- `PhiChecker.astro` — Interactive PHI safety checker
- `Search.astro` — Site search
- `AshaAlignment.astro` — ASHA ethics alignment display

### Layouts (`src/layouts/`)
- `BaseLayout.astro` — Site-wide layout with header, nav, footer
- `ContentLayout.astro` — Standard content page wrapper
- `SectionIndexLayout.astro` — Section index pages

### Pages (`src/pages/`)
- `index.astro` — Home page with hero, quick start, interactive demo, explore grid, origin, sustainability, about, contact
- Section index and slug pages for each content collection

## Content Principles

### Prompt Templates
Every prompt should include:
1. **Role context** — "I am a school-based SLP" / "I am a medical SLP"
2. **Input coaching** — "My notes include: [what to provide]" hints before the structure request
3. **Output structure** — Explicit sections the model should organize into
4. **Hallucination guardrails** — "Do not add details I did not provide"
5. **Clinical voice preservation** — "Keep my clinical voice. Do not over-polish."
6. **What to include** section — Bullet list coaching clinicians on what data makes the output useful

### Demo Examples (PromptDemo.astro)
- Outputs must ONLY contain information present in the input
- No fabricated data points, patient quotes, session durations, or treatment frequencies
- No clinical interpretations the AI invented (e.g., "suggesting possible fatigue")
- The demos model the same constrained practice the guide teaches

### Before/After Examples
- "After" outputs must not add details not present in the "Before" input
- No upgrading "no cough" to "no signs of aspiration"
- No adding clinical rationale that wasn't in the raw notes
- These examples are teaching tools — they must be airtight

## Design & Voice
- Keep David's writing voice — direct, clinical, not corporate
- Neurodivergent-affirming language throughout (strengths-based, not deficit-first)
- Low-stimulation design: muted colors, generous whitespace
- Privacy-focused: Plausible analytics, not Google Analytics
- SF Symbols / Phosphor icons, no emojis in UI

## Git
- Remote: `git@github-harmonicsystems:harmonicsystems/slpio.git`
- Branch: `main`
- Deploy: Cloudflare Pages (auto-deploys from main)

## Important Notes
- Don't modify the chat widget or its system prompt
- The old `index.html` at root is legacy — don't edit it for new features
- All prompt examples and demos must practice what the guide preaches: no fabricated clinical details
- After content changes, verify the site builds: `npm run build`
