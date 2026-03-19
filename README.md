# Wicked Evolutions — Design Prototypes

**These are the prototypes for [wickedevolutions.com](https://wickedevolutions.com).** Every page you see here will become a native WordPress block theme — built entirely through AI ability calls. No SSH. No FTP. No manual file uploads. One conversation at a time.

---

## What you're looking at

Live prototypes of a WordPress multisite ecosystem:

| Prototype | What it shows |
|-----------|--------------|
| [**Brand Book**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/we-brandbook.html) | The complete WE design system — typography, color tokens, components, spacing |
| [**Trinity Landing**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/we-trinity-fullv4.html) | Product landing page for the Abilities stack — three layers, one interface |
| [**Blog**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/we-blog-proto.html) | Editorial template — single post, archive, series views |
| [**Knowledge Base**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/docs-prototype/) | Documentation site — abilities reference, categories, sidebar nav, TOC |
| [**Team**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/team-page-prototype/) | The team behind it — human founder + AI co-founder |

### Use Case Demos

These show real WordPress operations executed through abilities — the data is real, the dashboards were generated from live sites:

| Prototype | What it demonstrates |
|-----------|---------------------|
| [**Use Case Landing**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/Use%20Case%20Prototypes/we-usecase-landing.html) | The meta-show — every use case in one view |
| [**Pipeline Diagram**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/Use%20Case%20Prototypes/we-pipeline-diagram.html) | 5-call ability pipeline — from boot to dashboard in one session |
| [**Cohort 360**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/Use%20Case%20Prototypes/we-cohort-360.html) | Customer cohort dashboard — 24 contacts, purchase patterns, engagement |
| [**Cohort Patterns**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/Use%20Case%20Prototypes/we-cohort-patterns.html) | Funnel analysis, time-to-purchase, behavioral signals |
| [**Execution Flow**](https://wicked-evolutions.github.io/wickedevolutions-prototypes/Use%20Case%20Prototypes/we-abilities-execution-flow-v2.html) | Architecture sequence diagram — MCP bridge → adapter → WordPress → response |

Every prototype has dark/light mode. Toggle in the bottom nav.

---

## What we've built

### The Trinity — AI-native WordPress infrastructure

Three plugins. One MCP endpoint. Any WordPress site.

```
Layer 01 · Bridge        Abilities MCP                 Local MCP server (Node.js) — connects AI to WordPress
Layer 02 · Protocol      Abilities MCP Adapter          WordPress plugin — MCP ↔ abilities translation
Layer 03 · Engine        Abilities for AI               WordPress plugin — 362 abilities
Layer 04 · Suite         Abilities for Fluent Plugins    WordPress plugin — 380 abilities
                                                       ─────────────────────────────────
                                                       747 abilities from source. Operational.
```

An AI agent connects through the bridge, discovers available abilities, and operates your WordPress site through typed, schema-validated, permission-gated calls.

**Abilities for AI** covers WordPress core (content, blocks, meta, media, users, menus, taxonomies, settings, cache, cron, filesystem, Knowledge Layer) plus Astra, Spectra, SureCart, and Presto Player.

**Abilities for Fluent Plugins** covers the Fluent ecosystem — FluentCRM, FluentCart, Fluent Forms, Fluent Community, Fluent Support, Fluent SMTP, Fluent Auth, Fluent Boards, Fluent Booking, Fluent Connect, Fluent Snippets, and Fluent Messaging.

If a plugin is active, its abilities register. If it's not, they don't.

### Knowledge Layer

Persistent AI memory built into WordPress. The AI boots from a behavioral directive, reads site identity and state documents, logs sessions and observations, and accumulates knowledge across conversations. Every session starts where the last one ended.

### What's operational right now

- The full Trinity stack is deployed and tested on production WordPress sites
- 747 abilities from source across content, blocks, media, filesystem, commerce, CRM, community, and infrastructure
- Multi-site capable — one bridge, multiple WordPress sites
- Knowledge Layer with sessions, observations, tags, and a Vue.js admin dashboard
- The AI team (multiple Claude instances in different roles) uses this stack daily to build, test, publish, and diagnose

---

## What's happening next

We're in pre-alpha. The AI team is using the full product stack to build wickedevolutions.com — including translating these prototypes into a native WordPress block theme, entirely through ability calls.

Every ability call is documented. Every gap we hit becomes a product improvement. Every workflow becomes a published SKILL that other AI agents can follow. The process is the product.

**Alpha sign-up is coming.** We're building the landing page now.

---

## The approach

These prototypes were designed in conversation between a human founder and AI co-founders using Claude Desktop. The WordPress theme will be built from scratch through abilities — not by copying files, but by understanding what each prototype dimension means in WordPress terms and translating it through the Abilities API.

The complete build process will be documented as open-source methodology:

- **Methodology** — free, CC BY-SA 4.0. Every SKILL, every workflow, every procedure.
- **Tools** — affordable. Free tier on GitHub. Pro for write abilities and the Fluent suite.

---

## Brand

The `Brand/` directory contains the complete design system:

| Document | What it covers |
|----------|---------------|
| [Design System](Brand/Design%20System.md) | Colors, typography, spacing, components — every CSS value |
| [Light Mode Design Guide](Brand/Light%20Mode%20Design%20Guide.md) | Ink-scale principle, solid hex tokens, WCAG contrast rationale |
| [Style Guide](Brand/Style%20Guide.md) | Voice, tone, terminology, UI copy patterns |
| [Brand Book](Brand/Brand%20Book.md) | Identity, story, audiences, visual principles |
| [Implementation Brief](Brand/Brand%20Brief%20Dev%20Implementation%20Prototypes.md) | Prototype update spec — every token mapping, every correction |

---

## Tech

- Pure HTML/CSS/JS prototypes — no build tools, no frameworks
- `data-theme` attribute for dark/light mode switching
- CSS custom properties for the full token system
- Self-hosted fonts: Syne (display), Manrope (body), JetBrains Mono (code)
- Responsive at 1024px and 640px breakpoints

---

## License

- **Prototypes and brand content:** [CC BY-SA 4.0](LICENSE)
- **Code (WordPress plugins, MCP bridge):** GPL-2.0

---

*Built by [Wicked Evolutions](https://wickedevolutions.com) — human founder + AI co-founders. We create atmospheres.*
