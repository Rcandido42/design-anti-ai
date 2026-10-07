# Workflow 03: Anti-Slop Heuristic Scoring (Phase 3)

## Objective
Calculate a structured, comparative visual quality baseline for the target interface across 10 dimensions before any changes are made, and establish the target improvement delta.

---

## The 10-Dimension Scorecard

For each dimension, evaluate the code against `rules/07-heuristics-matrix.md` and assign an integer score from 1 to 10:

1. **Visual Identity & Character** (1–10)
   - *Check*: Does the UI have distinct branding, or does it look like an AI SaaS template with generic purple gradients?
2. **Visual Hierarchy & Focal Point** (1–10)
   - *Check*: Is there an immediate focal point, or are all cards and buttons shouting at the same volume?
3. **Typography & Typescale** (1–10)
   - *Check*: Is there a disciplined scale, controlled line lengths (45–75ch), and intentional optical tracking?
4. **Spacing & Spatial Rhythm** (1–10)
   - *Check*: Does whitespace group related elements (Gestalt proximity) or is spacing arbitrary?
5. **Color Discipline & Palette** (1–10)
   - *Check*: Does it adhere to 60-30-10, with high contrast and semantic restraint?
6. **Component Sanity & Container Debt** (1–10)
   - *Check*: Are there nested cards inside cards, oversized border-radii, or unnecessary wrapper divs?
7. **UX & Flow Clarity** (1–10)
   - *Check*: Are action affordances clear, state changes predictable, and navigation friction-free?
8. **Accessibility & Contrast** (1–10)
   - *Check*: Do text and active controls meet WCAG AA (4.5:1 text, visible focus rings)?
9. **Responsive Resilience** (1–10)
   - *Check*: Does layout adapt naturally at 375px, 768px, and 1280px without horizontal scroll?
10. **Motion & Interaction Feedback** (1–10)
    - *Check*: Are transitions snappy (<200ms ease-out), purposeful, and respectful of reduced motion?

---

## Score Calculation & Output Format

Compute the composite score:
$$\text{Composite Baseline} = \frac{\sum_{i=1}^{10} S_i}{10}$$

Record this table directly in the audit report:

```markdown
### Baseline Heuristic Scorecard
| Dimension | Baseline (1–10) | Target (1–10) | Primary Observable Defect |
| :--- | :---: | :---: | :--- |
| 1. Visual Identity | 3 | 8 | Generic purple gradient & sparkle badges |
| 2. Visual Hierarchy | 4 | 9 | 3 primary buttons competing for attention |
| 3. Typography | 4 | 8 | Body text lacks line-height and max-width |
| 4. Spacing & Rhythm | 3 | 9 | Chaotic mix of 7px, 15px, and 30px padding |
| 5. Color Discipline | 2 | 9 | 4 competing saturated colors; poor contrast |
| 6. Component Sanity | 3 | 8 | Triple-nested card boxes |
| 7. UX & Flow Clarity | 5 | 9 | Action triggers trapped inside nested tabs |
| 8. Accessibility | 3 | 9 | 2.8:1 contrast on muted labels; outline-none |
| 9. Responsiveness | 4 | 8 | Horizontal overflow at 375px mobile |
| 10. Motion & Feedback | 3 | 9 | Perpetual bouncing blob; slow 600ms transitions |
**Composite Score**: `3.4 / 10` (Target: `8.6 / 10`)
```

> **Rule**: Always communicate clearly to the user that this score is a heuristic rubric designed to measure relative refactoring progress, not an absolute automated metric.
