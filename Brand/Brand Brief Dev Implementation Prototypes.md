# Implementation Plan: Prototype Update v1.1

> **LAST REVIEWED:** 2026-03-19. See edits marked **[UPDATED]** for corrections made after the brand system was finalised. The working assumptions here were written before the ink-scale light mode principle was established — the light mode CSS block and JS toggle pattern have been corrected to match the canonical specification.

## Context summary from investigation

**What I read:**

|File|Size|Current state|
|---|---|---|
|`we-trinity-fullv4.html`|85KB|Old type scale, old contrast tokens, we-bottom-nav present, **no light mode**|
|`we-blog-proto.html`|34KB|Old contrast tokens (`--t3` at 0.22), own proto-nav for internal tabs + we-bottom-nav for site nav, **no light mode**|
|`team-page-prototype/index.html`|48KB|Completely different token system (`--color-base`, `--color-contrast` etc.), Manrope + Fira Code fonts, has dark/light toggle using `.dark-mode`/`.light-mode` classes, **but no WE brand tokens**, no we-bottom-nav dark/light toggle|
|`we-brandbook.html`|78KB|Already updated in our session (v1.1 tokens, new type scale, responsive breakpoints), **no light mode toggle**|
|`docs-prototype/index.html`|—|Has the correct we-bottom-nav with Dark/Light toggle links. **This is the reference implementation.**|

---

## Key findings

### 1. Bottom nav dark/light toggle — exists in docs only

The docs-prototype pages have this at the far right of `we-bottom-nav`:

```html
<div class="we-nav-group" style="margin-left:auto;">
  <span class="we-nav-label">Mode</span>
  <a href="#" id="mode-dark" class="we-active" onclick="setMode('dark');return false;">Dark</a>
  <a href="#" id="mode-light" onclick="setMode('light');return false;">Light</a>
</div>
```

**None of the other four files have this.** Adding it is the same operation on all four.

### 2. Trinity type scale — fully on old values

Every body copy size is pre-v1.1. Complete mapping:

|Class|Current|Target (desktop)|Notes|
|---|---|---|---|
|`body`|20px|leave|Base body is fine|
|`.hero-sub`|19px|**23px**||
|`.sp2`|18px|**22px**||
|`.cta-sub`|18px|**22px**|Same role as sp2|
|`p` (prose/seg/kl)|17px|**21px**|Two separate `p` rules|
|`.value-copy`|17px|**21px**||
|`.audience-copy`|16px|**22px**|Section sub role|
|`.layer-cta-text`|16px|**22px**||
|`.cap-desc`|15px|**21px**||
|`.tr-desc`|15px|**21px**||
|`.boot-desc`|15px|**21px**||
|`.kl-p`|17px|**21px**||
|`.eyebrow`|10px|**14px**||
|`.stat-l`|10px|**14px**||
|`.pill`|10px|**14px**||
|`.cap-n`|10px|**14px**||
|`.seg-label`|10px|**14px**||
|`.audience-label`|9px|**14px**||
|`.tr-label`|9px|**14px**||
|`.gate-label`|9px|**14px**||
|`.boot-n`|9px|**14px**||
|`.agent-role`|9px|**14px**||
|`.kl-label`|10px|**14px**||
|`.kl-doc-type`|9px|**14px**||
|`.quote-attr`|10px|**14px**||
|`.layer-cta-label`|10px|**14px**||
|`.terminal`|13px|**16px**||
|`.boot-file`|13px|**16px**||
|`.we-nav-label`|10px|leave|UI chrome|
|`a` (nav links)|13px|leave|UI chrome|
|`.btn`|16px|leave|Buttons stay|

### 3. Trinity contrast tokens — both old

```css
--t2: rgba(224,221,213,0.50)  → rgba(224,221,213,0.70)
--t3: rgba(224,221,213,0.22)  → rgba(224,221,213,0.35)
```

### 4. Trinity has no light mode at all

No `.light` CSS block, no toggle, no `prefers-color-scheme`. Needs the full light mode token set plus the bottom nav toggle.

### 5. Blog proto — has its own separate concerns

- Has a separate internal `proto-nav` for Single Post / Archive / Series tabs — **do not touch this**
- Has `we-bottom-nav` for cross-prototype navigation — **add dark/light toggle here**
- Uses `--t2: rgba(224,221,213,0.68)` (already partially updated, not 0.50) and `--t3: rgba(224,221,213,0.22)` (old)
- Font system is Syne/Manrope/JetBrains Mono — correct stack
- Body copy sizes are mostly correct prose (the blog uses a different layout system)
- No light mode CSS at all

### 6. Team page — different design system

The team page uses a completely different token system: `--color-base`, `--color-contrast`, `--color-accent-1` through `6`, Manrope + Fira Code, `clamp()`-based type scale. **This is intentionally different — it was built as a WordPress theme prototype, not a Trinity marketing page.**

It has its own toggle using `.dark-mode`/`.light-mode` classes — but **no light mode CSS rules exist**. The toggle exists, the CSS doesn't.

It has `we-bottom-nav` but no dark/light mode toggle in it.

---

## The Plan

### Scope decision

The team page should **not** be migrated to the WE brand token system — it is intentionally a separate design. However it should get: (a) light mode CSS using its existing token names, (b) the bottom nav dark/light toggle. The team page light mode will use its own `--color-*` tokens remapped to light values, not the `--t2/--t3` system.

---

### Task 1 — `we-trinity-fullv4.html`

**Complexity: HIGH. Estimated changes: ~45 specific CSS value substitutions + 1 new CSS block + 1 new JS function + 1 nav HTML fragment.**

1. **Update `:root` contrast tokens:**
    - `--t2: rgba(224,221,213,0.50)` → `rgba(224,221,213,0.70)`
    - `--t3: rgba(224,221,213,0.22)` → `rgba(224,221,213,0.35)`
2. **Add light mode token block** — see the canonical block in the section below. **[UPDATED — use the corrected block, not the old rgba version]**
3. **Update all font sizes** — the full list above (~30 rules). Target: desktop values from v1.1 scale. Add tablet 1024px and mobile 640px responsive blocks as the brandbook has.
4. **Add light mode badge/component overrides** for any hardcoded RGBA in Trinity (check if Trinity uses the same badge pattern as brandbook — if yes, same fix applies).
5. **Update `we-bottom-nav` to add the Dark/Light toggle** — use the canonical JS pattern below. **[UPDATED — use `setAttribute`, not `classList`]**
6. **Verify bottom nav links** — Trinity links to all other prototypes including docs pages. All links appear correct already.

---

### Task 2 — `we-blog-proto.html`

**Complexity: LOW. Estimated changes: contrast token + bottom nav toggle.**

1. **Update `:root` contrast token:**
    - `--t3: rgba(224,221,213,0.22)` → `rgba(224,221,213,0.35)` (--t2 is already 0.68 — close enough, but ideally → 0.70)
2. **No font size changes needed** — the blog uses a different layout and its body copy sizes appear correct for its context (it's a reading prototype, not a marketing page).
3. **Add light mode CSS block** — see the canonical block below.
4. **Add Dark/Light toggle to `we-bottom-nav`** — same JS pattern as below.
5. **Do not modify `proto-nav`** (the Single Post / Archive / Series internal tab nav).

---

### Task 3 — `team-page-prototype/index.html`

**Complexity: MEDIUM. Different token system requires custom light mode mapping.**

1. **Add light mode CSS** using the existing `.light-mode` class (already used by the JS toggle):

```css
.light-mode {
  --color-base: #F5F4F0;          /* warm off-white */
  --color-contrast: #1a1a18;      /* near-black warm */
  --color-accent-1: #FFEE58;      /* yellow stays */
  --color-accent-2: #6B4FBB;      /* purple darkened for light bg */
  --color-accent-3: #3B2A8A;      /* deep purple darker */
  --color-accent-4: #4A4A4A;      /* grey darkened */
  --color-accent-5: #F5F4F0;      /* base colour */
  --shadow-natural: 6px 6px 9px rgba(0,0,0,0.10);
  --shadow-deep: 12px 12px 50px rgba(0,0,0,0.15);
}
```

2. **Update `we-bottom-nav`** to add Dark/Light toggle. Note: team page uses `.dark-mode`/`.light-mode` class names so the toggle JS should call the existing `toggleTheme()` function rather than `setMode()` to stay in sync with the existing toggle button.
3. **Font sizes** — already uses `clamp()` responsive scale, not the fixed px scale. Leave as is.
4. **No contrast token changes** — team page doesn't use `--t2`/`--t3`.

---

### Task 4 — `we-brandbook.html`

**Complexity: LOW. Already updated to v1.1. One change only.**

1. **Add Dark/Light toggle to `we-bottom-nav`** — same JS pattern as below.

The brandbook already has:

- Correct v1.1 type scale ✓
- Correct contrast tokens (0.70 / 0.35) ✓
- Responsive breakpoints ✓

---

### [UPDATED] Canonical light mode CSS block for Trinity/Brandbook/Blog

> **Correction from original brief:** The earlier version of this block used `rgba(26,26,24,0.70)` for `--t2` and `rgba(26,26,24,0.35)` for `--t3`. These are **wrong** — opacity-based rgba computes to insufficient contrast on the warm greige background. Use solid hex values per [[Design System]] §2.5 and [[Light Mode Design Guide]] §1.

```css
[data-theme="light"] {
  --bg:    #F5F4F0;
  --bg2:   #ECEAE4;
  --text:  #1C1915;   /* solid — 15.2:1 WCAG AAA */
  --t2:    #2E2A24;   /* solid — 13.4:1 WCAG AAA — NOT rgba */
  --t3:    #7A7268;   /* solid — 4.6:1 WCAG AA  — NOT rgba */
  --t4:    rgba(28,25,21,0.10);
  --card:  rgba(255,255,255,0.80);
  --border: rgba(50,44,36,0.12);  /* warm dark channel — NOT rgba(0,0,0,x) */
  --bordh:  rgba(50,44,36,0.26);
  --gl:    rgba(0,0,0,0.03);
  --glb:   rgba(0,0,0,0.09);
  --glh:   rgba(0,0,0,0.16);
  --yd:    rgba(139,105,20,0.09);  /* amber channel replaces yellow */
  --yb:    rgba(139,105,20,0.22);
  --gd:    rgba(50,44,36,0.06);   /* neutral ink channel */
  --gb:    rgba(50,44,36,0.16);
  --pd:    rgba(50,44,36,0.06);
  --pb:    rgba(50,44,36,0.16);

  /* Eyebrow: ink in light mode — no brand colour */
  --eyebrow-color:  #1C1915;
  --eyebrow-border: rgba(50,44,36,0.20);
  --ebdot-bg:       #8B6914;  /* amber dot */
  --seclabel-color: #2E2A24;  /* section labels: ink, not brand colour */

  /* accent colour — amber replaces yellow/purple/green */
  --accent-y: #8B6914;

  /* brand colours stay for small structural use only */
  /* --y, --g, --p, --pl unchanged */
}
```

---

### [UPDATED] Canonical `setMode()` JS for `we-bottom-nav`

> **Correction from original brief:** The earlier version used `h.classList.toggle('light', ...)` / `h.classList.toggle('dark', ...)`. The canonical pattern confirmed through the prototype network is `h.setAttribute('data-theme', m)`. Use this version.

HTML fragment to add to `we-bottom-nav` before the closing `</nav>`:

```html
<div class="we-nav-sep"></div>
<div class="we-nav-group" style="margin-left:auto;">
  <span class="we-nav-label">Mode</span>
  <a href="#" id="mode-dark" class="we-active" onclick="setMode('dark');return false;">Dark</a>
  <a href="#" id="mode-light" onclick="setMode('light');return false;">Light</a>
</div>
```

JS block before `</body>`:

```javascript
function setMode(m) {
  var h = document.documentElement;
  h.setAttribute('data-theme', m);          /* canonical — not classList */
  localStorage.setItem('we-docs-theme', m);
  document.getElementById('mode-dark').classList.toggle('we-active', m === 'dark');
  document.getElementById('mode-light').classList.toggle('we-active', m === 'light');
  var lbl = document.getElementById('theme-label') || document.getElementById('tlabel');
  if (lbl) lbl.textContent = m === 'dark' ? 'Dark' : 'Light';
}
(function() {
  var saved = localStorage.getItem('we-docs-theme');
  if (saved) setMode(saved);
})();
```

---

### What to leave alone

- The `proto-nav` inside `we-blog-proto.html` (the internal Single Post/Archive/Series tabs)
- The `docs-prototype/` files — already done
- `kl-admin/` files — already done
- Team page font sizes and clamp scale
- All nav link hrefs — they are already correct across all files
- The `we-bottom-nav` CSS style itself — the existing style is correct, only adding the toggle HTML

---

## Section 5 — Use Case Prototypes

**Directory:** `/Users/wicked/Documents/01 Projects/wickedevolutions.com/Prototype/Use Case Prototypes/`

**Four files:**

|File|Size|Role|
|---|---|---|
|`we-pipeline-diagram.html`|32KB|5-call pipeline diagram — the documented session|
|`we-cohort-360.html`|29KB|Cohort 360 dashboard — roster, charts, filters|
|`we-cohort-patterns.html`|27KB|Cohort patterns — funnel, signals, time-to-purchase|
|`we-usecase-landing.html`|57KB|Use case landing page — the meta-show|

---

### Current state audit

|File|Light mode tokens|`data-theme` toggle|Bottom nav|Font scale|
|---|---|---|---|---|
|`we-pipeline-diagram.html`|✅ Full `[data-theme="light"]` block|✅ Yes|❌ None|Old (17px prose, 10px labels)|
|`we-cohort-360.html`|✅ Full `[data-theme="light"]` block + tint overrides|✅ Yes|❌ None|Old (16px page-sub, 9px labels)|
|`we-cohort-patterns.html`|✅ Full `[data-theme="light"]` block + tint overrides|✅ Yes|❌ None|Old (16px page-sub, 9px labels)|
|`we-usecase-landing.html`|✅ Full `[data-theme="light"]` block + tint overrides|✅ Yes|❌ None|Old (19px hero-sub, 17px body, 10px labels)|

**Dark mode contrast tokens — all four files need updating:**

|File|`--t2`|`--t3`|
|---|---|---|
|`we-pipeline-diagram.html`|`rgba(224,221,213,0.50)` ← old|`rgba(224,221,213,0.22)` ← old|
|`we-cohort-360.html`|`rgba(224,221,213,0.50)` ← old|`rgba(224,221,213,0.22)` ← old|
|`we-cohort-patterns.html`|`rgba(224,221,213,.50)` ← old|`rgba(224,221,213,.22)` ← old|
|`we-usecase-landing.html`|`rgba(224,221,213,.50)` ← old|`rgba(224,221,213,.22)` ← old|

**Light mode tokens — existing blocks:** These files have `[data-theme="light"]` blocks that use opacity-based `rgba(26,26,24,x)` for `--t2` and `--t3`. These were written before the ink-scale principle was established. When updating, also correct these to solid hex values per the canonical block above.

**[UPDATED — reference implementation changed]** ~~This is the best light mode implementation in the whole prototype network — use these files as the reference.~~ The canonical reference implementation for light mode is now `we-abilities-execution-flow-v2.html` — the architecture sequence diagram. This file has the complete ink-scale light mode system with solid hex text tokens, token-driven SVG colours, and the correct `data-theme` attribute pattern.

**One gap in `we-pipeline-diagram.html`:** Missing tint overrides for `--yd`, `--yb`, `--gd`, `--gb`, `--pd`, `--pb`, `--gl`, `--glb`, `--glh`. The other three files have these.

---

### What needs to be done

**Task 5 — Use Case Prototypes. Complexity: LOW.**

#### 5a. All four files — contrast token update in dark block

```css
--t2: rgba(224,221,213,0.70);   /* was 0.50 */
--t3: rgba(224,221,213,0.35);   /* was 0.22 */
```

#### 5b. All four files — light mode text tokens

Also update existing `[data-theme="light"]` blocks: change `--t2` and `--t3` from opacity-based rgba to solid hex:

```css
--t2: #2E2A24;   /* was rgba(26,26,24,0.70) or similar */
--t3: #7A7268;   /* was rgba(26,26,24,0.35) or similar */
```

#### 5c. `we-pipeline-diagram.html` — add missing light mode tint overrides

Add to the existing `[data-theme="light"]` block:

```css
--gl:  rgba(0,0,0,0.03);
--glb: rgba(0,0,0,0.09);
--glh: rgba(0,0,0,0.16);
--yd:  rgba(139,105,20,0.09);   /* amber channel */
--yb:  rgba(139,105,20,0.22);
--gd:  rgba(50,44,36,0.06);     /* neutral ink channel */
--gb:  rgba(50,44,36,0.16);
--pd:  rgba(50,44,36,0.06);
--pb:  rgba(50,44,36,0.16);
```

#### 5d. All four files — add `we-bottom-nav` with Dark/Light toggle

Use the canonical `setMode()` pattern defined above. All four files are in `Use Case Prototypes/` — use `../` prefix for paths to the main Prototype folder.

Per-file active link (add one line at end of script):

- `we-usecase-landing.html`: `document.getElementById('uc-landing').classList.add('we-active');`
- `we-pipeline-diagram.html`: `document.getElementById('uc-pipeline').classList.add('we-active');`
- `we-cohort-360.html`: `document.getElementById('uc-360').classList.add('we-active');`
- `we-cohort-patterns.html`: `document.getElementById('uc-patterns').classList.add('we-active');`

---

### Implementation order

1. `we-pipeline-diagram.html` — contrast tokens + light mode solid hex + tint overrides + nav
2. `we-cohort-360.html` — contrast tokens + light mode solid hex + nav
3. `we-cohort-patterns.html` — contrast tokens + light mode solid hex + nav
4. `we-usecase-landing.html` — contrast tokens + light mode solid hex + nav

Then Tasks 1–4 (Trinity, Blog, Brandbook, Team): all `we-bottom-nav` instances in the main prototype folder need the Use Cases group added as a third nav group.

---

### Reference files

| File | Role |
|------|------|
| `we-abilities-execution-flow-v2.html` | **Canonical reference** — complete ink-scale SVG light mode, `data-theme` attribute pattern, correct `setMode()` JS |
| `docs-prototype/index.html` | Reference for `we-bottom-nav` structure and cross-prototype links |
| `we-brandbook.html` | Reference for v1.1 dark mode token system and responsive type scale |
