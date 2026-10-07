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
Evaluate the existing interface across 10 distinct heuristic dimensions. These are calibrated heuristics used to measure tangible progress before and after remediation:

| Dimension | 1–3 (Slop / Broken) | 4–7 (Standard Template) | 8–10 (Deliberate & Masterful) |
| :--- | :--- | :--- | :--- |
| **Visual Identity** | Indistinguishable AI template | Clean but generic boilerplate | Distinct brand personality, memorable motifs |
| **Visual Hierarchy** | Flat, competing elements | Acceptable top-to-bottom flow | Flawless eye travel, clear primary focal point |
| **Typography** | Default sans, random sizing | Systematic scale, standard rhythm | Expressive pairings, strict measure & leading |
| **Spacing & Rhythm** | Arbitrary pixels, cramming | Basic 4px/8px grid | Harmonious breathing room, intentional density |
| **Color Discipline** | Multi-gradient soup, no role | Brand color + gray scale | Strict 60-30-10, functional semantic palette |
| **Component Sanity** | Nested cards, excessive pills | Standard UI kit library | Purposeful containers, minimal container debt |
| **UX & Navigation** | Confusing affordances | Standard functional layout | Obvious interaction paths, effortless orientation |
| **Accessibility** | Low contrast, missing focus | Passes basic automated checks | WCAG 2.1 AA/AAA compliant, full keyboard states |
| **Responsiveness** | Mobile horizontal scroll, broken | Flex/Grid stacks passably | Content re-orchestrated fluidly per breakpoint |
| **Motion & States** | Gratuitous bounce/spin blobs | Standard hover transitions | Purposeful feedback (<200ms), reduced-motion safe |

*Calculate the baseline average: `Total / 10`. Clearly state this is a comparative heuristic benchmark.*

### Phase 4: Design Direction Selection
Before altering code, select one intentional aesthetic archetype tailored to the specific product and audience. **Never pick a direction at random.**

1. **Technical / Console**: Dense, monospace accents, subtle grid lines, high-contrast dark mode, data-rich tables (ideal for devtools, analytics, infrastructure).
2. **Editorial / Publication**: High-contrast serif headlines, generous line spacing, asymmetric multi-column layouts, disciplined monochrome palette with one editorial accent (ideal for blogs, news, thought leadership).
3. **Minimal Swiss**: Strict grid, objective grotesque typography (Inter/Geist/Helvetica), zero decorative gradients, razor-sharp borders, white-space driven (ideal for enterprise productivity, utilities).
4. **Industrial / Utility**: Sturdy borders, tactile physical toggles, high visibility status indicators, amber/safety yellow accents, muted grays (ideal for hardware dashboards, logistics, tooling).
5. **Premium / Refined**: Subtle stone/warm neutrals, refined tracking (`letter-spacing`), bespoke serif accents, quiet borders, tactile micro-interactions (ideal for luxury, fintech, fine craftsmanship).
6. **Playful / Punchy**: Bold high-saturation accent, expressive curves, crisp offset shadows, friendly humanist sans typography, personality-rich microcopy (ideal for creator tools, educational platforms).
7. **Cinematic**: Deep blacks (`#0a0a0c`), sharp focus lighting, high-fidelity imagery, minimal surface borders, theater-grade contrast (ideal for media, portfolio, AI creative tools).
8. **Retro-Modern**: Dithered textures, monospaced tabular data, 90s OS precision fused with modern smooth layout (ideal for niche indie projects, music apps).

*State the selected direction and explain why it fits the product before beginning implementation.*

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
1. **Run Static Checks**: Run `npm test`, `npm run build`, or type-checkers to verify no syntax or compilation breakage.
2. **Check Viewport Resilience**:
   - Mobile: 375px width (no horizontal overflow, tap targets ≥ 44px).
   - Tablet: 768px width (responsive grid wraps cleanly).
   - Desktop: 1280px+ width (readable measure, line length ≤ 75 characters).
3. **Contrast Audit**: Re-verify text against its background (minimum 4.5:1 for body, 3:1 for large headlines).
4. **Tooling Disclosure**: If browser tools or screenshot tools are available, capture and inspect the rendered view. If unavailable, explicitly state that visual inspection was verified via static code analysis.

### Phase 7: Iteration Loop Protocol
If running `/anti-slop iterate` or further refining:
- Maximum 3 cycles per session to prevent infinite editing loops.
- In each cycle: Identify residual defect → Explain rationale → Apply targeted patch → Recalculate score.
- Terminate once the heuristic score reaches ≥ 8.5/10 or all `CRITICAL` and `HIGH` issues are cleared.

---

## 4. The Anti-Slop Non-Negotiables

- **Never** add new third-party UI libraries (e.g., shadcn, mui, chakra) unless specifically requested by the user. Work within the project's existing toolchain.
- **Never** replace an existing component library just for aesthetic preference.
- **Never** apply full-width gradients behind blocks of dense reading text.
- **Never** use `backdrop-filter: blur()` without checking background contrast and fallback legibility.
- **Never** put sparkle emojis (`✨`) on buttons unless it literally triggers an AI feature that the user requested.
- **Never** use generic gray-on-gray (`#9ca3af` on `#1f2937`) for critical metadata or secondary labels.
- **Never** sacrifice keyboard navigation for custom visual widgets. Always preserve or add `focus-visible:ring-2`.

---

## 5. Standard Output Template for `/anti-slop audit`

When providing an audit report, use this exact structure:

```markdown
# Anti-Slop Design Audit Report

## 1. Executive Summary & Stack Recon
- **Detected Stack**: [Framework + Styling Solution]
- **Target Surfaces**: [Files/Components audited]
- **Current Aesthetic**: [e.g., Generic AI SaaS / Purple Gradient Blur]
- **Recommended Direction**: [e.g., Technical Console / Minimal Swiss]

## 2. Heuristic Quality Scorecard
| Dimension | Baseline Score | Target Score | Primary Symptom |
| :--- | :---: | :---: | :--- |
| Visual Identity | X/10 | 8/10 | ... |
| Visual Hierarchy | X/10 | 9/10 | ... |
| Typography | X/10 | 8/10 | ... |
| Spacing & Rhythm | X/10 | 9/10 | ... |
| Color Discipline | X/10 | 9/10 | ... |
| Component Sanity | X/10 | 8/10 | ... |
| UX & Navigation | X/10 | 9/10 | ... |
| Accessibility | X/10 | 9/10 | ... |
| Responsiveness | X/10 | 8/10 | ... |
| Motion & States | X/10 | 9/10 | ... |
**Composite Score**: `X.X / 10`

## 3. Prioritized Defects Matrix
### Critical Issues
- **[CRIT-1] Issue Title**: Description, affected file/line, rationale, and specific fix.
### High Priority Issues
- **[HIGH-1] Issue Title**: Description, affected file/line, rationale, and specific fix.
### Medium & Low Issues
- **[MED-1] Issue Title**: ...

## 4. Proposed Design Tokens & Palette
[Concrete CSS variables or Tailwind theme extension]

## 5. Actionable Implementation Plan
- [ ] Step 1: ...
- [ ] Step 2: ...
- [ ] Step 3: ...
```

---

*Reference the companion guides in `rules/`, `workflows/`, and `examples/` for deep dive patterns.*
