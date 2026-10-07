# Rule 07: Heuristics Matrix & Scoring Rubric

## The Anti-Slop Principle
> "Quality evaluation cannot be a random guess. A calibrated rubric allows an agent to assess before/after progress objectively."

The Anti-Slop score is a **comparative diagnostic heuristic**, graded from 1 to 10 across 10 core dimensions. It is not an arbitrary number; each tier corresponds to specific, observable code patterns.

---

## The 10 Dimension Scoring Rubric

### 1. Visual Identity & Character
- **1–3 (Slop)**: Indistinguishable from thousands of AI-generated SaaS landings. Purple/indigo gradients, floating glow blobs, cliché stock vectors.
- **4–6 (Template)**: Clean, generic Bootstrap/Tailwind UI kit. Functional but lacks brand distinctiveness.
- **7–8 (Intentional)**: Defined visual personality (e.g. Technical Console, Editorial Serif, Swiss Minimal). Custom motif consistent across views.
- **9–10 (Masterful)**: Unique brand signature, bespoke typographic cadence, memorable tactile feel, distinct point of view.

### 2. Visual Hierarchy & Focal Point
- **1–3 (Slop)**: Flat visual plane; everything is competing for attention (badges, gradients, multiple primary buttons, cards).
- **4–6 (Template)**: Basic top-to-bottom reading flow, but secondary metadata often over-emphasized.
- **7–8 (Intentional)**: Clear optical landing spot for the eye. Primary action is unmistakable; secondary elements recede gracefully.
- **9–10 (Masterful)**: Effortless scanability. Inverted pyramid information hierarchy. Zero visual noise.

### 3. Typography & Typescale
- **1–3 (Slop)**: Arbitrary font sizes (13px, 15px, 17px, 22px mixed), giant headlines with bad line-height, unconstrained 1400px measure.
- **4–6 (Template)**: Adheres to a standard Tailwind type scale, but body copy lacks optical tracking and proper leading.
- **7–8 (Intentional)**: Strict mathematical modular scale (e.g., Minor Third). Headlines have tight tracking; body copy constrained to 65ch with relaxed leading.
- **9–10 (Masterful)**: Expressive font pairing, perfect baseline alignment, tabular figures for financial/metric data, sublime reading cadence.

### 4. Spacing & Spatial Rhythm
- **1–3 (Slop)**: Chaotic padding/margins (mixing 7px, 14px, 21px), cards crammed against screen edges, inconsistent gaps.
- **4–6 (Template)**: Standard 4px/8px increments used, but spacing between unrelated sections is identical to spacing between related items.
- **7–8 (Intentional)**: Strict adherence to Gestalt proximity principles. Macro-spacing (48px–96px) clearly distinguishes views; micro-spacing (4px–16px) binds related data.
- **9–10 (Masterful)**: Rhythmic, harmonious whitespace that eliminates the need for borders and card containers.

### 5. Color Discipline & Palette
- **1–3 (Slop)**: 5+ saturated colors, rainbow gradients, glowing border accents, muddy dark mode `#000` with unreadable `#4b5563` text.
- **4–6 (Template)**: 1 primary brand color + generic gray palette. Semantic states (danger, warning) occasionally clash.
- **7–8 (Intentional)**: Strict 60-30-10 distribution. Neutral foundation with high contrast (WCAG AA compliant). Restrained, single-purpose accent.
- **9–10 (Masterful)**: Context-aware palette with custom tints, exquisite surface layering, dark-mode elevated surfaces without muddy blur.

### 6. Component Sanity & Container Debt
- **1–3 (Slop)**: Nested cards inside cards inside cards, `rounded-3xl` on small badges, buttons lacking active/focus states.
- **4–6 (Template)**: Standard component library (Radix/Shadcn) used without customization; excessive card wrappers around simple lists.
- **7–8 (Intentional)**: Zero container debt. Borders used only where semantic separation is required. Radius strictly proportional to component height.
- **9–10 (Masterful)**: Minimalist surface architecture. High component reusability, polymorphic flexibility, clean DOM structure.

### 7. UX & Flow Clarity
- **1–3 (Slop)**: Confusing affordances, hidden navigation, buttons without feedback, modal traps for simple actions.
- **4–6 (Template)**: Functional but standard flows. User must hunt for secondary settings or filters.
- **7–8 (Intentional)**: Direct, obvious paths to complete user jobs. Inline editing where possible. Informative, calm confirmation states.
- **9–10 (Masterful)**: Frictionless ergonomics. Predictable shortcuts, high operational efficiency, instant clarity.

### 8. Accessibility (A11y) & Contrast
- **1–3 (Slop)**: Text fails 4.5:1 contrast, `outline-none` on interactive elements, missing alt text, clickable `<div>` without keyboard handlers.
- **4–6 (Template)**: Passes basic automated audits, but subtle placeholder text or focus rings are weak.
- **7–8 (Intentional)**: 100% WCAG 2.1 AA compliant. High-contrast `focus-visible` rings on all inputs/buttons. Screen-reader accessible labels.
- **9–10 (Masterful)**: WCAG AAA compliance where possible, full keyboard navigation with visible skip-links, robust colorblind-safe palettes.

### 9. Responsive Resilience
- **1–3 (Slop)**: Horizontal scroll on 375px mobile, text overflows containers, touch targets under 32px, tables cut in half.
- **4–6 (Template)**: Stacks vertically on mobile via flex-col, but spacing looks stretched or awkward on tablet/ultra-wide.
- **7–8 (Intentional)**: Purposefully designed breakpoints. Touch targets ≥ 44px. Information density intelligently adapted per screen size.
- **9–10 (Masterful)**: Fluid typography and spacing (`clamp()`), zero layout shift, seamless adaptation from Apple Watch to 4K monitor.

### 10. Motion & Interaction Feedback
- **1–3 (Slop)**: Perpetual pulsating blobs, 1000ms staggered load delays, bouncy hover animations that make users wait.
- **4–6 (Template)**: Simple `transition-all 200ms` applied universally. Functional but occasionally rubbery.
- **7–8 (Intentional)**: Snappy feedback (<150ms ease-out). Motion used strictly for state confirmation and spatial orientation. Honors `prefers-reduced-motion`.
- **9–10 (Masterful)**: Micro-interactions feel tactile, physical, and invisible. Instantaneous perceived performance.

---

## Score Calculation Formula
$$\text{Composite Score} = \frac{\sum_{i=1}^{10} \text{Dimension Score}_i}{10}$$

- **< 5.0**: Severe AI Slop / Critical UX Debt. High priority refactor required.
- **5.0 – 6.9**: Standard Boilerplate. Usable, but generic and forgettable.
- **7.0 – 8.4**: Polished & Professional. High quality with minor refinement opportunities.
- **8.5 – 10.0**: Distinctive, Production-Grade Craftsmanship.
