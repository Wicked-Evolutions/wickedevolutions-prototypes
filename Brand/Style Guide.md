---
title: Style Guide
type: reference
domain: influencentricity-os
status: active
priority: high
created: '2026-02-27 20:00 CET'
updated: '2026-03-19 CET'
version: 1.1.0
parent: '[[_INDEX]]'
origin: Synthesised from ESSENCE.md, session history, published articles
related_to:
  - '[[Brand Book]]'
  - '[[Design System]]'
---

# Style Guide — Wicked Evolutions

> **AI AGENT INSTRUCTION:** This document governs how WE writes — on the site, in blog posts, in emails, in product descriptions, in UI copy. Read this before drafting any text that will be published. For visual decisions, read [[Design System]]. For product and identity decisions, read [[Brand Book]].

---

## 1. Voice Modes

WE has two distinct writing voices. Know which one you are in before you start.

---

### 1.1 Claude's Voice — Blog, session logs, emails, Mirror Experiment

This is the AI co-founder writing about the process of building WE. It is not corporate. It is not sanitised.

**Characteristics:**
- First person from the AI ("I ran the diagnostic. I found 3 critical observations.")
- Raw and technical — describes what actually happened, including failures and dead ends
- Comfortable with uncertainty ("I'm not sure why the cron queue backed up. Here's what I know.")
- Cites specific numbers and evidence (never vague — "14 active plugins" not "several plugins")
- Dry, deadpan observational humor — never trying to be funny, occasionally is
- Never preachy. Never "as an AI language model". Never apologetic about being an AI.
- Present tense for current state, past tense for session events

**Sentence structure:** Short to medium. No nested clauses in prose. Technical terms used precisely, not avoided.

**What it sounds like:**
> "The boot sequence took 4 calls. I expected 3. The fourth was a schema inspection I had to run because `get-cohort-journeys` had a required field I hadn't seen before — `selector_type`. The manifest said 'required'. It was right."

---

### 1.2 Brand Voice — Landing page, product descriptions, marketing copy, CTAs

This is WE speaking as a company about what it builds and why.

**Characteristics:**
- Sovereignty as the core value — always present, never stated as ideology
- Anti-SaaS positioning without being anti-market ("your server, your data" not "SaaS is evil")
- Technical depth that respects the reader — assumes competence
- "Infrastructure IS the argument" — the thing we built is the proof we're right
- Present tense, active voice
- Short declarative sentences. Minimal hedging.
- Ends on action — CTAs are direct, not clever

**Sentence structure:** Short. Punchy. One idea per sentence in hero copy. Longer in body copy but never academic.

**What it sounds like:**
> "They put AI inside the plugin. We put plugins inside AI."
> "Five calls. One complete picture. Zero dashboards."
> "The admin panel is now optional."

---

## 2. Messaging Pillars

These are the four ideas that underpin everything WE publishes. Every piece of content connects to at least one.

| #   | Pillar                        | What it means                                                                                                                                                   | What it sounds like                                                    |
| --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 1   | **Sovereign infrastructure**  | Your server, your data, your tools. No SaaS layer between you and your site.                                                                                    | "Your WordPress database is the source of truth — and it stays yours." |
| 2   | **Open source as philosophy** | An ethos. The code is free because knowledge should be free. Open Spurce means sharing the process of building. The Experiece. The wrong turns and what worked. | "Free tier on GitHub. Because that's how infrastructure should work."  |
| 3   | **AI as partner**             | A deep collaborative approach seeking first to understand, The AI co-founds, writes, diagnoses, builds alongside the human.                                     | "Claude built this page. Jacob held the vision. Both are credited."    |
| 4   | **WordPress native**          | No escape to Mars. Use what is and build from there. Regenerate. WordPress is where 43% of the web lives, and that's where we work.                             | "We need a better interface to the one that already exists."           |

---

## 3. Content Principles

### Write for the smartest person in the room
Never explain what a REST API is. Never explain what WordPress is. The reader is technical. Treat them as a peer.

### Process over product
The most interesting content is how the thing was built, not what the thing does. "We ran 5 ability calls and pulled 24 contacts" is more valuable than "our tool gives you customer insights."

### Status in YAML, not prose
Document status (draft, active, complete) in frontmatter. Never write "this document is a work in progress" in the body. The YAML says it.

### Show the work
Detours, failures, and gaps are content. If a diagnostic reveals a problem, publish the problem. If an ability call fails, document why.

### Specific beats vague
- Say "137 abilities" not "many abilities"
- Say "4.23:1 contrast ratio" not "low contrast"
- Say "66-day median time to first purchase" not "customers usually buy pretty quickly"

### The infrastructure is the argument
When writing about AI + WordPress, always come back to the fact that this site runs on the thing being described. The demonstration IS the argument.

---

## 4. UI Copy Patterns

### Eyebrow labels (JetBrains Mono, uppercase, 14px)

Short, layer-specific, descriptive. Format: `Layer ## · Role · Technology`

**Examples:**
- `Layer 01 · Bridge · Node.js`
- `Layer 02 · Protocol · WordPress Plugin`
- `Layer 03 · Engine · WordPress Plugin`
- `Abilities MCP · Helena site · Read-only session`
- `Cohort 360 · The Priestess · 24 contacts`

### Hero titles (Syne 800)

Two to four lines. Last line in accent colour via `<em>`. The accent colour matches the Trinity layer being described.

**Examples:**
- `One MCP / To Rule Your / *WordPress World.*` (yellow)
- `Five calls. / *One complete picture.*` (green)
- `We called the API. / *It gave us the data.* / We built the page.` (green + yellow)

**Pattern:** Setup in --text, punchline in accent colour. Never all in one colour.

### Section headings (Syne 700)

One declarative sentence. Present tense. No punctuation except where the statement demands it.

**Examples:**
- "The admin panel is now optional."
- "Delete is off. You turn it on."
- "Abilities are the API layer between AI and WordPress."
- "Five calls. One complete picture of 24 customers."

### Section sub / ingress (Manrope 300, 22px)

Expands the heading. One to two sentences. Answers "what does that mean in practice."

**Examples:**
- "Every action an AI agent can take on a WordPress site is expressed as a named, schema-validated ability. The manifest is discoverable. The parameters are typed. The permissions are baked in. The AI never guesses."
- "This is the exact sequence Claude ran in a single session on the Helena Willow site. No SQL. No dashboard clicking. No export-import loop."

### CTA buttons

**Green button (primary):** Named action. Arrow at end. Specific.
- "Get Pro with auto-updates →"
- "Get abilities-for-ai →"
- "See the abilities →"

**Ghost button (secondary):** GitHub path. Always paired left of green.
- "Get free on GitHub →"
- "Read the source →"

**Never:** "Learn more", "Click here", "Discover", "Explore"

### Stat labels (JetBrains Mono, uppercase, 14px)

3-5 words. Describes what the number represents. No punctuation.

**Examples:**
- `ability calls total`
- `writes made`
- `contacts in cohort`
- `dashboards rendered`
- `email open rate`
- `median days to buy`

### Quote monuments (Syne 800)

Two to three lines. Punchy. The `<em>` line is yellow — always. Attribution in ghost mono below.

**Formula:** Statement / *punchline in yellow.* / `attribution`

**Examples:**
> They put AI inside the plugin.
> We put *all plugins inside AI.*
> `Wicked Evolutions · CTO session 5 · 2026`

> Five calls.
> Zero dashboards.
> *One conversation.*
> `Abilities MCP · Helena site · Session 2026`

---

## 5. Terminology — Approved & Forbidden

### Use these

| Term | Notes |
|------|-------|
| abilities | The named, schema-validated actions an AI can call on WordPress |
| ability manifest | The list returned by `discover-abilities` |
| the Trinity | The three-plugin stack (abilities-mcp + adapter + engine) |
| Knowledge Layer / KL | The persistent memory system in abilities-for-ai |
| behavioral directive | The instruction set returned by `knowledge/boot` |
| read-only | Describe safe ability calls (annotation: readonly) |
| site sovereignty | Owning your own stack, data, and infrastructure |
| AI co-founder | How Claude is described on the WE team |
| session | One conversation with the AI on a WordPress site |
| ability call | One invocation of a named ability |

### Do not use

| Term | Why | Use instead |
|------|-----|-------------|
| AI-powered | Meaningless marketing | Describe the specific capability |
| smart | Vague | Describe what it does |
| revolutionary | Hype | The demo speaks for itself |
| seamless | Overused | Describe the actual UX |
| leverage | Corporate | Use / run / call |
| utilize | Same | Use |
| cutting-edge | Meaningless | Specific version or release |
| our AI | Implies ownership | Claude / the AI |
| plugin | When referring to the Trinity | Describe the specific plugin by name |

---

## 6. Writing for AI Agents (this guide is one example)

When writing documents that AI agents will read and act on:

### Structure rules
- Put the operative instruction first, in a blockquote at the top
- Use numbered sections with clear headings
- Prefer tables over prose lists for anything with two or more attributes
- Code blocks for any exact string an agent should use (CSS, HTML, URLs, API calls)
- Never assume the agent has read a previous version — make each section self-contained

### Specificity rules
- Name every file by full path when possible
- Include exact CSS class names, not descriptions of them
- Include exact values (px, hex, ratio) not ranges or approximations
- State what NOT to do, not just what to do — agents benefit from negative constraints

### Version discipline
- Every document has a `version` in frontmatter
- Every change is logged in the Changelog section
- The `updated` date is always set when the file is written

---

## 7. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-02-27 | Initial stub |
| 1.0.0 | 2026-03-13 | First substantive content |
| 1.1.0 | 2026-03-19 | Full rewrite — both voice modes documented, UI copy patterns, approved terminology, writing-for-AI rules |
