# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-10-07

### Added
- **Core Agent Skill (`SKILL.md`)**: Full 7-phase execution pipeline (Discovery, Visual Audit, Heuristic Scoring, Design Direction, Implementation, Visual QA, Iteration).
- **Dispatch Commands**: Support for `/anti-slop audit`, `/anti-slop review`, `/anti-slop fix`, and `/anti-slop iterate`.
- **7 Modular Rules**:
  - `01-layout-and-composition.md`: Asymmetry, spatial grouping, responsive re-orchestration.
  - `02-typography-systems.md`: Harmonic scales, optical tracking, leading formula.
  - `03-color-and-contrast.md`: 60-30-10 rule, functional palettes, WCAG AA compliance.
  - `04-components-and-cards.md`: Container debt elimination, proportional border-radii, button hierarchy.
  - `05-motion-and-interaction.md`: Functional feedback budget (<200ms), reduced motion respect.
  - `06-content-and-copy.md`: Eradication of AI placeholder buzzwords.
  - `07-heuristics-matrix.md`: 10-dimension calibrated scoring rubric.
- **7 Operational Workflows**: Clear step-by-step procedures for each phase.
- **12 Design Archetypes**: Technical Console, Editorial, Minimal Swiss, Industrial, Premium, Playful, Cinematic, Retro-Modern, Corporate, Cyber, Brutalist, Experimental.
- **Ready-to-Use Templates**:
  - `audit-report-template.md`: Structured Markdown diagnostic output.
  - `design-tokens-template.css`: Universal CSS custom properties.
  - `design-tokens-tailwind.js`: Tailwind theme extension preset.
  - `design-spec-template.md`: Architectural design decision record.
- **Zero-Dependency CLI (`bin/anti-slop.mjs`)**: Native Node.js static analyzer detecting 8 automated slop smells and computing composite quality scores.
- **Full Test Suite (`tests/slop-detector.test.mjs`)**: Verified against real sloppy and clean UI fixtures.
- **Real-World Case Studies**:
  - `examples/saas-dashboard`: Before & After code with line-by-line diff breakdown.
  - `examples/landing-hero`: Before & After React JSX components with metric impact.
