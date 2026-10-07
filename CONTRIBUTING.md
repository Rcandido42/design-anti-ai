# Contributing to Anti-Slop Design

Thank you for your interest in contributing to **Anti-Slop Design**!

This project is an open-source framework and agent skill dedicated to eradicating generic AI-generated interface antipatterns and guiding coding agents toward deliberate, distinctive, and accessible web craftsmanship.

---

## The Tone Principle

Our documentation, code, and communication must practice what we preach:
- **No empty buzzwords**: Avoid *"revolutionary"*, *"next-gen"*, *"seamless synergy"*, or corporate hype.
- **No fake metrics**: If you propose a heuristic, define observable code patterns that anchor it.
- **No emoji soup**: Use icons and formatting deliberately, not decoratively.
- **Clarity and restraint**: Write like an engineer speaking to fellow engineers.

---

## How You Can Contribute

### 1. Adding or Refining Rules (`rules/`)
Each rule must:
- Address a concrete visual or UX problem commonly produced by AI or boilerplate generators.
- Include the core anti-slop principle.
- List specific symptoms and code triggers.
- Provide a direct code transformation (Before vs After).

### 2. Expanding Design Directions (`docs/design-directions.md`)
We welcome new domain-grounded aesthetic archetypes. A valid archetype submission must detail:
- Target domain and product use case.
- Typographic system (display, body, and tabular fonts).
- Surface, palette, and border token treatment.
- Layout cadence and component examples.

### 3. Enhancing the Static Detector (`bin/anti-slop.mjs`)
If you discover a recurring AI generation smell that can be identified via regex or AST patterns:
- Add a detector definition to `SLOP_DETECTORS` in `bin/anti-slop.mjs` with ID, severity, regex, and remedy.
- Add test coverage in `tests/slop-detector.test.mjs`.
- Keep the detector **100% zero-dependency** using native Node.js ES modules.

### 4. Contributing Real-World Examples (`examples/`)
The best way to demonstrate progress is with reproducible Before & After examples. Each example directory must contain:
- `before/`: The messy or generic AI-generated component/page.
- `after/`: The refactored version adhering to an intentional archetype.
- `breakdown.md`: A structured summary table comparing dimensions and explaining specific changes.

---

## Development & Testing Workflow

### Prerequisites
- Node.js >= 18.0.0
- Git

### Running Tests
We use Node's native test runner (`node:test`):

```bash
npm test
```

### Running the Analyzer
Test the analyzer against any fixture or directory:

```bash
npm run audit -- tests/fixtures/sloppy-dashboard.html
```

---

## Pull Request Guidelines

1. **Branch Naming**: Use `feat/rule-name`, `fix/detector-id`, or `docs/topic`.
2. **Atomic Commits**: Write clear, descriptive commit messages.
3. **Tests Required**: Any change to `bin/anti-slop.mjs` or detection heuristics must include corresponding tests in `tests/`.
4. **License Agreement**: By contributing, you agree that your contributions will be licensed under the MIT License.
