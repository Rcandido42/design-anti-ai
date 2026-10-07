# Workflow 06: Visual QA & Regression Prevention (Phase 6)

## Objective
Verify the visual quality, responsive resilience, accessibility, and functional integrity of the refactored interface.

---

## 1. Automated Verification Checks

Before conducting visual checks, run all available automated checks in the project:
1. **Type Checker**: e.g., `tsc --noEmit`
2. **Linter**: e.g., `npm run lint` or `biome check`
3. **Unit / Integration Tests**: e.g., `npm test` or `vitest run`
4. **Production Build**: e.g., `npm run build`

If any automated check fails, fix the underlying code regression before proceeding to visual QA.

---

## 2. Multi-Viewport Inspection Checklist

Examine the interface across three mandatory viewport tiers:

### Mobile Viewport (375px – 414px)
- [ ] Zero horizontal page overflow (`document.body.scrollWidth === window.innerWidth`).
- [ ] Touch targets are at least 44px × 44px for primary buttons and interactive inputs.
- [ ] Data tables either collapse gracefully into card lists or have an explicitly scrollable container with indicator cues.
- [ ] Font sizes remain legible (body text ≥ 14px).

### Tablet Viewport (768px – 1024px)
- [ ] Grid layouts wrap without awkward orphan elements.
- [ ] Navigation transitions cleanly between mobile drawer and desktop bar.
- [ ] Margins and padding feel proportionate rather than cramped or excessively cavernous.

### Desktop Viewport (1280px – 1920px)
- [ ] Reading measure is constrained (`max-w-prose` or max-width ~65–75 characters per line).
- [ ] Interface does not stretch indefinitely across ultra-wide monitors.
- [ ] Macro-whitespace creates deliberate breathing room rather than dead, unanchored space.

---

## 3. Contrast & Accessibility Verification

- [ ] Body copy achieves at least 4.5:1 contrast against its immediate background.
- [ ] Large headings (≥ 24px) achieve at least 3.0:1 contrast.
- [ ] Interactive states (focus rings, active borders) achieve at least 3.0:1 contrast against adjacent colors.
- [ ] Keyboard navigation: Tab through every interactive element. The focus ring must remain distinctly visible throughout.

---

## 4. Tooling Disclosure Protocol

If browser automation or screenshot inspection tools (e.g., Chrome DevTools MCP, Playwright, Puppeteer) are active in the agent runtime:
- Take full-page and component-level screenshots at 375px and 1280px viewports.
- Inspect the visual rendered result and document findings.

If visual screenshot tools are **not** present in the environment:
- Explicitly state in the final summary:
  > *"Visual QA performed via rigorous static code inspection, DOM tree analysis, and responsive media query auditing. Browser screenshot capture was not available in this runtime."*
