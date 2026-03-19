---
title: Design System
type: reference
domain: influencentricity-os
status: active
priority: high
created: '2026-02-27 20:00 CET'
updated: '2026-03-19 CET'
version: 1.3.0
parent: '[[_INDEX]]'
origin: we-brandbook.html v1.1 (dark mode + Trinity) · docs-prototype/css/docs.css (website light mode)
related_to:
  - '[[Brand Book]]'
  - '[[Style Guide]]'
  - '[[Light Mode Design Guide]]'
---

# Design System — Wicked Evolutions v1.3

> **AI AGENT INSTRUCTION:** This document is the single source of truth for all visual implementation decisions on wickedevolutions.com, community.wickedevolutions.com, and the HTML prototypes. When updating WordPress pages, Gutenberg blocks, or prototype files, use the exact values in this document. Do not invent values.
>
> **Two source files — two separate concerns:**
> - **Dark mode + Trinity marketing pages:** `we-brandbook.html` (v1.1) — tokens `--bg`, `--text`, `--t2`, `--t3`
> - **Website light mode (docs, KL admin, full site):** `docs-prototype/css/docs.css` — tokens `--bg-base`, `--text-primary`, `--text-secondary`. This is the standard for all reading surfaces on wickedevolutions.com. See [[Light Mode Design Guide]] §0 and §2.

---

## 1. Font Stack — resolved, standardised

The prototype font stack is canonical. The blog child theme (Manrope + Fira Code) is a legacy stack — do not propagate it to new work.

| Token | Font | Weights | Role |
|-------|------|---------|------|
| `--fd` | Syne | 700, 800 | Display — hero titles, section headings, segment names, stat numbers, CTA headings |
| `--fb` | Manrope | 300, 400, 500, 600 | Body — all paragraph copy, descriptions, button labels |
| `--fm` | JetBrains Mono | 400, 500 | Code — eyebrows, labels, pills, terminal output, spec tags |

**Google Fonts import string (use exactly):**
```
https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap
```

**Never substitute:** Arial, Inter, Roboto, system-ui for display, or any other monospace for JetBrains Mono in labelled UI.

---

## 2. Colour System

### 2.1 Dark mode tokens (default / primary)

Dark mode is the primary design direction. All pages render dark by default. Light mode is opt-in via `data-theme="light"` on `<html>`.

| Token | Value | Contrast on --bg | Usage |
|-------|-------|-----------------|-------|
| `--bg` | `#111111` | — | Page background. Only background used. Never change. |
| `--text` | `#E0DDD5` | 13.91:1 | Primary text. Headings, strong elements, active states. |
| `--t2` | `rgba(224,221,213,0.70)` → `#a2a09a` | **7.22:1 WCAG AAA** | Body copy, descriptions, secondary text. All readable prose. |
| `--t3` | `rgba(224,221,213,0.35)` → `#595856` | 2.66:1 | Ghost text — intentional only. Attribution, footers, metadata. Never body copy. |
| `--t4` | `rgba(224,221,213,0.09)` | ~1.2:1 | Ultra-ghost. Decorative section numbers only. |

> **CONTRAST NOTE:** `--t2` was previously 0.50 opacity (4.23:1 — below WCAG AA). It is now 0.70 (7.22:1 — WCAG AAA). Any file using the old value must be updated. The computed solid hex is `#a2a09a`.

### 2.2 Trinity accent colours

Each accent maps to one Trinity stack layer. Use the correct colour for the correct layer — never swap them.

| Token | Hex | Layer | Usage |
|-------|-----|-------|-------|
| `--y` | `#FFEE58` | abilities-mcp (Layer 01) | Yellow — stat numbers, em accents, SSH transport labels |
| `--g` | `#22c55e` | abilities-for-ai + KL (Layers 03–04) | Green — primary action button, open-source signals, Knowledge Layer |
| `--p` | `#7c3aed` | mcp-adapter (Layer 02) | Purple — deep accent, rarely used directly |
| `--pl` | `#a78bfa` | mcp-adapter (Layer 02) | Purple light — eyebrows, labels, nav brand accent, pill text |

### 2.3 Tinted backgrounds (for cards, borders, stat bands)

| Token | Value | Usage |
|-------|-------|-------|
| `--yd` | `rgba(255,238,88,0.07)` | Yellow card background |
| `--yb` | `rgba(255,238,88,0.17)` | Yellow card border |
| `--gd` | `rgba(34,197,94,0.07)` | Green card background |
| `--gb` | `rgba(34,197,94,0.17)` | Green card border |
| `--pd` | `rgba(124,58,237,0.07)` | Purple card background |
| `--pb` | `rgba(124,58,237,0.16)` | Purple card border |

### 2.4 Glass surfaces (cards, overlays)

| Token | Value | Usage |
|-------|-------|-------|
| `--gl` | `rgba(255,255,255,0.025)` | Default card background |
| `--glb` | `rgba(255,255,255,0.055)` | Default card border, dividers |
| `--glh` | `rgba(255,255,255,0.11)` | Hover state border |

### 2.5 Light mode — Trinity/prototype token overrides

> **SCOPE: Trinity marketing prototype pages only.** This block applies to `we-trinity-fullv4.html`, `we-brandbook.html`, `we-blog-proto.html` — standalone HTML prototypes using the `--bg`/`--text`/`--t2`/`--t3` token set.
>
> **This is NOT the website light mode standard.** For `wickedevolutions.com`, docs, KL admin, and all full-page reading surfaces, the standard is `docs-prototype/css/docs.css` using token names `--bg-base`, `--text-primary`, `--text-secondary`. See [[Light Mode Design Guide]] §0 and §2.

When `data-theme="light"` is set on `<html>` for Trinity-system pages:

> **INK SCALE RULE:** `--t2` and `--t3` MUST be solid hex values, not rgba with opacity. Transparency computes to insufficient contrast on the warm greige background.

| Token | Light value | Solid computed | Contrast on `#F5F4F0` |
|-------|-------------|----------------|----------------------|
| `--bg` | `#F5F4F0` | — | — |
| `--bg2` | `#ECEAE4` | — | — |
| `--text` | `#1C1915` | solid | **15.2:1 WCAG AAA** |
| `--t2` | `#2E2A24` | solid | **13.4:1 WCAG AAA** |
| `--t3` | `#7A7268` | solid | **4.6:1 WCAG AA** |
| `--t4` | `rgba(28,25,21,0.10)` | — | decorative only |
| `--card` | `rgba(255,255,255,0.80)` | — | card backgrounds |
| `--border` | `rgba(50,44,36,0.12)` | — | warm dark channel |
| `--bordh` | `rgba(50,44,36,0.26)` | — | hover state |
| `--yd` | `rgba(139,105,20,0.09)` | — | amber tint bg |
| `--yb` | `rgba(139,105,20,0.22)` | — | amber tint border |
| `--gd` | `rgba(50,44,36,0.06)` | — | neutral tint bg |
| `--gb` | `rgba(50,44,36,0.16)` | — | neutral tint border |
| `--pd` | `rgba(50,44,36,0.06)` | — | neutral tint bg |
| `--pb` | `rgba(50,44,36,0.16)` | — | neutral tint border |
| `--gl` | `rgba(0,0,0,0.03)` | — | subtle surface |
| `--glb` | `rgba(0,0,0,0.09)` | — | subtle border |
| `--glh` | `rgba(0,0,0,0.16)` | — | subtle hover |

**Brand accent colours** (`--y`, `--g`, `--p`, `--pl`) do NOT change for Trinity marketing pages.

**Border channel rule:** Always use `rgba(50,44,36,x)` — never `rgba(0,0,0,x)` or `rgba(255,255,255,x)`.

**Theme toggle:**
```javascript
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
}
```

→ Website light mode token system: [[Light Mode Design Guide]] §2.

---

## 3. Typography Scale (v1.1 — updated March 2026)

All sizes are desktop defaults. Tablet and mobile breakpoints are defined in section 4.

> **IMPORTANT:** These are the v1.1 values. Previous values (Hero Sub 19px, Section Sub 18px, Body 17px, Eyebrow 10px, Terminal 13px) are deprecated. Update any file that uses the old scale.

### 3.1 Display / heading sizes (Syne — responsive via clamp)

| Element | CSS | Weight | Tracking | Line height |
|---------|-----|--------|----------|-------------|
| Hero title | `clamp(3rem, 5.5vw, 5rem)` | 800 | `-0.045em` | 1.03 |
| Section heading `.sh` | `clamp(1.8rem, 3vw, 2.6rem)` | 700 | `-0.03em` | 1.12 |
| Segment name `.seg-name` | `clamp(1.6rem, 3vw, 2.2rem)` | 700 | `-0.03em` | 1.12 |
| Stat number `.stat-n` | `clamp(2.8rem, 4.2vw, 4rem)` | 800 | `-0.045em` | 1 |
| CTA heading `.layer-cta-heading` | `clamp(1.4rem, 2.5vw, 1.8rem)` | 700 | `-0.03em` | 1.15 |
| Quote monument `.quote-text` | `clamp(2rem, 4.5vw, 3.4rem)` | 800 | `-0.04em` | 1.2 |
| Doc/reference page title | `clamp(1.7rem, 3vw, 2.4rem)` | 800 | `-0.04em` | 1.08 |

### 3.2 Body type sizes (Manrope / JetBrains Mono — fixed px with responsive overrides)

| Element | Class | Font | Desktop | Tablet ≤1024px | Mobile ≤640px | Line height | Colour |
|---------|-------|------|---------|----------------|---------------|-------------|--------|
| Hero Sub | `.hero-sub` | Manrope 300 | **23px** | 21px | 19px | 1.85 | `--t2` |
| Section Sub / Ingress | `.sp2`, `.guide-desc` | Manrope 300 | **22px** | 20px | 18px | 1.82 | `--t2` |
| Body / Prose | `.prose p`, `.seg-copy p`, `.value-copy`, `.cap-desc`, `.tr-desc`, `.boot-desc`, `.audience-copy`, `.layer-cta-text` | Manrope 300 | **21px** | 19px | 17px | 1.82 | `--t2` |
| Eyebrow / Label | `.eyebrow`, `.guide-label`, `.seg-label`, `.audience-label`, `.cap-n`, `.tr-label`, `.gate-label`, `.boot-n`, `.kl-doc-type`, `.agent-role`, `.stat-l`, `.pill` | JetBrains Mono 400 | **14px** | 13px | 12px | — | varies |
| Terminal / Code | `.terminal`, `.boot-file` | JetBrains Mono 400 | **16px** | 15px | 14px | 1.9 | `--g` / `--gw` |
| Hero Eyebrow | `.eyebrow` above hero | JetBrains Mono 400 | **14px** | 13px | 12px | — | per variant |
| Button | `.btn` | Manrope 500 | 16px | 16px | 16px | — | `#0a0a0a` / `--t2` |

### 3.3 Small / supporting sizes

| Element | Class | Size | Usage |
|---------|-------|------|-------|
| Spec table headers | `.spec-table th` | 13px | JetBrains Mono, uppercase |
| Spec table token cells | `.spec-table td:first-child`, `.spec-code` | 14px | JetBrains Mono |
| Block notes | `.block-note` | 14px | JetBrains Mono, green |
| Block note label | `.block-note strong` | 13px | JetBrains Mono, uppercase |
| Type meta labels | `.type-meta` | 13px | JetBrains Mono |
| Demo labels | `.demo-label` | 13px | JetBrains Mono |
| Agent / KL doc descriptions | `.agent-desc`, `.kl-doc-desc` | 16px desktop / 15px tablet / 14px mobile | Manrope 300 |
| Gate detail | `.gate-detail` | 14px | JetBrains Mono |
| Transport features | `.tr-features li` | 14px | JetBrains Mono |
| Mod count | `.mod-n` | 14px | JetBrains Mono |
| Quote attribution | `.quote-attr` | 14px | JetBrains Mono, uppercase |

---

## 4. Responsive Breakpoints

Two breakpoints only. No intermediate breakpoints.

```css
/* Tablet — ≤1024px */
@media (max-width: 1024px) {
  body { font-size: 17px; }
  /* Eyebrows & labels → 13px */
  /* Terminal → 15px */
  /* Hero Sub → 21px */
  /* Section Sub → 20px */
  /* Body → 19px */
}

/* Mobile — ≤640px */
@media (max-width: 640px) {
  body { font-size: 16px; }
  /* Eyebrows & labels → 12px */
  /* Terminal → 14px */
  /* Hero Sub → 19px */
  /* Section Sub → 18px */
  /* Body → 17px */
  /* Layout: accent-row 1col, tint-grid 3col, audience-block 1col, value-item 1col */
  /* Stats: 2-column grid */
}
```

Full breakpoint CSS is in `we-brandbook.html` under the `RESPONSIVE TYPE SCALE` comment block.

---

## 5. Spacing & Layout

| Token / Name | Value | Usage |
|---|---|---|
| `--col` | `800px` | Content column — all body text and sections |
| `--wide` | `1140px` | Wide column — stats bands, full-bleed elements |
| Column padding | `56px` | Horizontal padding on all `.c` and `.cw` wrappers. `24px` on mobile. |
| Section padding | `100px 0` | Vertical padding on each `<section>` |
| Hero padding | `160px top / 120px bottom` | Each layer hero section |
| Card gap | `2px` | Gap between adjacent cards. Dense grid feel. |
| Segment gap | `80px` | Between `.seg` blocks in one-pipeline section |
| Prose gap | `20px` | Between `<p>` in `.prose` blocks |
| Stat band padding | `64px vertical / 56px horizontal` | Full-bleed stat bands |
| Border radius — cards | `8px` | Default card radius |
| Border radius — transport/segment | `12px` | Larger content cards |
| Border radius — terminal | `14px` | Terminal block |
| Border radius — eyebrow | `100px` | Pill/eyebrow components |

---

## 6. Component Reference

This section maps every component class to its specification. Agents updating Gutenberg blocks or prototype HTML should use these as the implementation spec.

### 6.1 Eyebrow pill

**Purpose:** Layer label above hero headlines. Always appears directly above the hero title with `margin-bottom: 52px`.

```css
.eyebrow {
  display: inline-flex; align-items: center; gap: 9px;
  border: 1px solid var(--pb); color: var(--pl);
  padding: 5px 16px; border-radius: 100px;
  font-family: var(--fm); font-size: 14px; /* tablet:13px mobile:12px */
  letter-spacing: 0.1em; text-transform: uppercase;
}
.eyebrow--y { border-color: var(--yb); color: var(--y); }  /* Layer 01 */
.eyebrow--g { border-color: var(--gb); color: var(--g); }  /* Layer 03 */
/* default .eyebrow = purple (Layer 02) */
```

**Light mode eyebrow:** In light mode, the eyebrow colour and border switch to ink — not purple. Use `--eyebrow-color` and `--eyebrow-border` tokens defined in the `[data-theme="light"]` block:
```css
[data-theme="light"] {
  --eyebrow-color: #1C1915;                /* near-black ink */
  --eyebrow-border: rgba(50,44,36,0.20);   /* warm dark channel */
  --ebdot-bg: #8B6914;                     /* amber dot replaces coloured dot */
}
```

Animated dot inside eyebrow:
```css
.ebdot { width: 5px; height: 5px; background: var(--g); border-radius: 50%; animation: pulse 2.2s ease-in-out infinite; }
.ebdot--y { background: var(--y); }
.ebdot--p { background: var(--pl); }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
```

### 6.2 Glow lines

```css
.gl    { height:1px; background:linear-gradient(90deg,transparent,var(--p),transparent); opacity:0.28; max-width:90px; border:none; }
.gl--y { background:linear-gradient(90deg,transparent,var(--y),transparent); }
.gl--g { background:linear-gradient(90deg,transparent,var(--g),transparent); }
```

### 6.3 Pills (tinted labels)

```css
.pill { padding:4px 14px; border-radius:100px; font-family:var(--fm); font-size:14px; font-weight:500; display:inline-flex; }
.py { background:var(--yd); color:var(--y); border:1px solid var(--yb); }  /* Yellow */
.pp { background:var(--pd); color:var(--pl); border:1px solid var(--pb); } /* Purple */
.pg { background:var(--gd); color:var(--g); border:1px solid var(--gb); }  /* Green */
.p0 { background:transparent; color:var(--t3); border:1px solid var(--glb); } /* Ghost */
```

### 6.4 Buttons

Always pair ghost left + green right when two buttons appear together.

```css
.btn { display:inline-flex; align-items:center; gap:8px; padding:15px 36px; border-radius:8px;
       font-family:var(--fb); font-size:16px; font-weight:500; cursor:pointer;
       border:none; text-decoration:none; transition:all 0.2s; letter-spacing:-0.01em; }
.btn--g     { background:var(--g); color:#0a0a0a; }          /* Primary — green */
.btn--g:hover { background:#4ade80; transform:translateY(-1px); }
.btn--ghost { background:transparent; color:var(--t2); border:1px solid var(--glb); } /* Secondary */
.btn--ghost:hover { border-color:var(--glh); color:var(--text); }
```

### 6.5 Stat band

```css
.stat-band    { border-top:1px solid var(--glb); border-bottom:1px solid var(--glb); padding:64px 56px; }
.stat-band--y { border-color:var(--yb); }   /* abilities-mcp */
.stat-band--g { border-color:var(--gb); }   /* abilities-for-ai */
.stat-band--p { border-color:var(--pb); }   /* mcp-adapter */
.stat-n { font-family:var(--fd); font-size:clamp(2.8rem,4.2vw,4rem); font-weight:800; letter-spacing:-0.045em; }
.stat-l { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.1em; color:var(--t2); }
/* Accent colour helpers for stat numbers: */
.sy { color:var(--y); } .sg { color:var(--g); } .sp { color:var(--pl); } .sw { color:var(--text); }
```

### 6.6 Hero block classes

```css
.hero-title { font-family:var(--fd); font-size:clamp(3rem,5.5vw,5rem); font-weight:800; letter-spacing:-0.045em; line-height:1.03; margin-bottom:36px; }
.hero-title em    { font-style:normal; color:var(--g); display:block; }  /* green accent */
.hero-title em.y  { color:var(--y); }   /* yellow accent */
.hero-title em.p  { color:var(--pl); }  /* purple accent */
.hero-sub { font-size:23px; font-weight:300; color:var(--t2); max-width:540px; line-height:1.85; margin-bottom:80px; }
```

### 6.7 Section heading

```css
.sh  { font-family:var(--fd); font-size:clamp(1.8rem,3vw,2.6rem); font-weight:700; letter-spacing:-0.03em; line-height:1.12; color:var(--text); margin-bottom:16px; }
.sp2 { font-size:22px; font-weight:300; color:var(--t2); line-height:1.82; max-width:580px; margin-bottom:56px; }
```

### 6.8 Segment block (large content cards)

```css
.seg-label    { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.13em; margin-bottom:10px; }
.seg-label--y { color:rgba(255,238,88,0.65); }
.seg-label--p { color:rgba(167,139,250,0.65); }
.seg-label--g { color:rgba(34,197,94,0.65); }
.seg-name     { font-family:var(--fd); font-size:clamp(1.6rem,3vw,2.2rem); font-weight:700; letter-spacing:-0.03em; line-height:1.12; color:var(--text); }
.seg-card     { padding:40px 44px; border:1px solid var(--glb); border-radius:12px; background:var(--gl); }
.seg-card--y  { border-color:var(--yb); background:linear-gradient(135deg,var(--yd),var(--gl) 60%); }
.seg-card--p  { border-color:var(--pb); background:linear-gradient(135deg,var(--pd),var(--gl) 60%); }
.seg-card--g  { border-color:var(--gb); background:linear-gradient(135deg,var(--gd),var(--gl) 60%); }
.seg-copy p   { font-size:21px; font-weight:300; color:var(--t2); line-height:1.82; max-width:620px; }
```

### 6.9 Prose / body copy

```css
.prose   { display:flex; flex-direction:column; gap:20px; }
.prose p { font-size:21px; font-weight:300; color:var(--t2); line-height:1.82; max-width:600px; }
.prose p strong { color:var(--text); font-weight:500; }
```

### 6.10 Value list

```css
.value-list  { border-top:1px solid var(--glb); }
.value-item  { display:grid; grid-template-columns:200px 1fr; gap:40px; align-items:baseline; padding:28px 0; border-bottom:1px solid var(--glb); }
.value-name  { font-family:var(--fd); font-size:1rem; font-weight:700; letter-spacing:-0.02em; color:var(--text); }
.value-copy  { font-size:21px; font-weight:300; color:var(--t2); line-height:1.78; }
```

### 6.11 Capability list

```css
.cap-list  { border-top:1px solid var(--glb); }
.cap-item  { display:flex; align-items:flex-start; gap:28px; padding:22px 0; border-bottom:1px solid var(--glb); }
.cap-n     { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.1em; color:var(--t2); flex-shrink:0; width:52px; }
.cap-title { font-size:17px; font-weight:500; color:var(--text); margin-bottom:5px; }
.cap-desc  { font-size:21px; font-weight:300; color:var(--t2); line-height:1.7; }
```

### 6.12 Terminal block

```css
.terminal { background:#09090f; border:1px solid rgba(255,255,255,0.05); border-radius:14px; overflow:hidden;
            font-family:var(--fm); font-size:16px; line-height:1.9; }
.tbar     { display:flex; align-items:center; gap:6px; padding:14px 22px;
            background:rgba(255,255,255,0.015); border-bottom:1px solid rgba(255,255,255,0.04); }
.tbody    { padding:32px 32px 36px; color:rgba(224,221,213,0.28); }
/* Colour helpers for terminal lines: */
.gy { color:var(--y); }   /* yellow — arrow prompts */
.gp { color:var(--pl); }  /* purple — ability names */
.gg { color:var(--g); }   /* green — success values */
.gw { color:rgba(224,221,213,0.75); } /* near-white — values */
.cur { display:inline-block; width:7px; height:1em; background:var(--g); vertical-align:text-bottom;
       animation:blink 0.9s steps(1) infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
```

### 6.13 Boot sequence

```css
.boot-step        { display:flex; align-items:flex-start; gap:20px; padding:20px 22px;
                    border:1px solid var(--glb); border-radius:8px; background:var(--gl); }
.boot-step--active { border-color:var(--gb); background:var(--gd); }
.boot-n   { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.1em; color:var(--t2); flex-shrink:0; width:28px; }
.boot-file { font-family:var(--fm); font-size:16px; color:var(--g); margin-bottom:4px; }
.boot-desc { font-size:21px; font-weight:300; color:var(--t2); line-height:1.65; }
```

### 6.14 Quote monument

```css
.quote-monument { padding:140px 56px; text-align:center; border-top:1px solid var(--glb); border-bottom:1px solid var(--glb); }
.quote-text     { font-family:var(--fd); font-size:clamp(2rem,4.5vw,3.4rem); font-weight:800;
                  letter-spacing:-0.04em; line-height:1.2; color:var(--text); max-width:700px; margin:0 auto; }
.quote-text em  { font-style:normal; color:var(--y); }
.quote-attr     { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.1em; color:var(--t3); margin-top:32px; }
```

### 6.15 Layer CTA

```css
.layer-cta         { padding:48px 0 0; margin-top:80px; border-top:1px solid var(--glb); }
.layer-cta-label   { font-family:var(--fm); font-size:14px; text-transform:uppercase; letter-spacing:0.12em; color:var(--t3); margin-bottom:10px; }
.layer-cta-heading { font-family:var(--fd); font-size:clamp(1.4rem,2.5vw,1.8rem); font-weight:700; letter-spacing:-0.03em; color:var(--text); }
.layer-cta-text    { font-size:22px; font-weight:300; color:var(--t2); line-height:1.75; max-width:520px; margin-bottom:28px; }
.layer-cta-btns    { display:flex; gap:10px; flex-wrap:wrap; }
```

---

## 7. Page Layout Wrappers

```css
.c  { max-width:800px;  margin:0 auto; padding:0 56px; } /* Content column */
.cw { max-width:1140px; margin:0 auto; padding:0 56px; } /* Wide column */
/* Mobile: padding reduces to 24px on both */
```

---

## 8. Gutenberg Block Mapping

When publishing to WordPress, these CSS classes map to Gutenberg block patterns:

| CSS Class / Pattern | Gutenberg Implementation |
|---|---|
| `.eyebrow` | Custom HTML block or Paragraph with class |
| `.gl` / `.gl--y` / `.gl--g` | Separator block with class, "wide" width |
| `.pill py/pp/pg/p0` | Inline span inside Paragraph block |
| `.btn--g` / `.btn--ghost` | Buttons block, horizontal layout, gap 10px |
| `.hero-title` + `.hero-sub` | Heading H1 + Paragraph inside Group (160px/120px padding) |
| `.stat-band` | Full-width Group → 4-column inner grid |
| `.sh` + `.sp2` | Heading H2 + Paragraph |
| `.cap-list` | Group → cap-item Groups → 2-column Columns blocks |
| `.value-list` | Group → value-item Groups → Columns (200px / 1fr) |
| `.seg` | Group → seg-header Group + seg-card Group |
| `.audience-block` | Columns (220px / 1fr, gap 2px) |
| `.terminal` | Custom HTML block |
| `.boot-step` | Group → Columns (28px / 1fr) |
| `.agent` | Columns (3 equal, gap 2px) → Group per card |
| `.kl-doc` | Columns (2 equal, gap 2px) → Group per card |
| `.layer-cta` | Group (border-top, padding-top 48px, margin-top 80px) → Buttons block |
| `.quote-monument` | Full-width Group (border-top + border-bottom, 140px padding) |

---

## 9. CSS Custom Properties — Complete Root Block

The exact `:root` block to use in any new HTML file or theme stylesheet:

```css
:root {
  --bg:    #111111;
  --text:  #E0DDD5;
  --t2:    rgba(224,221,213,0.70); /* #a2a09a · 7.22:1 WCAG AAA */
  --t3:    rgba(224,221,213,0.35); /* #595856 · 2.66:1 intentional ghost */
  --t4:    rgba(224,221,213,0.09);

  --y:   #FFEE58;
  --g:   #22c55e;
  --p:   #7c3aed;
  --pl:  #a78bfa;

  --yd:  rgba(255,238,88,0.07);   --yb:  rgba(255,238,88,0.17);
  --gd:  rgba(34,197,94,0.07);    --gb:  rgba(34,197,94,0.17);
  --pd:  rgba(124,58,237,0.07);   --pb:  rgba(124,58,237,0.16);

  --gl:  rgba(255,255,255,0.025);
  --glb: rgba(255,255,255,0.055);
  --glh: rgba(255,255,255,0.11);

  --fd: 'Syne', sans-serif;
  --fb: 'Manrope', system-ui, sans-serif;
  --fm: 'JetBrains Mono', monospace;

  --col:  800px;
  --wide: 1140px;
}
```

---

## 10. File Locations

| File | Purpose |
|------|---------|
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/we-brandbook.html` | Dark mode + Trinity token system reference |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/docs-prototype/css/docs.css` | **Website light mode standard** — use for docs, KL admin, all reading surfaces |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/we-trinity-fullv4.html` | Trinity landing page prototype |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/we-abilities-execution-flow-v2.html` | SVG diagram reference — separate ink-scale system |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/Use Case Prototypes/we-pipeline-diagram.html` | Ability pipeline diagram |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/Use Case Prototypes/we-cohort-360.html` | Cohort 360 dashboard |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/Use Case Prototypes/we-cohort-patterns.html` | Cohort patterns dashboard |
| `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/Use Case Prototypes/we-usecase-landing.html` | Use case landing page |

---

## 11. SVG Diagram Colour System

This section governs SVG-based technical diagrams. **Separate concern from the website light mode system.**

### 11.1 The core rule

**Never use hardcoded hex values on SVG element attributes.** Use `style="fill:var(--token)"` on every SVG element.

```xml
<!-- WRONG -->
<text fill="#FFEE58">label</text>

<!-- CORRECT -->
<text style="fill:var(--note-text)">label</text>
```

Applies to every element including **marker `path` elements** inside `<defs>`.

### 11.2 Dark mode — colour-expressive

Purple = protocol layer. Green = WordPress layer.

| Element | Token | Dark value |
|---------|-------|------------|
| Actor box fill — protocol | `--actor-p-fill` | `rgba(124,58,237,0.14)` |
| Actor box stroke — protocol | `--actor-p-stroke` | `#a78bfa` |
| Actor label — protocol | `--actor-p-text` | `#a78bfa` |
| Actor box fill — WordPress | `--actor-g-fill` | `rgba(34,197,94,0.12)` |
| Actor box stroke — WordPress | `--actor-g-stroke` | `#22c55e` |
| Actor label — WordPress | `--actor-g-text` | `#22c55e` |
| Actor sub-label | `--t3` | `rgba(224,221,213,0.35)` |
| Call arrows | `--arrow-call` | `#a78bfa` |
| Return arrows | `--arrow-return` | `#22c55e` |
| Error arrows | `--arrow-error` | `#f87171` |
| Message labels — call | `--msg-call` | `#a78bfa` |
| Message labels — return | `--msg-return` | `#22c55e` |
| Message labels — error | `--msg-error` | `#f87171` |
| Message pill background | `--msg-bg` | `rgba(8,8,12,0.90)` |
| Note card text | `--t3` | `rgba(224,221,213,0.35)` |
| Note card fill | `--note-fill` | `rgba(255,238,88,0.07)` |
| Alt frame stroke | `--alt-stroke` | `rgba(124,58,237,0.32)` |
| Alt tab badge | `--alt-tab` | `#7c3aed` |
| Alt condition text | `--t3` | `rgba(224,221,213,0.35)` |

### 11.3 Light mode — ink-first

| Element | Token | Light value | Contrast |
|---------|-------|-------------|---------|
| Actor labels (all) | `--actor-p-text` / `--actor-g-text` | `#1C1915` | 15.2:1 |
| Actor sub-labels (all) | `--t3` | `#7A7268` | 4.6:1 |
| Actor box stroke (all) | `--actor-p-stroke` / `--actor-g-stroke` | `#2E2A24` | — |
| Call arrows | `--arrow-call` | `#1C1915` | ink |
| Return arrows | `--arrow-return` | `#7A7268` | muted ink |
| Error arrows | `--arrow-error` | `#B91C1C` | dark red |
| Message labels — call | `--msg-call` | `#1C1915` | ink |
| Message labels — return | `--msg-return` | `#2E2A24` | ink |
| Message labels — error | `--msg-error` | `#B91C1C` | dark red |
| Message pill background | `--msg-bg` | `rgba(232,228,220,0.96)` | warm light |
| Note card text | `--t3` | `#7A7268` | 4.6:1 |
| Note card fill | `--note-fill` | `rgba(139,105,20,0.07)` | amber tint |
| Alt frame stroke | `--alt-stroke` | `rgba(139,105,20,0.28)` | amber |
| Alt tab badge | `--alt-tab` | `#8B6914` | amber — structural only |
| Alt condition text | `--t3` | `#7A7268` | muted ink |

**Colour in light mode:** Only `--alt-tab` (amber) and `--arrow-error` (dark red). Everything else: ink.

### 11.4 Layout spec for sequence diagrams

| Parameter | Value |
|-----------|-------|
| viewBox | `0 0 1060 896` |
| Actor x-centres | `118 \| 385 \| 652 \| 920` (267px spacing) |
| Actor box | `140 × 64px` |
| Row pitch | `52px` between baselines |
| Actor main label | `16px` weight 500 |
| Actor sub-label | `13px`, `--t3` |
| Message labels | `13.5px`, weight 500 for calls |
| Note card text | `13–13.5px`, `--t3` |
| Alt condition text | `13px` italic, `--t3` |
| Alt tab badge | `11px` weight 500 |

---

## 12. Known Issues / Open Items

- Eyebrow `width` may wrap on narrow cards when text is long — add `white-space:nowrap` or reduce padding
- `cap-n` width (52px) may be tight at 14px on mobile — monitor for overflow in 2-column layouts

---

## 13. Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-27 | Initial |
| 1.1.0 | 2026-03-19 | Typography scale v1.1, contrast tokens corrected |
| 1.2.0 | 2026-03-19 | §2.5 light mode rewritten with ink-scale and solid hex values; §6.1 eyebrow light mode added; §11 SVG diagram colour system new; file locations updated; Known Issues resolved |
| 1.3.0 | 2026-03-19 | `origin` frontmatter updated with two sources; agent instruction clarified with two-source-file note; §2.5 scope note added — Trinity prototype pages only, not website standard; §10 docs-prototype/css/docs.css added as website light mode standard reference |
