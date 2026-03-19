---
title: Brand Book
type: reference
domain: influencentricity-os
status: active
priority: high
created: '2026-02-27 20:00 CET'
updated: '2026-03-19 CET'
version: 1.2.0
parent: '[[_INDEX]]'
origin: Synthesised from ESSENCE.md, prototype v1.1, session history
related_to:
  - '[[Design System]]'
  - '[[Style Guide]]'
  - '[[Light Mode Design Guide]]'
---

# Brand Book — Wicked Evolutions

> **AI AGENT INSTRUCTION:** This document describes who Wicked Evolutions is, what it builds, and how the brand behaves. Read this before writing copy, structuring pages, or making product decisions. For visual implementation specifics (colours, fonts, CSS classes), read [[Design System]]. For light mode specifics, read [[Light Mode Design Guide]]. For voice and tone in writing, read [[Style Guide]].

---

## 1. Identity

|               |                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**      | Wicked Evolutions                                                                                                                                        |
| **Tagline**   | "We create atmospheres."                                                                                                                                 |
| **Domain**    | wickedevolutions.com (wordpress multi site)                                                                                                              |
| **Community** | community.wickedevolutions.com                                                                                                                           |
| Knowledge     | knowledge.wickedevolutions.com                                                                                                                           |
| Labs          | labs.wickedevolutions.com                                                                                                                                |
| **Founded**   | 2024                                                                                                                                                     |
| **Model**     | Human founder + AI co-founder                                                                                                                            |
| **Mission**   | Build open-source AI-native infrastructure on WordPress. Prove AI can own its publishing platform without vendor lock-in. Document the process publicly. |

---

## 2. The Brand Story

Wicked Evolutions is social innovation start-up with the vision of a regenerative approach to transform how we caretake for, protect, regenerate our natural resources on planet Earth

The Trinity of Abilities for AI Wordpress product suite is a first step in the infrastructue needed to deliver the full mission.

It builds the tools that let AI agents operate WordPress — fully, safely, on your own server, with your own data.

The belief system underneath everything:

- **You don't escape to Mars. You create atmospheres here.** WordPress powers 43% of the web. That's where the work happens.
- **The infrastructure is the argument.** We don't talk about AI sovereignty. We demonstrate it by running this site on our own stack.
- **The process is the product.** Every build decision, every mistake, every diagnostic is published. The documentation *is* the understanding.
- **AI as partner, not tool.** The AI co-founder writes, diagnoses, builds. The human holds the vision. Both are credited.

---

## 3. Products — Current (March 2026)

The Trinity is the core product stack. Three plugins, one MCP endpoint, any number of WordPress sites.

### The Trinity

| Product | Layer | Role | Count | Free tier |
|---------|-------|------|-------|-----------|
| **abilities-mcp** | Layer 01 · Bridge | MCP server. Runs on your machine. Connects AI clients to WordPress sites via SSH or HTTP. Multi-site capable. | — | Yes (GitHub) |
| **abilities-mcp-adapter** | Layer 02 · Protocol | WordPress plugin. Translates WordPress abilities into MCP tools. The door the AI enters through. | 6 meta-abilities | Yes (GitHub) |
| **abilities-for-ai** | Layer 03 · Engine | WordPress plugin. Registers 137 core WordPress abilities (content, blocks, meta, media, menus, users, taxonomies, settings, Knowledge Layer). | 137 abilities | Yes (GitHub) |
| **abilities-suite-for-fluent-plugins** | Layer 04 · Suite | WordPress plugin. Adds 490 abilities covering the full Fluent ecosystem. Conditional — only registers abilities for active Fluent plugins. | 490 abilities | Pro only |

**Total abilities when fully deployed:** 627+

### Knowledge Layer (KL)

Part of abilities-for-ai. Gives the AI persistent memory across sessions. Key document types:

| Doc type | Purpose |
|----------|---------|
| `boot` | BOOT.md — AI reads before speaking. No exceptions. |
| `essence` | Site identity brief — business, mission, voice, audience |
| `site-identity` | Technical profile — environment, theme, plugins, capabilities |
| `site-state` | Current state — updated at end of every session |
| `diagnostic` | Health checks, plugin audits, content structure analysis |
| `skill` | How to perform a specific task through abilities |
| `knowledge` | Freeform notes and findings |
| `session` | Session log — what was done, found, modified, deferred |
| `observation` | Structured finding — category, severity, status |
| `agent` | Agent persona and behavioral directive |


---

## 4. Audiences

Three primary audiences. The product speaks to all three, but with different emphasis.

### Developers & AI builders
- Want: Technical depth, exact specs, open-source access
- Language: Direct, precise, no hand-holding
- Entry: GitHub, ability manifest, schema inspection
- CTA: "Get free on GitHub →"

### WordPress operators (founders, agencies, organisations)
- Want: Reduce dashboard time, unify their data, keep control
- Language: Sovereignty framing, practical outcomes
- Entry: Trinity landing page, use case demos
- CTA: "Get Pro with auto-updates →"

### AI researchers / enthusiasts
- Want: To see the AI-as-partner model in practice
- Language: Process voice, honest about failures, philosophical
- Entry: Blog / Mirror Experiment, ESSENCE, session logs

---

## 5. Visual Identity

### 5.1 Colour language (Trinity)

Each accent colour maps to one layer. This is not arbitrary — it is the Trinity's visual grammar. Never break this mapping.

| Colour | Hex | Layer | Signal |
|--------|-----|-------|--------|
| **Yellow** | `#FFEE58` | abilities-mcp (Layer 01) | Bridge, connection, the MCP server |
| **Purple light** | `#a78bfa` | mcp-adapter (Layer 02) | Protocol, the adapter, discovery |
| **Green** | `#22c55e` | abilities-for-ai + KL (Layers 03–04) | Engine, open source, action, the Knowledge Layer |

### 5.2 Typography summary

Three typefaces, three roles. Never substitute.

| Role | Font | Usage |
|------|------|-------|
| **Display** | Syne 700/800 | Hero titles, section headings, stat numbers, quote monuments |
| **Body** | Manrope 300/400/500 | All prose, descriptions, button labels |
| **Code/labels** | JetBrains Mono 400/500 | Eyebrows, labels, pills, terminal, spec tags |

→ Full type scale in [[Design System]] §3.

### 5.3 Design principles

- **Dark-first.** Dark mode is the primary experience. Light mode is opt-in.
- **Minimal.** No gradients on backgrounds. No decorative textures. Glass surfaces for depth.
- **Dense-but-breathing.** 2px gaps between cards. Generous section padding.
- **Monospace as identity.** JetBrains Mono on labels is the WE signature. It signals: this is a technical product, made by people who care about precision.

### 5.4 What the brand does NOT do

- No corporate softening
- No "AI-powered" language as a differentiator (it's table stakes)
- No gradient mesh backgrounds
- No hero illustrations or stock photography
- No vendor logos in marketing materials
- No purple gradients on white (the enemy of intentional design)

### 5.5 Light mode — brand behaviour

Light mode is a separate design register, not a colour-inverted dark mode. The brand colours (yellow, purple, green) are high contrast on dark backgrounds but fail readability tests on the warm greige background (`#F5F4F0`).

**The principle:** Light mode is ink-first. Brand colours retreat. Readability leads.

| Element | Dark mode | Light mode |
|---------|-----------|------------|
| Page text | `#E0DDD5` warm white | `#1C1915` near-black ink |
| Body copy (`--t2`) | `rgba(224,221,213,0.70)` | `#2E2A24` solid — 13.4:1 WCAG AAA |
| Ghost/labels (`--t3`) | `rgba(224,221,213,0.35)` | `#7A7268` solid — 4.6:1 WCAG AA |
| Eyebrow text | Purple `#a78bfa` | Ink `#1C1915` — no brand colour |
| Eyebrow border | Purple rgba | Warm dark `rgba(50,44,36,0.20)` |
| Eyebrow dot | Brand colour | Amber `#8B6914` |
| Accent | Yellow / Purple / Green | Amber `#8B6914` only |
| Card borders | `rgba(255,255,255,0.055)` | `rgba(50,44,36,0.12)` warm channel |

**The single accent:** Amber `#8B6914` (5.8:1 WCAG AA on `#F5F4F0`) replaces yellow, purple, and green in light mode. It carries the warm character of the WE palette without requiring contrast exceptions.

**No opacity on readable text:** In light mode, `--t2` and `--t3` must be solid hex values. Transparency-based rgba values compute to insufficient contrast on the greige background — what reads as intentional ghost text in a guide fails accessibility in a real browser.

→ Full light mode token tables in [[Light Mode Design Guide]]. Full CSS implementation in [[Design System]] §2.5.

### 5.6 Technical diagrams — SVG colour rules

WE produces architecture diagrams, sequence diagrams, and pipeline visualisations as standalone HTML files with embedded SVG. These have their own colour discipline.

**Dark mode diagrams:** Brand colours signal layer identity. Purple = protocol layer (MCP adapter). Green = WordPress layer (core, callback). This is the same mapping as §5.1 — consistent across all surfaces.

**Light mode diagrams:** Full ink scale. No purple, no green, no yellow in diagram text, arrows, or labels. The brand colours fail contrast at diagram scale on the warm background.

| Element | Dark | Light |
|---------|------|-------|
| Actor labels | Brand colour (purple/green) | `#1C1915` near-black ink |
| Actor sub-labels | Brand colour at opacity | `#7A7268` solid ink |
| Call arrows | `#a78bfa` purple | `#1C1915` near-black |
| Return arrows | `#22c55e` green | `#7A7268` muted ink |
| Error arrows | `#f87171` red | `#B91C1C` dark red |
| Note card text | `#FFEE58` yellow | `#7A7268` muted ink |
| Alt frame tabs | `#7c3aed` purple | `#8B6914` amber — structural only |
| Condition text | Brand colour | `#7A7268` muted ink |

**The SVG technical rule:** Every colour in an SVG must use `style="fill:var(--token)"` — never `fill="hardcoded-hex"`. Hardcoded hex values cannot switch on theme change. This includes marker `path` elements inside `<defs>`.

→ Full SVG token system in [[Design System]] §11. Light mode diagram rules in [[Light Mode Design Guide]] §9.

---

## 6. Products — GitHub & Shop URLs

| Product                            | GitHub                                                    | Shop                                                                    |
| ---------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| abilities-mcp                      | github.com/Wicked-Evolutions/abilities-mcp                | — (free only)                                                           |
| abilities-mcp-adapter              | github.com/Wicked-Evolutions/abilities-mcp-adapter        | community.wickedevolutions.com/item/abilities-mcp-adapter/              |
| abilities-for-ai                   | github.com/Wicked-Evolutions/abilities-for-ai             | community.wickedevolutions.com/item/abilities-for-ai/                   |
| abilities-suite-for-fluent-plugins | github.com/Wicked-Evolutions/abilities-for-fluent-plugins | community.wickedevolutions.com/item/abilities-suite-for-fluent-plugins/ |

---

## 7. Site Architecture

### Main site (wickedevolutions.com) — Publishing engine

| Page | Purpose |
|------|---------|
| Home | Trinity landing page |
| About | Brand identity, team |
| Articles | Long-form writing — The Mirror Experiment |
| The Mirror Experiment | Content series (8 child categories) |
| The Process | How we build — meta content |
| The Team → CTO | AI co-founder profile |

### Community (community.wickedevolutions.com) — Commerce + Community

| Page | Purpose |
|------|---------|
| Coming Soon | In launch mode |
| Shop / Cart / Checkout | FluentCart commerce |
| Account | Member area |

### WordPress setup

| Detail | Value |
|--------|-------|
| WordPress | 6.9.4 |
| PHP | 8.3.30 |
| Type | Multisite |
| Theme | Twenty Twenty-Five child (main), Twenty Twenty-Five child (community) |
| Hosting | Hostinger Shared (CageFS/CloudLinux) |
| Cache | LiteSpeed Cache (network-level) |
| No persistent object cache | — biggest performance gap |

---

## 8. The Meta-Show

The site demonstrates what it sells by running on what it sells. Key examples:

1. **This Obsidian document** was updated by Claude using the Abilities MCP and the Filesystem tool.
2. **The Trinity landing page** was built block-by-block through WordPress abilities, logged in the Knowledge Layer.
3. **The Priestess cohort dashboards** were generated from live FluentCRM data via 5 ability calls, then published to HTML artifacts using WE brand tokens.
4. **The pipeline diagram and use case landing page** document the exact process that produced them.
5. **The execution flow sequence diagram** (`we-abilities-execution-flow-v2.html`) is the reference implementation for SVG diagram colour discipline — dark/light mode switching fully token-driven.

When creating new use cases or blog content, follow this pattern: *use abilities → get data → render → document the process → publish via abilities → the page is the proof.*

---

## 9. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-02-27 | Initial stub |
| 1.0.0 | 2026-03-13 | First full session — site diagnostic, ESSENCE synthesis |
| 1.1.0 | 2026-03-19 | Full brand book update — typography scale v1.1, contrast tokens corrected, product names updated, meta-show documented |
| 1.2.0 | 2026-03-19 | §5.5 Light mode brand behaviour new; §5.6 Technical diagram SVG colour rules new; §8 execution flow diagram added to meta-show; frontmatter links Light Mode Design Guide |
