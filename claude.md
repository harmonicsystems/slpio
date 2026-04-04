# GEO-Optimize slpio.org

## Context

slpio.org is a single-page site (index.html) for SLP/IO — a clinician-first field guide for speech-language pathologists navigating LLMs in clinical practice. It's a Harmonic Systems project built by David Nyman, an SLP and software developer in Kinderhook, NY.

The site is live and accessible to bots, but has ZERO discoverability:
- Google hasn't indexed it yet
- No meta description, no Open Graph tags, no JSON-LD schema
- No robots.txt, sitemap.xml, or llms.txt
- The queries it should rank for ("SLP using AI for IEP documentation", "ethical AI use speech language pathology", "how to use ChatGPT for progress notes SLP") are being answered by speechtherapypd.com, EdWeek, theintentionaliep.com, and others with weaker content

## What to do

### 1. Add meta tags and JSON-LD schema to the `<head>` of index.html

**Meta tags needed:**
- `<meta name="description">` — concise summary of the site as an SLP + LLM field guide
- `<link rel="canonical">` pointing to `https://www.slpio.org/`
- Open Graph tags: og:title, og:description, og:type (website), og:url, og:site_name, og:locale
- Twitter card tags: twitter:card (summary_large_image), twitter:title, twitter:description

**JSON-LD schema (as `<script type="application/ld+json">`):**

Include ALL of the following schema types in the head:

a) **WebSite** schema — name: "SLP/IO", url, description, publisher pointing to Organization

b) **Organization** schema for Harmonic Systems — name, url (https://www.slpio.org), founder as Person

c) **Person** schema for David Nyman — name, jobTitle: "Speech-Language Pathologist & Software Developer", affiliation to Harmonic Systems, url, sameAs array (include https://github.com/harmonicsystems)

d) **Article** schema — headline: "SLP + LLM Field Guide", author as Person, publisher as Organization, datePublished: "2025-05-01", dateModified: "2026-03-01", description, mainEntityOfPage

e) **FAQPage** schema — extract real Q&A pairs from the site content. Good candidates:
  - "How should SLPs use AI for documentation?" → answer from the use cases section
  - "Can I put student information into ChatGPT?" → answer from PHI principle
  - "Should AI-generated content go directly into an IEP?" → answer from principles
  - "What are appropriate uses of LLMs in speech-language pathology?" → answer from use cases
  - "What is SLP/IO?" → answer from the hero/origin section

Keep FAQ answers concise (2-3 sentences each), factual, and self-contained so they work as standalone extractions.

### 2. Create robots.txt at the site root

```
# SLP/IO — slpio.org
# A Harmonic Systems project

# Allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Allow AI search/citation bots
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Block AI training crawlers
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Default: allow
User-agent: *
Allow: /

Sitemap: https://www.slpio.org/sitemap.xml
```

### 3. Create sitemap.xml at the site root

Simple sitemap with the single page. Set lastmod to today's date, priority 1.0, changefreq monthly.

### 4. Create llms.txt at the site root

Follow the llms.txt spec (https://llmstxt.org/):

```markdown
# SLP/IO

> SLP/IO is a clinician-first field guide for speech-language pathologists navigating large language models in clinical and educational settings. Built by Harmonic Systems.

SLP/IO provides ethical frameworks, prompt templates, evidence summaries, and practical guidance for SLPs using AI tools like ChatGPT, Claude, and Gemini for documentation, IEP goal writing, parent communication, and clinical reflection.

## Core Principles
- AI supports clinical thinking; it does not replace judgment
- Never include PHI (protected health information) in public AI tools
- All AI outputs require clinician review before use in legal or clinical documents
- Better documentation should still sound human
- Evidence-based practice is not the same as polished wording
- Precision in language protects students and their access to services

## Key Sections
- [Home](https://www.slpio.org/): Full field guide with principles, use cases, templates, and evidence
- [Principles](https://www.slpio.org/#principles): Six core principles for responsible AI use in SLP
- [Use Cases](https://www.slpio.org/#use-cases): Appropriate uses and red flags for LLMs in clinical work
- [Prompt Templates](https://www.slpio.org/#templates): Copyable prompts for progress notes, IEP goals, parent emails, ethical reflection
- [Evidence](https://www.slpio.org/#evidence): Honest summary of LLM evidence in clinical documentation
- [Digital Media Literacy](https://www.slpio.org/#media-literacy): How shifting media landscapes affect SLP practice
- [About](https://www.slpio.org/#about): Background on Harmonic Systems and the clinician-developer behind the project

## Contact
- Email: harmonicsystems.io@gmail.com
- GitHub: https://github.com/harmonicsystems
```

### 5. Add definition-first opening sentences to key sections in index.html

For each major section, make sure the first sentence after the heading works as a standalone extractable statement. These should be factual, concise, and self-contained. Examples:

- Origin section: The opening is fine as-is ("SLP/IO started with a simple observation...")
- Principles section: Add or adjust to lead with "SLP/IO defines six core principles for responsible use of language models in speech-language pathology practice."
- Use Cases section: Good as-is.
- Evidence section: Consider leading with "Current evidence (2025-2026) supports LLMs as documentation copilots that improve efficiency and structure, but not as independent authors for clinical or legal documents."

Only adjust if the current opening doesn't work as a standalone extraction. Don't change David's voice.

## Important notes
- Don't change the visual design or layout
- Don't modify the chat widget or its system prompt
- Keep David's writing voice — don't make anything sound corporate or generic
- The site is a single HTML file (index.html) — all changes go there plus the three new root files
- After making changes, verify the JSON-LD is valid JSON