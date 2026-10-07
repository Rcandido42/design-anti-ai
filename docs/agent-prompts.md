# Agent Prompts & Operational Cheat Sheet

This guide provides tested prompts and dispatch commands for using the Anti-Slop Design skill across different AI coding environments (Antigravity, Claude Code, OpenAI Codex, Cursor).

---

## 1. Antigravity Commands & Prompts

When running inside Google Antigravity:

### Run Full Read-Only Audit
```text
/anti-slop audit
```
*Prompt equivalent:*
> "Run an Anti-Slop visual audit on `src/components/Dashboard.tsx`. Check for AI slop smells, score the UI using the 10-dimension rubric, and propose a concrete design direction. Do not modify any code yet."

### Interactive Review & Plan
```text
/anti-slop review
```
*Prompt equivalent:*
> "Review the proposed design direction for our landing page. Present the token plan and diff strategy before touching the files."

### Execute Incremental Fix
```text
/anti-slop fix
```
*Prompt equivalent:*
> "Apply the Anti-Slop recommendations to `src/components/Hero.tsx`. Use the Technical Console direction, remove the purple background gradient blobs, flatten nested cards, and fix button hierarchy. Preserve all event handlers."

### Run Bounded Iteration Loop
```text
/anti-slop iterate
```
*Prompt equivalent:*
> "Execute the anti-slop iteration loop on this view (max 3 cycles). Stop when composite score reaches 8.5/10 or all critical issues are resolved."

---

## 2. Claude Code Instructions

In Claude Code, you can invoke the skill or include it in `CLAUDE.md`:

```markdown
# Adding to CLAUDE.md
When auditing or generating web interfaces:
- Read and follow `.agent/skills/anti-slop-design/SKILL.md`.
- Never insert purple gradient blobs or backdrop-blur soup by default.
- Check WCAG AA contrast before finalizing styling changes.
```

### Slash Command Simulation
```text
Claude, run the anti-slop discovery and audit workflows on src/app/page.tsx. Log all findings categorized as CRITICAL, HIGH, MEDIUM, LOW.
```

---

## 3. Cursor & Windsurf Rules

In `.cursorrules` or `.windsurfrules`:
```text
You have access to the Anti-Slop Design skill in .agent/skills/anti-slop-design/SKILL.md.
When asked to improve or review any UI:
1. Always start with Phase 1 (Discovery) and Phase 2 (Visual Audit).
2. Never replace an existing UI library unless explicitly instructed.
3. Keep business logic and component props 100% intact.
```

---

## 4. Specific Refactoring Scenarios

### Scenario A: "The AI SaaS landing hero looks generic"
> "Audit our `Hero.tsx` using Anti-Slop Design. Diagnose the 3 worst AI slop patterns (e.g. gradient badges, centered generic copy, floating purple glow) and refactor it into an Editorial/Publication layout with high typographic contrast and a 60/40 asymmetrical grid."

### Scenario B: "Our dashboard has too many nested cards"
> "Inspect `DashboardGrid.tsx` for container debt using Anti-Slop Rule 04. Eliminate nested cards, replace redundant borders with whitespace rhythm, and ensure data tables have sticky headers."

### Scenario C: "Contrast audit failed"
> "Scan `globals.css` and all color utility classes in `src/components/` for WCAG AA compliance. Fix all text-to-background contrast ratios below 4.5:1."
