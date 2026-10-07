# Rule 05: Motion & Interaction

## The Anti-Slop Principle
> "Motion in software is functional feedback, not an entrance spectacle."

AI generation frequently inserts dramatic keyframe animations: floating background blobs, staggered fade-in cards that delay content discovery by 1.5 seconds, and continuous pulsing buttons. This creates lag, causes motion sickness, and slows users down.

---

## 1. The Symptoms of Sloppy Motion

1. **Staggered Content Reveals (The Slow-Load Trap)**: Every card and paragraph fades in with a 200ms delay (`animation-delay: calc(index * 150ms)`), preventing users from reading or interacting immediately.
2. **Perpetual Floating & Pulsing**: Background mesh blobs continuously pulsing and floating (`animate-pulse`, `animate-bounce`) consuming CPU/GPU cycles and distracting peripheral vision.
3. **Sluggish Transition Timing**: Using 500ms+ linear or bouncy transitions on simple hover states, making the interface feel unresponsive or syrupy.
4. **Missing Focus-Visible States**: Removing browser outlines (`outline-none`) without providing an explicit replacement, breaking keyboard accessibility for millions of users.
5. **Ignoring `prefers-reduced-motion`**: Forcing animations onto users who have requested minimal motion at the operating system level.

---

## 2. Intentional Motion Guidelines

### 2.1 The Purpose of Functional Motion
Every animation must satisfy at least one of these three roles:
1. **State Confirmation**: Immediate feedback that a click, toggle, or keystroke was registered (e.g. subtle button press scale `active:scale-[0.98]`).
2. **Spatial Orientation**: Helping the user understand where an element came from or went to (e.g. a slide-over panel sliding in from the right edge).
3. **Progress Indication**: Indicating that a long-running background process is active (e.g. a deterministic progress bar or skeleton placeholder).

### 2.2 Strict Timing & Easing Budget
- **Hover & Color Changes**: `100ms – 150ms`, `ease-out` (never `ease-in` on hover).
- **Small Dialogs / Popovers**: `150ms – 200ms`, `cubic-bezier(0.16, 1, 0.3, 1)` (snappy spring out).
- **Large Panels / Drawers**: `250ms – 300ms`, `ease-out`.
- **Duration Cap**: Never exceed **300ms** for any interface animation.

### 2.3 Mandatory Accessibility: `prefers-reduced-motion`
Always provide a reduced motion override in CSS:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
Or in Tailwind: `motion-safe:transition-all motion-reduce:transition-none`.

---

## 3. Direct Code Transformations

### Anti-Pattern: Gratuitous Bouncy Entrance Animation
```html
<!-- BAD: Staggered slow fade, distracting perpetual bounce -->
<div class="animate-pulse bg-gradient-to-r from-purple-500 to-indigo-500 h-96 w-96 rounded-full blur-3xl absolute -top-20 -left-20 pointer-events-none"></div>
<div class="transition-all duration-700 ease-bounce hover:scale-110 hover:-translate-y-2 p-6 rounded-2xl bg-white shadow-xl">
  <button class="animate-bounce bg-purple-600 text-white p-3 rounded-full outline-none">
    Click Me ✨
  </button>
</div>
```

### Remediated: Snappy, Tactile, Accessible Feedback
```html
<!-- GOOD: Immediate 150ms ease-out feedback, keyboard ring, no perpetual motion -->
<div class="p-6 rounded-lg border border-border bg-card text-card-foreground">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-sm font-medium text-foreground">API Keys</h3>
      <p class="text-xs text-muted-foreground mt-0.5">Generate production authentication tokens.</p>
    </div>
    <button class="px-3.5 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-[background-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
      Create new key
    </button>
  </div>
</div>
```
