# Rule 01: Layout & Composition

## The Anti-Slop Principle
> "Layout is not a container collection; it is the visual rhythm that guides the reader's attention."

AI-generated interfaces almost universally fall into the **Symmetric Box Trap**: every section is centered, flanked by equal margins, and divided into a grid of 3 identical rectangular boxes regardless of whether the content demands it.

---

## 1. The Symptoms of Sloppy Layout

1. **Gratuitous 3-Column Card Grids**: Forcing 3 items into cards with equal height, equal width, and identical padding, even when one item is 200 words and another is 10 words.
2. **Endless Centered Stacks**: Every hero, feature row, and call-to-action is centered (`text-center mx-auto`). Centered body copy longer than 3 lines degrades reading speed by up to 30%.
3. **Rigid Vertical Spacing**: Using identical spacing (`gap-8` or `my-8`) everywhere, ignoring Gestalt principles of proximity (items within a group must be closer together than between groups).
4. **Window-Blind Hero Sections**: A full-screen container filled with a gradient blur and a single small button, leaving massive dead space on desktop.
5. **Horizontal Overflow Blindness**: Forcing desktop multi-column layouts on mobile screens (`flex-row` without `flex-wrap` or `sm:flex-row`), causing cut-off content and sideways horizontal scrolling.

---

## 2. Intentional Layout Guidelines

### 2.1 Embracing Asymmetry & Hierarchy
- **Lead with the Heroic Element**: One dominant element should capture 60% of the initial visual attention (a bold stat, a detailed code snippet, a high-fidelity preview, or an expansive headline).
- **Asymmetric Splits**: Prefer 60/40 or 70/30 ratios over rigid 50/50 splits when displaying content alongside controls.
- **Left-Aligned Reading Cadence**: Left-align body copy and headlines for continuous reading flow. Reserve center alignment strictly for single badges, short pull-quotes, or standalone confirmation dialogs.

### 2.2 Whitespace as Structure (Killing Card Clutter)
- Before creating a `<div class="border rounded-2xl bg-white/5 p-6">`, ask: **Can whitespace accomplish this boundary?**
- Use **Spatial Grouping**:
  - Distance between related label and value: `4px – 8px` (`gap-1` to `gap-2`).
  - Distance between items in a card: `12px – 16px` (`gap-3` to `gap-4`).
  - Distance between distinct sections: `48px – 96px` (`gap-12` to `gap-24`).
- Group related items with subtle dividing rules (`border-b border-border/40`) or negative space rather than boxed cards.

### 2.3 Responsive Re-Orchestration
- **Do not simply shrink font sizes on mobile**. Re-orchestrate the information order:
  - Complex data tables → Tabular list cards with primary KPI visible.
  - Multi-column filters → Drawer or segmented sticky pills.
  - Desktop sidebar → Compact bottom bar or top utility bar.
- Always guarantee `overflow-x: hidden` or natural container boundaries at `375px` viewport.

---

## 3. Direct Code Transformations

### Anti-Pattern: Centered AI Card Grid
```html
<!-- BAD: Generic AI 3-column card soup -->
<div class="py-20 text-center">
  <h2 class="text-3xl font-bold">Features</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    <div class="rounded-2xl border bg-card/50 p-8 shadow-xl">
      <div class="h-12 w-12 rounded-full bg-indigo-500/10 mx-auto mb-4 flex items-center justify-center">⚡</div>
      <h3 class="font-bold">Fast Performance</h3>
      <p class="text-muted-foreground text-sm mt-2">Lightning fast execution.</p>
    </div>
    <!-- Duplicated 2 more times with identical visual weight -->
  </div>
</div>
```

### Remediated: Intentional Editorial Split
```html
<!-- GOOD: Hierarchical, content-driven layout -->
<section class="py-16 max-w-5xl mx-auto px-6">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline border-b border-border/60 pb-12">
    <div class="lg:col-span-4">
      <p class="text-xs uppercase tracking-widest font-mono text-muted-foreground">Capabilities</p>
      <h2 class="text-2xl font-semibold tracking-tight mt-2 text-foreground">Engineered for low-latency pipelines.</h2>
    </div>
    <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div>
        <h3 class="text-sm font-medium text-foreground flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Sub-millisecond query latency
        </h3>
        <p class="text-sm text-muted-foreground mt-2 leading-relaxed">
          Queries bypass intermediate serialization layers and hit memory-mapped buffers directly.
        </p>
      </div>
      <div>
        <h3 class="text-sm font-medium text-foreground flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Deterministic caching
        </h3>
        <p class="text-sm text-muted-foreground mt-2 leading-relaxed">
          Cache invalidation operates on content hash signatures rather than heuristic TTL expirations.
        </p>
      </div>
    </div>
  </div>
</section>
```
