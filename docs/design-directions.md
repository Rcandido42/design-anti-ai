# Catalog of Intentional Design Directions

Rather than defaulting to generic SaaS styling, Anti-Slop Design equips agents with 12 distinct aesthetic archetypes. Each archetype is grounded in specific domain needs, typography rules, surface treatments, and color strategies.

---

## 1. Technical / Console
- **Domain Fit**: Developer platforms, cloud infrastructure, analytics dashboards, CLI documentation, network telemetry.
- **Typography**:
  - Primary: Objective grotesque sans (Geist, Inter, SF Pro).
  - Data / Code: High-readability monospace (JetBrains Mono, Geist Mono, Fira Code) with tabular figures (`tabular-nums`).
- **Color & Surfaces**:
  - Deep slate/zinc canvas (`#09090b` or `#0e1117`).
  - Elevated surfaces with 1px hairline borders (`border-zinc-800`).
  - Functional terminal accents: phosphor green (`#10b981`), system amber (`#f59e0b`), or laser cyan (`#06b6d4`).
- **Layout & Structure**:
  - Dense, data-rich grids. High information density.
  - Bordered tables with sticky headers.
  - Keyboard shortcuts (`⌘K`, `Ctrl+P`) visually anchored.

---

## 2. Editorial / Publication
- **Domain Fit**: Long-form publishing, engineering blogs, research papers, legal analysis, literary essays.
- **Typography**:
  - Headlines: High-contrast transitional or modern serif (Newsreader, Instrument Serif, Playfair Display).
  - Body: Exceptionally readable book sans or serif (Charter, Source Serif, Inter) with generous leading (`leading-relaxed` / 1.7).
  - Measure: Strictly capped at 65ch (`max-w-prose`).
- **Color & Surfaces**:
  - Warm paper canvas (`#faf9f5` or soft cream `#fcfbf9`).
  - High-contrast ink text (`#1c1917` / `#18181b`).
  - Editorial accents: deep oxblood/burgundy (`#881337`), deep forest (`#064e3b`), or pure monochrome.
- **Layout & Structure**:
  - Asymmetric columns: 70% primary reading column + 30% margin pull-quotes and annotations.
  - Generous macro-whitespace. Drop caps or oversized chapter numerals.

---

## 3. Minimal Swiss
- **Domain Fit**: Productivity suites, task management, minimal utilities, documentation portals.
- **Typography**:
  - Neutral grotesque sans (Helvetica Neue, Neue Haas Grotesk, Inter).
  - Strict hierarchical size jump: 36px → 24px → 16px → 13px.
  - Zero decorative fonts.
- **Color & Surfaces**:
  - Crisp stark white (`#ffffff`) or pure jet black (`#000000`).
  - Strict neutral grays for borders and metadata (`#e4e4e7` / `#27272a`).
  - A single high-visibility functional accent (Swiss red `#dc2626` or cobalt `#2563eb`).
- **Layout & Structure**:
  - Strict mathematical grid lines (continuous hairline dividers).
  - Zero gradient fills, zero drop shadows.
  - Functional whitespace acts as the sole organizing boundary.

---

## 4. Industrial / Utility
- **Domain Fit**: Warehouse logistics, hardware management, audio routing, scientific laboratory software.
- **Typography**:
  - Heavyweight technical sans (Space Grotesk, Chivo, DIN 1451, IBM Plex Sans).
  - Monospaced numeric badges.
- **Color & Surfaces**:
  - Matte machinery gray surfaces (`#181a1f`, `#21252b`).
  - Chamfered corner aesthetics, recessed input wells (`inset 0 1px 2px rgba(0,0,0,0.4)`).
  - High-visibility safety accents: hazard yellow (`#eab308`), safety orange (`#ea580c`).
- **Layout & Structure**:
  - Physicalized toggle switches, rotary-style or segmented step selectors.
  - High-contrast status LEDs (pulsing 8px dots for active connections).

---

## 5. Premium / Refined
- **Domain Fit**: Private wealth management, architecture portfolios, luxury commerce, boutique creative agencies.
- **Typography**:
  - Refined serif display (Cormorant Garamond, Canela, Ogg) with wide-tracked small caps (`tracking-widest uppercase`).
  - Ultra-clean geometric body sans.
- **Color & Surfaces**:
  - Warm stone, cashmere, and bone neutrals (`#f5f5f4`, `#e7e5e4`, `#1c1917`).
  - Whispering hairline borders with subtle opacity (`border-stone-200/60`).
  - Muted champagne, bronze, or slate gold accents.
- **Layout & Structure**:
  - Expansive breathing room. Unrushed pacing.
  - Subtle micro-interactions (soft opacity transitions on hover).

---

## 6. Playful / Punchy
- **Domain Fit**: Creator economy apps, gamified learning, community platforms, casual tools.
- **Typography**:
  - Friendly humanist or geometric sans (Plus Jakarta Sans, Outfit, Poppins).
  - Expressive weight variations and rounded terminals.
- **Color & Surfaces**:
  - High-saturation primary accents: bright coral (`#f43f5e`), electric violet (`#8b5cf6`), or lime (`#84cc16`).
  - Clean offset drop shadows (`box-shadow: 3px 3px 0px #000000`).
- **Layout & Structure**:
  - Soft pill tags (`rounded-full`), rounded container cards (`rounded-xl`).
  - Punchy microcopy with genuine warmth rather than corporate jargon.

---

## 7. Cinematic
- **Domain Fit**: Video editing suites, generative media, 3D engines, portfolio showcases.
- **Typography**:
  - Clean, compact sans with high optical contrast against dark backgrounds.
- **Color & Surfaces**:
  - Deep obsidian black canvases (`#050507`).
  - True spotlight contrast: surfaces recede into darkness while media pops forward.
  - Razor-thin dark borders (`border-white/10`).
- **Layout & Structure**:
  - Canvas-first layout where media previews occupy 80% of screen real estate.
  - Minimalist floating toolbars with unobtrusive icons.

---

## 8. Retro-Modern
- **Domain Fit**: Indie hacker tools, music trackers, retro gaming communities, vintage emulation.
- **Typography**:
  - Monospace tabular fonts (IBM Plex Mono, MS Gothic, VT323).
- **Color & Surfaces**:
  - Beveled 90s OS borders (`border-t-white border-l-white border-r-gray-800 border-b-gray-800`).
  - Dithered or subtle dot-grid background textures.
  - CRT monitor accents (amber phosphor `#ffb000` or matrix green `#00ff66`).
- **Layout & Structure**:
  - Tabular windows, title bars with close buttons, compact toolbar rows.

---

## 9. Clean Corporate
- **Domain Fit**: Enterprise compliance, human resources, legal ERP, banking institutions.
- **Typography**:
  - Enterprise sans (Public Sans, Inter, Roboto).
- **Color & Surfaces**:
  - Trust navy blue (`#1e3a8a`), slate gray foundations (`#f8fafc`).
  - Clean, balanced card surfaces with subtle 1px border.
- **Layout & Structure**:
  - Standard breadcrumbs, clear step wizards, explicit confirmation modals.

---

## 10. Futuristic / Cyber
- **Domain Fit**: Cybersecurity monitoring, defense tech, decentralized protocols, AI safety monitors.
- **Typography**:
  - Geometric angular sans + monospaced hex dump readouts.
- **Color & Surfaces**:
  - Gunmetal and dark cyan surfaces (`#0a1014`, `#0f171c`).
  - Laser cyan (`#06b6d4`) and sharp white highlights.
- **Layout & Structure**:
  - Segmented telemetry panels, angular cut-corner cards (`clip-path: polygon(...)`).

---

## 11. Brutalist / Raw
- **Domain Fit**: Independent fashion, experimental architecture, record labels, avant-garde design.
- **Typography**:
  - Monolithic bold sans or raw system monospaces.
- **Color & Surfaces**:
  - Stark black `#000` and pure white `#fff` with jarring primary accents (canary yellow `#facc15`).
  - Hard, zero-radius borders (`rounded-none border-2 border-black`).
- **Layout & Structure**:
  - Deliberately colliding grids, raw tabular borders, zero transition smoothing.

---

## 12. Experimental
- **Domain Fit**: Interactive art experiments, generative showcases, award-winning microsites.
- **Typography**:
  - Bespoke variable fonts with dynamic axis shifts.
- **Color & Surfaces**:
  - Contextual dynamic palettes responding to mouse motion or audio frequency.
- **Layout & Structure**:
  - Freeform canvas, spatial pan-and-zoom, fluid viewport geometry.
