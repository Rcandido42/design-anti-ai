# Anti-Slop Design: Audit & Diagnostic Report

**Target Project**: `[Project Name]`  
**Audited View**: `[File or Route Path]`  
**Date & Timestamp**: `[YYYY-MM-DD HH:MM]`  
**Audit Mode**: Read-Only Diagnostic

---

## 1. Executive Summary & Stack Reconnaissance

- **Detected Framework**: `[e.g., Next.js 14 (App Router) / React / Vite / Astro]`
- **Styling Architecture**: `[e.g., Tailwind CSS v3.4 / CSS Modules / Vanilla CSS]`
- **Typography & Assets**: `[e.g., Inter (Google Fonts), Lucide Icons]`
- **Current Aesthetic**: `[e.g., Generic AI SaaS with purple gradient glow and nested glassmorphism cards]`
- **Recommended Direction**: `[e.g., Technical / Console with high-contrast data hierarchy]`

---

## 2. Heuristic Quality Scorecard (1–10 Scale)

*Note: This score is a structured heuristic used to evaluate visual quality and track comparative refactoring progress.*

| Heuristic Dimension | Baseline Score | Target Score | Observable Defect / Symptom |
| :--- | :---: | :---: | :--- |
| **1. Visual Identity & Character** | `X / 10` | `8 / 10` | `[Brief observation]` |
| **2. Visual Hierarchy & Focal Point** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **3. Typography & Typescale** | `X / 10` | `8 / 10` | `[Brief observation]` |
| **4. Spacing & Spatial Rhythm** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **5. Color Discipline & Palette** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **6. Component Sanity & Containers** | `X / 10` | `8 / 10` | `[Brief observation]` |
| **7. UX & Flow Clarity** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **8. Accessibility & Contrast** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **9. Responsive Resilience** | `X / 10` | `8 / 10` | `[Brief observation]` |
| **10. Motion & Feedback States** | `X / 10` | `9 / 10` | `[Brief observation]` |
| **Composite Score** | **`X.X / 10`** | **`8.6 / 10`** | **Net Delta: `+X.X`** |

---

## 3. Prioritized Defect Catalog

### Critical Defects (`CRITICAL`)
- **[CRIT-1] `[Defect Title]`**
  - **File / Location**: `[path/to/file.tsx:line]`
  - **The Symptom**: `[What is wrong]`
  - **Why It's Slop**: `[Design rationale]`
  - **Impact**: `[Accessibility / Usability / Legibility impact]`
  - **Recommended Remedy**: `[Specific code change]`

### High Priority Defects (`HIGH`)
- **[HIGH-1] `[Defect Title]`**
  - **File / Location**: `[path/to/file.tsx:line]`
  - **The Symptom**: `[What is wrong]`
  - **Why It's Slop**: `[Design rationale]`
  - **Impact**: `[Visual hierarchy / clutter impact]`
  - **Recommended Remedy**: `[Specific code change]`

### Medium & Low Priority Defects (`MEDIUM` / `LOW`)
- **[MED-1] `[Defect Title]`**: `[Description and suggested refinement]`
- **[LOW-1] `[Defect Title]`**: `[Description and suggested refinement]`

---

## 4. Proposed Design Tokens & Palette

```css
/* Recommended Theme Variables */
:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 6%;
  --card-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --primary: 142.1 76.2% 36.3%; /* Purposeful functional accent */
  --primary-foreground: 355.7 100% 97.3%;
  --radius: 0.375rem; /* Disciplined, proportional radius */
}
```

---

## 5. Phased Implementation Plan

- [ ] **Step 1 (Token Foundation)**: Inject disciplined theme variables into `globals.css` or Tailwind config.
- [ ] **Step 2 (Layout & Surfaces)**: Strip background gradient blobs and unbox nested card wrappers.
- [ ] **Step 3 (Typography & Hierarchy)**: Apply mathematical font scale, tighten headline leading, set `max-w-prose`.
- [ ] **Step 4 (Button & Action Restraint)**: Establish primary, secondary, and ghost button differentiation.
- [ ] **Step 5 (Accessibility & State Polish)**: Add high-contrast `:focus-visible` rings and hover feedback.
- [ ] **Step 6 (Verification)**: Run typecheck, unit tests, and responsive viewport checks.
