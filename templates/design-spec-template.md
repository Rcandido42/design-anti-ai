# Project Design Specification (Anti-Slop ADR)

**Project Name**: `[Project Name]`  
**Status**: `[Proposed | Approved | Implemented]`  
**Author / Agent**: `[Agent ID or Name]`  
**Date**: `[YYYY-MM-DD]`

---

## 1. Product Context & Target Audience
- **What is the product?**: `[Brief 1-line description of functional utility]`
- **Who uses it?**: `[Developers / Financial analysts / Consumers / Internal operations]`
- **Primary user tasks**: `[What core actions are users performing on this interface?]`

---

## 2. Chosen Design Direction
- **Archetype**: `[e.g., Technical / Console, Minimal Swiss, Editorial, Industrial]`
- **Why this direction?**: `[Justification against domain context]`
- **Tone & Personality Attributes**:
  1. `[e.g., Fast / Low-latency]`
  2. `[e.g., Objective / High-density]`
  3. `[e.g., Tactile / Restrained]`

---

## 3. Typographic System
- **Display / Heading Family**: `[e.g., Geist Sans / Newsreader / Inter]`
- **Body Family**: `[e.g., Inter / System]`
- **Monospace / Tabular Family**: `[e.g., JetBrains Mono for metrics and timestamps]`
- **Typescale Rhythm**:
  - H1 / Hero: `32px – 40px`, `leading: 1.15`, `tracking: -0.03em`
  - H2 / Section: `20px – 24px`, `leading: 1.25`, `tracking: -0.02em`
  - Body: `15px – 16px`, `leading: 1.6`, `max-w: 65ch`
  - Metadata: `12px – 13px`, `tracking: 0.04em` (uppercase when appropriate)

---

## 4. Color & Surface Architecture (60-30-10)
- **Base (60%)**: `[Canvas background and primary readable text]`
- **Surfaces (30%)**: `[Subtle cards, dividers, sidebars, borders]`
- **Accent (10%)**: `[Single functional brand color for primary CTA]`
- **Semantic Statuses**:
  - Success: `[Emerald hex / class]`
  - Warning: `[Amber hex / class]`
  - Danger: `[Red hex / class]`

---

## 5. Component Geometry & Action Hierarchy
- **Border Radius Scale**:
  - Chips / Tags: `4px`
  - Buttons / Inputs: `6px`
  - Containers / Dialogs: `8px` (no indiscriminate `rounded-3xl`)
- **Action Precedence**:
  - Primary Action (Max 1): `[Solid fill, high contrast]`
  - Secondary Action: `[Subtle surface with border]`
  - Ghost Action: `[No border, text hover only]`
- **Container Debt Policy**:
  - Avoid wrapping adjacent text items into distinct bordered boxes. Use whitespace separation.

---

## 6. Accessibility & Performance Guardrails
- **WCAG Standard**: Target `WCAG 2.1 AA` compliance minimum.
- **Focus States**: High-contrast outline ring on all keyboard-navigable elements.
- **Motion Budget**: Max transition duration `200ms`, `prefers-reduced-motion` compliance.
