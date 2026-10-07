# Anti-Slop Design

> **An open-source skill and framework for coding agents (Antigravity, Claude Code, Codex, Cursor) to diagnose and transform generic AI-generated interfaces into intentional, high-character designs.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)](package.json)
[![Node.js Tests](https://img.shields.io/badge/tests-node%3Atest-success.svg)](tests/)

---

## The Problem

Code generation models are remarkably effective at writing functional UI code, but visually, they have converged on a predictable, generic aesthetic known as **AI Slop**:

- **The Purple Nebula**: Excessive `#6366f1` / `#8b5cf6` radial gradients and CPU-heavy blurred background blobs behind text.
- **Card-in-Card Nesting**: Wrapping every stat, button, and paragraph in its own bordered, glassmorphic box.
- **Radius Overdrive**: Applying `rounded-3xl` (24px) indiscriminately to tiny buttons, data tables, and modal dialogs.
- **Typographic Flaccidity**: Monotonous font sizes with poor line-height and unconstrained 1400px paragraph widths.
- **Button Identity Crisis**: Five primary gradient buttons on a single view shouting for equal attention.
- **Hollow Microcopy**: Sycophantic placeholder text (*"Supercharge your synergy seamlessly"*).
- **Accessibility Failures**: Suppressed focus outlines (`outline-none`) and washed-out contrast ratios under 3:1.

The fundamental principle of Anti-Slop Design is:

> *"Do not make the design look less modern. Make it look like someone made deliberate design decisions."*

---

## What Anti-Slop Design Does

Anti-Slop Design is a modular agent skill that embeds directly into your coding assistant's runtime. During development, it guides the agent to:

1. **Inspect before modifying**: Discover the stack, entry points, typography, and tokens without touching code.
2. **Catalog visual smells**: Detect specific antipatterns categorized by severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`).
3. **Score interface quality**: Measure progress using a calibrated 10-dimension heuristic rubric (1–10 scale).
4. **Select an intentional archetype**: Match product context to one of 12 purposeful directions (e.g., Technical Console, Editorial Serif, Minimal Swiss, Industrial Utility).
5. **Safely refactor**: Apply incremental, token-backed styling improvements while strictly preserving event handlers, state hooks, and component APIs.
6. **Prevent regressions**: Verify responsive breakpoints (375px mobile, 768px tablet, 1280px desktop) and WCAG AA contrast.

---

## Before & After Demonstration

Real example from `examples/saas-dashboard`:

```
BEFORE (AI Slop Template)                AFTER (Technical Console Archetype)
┌─────────────────────────────────────┐  ┌─────────────────────────────────────┐
│  🟣 [Blurred Radial Glow Blob]     │  │ ops-runtime / us-east-1a   ● Healthy│
│                                     │  │                                     │
│  ✨ AI POWERED CLOUD v3.0 🔥        │  │ Cluster Telemetry & Routing         │
│  Supercharge Intelligent Workflows  │  │ Ingress across 14 active edge pods. │
│                                     │  │                                     │
│  [ Deploy 🚀 ]   [ Explore ✨ ]     │  │ [ Export Metrics ]  [Deploy Revision]
│                                     │  │                                     │
│  ┌─ Outer Glass Card ─────────────┐ │  │ ┌─ Ingress ──┬─ Latency ─┬─ Status ┐│
│  │ ┌─ Stat 1 ─┐ ┌─ Stat 2 ──────┐ │ │  │ │  1.42M/s   │  3.4ms    │  0.002% ││
│  │ │ 99.8% ⚡ │ │ 1,420k 🔮     │ │ │  │ └────────────┴───────────┴─────────┘│
│  │ └──────────┘ └───────────────┘ │ │  │                                     │
│  │ ┌─ Nested Panel ─────────────┐ │ │  │ Node Identifier  Zone    Memory CPU │
│  │ │ Cluster Alpha [Scale][Purge]│ │  │ pod-worker-01a  us-east 1.2GB  24%  │
│  │ └────────────────────────────┘ │ │  │ pod-worker-02a  us-east 2.8GB  68%  │
│  └────────────────────────────────┘ │  └─────────────────────────────────────┘
```

| Metric / Attribute | Before (Slop) | After (Refactored) |
| :--- | :---: | :---: |
| **Heuristic Score** | `3.0 / 10` | `8.9 / 10` |
| **Dominant Palette** | Purple/Pink/Indigo Gradient | Crisp `#09090b` Slate Canvas + Emerald Telemetry |
| **Container Debt** | 3 Levels of Nested Glass Cards | Flat KPI Grid Strip + Structured Data Table |
| **Button Hierarchy** | 2 Identical Gradient Pills | 1 Primary Solid + 1 Secondary Bordered |
| **Text Contrast** | 3.2:1 (Fails WCAG AA) | 7.8:1 (Passes WCAG AAA) |
| **CPU Overhead** | Continuous 80px blur animation | Zero background filter repaint |

Detailed case studies with full HTML/CSS/React code are in [`examples/`](examples/).

---

## Quick Install via `npx`

Install the Anti-Slop Design skill directly into your project in one command:

```bash
# Auto-detects your agent (Antigravity, Claude Code, Cursor) and installs the skill:
npx anti-slop init

# Or install for all supported agent environments:
npx anti-slop init --all
```

You can also run instant audits without installing anything:

```bash
# Run heuristic UI audit on any file or directory:
npx anti-slop audit src/components/Dashboard.tsx
```

---

## Installation by Platform

### 1. Zero-Config `npx` (Recommended)
Run `npx anti-slop init` in your project root. The installer automatically detects whether you are using Google Antigravity, Claude Code, or Cursor and places the skill files accordingly.

### 2. Google Antigravity
The skill is compatible with Antigravity out of the box:
```bash
# Automated:
npx anti-slop init

# Or manual copy:
mkdir -p .agent/skills/anti-slop-design
cp path/to/SKILL.md .agent/skills/anti-slop-design/
```
Antigravity automatically discovers and activates the skill from `.agent/skills/`.

### 3. Claude Code
```bash
# Automated:
npx anti-slop init --claude
```
This copies `SKILL.md` to `.claude/skills/anti-slop-design/SKILL.md` and links it in your `CLAUDE.md`.

### 4. Cursor & Windsurf
```bash
# Automated:
npx anti-slop init --cursor
```
This generates `.cursor/rules/anti-slop-design.mdc`.

### 5. Standalone CLI & CI/CD
You can run the bundled zero-dependency smell detector directly:

```bash
# Audit a specific component or directory
npx anti-slop audit src/components/Dashboard.tsx
# Or with local node:
node ./bin/anti-slop.mjs audit .

# Audit entire project
node ./bin/anti-slop.mjs audit .
```

---

## Agent Command Modes

The skill supports 4 discrete execution modes:

### `/anti-slop audit`
*Read-only diagnostic mode.*  
Scans the specified view, catalogs all antipatterns by severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`), calculates the 10-dimension baseline score, and outputs a formatted report using [`templates/audit-report-template.md`](templates/audit-report-template.md). **Does not touch code.**

### `/anti-slop review`
*Interactive planning mode.*  
Proposes the best design archetype for the product context (e.g. Minimal Swiss, Editorial, Technical), outlines proposed color/spacing tokens, and presents a concrete change diff for user approval before making modifications.

### `/anti-slop fix`
*Incremental refactoring mode.*  
Applies targeted, token-backed improvements to markup and styles. Modifies components incrementally, enforces keyboard focus states, removes nested containers, and runs build verification immediately.

### `/anti-slop iterate`
*Bounded refinement loop.*  
Executes an **Audit → Fix → Verify → Improve** cycle capped at a maximum of 3 iterations. Automatically terminates when the heuristic score reaches ≥ 8.5/10 or all critical issues are resolved.

---

## The 7-Phase Execution Pipeline

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

1. **[Phase 1: Discovery](workflows/01-discovery.md)**: Detect framework, CSS engine, typography imports, and target component tree without editing.
2. **[Phase 2: Visual Audit](workflows/02-visual-audit.md)**: Categorize defects under `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`.
3. **[Phase 3: Heuristic Scoring](workflows/03-scoring.md)**: Rate 10 dimensions from 1 to 10 against observable patterns.
4. **[Phase 4: Design Direction](workflows/04-design-direction.md)**: Select one of 12 distinct archetypes grounded in product reality.
5. **[Phase 5: Implementation](workflows/05-implementation.md)**: Refactor code while protecting 100% of event handlers, state hooks, and APIs.
6. **[Phase 6: Visual QA](workflows/06-visual-qa.md)**: Verify mobile (375px), tablet, and desktop viewports, contrast, and focus outlines.
7. **[Phase 7: Iteration](workflows/07-iteration-loop.md)**: Bounded micro-refinement loop with strict termination criteria.

---

## Repository Structure

```
anti-slop-design/
├── SKILL.md                          # Main agent skill definition (YAML frontmatter)
├── README.md                         # Project documentation
├── LICENSE                           # MIT License
├── CONTRIBUTING.md                   # Contribution guidelines
├── CHANGELOG.md                      # Release history
├── package.json                      # CLI metadata and test scripts
│
├── bin/
│   └── anti-slop.mjs                 # Zero-dependency Node.js heuristic analyzer
│
├── rules/                            # Modular design rules
│   ├── 01-layout-and-composition.md  # Spatial grouping, asymmetry, layout cadence
│   ├── 02-typography-systems.md      # Harmonic scales, line length, optical tracking
│   ├── 03-color-and-contrast.md      # 60-30-10 palette, WCAG AA, functional accents
│   ├── 04-components-and-cards.md    # Container debt elimination, button hierarchy
│   ├── 05-motion-and-interaction.md  # Purposeful motion (<200ms), reduced motion
│   ├── 06-content-and-copy.md        # Concrete value propositions, microcopy
│   └── 07-heuristics-matrix.md       # 10-dimension calibrated scoring rubric
│
├── workflows/                        # Step-by-step agent operational guides
│   ├── 01-discovery.md
│   ├── 02-visual-audit.md
│   ├── 03-scoring.md
│   ├── 04-design-direction.md
│   ├── 05-implementation.md
│   ├── 06-visual-qa.md
│   └── 07-iteration-loop.md
│
├── templates/                        # Reusable output and system templates
│   ├── audit-report-template.md      # Standard audit report format
│   ├── design-tokens-template.css    # CSS custom properties template
│   ├── design-tokens-tailwind.js     # Tailwind preset template
│   └── design-spec-template.md       # Architectural decision record
│
├── docs/                             # Deep-dive documentation
│   ├── manifesto.md                  # Philosophy against UI homogenization
│   ├── slop-taxonomy.md              # 20 cataloged AI slop antipatterns
│   ├── design-directions.md          # 12 aesthetic archetypes catalog
│   └── agent-prompts.md              # Tested prompts for Claude, Codex, Cursor
│
├── examples/                         # Real before/after case studies
│   ├── saas-dashboard/               # Sloppy dashboard transformed to Technical Console
│   └── landing-hero/                 # Generic hero transformed to Editorial Split
│
└── tests/                            # Automated verification test suite
    ├── slop-detector.test.mjs        # Native node:test suite
    └── fixtures/
        ├── sloppy-dashboard.html     # Negative test fixture (contains smells)
        └── clean-dashboard.html      # Positive test fixture (clean console)
```

---

## Current Limitations

- **Subjective Aesthetic Nuance**: While static analysis can detect explicit antipatterns (gradients, missing focus, nested cards, buzzwords), high-level art direction requires human or LLM contextual judgment.
- **Screenshot Feedback Dependency**: Visual QA performs thorough static CSS/DOM analysis, but pixel-level visual layout regression checks benefit from headless browser tooling (e.g. Playwright or Chrome DevTools MCP) when available in the agent runtime.
- **Framework Diversity**: The static analyzer currently inspects standard HTML, CSS, JSX, TSX, Vue, and Svelte class patterns; deep styled-components runtime interpolations may require manual inspection.

---

## Contributing

We welcome contributions of new rules, new design archetypes, test fixtures, and CLI improvements. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our testing workflow and code of conduct.

```bash
# Clone the repository
git clone https://github.com/your-username/anti-slop-design.git

# Run automated tests
npm test
```

---

## License

Released under the [MIT License](LICENSE).
