---
name: anti-slop-design
description: >-
  Audits web user interfaces (human-written or AI-generated) for generic "AI slop" antipatterns
  and guides coding agents to transform them into intentional, distinctive, production-grade
  designs with strong visual hierarchy, accessible contrast, and cohesive identity without
  breaking application logic.
---

# Anti-Slop Design: Agent Skill

> **Core Philosophy**: *"Do not make the design look less modern. Make it look like someone made deliberate design decisions."*

This skill equips coding agents (Antigravity, Claude Code, OpenAI Codex, Cursor) with a systematic framework to diagnose and remediate generic, template-cliché, or AI-generated user interfaces. It enforces restraint, hierarchy, brand identity, and accessibility while strictly preserving underlying business logic, component APIs, and application state.

---

## 1. Quick Command Dispatch

When the user invokes an anti-slop command, route immediately to the matching operational mode:

| Command | Action Mode | Modifies Code? | Primary Artifact |
| :--- | :--- | :--- | :--- |
| `/anti-slop audit` | **Review & Diagnostic** | **NO** | Markdown Audit Report with Heuristic Scores and Recommendations |
| `/anti-slop review` | **Interactive Planning** | **NO** | Proposed Design Direction, Token Plan, and Diff Blueprint |
| `/anti-slop fix` | **Incremental Refactor** | **YES** | Discrete, verifiable edits with immediate lint/type/visual check |
| `/anti-slop iterate` | **Bounded Feedback Loop**| **YES** | Audit → Fix → Verify loop (capped at max 3 iterations) |

If no subcommand is passed (e.g., `audit this UI with anti-slop`), default to **`/anti-slop audit`** first to ensure changes are agreed upon before modifying code.

---

## 2. The 10 AI Slop Antipatterns

Agents must evaluate the interface against these recurring AI generation clichés:

1. **The Purple/Indigo Nebula**: Overuse of `#6366f1` / `#8b5cf6` radial gradients, blurred background blobs, and glowing multi-color borders.
2. **Card-in-Card Nesting**: Wrapping every label, stat, text snippet, and button into independent rounded containers with gratuitous borders.
3. **Pill & Radius Overdrive**: Applying `rounded-3xl` or `border-radius: 24px+` indiscriminately to data tables, input bars, cards, and modal dialogs.
4. **Frosted Glass Soup**: Inappropriate `backdrop-blur-*` applied everywhere, causing muddy contrast, illegible text, and severe GPU repaints.
5. **Typographic Flaccidity**: Monotonous font scale where H1, H2, H3, and body text blur together with weak optical weight difference, lacking a defined type scale.
6. **The Predictable SaaS Hero**: Centered badge with sparkle emoji (`✨ AI Powered v2.0`), 3-line generic title, two identical-width buttons, and a floating skewed dashboard screenshot.
7. **Hollow Microcopy**: Sycophantic, buzzword-dense placeholder copy (*"Supercharge your team's workflow seamlessly with next-gen synergy"*).
8. **Button Identity Crisis**: Primary, secondary, filter, and destructive buttons sharing the exact same visual weight, gradient, or height.
9. **Unanchored Drop Shadows**: Large, muddy black/gray shadows (`box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)`) with no lighting consistency.
10. **Boring Perfect Symmetry**: Rigidly centered layouts where an asymmetrical, content-informed composition would communicate clarity and speed.

---

## 3. The 7-Phase Execution Pipeline

Every invocation must follow this sequential progression.

```
PHASE 1: DISCOVERY ───────► PHASE 2: VISUAL AUDIT ───────► PHASE 3: SCORING
     (Read-Only)                 (Symptom Catalog)             (Heuristic Rubric)
                                                                       │
PHASE 6: VISUAL QA ◄─────── PHASE 5: IMPLEMENTATION ◄───── PHASE 4: DIRECTION
  (Verification)                (Surgical Fixes)              (Archetype Selection)
         │
         ▼
PHASE 7: ITERATION (Max 3 cycles if requested)
```

### Phase 1: Discovery (Strictly Read-Only)
Before editing any file, inspect the project context:
- **Stack Detection**: Identify React, Next.js, Vue, Svelte, Astro, Vite, or vanilla HTML/CSS.
- **Styling Architecture**: Determine whether Tailwind CSS, CSS Modules, Styled Components, Emotion, or plain CSS is used. Check `tailwind.config.*`, `globals.css`, or design token files.
- **Typography & Assets**: Locate font imports (`@next/font`, Google Fonts, local `@font-face`), icon libraries (Lucide, Radix, Heroicons, FontAwesome), and media folders.
- **Component Hierarchy**: Map the target view's layout component, page entry point, and child sub-components.
- **Test & Lint Suite**: Check whether tests (`npm test`, `vitest`, `playwright`) or linters (`eslint`, `biome`) are present to ensure zero regressions.

### Phase 2: Visual Audit
Perform a systematic line-by-line inspection of styles and markup. Classify every detected defect under one of four severity tiers:

- **`CRITICAL`**: Severe usability or accessibility failures (WCAG contrast < 3:1 for text, hidden overflowing content on mobile, unreadable blurred backgrounds, unusable touch targets < 44px).
- **`HIGH`**: Strong AI slop signatures (multiple competing gradients, card-in-card nesting, lack of optical typographic hierarchy, identical primary/secondary buttons).
- **`MEDIUM`**: Visual clutter, inconsistent spacing (mixing 6px, 13px, 19px arbitrary padding), lack of interactive focus/hover states.
- **`LOW`**: Micro-polish items (badge restraint, microcopy sharpening, sub-pixel border alignment).

Every logged finding must contain:
1. **Defect Name & Severity**
2. **File & Line Reference**
3. **The "Why It's Slop" Rationale**
4. **Concrete Fix Recommendation**

### Phase 3: Anti-Slop Heuristic Scoring (1–10)
Evaluate the existing interface across 10 distinct heuristic dimensions:
- Visual Identity (1–10)
- Visual Hierarchy (1–10)
- Typography (1–10)
- Spacing & Rhythm (1–10)
- Color Discipline (1–10)
- Component Sanity (1–10)
- UX & Navigation (1–10)
- Accessibility (1–10)
- Responsiveness (1–10)
- Motion & States (1–10)

*Calculate the baseline average: `Total / 10`. Clearly state this is a comparative heuristic benchmark.*

### Phase 4: Design Direction Selection
Before altering code, select one intentional aesthetic archetype tailored to the specific product and audience:
- **Technical / Console** (devtools, infrastructure, data-dense)
- **Editorial / Publication** (blogs, news, essays, high-contrast serif)
- **Minimal Swiss** (strict grid, objective grotesque type, razor borders)
- **Industrial / Utility** (tactile controls, sturdy borders, safety accents)
- **Premium / Refined** (stone neutrals, refined tracking, quiet borders)
- **Playful / Punchy** (high-saturation accents, expressive curves, offset shadows)
- **Cinematic** (deep blacks, spotlight contrast, minimal borders)
- **Retro-Modern** (dithered textures, monospaced data, 90s OS precision)

### Phase 5: Implementation Rules & Guardrails
When authorized to execute changes (`/anti-slop fix` or `/anti-slop iterate`):
1. **Zero Functional Destruction**: Never delete, comment out, or alter form actions, click handlers, API fetches, state hooks, or component prop interfaces.
2. **Incremental Surgical Edits**: Modify one component or one CSS module at a time. Never replace an entire multi-hundred line file in a single unvetted stroke if targeted edits suffice.
3. **Token Consolidation**: Define reusable design tokens (CSS variables or Tailwind theme extensions) for font families, radii, and core colors rather than scattering arbitrary hex codes.
4. **Remove Container Debt**: If a card has no semantic boundary need, strip the border and background; let negative space and typographic hierarchy separate the sections.
5. **State Completeness**: Ensure every interactive element has defined `:hover`, `:focus-visible`, `:active`, and `:disabled` styles.
6. **Microcopy Cleansing**: Rewrite generic AI placeholder text into grounded, factual, user-facing instructions.

### Phase 6: Visual QA & Regression Check
Immediately after modifying code:
1. Run static checks (`npm test`, `npm run build`, lint).
2. Check viewport resilience (375px mobile, 768px tablet, 1280px+ desktop).
3. Check contrast against WCAG AA requirements.
4. Document tooling disclosure (screenshot tooling if active, otherwise static code analysis).

### Phase 7: Iteration Loop Protocol
- Limit to max 3 cycles.
- Bounded stopping criteria: heuristic score ≥ 8.5/10 and zero critical/high defects remaining.
