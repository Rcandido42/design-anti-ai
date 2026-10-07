# Workflow 01: Discovery & Reconnaissance (Phase 1)

## Objective
Map the architecture, technology stack, design conventions, and component boundaries of the target project **without modifying a single file**.

---

## Step-by-Step Procedure

### 1. Detect Framework & Runtime
Run file listing or view root package manifests:
- Look for `package.json`, `pnpm-workspace.yaml`, or root configs.
- Check framework: Next.js (App Router or Pages Router?), React (Vite?), Vue / Nuxt, SvelteKit, Astro, or static HTML.
- Note package manager (`pnpm`, `npm`, `yarn`, `bun`).

### 2. Identify Styling Architecture
Locate the styling system:
- **Tailwind CSS**: Inspect `tailwind.config.*`, `postcss.config.*`, and primary CSS import (`globals.css`, `index.css`).
  - Check existing theme extensions, custom colors, plugins.
- **CSS Modules / SASS**: Look for `*.module.css` or `*.scss`.
- **CSS-in-JS**: Look for `@emotion/react`, `styled-components`, `vanilla-extract`.
- **Vanilla CSS**: Inspect `style.css` or linked stylesheets.

### 3. Catalog Existing Design Tokens
Search for existing token definitions:
- CSS variables: `:root { --background: ...; --primary: ...; }`
- Tailwind theme keys: `theme.extend.colors`
- Typography declarations: Google Fonts `<link>`, `@font-face`, `@next/font`.

### 4. Locate Entry Points & Target Views
Identify the exact component tree for the view being audited:
- Page route: e.g. `src/app/dashboard/page.tsx` or `pages/index.js` or `index.html`.
- Layout wrapper: e.g. `src/components/layout/Shell.tsx`.
- Target components: e.g. `Hero.tsx`, `StatsCard.tsx`, `Sidebar.tsx`.

### 5. Check Test & Build Suites
Ensure you know how to verify builds safely later:
- Are there unit tests? (`npm test`, `vitest`)
- Are there build scripts? (`npm run build`)
- Are there linters? (`npm run lint`, `biome check`)

---

## Discovery Output Checklist
Before proceeding to Phase 2 (Visual Audit), verify you have recorded:
- [ ] Framework and version
- [ ] CSS engine and config path
- [ ] Current fonts and icon set
- [ ] File paths of the target view and all direct subcomponents
- [ ] Build and test commands available
