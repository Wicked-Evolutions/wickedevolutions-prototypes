---
title: Light Mode Design Guide
type: reference
domain: influencentricity-os
status: active
priority: high
created: '2026-03-19 CET'
updated: '2026-03-19 CET'
version: 1.2.0
parent: '[[_INDEX]]'
origin: docs-prototype/css/docs.css · kl-admin/css/kl-light.css · we-brandbook.html v1.1 · we-abilities-execution-flow-v2.html
related_to:
  - '[[Design System]]'
  - '[[Brand Book]]'
  - '[[Style Guide]]'
---

# Light Mode Design Guide — Wicked Evolutions

> **AI AGENT INSTRUCTION:** This document is the authoritative light mode specification for all WE surfaces. Every value in this document is canonical. When implementing light mode in any file, use these exact values — do not guess or adapt from dark mode.

---

## 0. Surface Hierarchy — Two Separate Concerns

There are **two independent light mode systems**. They share the same ink-scale philosophy but are not interchangeable — they have different token names, different backgrounds, and different activation patterns.

| Surface | Standard | Token system | Background | File |
|---------|----------|-------------|------------|------|
| **Website / Docs / KL Admin** | `docs-prototype/css/docs.css` | `--bg-base`, `--text-primary`, `--text-secondary` | `#F2EFE9` warm greige | §2–§3, §5–§8 |
| **SVG Architecture Diagrams** | `we-abilities-execution-flow-v2.html` | `--arrow-call`, `--msg-call`, `--actor-p-text` etc. | `#E8E4DC` diagram bg | §9 |

**Website standard** = docs-prototype. This is the system for `wickedevolutions.com`, `docs.`, `community.`, KL admin, and any full-page reading surface. Do not use the Trinity `--bg`/`--text`/`--t2` token names for these pages.

**SVG diagrams** = separate. Architecture flows, sequence diagrams, pipeline visualisations. These embed inside HTML pages and use their own SVG-specific token set. See §9 exclusively.

**Trinity marketing pages** (`we-trinity-fullv4.html`, `we-brandbook.html`) use a third token set (`--bg`, `--text`, `--t2`) for standalone prototype work — but these are not the website standard.

---

## 1. The Core Principle — Ink Scale

Light mode is not a colour-inverted dark mode. It is a fundamentally different design register.

**The rule:** Use solid ink-scale hex values for all readable text in light mode. Never use opacity-based rgba for body text. Transparency computes to insufficient contrast on the warm greige background — a value that looks intentional in a guide computes to marginal AA when measured against the actual background.

**Solid ink scale — website light mode (on `#F2EFE9` docs background):**

| Token | Solid hex | Contrast on `#F2EFE9` | Use |
|-------|-----------|----------------------|-----|
| `--text-primary` | `#1C1915` | **15.2:1 WCAG AAA** | Headings, strong text, active nav, labels |
| `--text-secondary` | `#2E2A24` | **13.4:1 WCAG AAA** | All body prose — the main reading colour |
| `--text-muted` | `#7A7268` | **4.6:1 WCAG AA** | Metadata, placeholders, ghost labels |

These are solid hex values assigned to named tokens in `docs.css`. There is no opacity on any readable text. The contrast ratios are measured against `#F2EFE9` — the actual docs background.

**The single accent:** Amber `#8B6914` (5.8:1 WCAG AA on `#F2EFE9`) is the only brand colour used for interactive elements. Category colours (`--cat-*`) survive in darkened form for badges only.

---

## 2. Light Mode Colour Tokens — Docs Prototype (Website Standard)

Source file: `docs-prototype/css/docs.css` — the `.light, [data-theme="light"]` block.

### 2.1 Background stack

| Token | Value | Role |
|-------|-------|------|
| `--bg-base` | `#F2EFE9` | Page background — warm greige. Grey-beige hybrid. Not cream, not white. |
| `--bg-surface` | `#EAE6DF` | Sidebar background — slightly cooler/darker than base |
| `--bg-raised` | `#E2DDD5` | Cards, code blocks, table headers — stepped down one level |
| `--bg-overlay` | `#D8D3C9` | Hover states, inline code background, step number backgrounds |

**Design principle:** Four steps of grey-beige, each about 6–8% darker than the one above. Never use white (`#FFFFFF`) or pure grey. The warm undertone is the identity.

### 2.2 Text tokens

| Token | Value | Contrast on `--bg-base` | Role |
|-------|-------|----------------------|------|
| `--text-primary` | `#1C1915` | ~15.2:1 WCAG AAA | Headings, strong elements, active nav |
| `--text-secondary` | `#2E2A24` | ~13.4:1 WCAG AAA | All body prose — the main reading colour |
| `--text-muted` | `#7A7268` | ~4.6:1 WCAG AA | Labels, metadata, placeholders |

**Critical note:** `--text-secondary` at `#2E2A24` is extremely high contrast (13.4:1). This is intentional for a long-form reading surface. The warm near-black is comfortable for extended reading in a way that pure `#000000` is not.

### 2.3 Border tokens

| Token | Value | Role |
|-------|-------|------|
| `--border-subtle` | `rgba(50,44,36,0.08)` | Section dividers, sidebar rule |
| `--border-default` | `rgba(50,44,36,0.14)` | Card borders, input fields, table rules |
| `--border-strong` | `rgba(50,44,36,0.24)` | Hover states, active elements |

**Channel:** `50,44,36` is the warm dark-brown channel for this background system. Never use `rgba(0,0,0,x)` or `rgba(255,255,255,x)` in light mode — they produce cold grey that clashes with the greige.

### 2.4 Accent

| Token | Value | Contrast on `--bg-base` | Role |
|-------|-------|----------------------|------|
| `--accent` | `#8B6914` | ~5.8:1 WCAG AA | Links, active states, focused inputs, tab underline |
| `--accent-text` | `#7A5C10` | ~6.4:1 WCAG AA | Accent text where slightly more contrast is needed |
| `--accent-dim` | `rgba(139,105,20,0.10)` | — | Active nav bg, callout bg, pill bg |
| `--accent-glow` | `rgba(139,105,20,0.06)` | — | Hover bg on nav items and cards |

**Channel:** `139,105,20` corresponds to `#8B6914`. The dark mode accent `#c9a84c` is too light for light mode — it fails WCAG AA. Always use the light-mode accent value, never the dark-mode one.

### 2.5 Category colours

These are all darkened versions of the dark-mode category colours, tuned for readability on `#F2EFE9`.

| Token | Light value | Dark value | Channel | Category |
|-------|-------------|------------|---------|----------|
| `--cat-module` | `#1A6E9A` | `#5aaedc` | `26,110,154` | Modules — blue |
| `--cat-skill` | `#1A6E32` | `#6bba6e` | `26,110,50` | Skills — green |
| `--cat-agent` | `#8B2252` | `#d47898` | `139,34,82` | Agents — rose |
| `--cat-workflow` | `#5C1EA0` | `#9b7dd4` | `92,30,160` | Workflows — purple |
| `--cat-protocol` | `#8B4A14` | `#d4924c` | `139,74,20` | Protocol — orange |
| `--cat-changelog` | `#4A7A14` | `#a8d44c` | `74,122,20` | Changelog — lime |

**The channel column is critical.** Badge backgrounds and borders are hardcoded RGBA using the hue channel. When overriding in light mode, use the light-mode channel values at 0.13 opacity for background and 0.30 for border — not the dark-mode channel values.

### 2.6 Tag tokens

| Token | Value | Role |
|-------|-------|------|
| `--tag-bg` | `rgba(50,44,36,0.06)` | Tag chip background |
| `--tag-border` | `rgba(50,44,36,0.14)` | Tag chip border |
| `--tag-text` | `#5A5248` | Tag chip text |

### 2.7 Topbar

| Token | Value | Role |
|-------|-------|------|
| `--topbar-bg` | `rgba(242,239,233,0.95)` | Frosted glass topbar and tabstrip in light mode |

The `rgba(242,239,233,x)` channel matches `#F2EFE9` exactly, so the blur effect works without a colour shift.

---

## 3. Light Mode Tokens — KL Admin UI

The KL admin (`kl-admin.css` + `kl-light.css`) uses the same greige palette as docs-prototype. Both files must be present — `kl-admin.css` provides dark-mode defaults, `kl-light.css` provides light overrides.

| Token | Light value | Notes |
|-------|-------------|-------|
| `--bg-base` | `#F2EFE9` | Same as docs |
| `--bg-surface` | `#EAE6DF` | Sidebar |
| `--bg-raised` | `#E2DDD5` | Cards, stat cards |
| `--bg-overlay` | `#D8D3C9` | Hover, inline code |
| `--bg-hover` | `#D0CAC0` | Row hover in tables |
| `--text-primary` | `#1C1915` | Near-black warm |
| `--text-secondary` | `#2E2A24` | Body text |
| `--text-muted` | `#7A7268` | Labels, meta |
| `--accent` | `#8B6914` | Same as docs |
| `--accent-dim` | `rgba(139,105,20,0.10)` | Active states |
| `--accent-glow` | `rgba(139,105,20,0.06)` | Hover states |
| `--accent-text` | `#7A5C10` | Slightly darker for text |

### KL Admin doc type colours — light mode

All darkened from the dark-mode neon palette to readable values on greige.

| Type | Light value | Dark value |
|------|-------------|------------|
| skill | `#1A7A6E` | `#26A69A` |
| agent | `#BF5A30` | `#FF8A65` |
| knowledge | `#1A6E9A` | `#42A5F5` |
| course | `#2E7D32` | `#66BB6A` |
| config | `#7B1FA2` | `#AB47BC` |
| diagnostic | `#9A7B00` | `#FFCA28` |
| boot | `#C62828` | `#EF5350` |
| essence | `#AD1457` | `#EC407A` |
| template | `#546E7A` | `#78909C` |
| site-identity | `#5E35B1` | `#7E57C2` |
| site-state | `#3949AB` | `#5C6BC0` |
| capabilities | `#0277BD` | `#29B6F6` |

### KL Admin status / severity — light mode

| State | Light value | Dark value |
|-------|-------------|------------|
| active | `#2E7D32` | `#66BB6A` |
| draft | `#1565C0` | `#42A5F5` |
| seed | `#757575` | `#9E9E9E` |
| archived | `#9E9E9E` | `#616161` |
| sev-info | `#757575` | `#9E9E9E` |
| sev-attention | `#E65100` | `#FFB74D` |
| sev-action | `#C62828` | `#EF5350` |
| obs-open | `#1565C0` | `#42A5F5` |
| obs-resolved | `#2E7D32` | `#66BB6A` |
| obs-wontfix | `#757575` | `#9E9E9E` |
| obs-deferred | `#E65100` | `#FFB74D` |

---

## 4. The Badge Problem — Understanding It, Not Repeating It

This is the most important section for any agent updating these files.

### What the problem is

Category badges (`.badge-module`, `.badge-skill`, etc.) and lane chips use hardcoded RGBA values for `background` and `border-color`:

```css
/* Dark-mode default in docs.css */
.badge-module {
  background: rgba(76,155,201,0.12);       /* ← hardcoded dark-mode channels */
  color: var(--cat-module);                 /* ← token — correctly overrides */
  border: 1px solid rgba(76,155,201,0.22); /* ← hardcoded dark-mode channels */
}
```

The `color` uses a CSS token which IS overridden in `.light`. But `background` and `border-color` use raw RGBA with dark-mode channel values. In light mode `--cat-module` changes to `#1A6E9A` but the background stays `rgba(76,155,201,0.12)` — wrong hue, near-invisible on greige.

### How it is fixed

A light-mode override block at the bottom of `docs.css` re-declares these using the correct light-mode channels:

```css
.light,
[data-theme="light"] {
  .badge-module {
    background: rgba(26,110,154,0.13);   /* #1A6E9A channels */
    border-color: rgba(26,110,154,0.30);
  }
}
```

### The rule going forward

Never hardcode RGBA channel values in badge backgrounds/borders. Use CSS variables for all three properties and override all three in `.light { }`.

---

## 5. Theme Activation — How Light Mode Is Applied

### Docs prototype / website (docs.css)

Light mode activates in three ways, in order of specificity:

1. **`.light` class on `<html>` or `<body>`** — applied by JavaScript toggle
2. **`[data-theme="light"]` attribute on `<html>`** — alternative
3. **`@media (prefers-color-scheme: light)` on `:root:not(.dark)`** — system preference fallback

```javascript
// Docs / website toggle pattern
document.body.classList.toggle('light');
```

### KL Admin

Same pattern. `kl-light.css` must load after `kl-admin.css`. Overrides via `.light, [data-theme="light"]`.

### Trinity standalone marketing prototypes

These use `data-theme` attribute only — a different, simpler pattern. These pages are **not** the website standard.

```javascript
// Trinity prototype pages only
const h = document.documentElement;
h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
```

---

## 6. Font Stack — Surface Reference

| Surface | Display | Body | Mono |
|---------|---------|------|------|
| **Website / Docs (standard)** | Syne 500–800 | **Spectral** (serif) 300–600 | JetBrains Mono |
| KL Admin | Syne 500–800 | system-ui | JetBrains Mono |
| Trinity marketing prototypes | Syne 700–800 | Manrope 300–600 | JetBrains Mono |
| SVG architecture diagrams | — | — | JetBrains Mono (SVG text only) |

Spectral is the website body typeface — long-form reading. It is NOT used on Trinity marketing pages.

---

## 7. Typography — Docs Prototype / Website

The docs site uses `html { font-size: 18px }` as the base. All `rem` values scale from this.

| Element | Value | Computed | Role |
|---------|-------|----------|------|
| H1 | `1.875rem` | 33.75px | Article titles |
| H2 | `1.5rem` | 27px | Section headings |
| H3 | `1.2rem` | 21.6px | Subsections |
| H4 | `0.9rem` | 16.2px | Uppercase micro-labels |
| Body prose `p` | `1.1rem` | ~20px | Main reading text |
| Body lists `li` | `1.05rem` | ~19px | List items |
| Nav items | `0.8125rem` | ~15px | UI chrome — stays small |
| TOC links | `0.8125rem` | ~15px | UI chrome |

**In light mode, none of these sizes change.** Colour tokens change, sizes do not. Line heights: prose `1.72`, headings `1.15–1.4`.

---

## 8. Component Reference — Light Mode Behaviour (Website)

### Cards and surfaces

All card backgrounds use `var(--bg-raised)` → `#E2DDD5` in light mode. Card borders use `var(--border-default)` → `rgba(50,44,36,0.14)`. Token-driven, no override needed.

### Callouts

Default callout background `var(--accent-dim)` — works. **Warn callout** uses hardcoded `rgba(201,107,138,0.08)` (dark-mode rose). Override required:
```css
.light .callout.warn { background: rgba(139,34,82,0.08); }
```

### Ability table type badges / Permission badges / Lane chips

Hardcoded dark-mode RGBA. Override required (see §4). Applied in the bottom override block of docs.css.

### Topbar

`background: var(--topbar-bg)` → `rgba(242,239,233,0.95)`. No override needed.

### Mobile sidebar / backdrop

```css
.light .sidebar.open { box-shadow: 0 0 40px rgba(0,0,0,.14); }
.light .sidebar-backdrop.visible { background: rgba(0,0,0,.22); }
```

---

## 9. SVG Diagrams — Separate Concern

> **This section governs only standalone SVG architecture diagrams (sequence diagrams, pipeline flows). It does NOT apply to the website or docs system.**

SVG elements use `fill` and `stroke`, not the CSS `color` property. Every colour must use `style="fill:var(--token)"`. Hardcoded hex cannot switch on theme change.

### Light mode: what changes in diagrams

In light mode, SVG diagrams use the ink scale — not brand colours. The docs website background is `#F2EFE9`; the diagram background is `#E8E4DC`. The ink values are the same.

| Element | Dark | Light |
|---------|------|-------|
| Actor labels | Brand colour (purple/green) | `#1C1915` near-black |
| Actor sub-labels | Brand colour at opacity | `#7A7268` solid |
| Call arrows | `#a78bfa` purple | `#1C1915` near-black |
| Return arrows | `#22c55e` green | `#7A7268` muted ink |
| Error arrows | `#f87171` | `#B91C1C` dark red |
| Message labels | Brand colour | `#1C1915` / `#2E2A24` / `#B91C1C` |
| Note card text | `#FFEE58` yellow | `#7A7268` muted ink |
| Alt frame tab | `#7c3aed` purple | `#8B6914` amber |
| Condition text | Brand colour | `#7A7268` muted ink |

**What stays coloured:** Only alt/else tab badges (amber `#8B6914`) and error arrows (dark red `#B91C1C`). Everything else: ink.

**Marker arrows:** The `path` inside SVG `<marker>` elements must use `style="fill:var(--arrow-call)"` — not `fill="..."`.

→ Reference implementation: `we-abilities-execution-flow-v2.html`

---

## 10. File Locations

| File | Role |
|------|------|
| `docs-prototype/css/docs.css` | **Website standard** — all light mode tokens for docs, KL admin |
| `kl-admin/css/kl-admin.css` | KL admin dark mode base |
| `kl-admin/css/kl-light.css` | KL admin light overrides — loads after kl-admin.css |
| `we-abilities-execution-flow-v2.html` | SVG diagram reference — ink-scale light mode for diagrams only |
| `we-brandbook.html` | Trinity token system reference — standalone marketing pages only |

---

## 11. What to Check When Light Mode Looks Wrong

### Website / docs surface

1. **Text too light?** — Opacity-based rgba on text. Replace: `#2E2A24` for body, `#1C1915` for headings, `#7A7268` for muted.
2. **Badge background invisible?** — Hardcoded dark-mode RGBA channels. Add override with light-mode channel values at 0.13/0.30 opacity (§4).
3. **Dark card on light bg?** — Element uses hardcoded dark hex. Replace with `var(--bg-raised)` or `var(--bg-surface)`.
4. **Shadow too heavy on mobile?** — Override `rgba(0,0,0,.5)` → `rgba(0,0,0,.14)`.
5. **Accent too light?** — Dark mode `#c9a84c` used instead of light mode `#8B6914`. Check token inheritance.

### SVG diagrams only

6. **Brand colour visible in diagram?** — SVG element has `fill="hex"` not `style="fill:var(--token)"`.
7. **Note card text coloured?** — Must be `#7A7268` (muted ink), not amber/yellow.
8. **Arrow head not switching?** — `path` inside `<marker>` uses `fill=` attribute. Change to `style=`.

---

## 12. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-03-19 | Initial — docs + KL admin light mode, badge fix |
| 1.1.0 | 2026-03-19 | §1 Ink Scale new; §5 Trinity toggle; §8 eyebrow light mode; §9 SVG rules new |
| 1.2.0 | 2026-03-19 | §0 Surface Hierarchy new — two separate concerns made explicit; §1 contrast column corrected to `#F2EFE9` docs background; §5 Trinity clearly marked as not the website standard; §6 font stack reordered with website as primary; debug checklist split by surface |
