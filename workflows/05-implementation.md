# Workflow 05: Safe Implementation & Refactoring (Phase 5)

## Objective
Apply the chosen design direction to the code with surgical precision, strictly preserving all functional logic, APIs, and state.

---

## The 6 Golden Implementation Rules

1. **Zero Logic Disruption**:
   - Never delete or rename `onClick`, `onChange`, `onSubmit`, or custom event callbacks.
   - Preserve all React hooks (`useState`, `useEffect`, `useQuery`), Vue refs, or Svelte stores.
   - Keep form field names, IDs, and attributes (`required`, `type`, `name`, `aria-*`) intact.
2. **Incremental Surgical Edits**:
   - Refactor one component or sub-tree at a time.
   - Avoid deleting and regenerating hundreds of lines of code if modifying class names or CSS rules achieves the target design.
3. **Establish Design Tokens First**:
   - Before editing individual components, configure or extend CSS custom variables or the Tailwind theme config.
   - Ensure the new surfaces, borders, and typography scale are centrally defined.
4. **Eliminate Container Debt**:
   - Remove redundant nested wrapper `<div>`s that served only to hold unnecessary borders and background blurs.
   - Use CSS Grid or Flexbox gap and margins to define spatial hierarchy.
5. **Enforce Complete Interactive States**:
   - Every button, link, and input must have explicit `:hover`, `:active`, `:focus-visible`, and `:disabled` styling.
   - Verify that `:focus-visible` provides a clear, high-contrast ring without relying on standard browser-suppressed outlines.
6. **Polish Microcopy**:
   - Replace generic AI marketing words (*"Supercharge your synergy"*) with concrete, functional language.

---

## Step-by-Step Execution Sequence

1. **Token Foundation**: Update `globals.css` or `tailwind.config.*` with the chosen palette and radii.
2. **Layout Shell**: Strip unnecessary full-screen background gradients and blur overlays. Establish clear grid alignment.
3. **Typography Replacement**: Update headings, body text, and metadata with the modular scale, line heights, and character-length limits.
4. **Component Clean-up**:
   - Flatten nested card hierarchies.
   - Standardize border radii according to component size.
   - Differentiate primary vs secondary vs ghost buttons.
5. **Accessibility Injection**: Ensure form labels, ARIA landmarks, and focus rings meet WCAG AA standards.
6. **Verify Compilation**: Immediately run the project's build command (`npm run build`, `npm test`, or `vite build`) to confirm zero syntax or typing errors.
