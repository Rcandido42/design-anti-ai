# Workflow 02: Visual Audit & Defect Catalog (Phase 2)

## Objective
Thoroughly inspect the target view's markup, styles, and asset usage to detect visual bugs, UX friction, and AI-slop anti-patterns.

---

## The Audit Inspection Checklist

### 1. Layout & Composition
- [ ] Is there an overuse of centered containers?
- [ ] Are elements forced into identical 3-column card grids?
- [ ] Is there dead space on wide desktop displays (>1440px)?
- [ ] Does any container trigger horizontal overflow on mobile viewports (<375px)?

### 2. Typography
- [ ] Are headings clearly differentiated in optical weight and size from body text?
- [ ] Is line-height on large headlines too loose (`>1.3`)?
- [ ] Is line-height on body text too tight (`<1.4`)?
- [ ] Does any body paragraph exceed 75 characters in line length?
- [ ] Are font sizes scattered across more than 5 distinct values without a modular scale?

### 3. Color & Contrast
- [ ] Does any text fail WCAG AA contrast (4.5:1 for body, 3:1 for large text)?
- [ ] Are there arbitrary multi-color gradient texts (`bg-clip-text`)?
- [ ] Is dark mode muddy (#000 background with dark gray low-contrast text)?
- [ ] Is there a purple/indigo glow or background blob serving no functional purpose?

### 4. Components & Containers
- [ ] Are cards nested inside other cards?
- [ ] Are border radii excessively large (`rounded-3xl` / `24px+`) on small elements?
- [ ] Do primary and secondary buttons share the same visual weight or color?
- [ ] Are badges overused with hype tags (`✨ AI`, `NEW`, `BETA`)?

### 5. Interaction & Motion
- [ ] Are there bouncy, perpetual, or slow (>300ms) animations delaying interaction?
- [ ] Are `:focus-visible` rings present on all interactive elements?
- [ ] Do buttons have clear hover and active feedback?
- [ ] Is `prefers-reduced-motion` respected?

---

## Defect Severity Classification

Every identified finding must be categorized into one of four severity levels:

### `CRITICAL`
- Breaks accessibility (text unreadable, missing form labels, broken focus states).
- Breaks responsive layout (horizontal scroll, hidden critical buttons on mobile).
- Total contrast failure (< 3:1).

### `HIGH`
- Core AI slop signatures (multiple competing gradients, card-in-card nesting, gradient text).
- Complete absence of typographic hierarchy (H1 looks like body text).
- Identical visual treatment for primary, secondary, and destructive actions.

### `MEDIUM`
- Inconsistent spacing scale (mixing random padding/margins).
- Overly tight or excessively loose line-height.
- Container debt (cards that could easily be replaced with clean whitespace).

### `LOW`
- Microcopy polish (removing vague AI buzzwords).
- Badge restraint and subtle border opacity adjustments.
- Minor icon alignment or sub-pixel padding refinement.
