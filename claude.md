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
- `goals/` — Measurable, evidence-referenced goals organized by domain (articulation/phonology, receptive/expressive language, pragmatics/social, dysphagia, cognitive-linguistic, fluency, voice/resonance, AAC, literacy). Index at `/goals/` has a client-side filter UI for support level, setting, population, and ND-affirming approach. Schema enforces a four-questions structure (conditions, behavior, criteria, measurement) and at least one evidence-base entry.

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
- `tools/` — Interactive micro-apps (not a content collection — see Tools section below)

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

### Goal Bank
Every goal under `src/content/goals/<domain>/<slug>.md` must include:
1. **Four-questions structure** — `fourQuestions: { conditions, behavior, criteria, measurement }` in frontmatter. Each field is a complete clause that reads cleanly on its own and combines into the "Full Goal" prose at the top of the body.
2. **Evidence base** — `evidenceBase` array with at least one entry; in practice 5–10. Prefer ASHA Practice Portals with URLs, IDEA CFR citations, IDDSI / WPATH / INCOG / WHO ICF frameworks, peer-reviewed studies cited as author + year + journal, and lived-experience advocacy sources where appropriate (NSA, Aphasia Institute, AANE, etc.).
3. **Individualization Guidance** — `## Individualization Guidance` section: bullet-pointed checks the clinician runs before adopting the goal.
4. **Clinical Notes** — `## Clinical Notes` section explaining *why* the criterion and conditions are written that way. This is the rationale section that distinguishes a well-written goal from a copy-paste — keep it specific.
5. **Neurodiversity-affirming framing** — When `neurodiversityAffirming: true`, add a `## Neurodiversity-Affirming Notes` (or `## Framing`) section explaining the reframe. Setting the flag without the framing is not enough.
6. **Related Goals** — `## Related Goals` section linking 1–3 companion or contrast goals.

Goal-writing rules of thumb:
- Don't bundle multiple processes/skills into one goal. A goal that targets "phonological processes" generally instead of a single process produces unactionable data.
- Set criteria thresholds against what the literature supports, not round numbers. 80% is conventional but not always defensible.
- Prefer dual criteria when one measure can be gamed (e.g., trained-item accuracy AND untrained-item generalization for SFA; SPL gain AND patient-reported communicative ease for LSVT LOUD).
- For partner-side / parent-side / caregiver-side goals, name them as such in the title — they describe the partner's behavior, not the patient's.
- Pediatric framing is not adult framing scaled down. Developmental expectations, family agency, and no-coercion conditions are non-negotiable in infant and child feeding/communication goals.

The filter UI on `/goals/` reads `data-support-level`, `data-settings`, `data-populations`, and `data-nd-affirming` attributes on each card. Adding a new filterable schema field requires both an entry in the filter-options arrays at the top of `src/pages/goals/index.astro` AND a `data-*` attribute on the rendered card.

### Tools

`/tools/` is a small section of deterministic, browser-only micro-apps that demonstrate what grounded analysis looks like — the opposite of an LLM's confident guess. Three tools today:

- `/tools/phonemes/` — phoneme inventory analyzer (paste text, see what sounds it asks for)
- `/tools/stimulability/` — sound + age quick-check (acquisition window, cues, position-filtered word list)
- `/tools/check/` — ZPD check for AI-generated stories (sentence length, Tier-2 load, late-acquiring sounds against a target age)

**Architecture.** All three share `public/tools/engine/engine.js` (analysis functions on `window.SLPIO.engine`) and `public/tools/engine/data.js` (CMU dict subset, Crowe & McLeod 2020 acquisition ages, Beck tiers, articulation phoneme metadata, elicitation cues). Engine and data are loaded via `<script is:inline src="/tools/engine/...">` from each tool page — they ship verbatim from `public/`, *not* through Astro's bundler. The inline IIFE in each page accesses the global and attaches DOM handlers. Shared styles live in `src/styles/tools.css`, imported per tool page.

**Editorial framing.** Every tool page has the same three-card callout grid below the results: *What this measures*, *Where it stops*, *Why this beats asking an LLM*. This is the thesis — keep it. Removing it makes the tool look like another LLM widget instead of a reality check on one.

**Hard rules:**
- **Tools must not call LLMs.** Deterministic counters with citations. That's the whole point.
- **Always show the math.** Counts, source attributions, and a coverage warning when dictionary lookup fails (~62% coverage on real-world inputs with the demo dict).
- **Citations live with the result.** Crowe & McLeod (2020) for acquisition ages, Beck/McKeown/Kucan (2002) for vocabulary tiers, CMU Pronouncing Dictionary for phoneme lookup. Each tool footer links to the relevant content section (`/domains/articulation-phonology/`, `/reading/`, etc.).

**Swap point for upgrading the data.** The demo dictionary (~200 words) lives in `public/tools/engine/data.js` under `SLPIO.CMU`. To take a tool to v1, drop in the full CMU dict (`cmudict-0.7b`, ~134k entries) at the same key — no engine or page changes needed. Same shape for `SLPIO.ACQUISITION` and `SLPIO.BECK_TIER` if expanding those.

**Analytics.** Each tool fires Plausible custom events `tool_load` (on page load) and `tool_run` (on Analyze / Check / Show) with a `tool` prop (`phonemes` | `stimulability` | `check`).

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
- **Node 22.12+ required for build** (Astro 5 requirement). The system default is often Node 20, which will fail with "Node.js v20.x is not supported by Astro." Use `source ~/.nvm/nvm.sh && nvm use 22` before `npm run build` or `npx astro dev`. The dev server launch config at `.claude/launch.json` already pins to a Node 22 binary path.
- **Dev server caches content collections.** When adding new entries to a content collection (e.g., new `goals/` markdown files), the dev server may serve a stale collection until restarted. If new entries don't appear in the UI but build output includes them, restart the dev server.
