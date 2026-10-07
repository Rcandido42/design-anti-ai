# Workflow 04: Design Direction Selection (Phase 4)

## Objective
Establish a deliberate, brand-appropriate aesthetic archetype before writing any styling code. This prevents the agent from simply substituting one generic template for another.

---

## 1. The Archetype Selection Matrix

Review the product's actual purpose, target user base, and content density, then match with one of the following 12 intentional directions:

| Direction Archetype | Best Suited For | Key Typographic Cue | Surface Treatment | Accent Philosophy |
| :--- | :--- | :--- | :--- | :--- |
| **Technical / Console** | Devtools, analytics, infra, terminals | Grotesque sans + JetBrains/Geist Mono | High-density tables, crisp 1px borders, subtle grid | Emerald `#10b981`, amber `#f59e0b`, or cyan |
| **Editorial / Publication** | Blogs, documentation, research, essays | High-contrast serif headlines (`Newsreader`) | Asymmetrical multi-column, generous white space | Deep burgundy, cobalt, or pure monochrome |
| **Minimal Swiss** | Productivity, task managers, utilities | Neutral grotesque (`Inter`, `Geist`, `Helvetica`) | Strict grid lines, zero gradient fills, flat planes | Single high-contrast functional color |
| **Industrial / Utility** | IoT, hardware management, logistics | Sturdy sans (`Space Grotesk`, `Chivo`) | Chamfered corners, tactile switches, high-vis status | Hazard yellow `#eab308` or safety orange |
| **Premium / Refined** | Fintech, private wealth, luxury goods | Refined serif accents, wide-tracked uppercase | Warm stone neutrals (`#f5f5f4`, `#1c1917`), quiet borders | Warm champagne, bronze, or slate gold |
| **Playful / Punchy** | Creator tools, education, community apps | Friendly humanist sans (`Plus Jakarta`, `Outfit`) | Soft pill containers, crisp offset drop shadows | High-saturation coral, violet, or electric lime |
| **Cinematic** | Media, video editing, game engines, 3D | Compact sans, high visual contrast | Deep obsidian backgrounds (`#09090b`), sharp vignettes | High-voltage neon accent or pure white spotlight |
| **Retro-Modern** | Indie hacking, audio synthesizers, web3 | Monospace tabular fonts, dithered textures | Beveled edges, pixel-perfect borders, 90s nostalgia | Phosphor green or amber CRT tone |
| **Clean Corporate** | B2B compliance, enterprise HR, legal | Enterprise sans (`Public Sans`, `Inter`) | Balanced cards, subtle shadows, clear breadcrumbs | Trust navy `#1e3a8a` or slate blue |
| **Futuristic / Cyber** | AI safety, cryptography, cybersec | Geometric sans with technical mono readouts | Angular borders, scanlines, translucent panels | Laser teal or stark monochrome |
| **Brutalist / Raw** | Art direction, design studios, counter-culture | Heavy blackletter or unpolished sans | Hard black outlines, no border radius, jarring asymmetry | Primary yellow, high-contrast cyan or magenta |
| **Experimental** | Interactive installations, novel prototypes | Bespoke variable fonts, unexpected scales | Fluid canvas, dynamic typography shifts | Contextual dynamic palette |

---

## 2. Selection Rationale Protocol

Before writing code in Phase 5, the agent must document:
1. **Target Product Purpose**: e.g., "Developer platform for distributed event streaming."
2. **Selected Archetype**: e.g., "Technical / Console."
3. **Rationale**: Why this direction serves the content and audience better than a generic SaaS gradient template.
4. **Core Tokens Planned**:
   - Backgrounds & Surfaces: e.g., `zinc-950` / `zinc-900`
   - Borders: e.g., `zinc-800` (1px solid)
   - Primary Accent: e.g., `emerald-500`
   - Typographic scale: e.g., `Geist Sans` + `Geist Mono` for data tables
