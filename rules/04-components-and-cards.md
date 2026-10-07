# Rule 04: Components & Cards

## The Anti-Slop Principle
> "A component should exist because it has a distinct functional purpose, not because an AI needed a rectangular wrapper."

The number one aesthetic plague in modern web generation is **Container Debt**: wrapping every single piece of text, icon, number, and button in a high-radius card with a subtle border and drop shadow.

---

## 1. The Symptoms of Sloppy Components

1. **Russian Doll Nesting**: A page containing a card, which contains three sub-cards, each of which contains two tiny badge-pills and an inner card.
2. **Border-Radius Overkill**: Using `rounded-2xl` (16px) or `rounded-3xl` (24px) on small elements like tags, data tables, or dropdown menus, distorting their internal geometry.
3. **Button Weight Identity Crisis**:
   - Secondary actions styled as bright gradient buttons.
   - Five primary buttons on a single screen competing for attention.
   - Lack of distinct disabled (`opacity-50 pointer-events-none`) or active states.
4. **Badge Infestation**: Every heading accompanied by three colorful pills: `[NEW]`, `[AI-POWERED]`, `[PRO]`, `[BETA]`, turning serious software into a carnival banner.
5. **Modal Abuse**: Forcing simple 1-field inputs or standard confirmations into heavy modal backdrops when inline editing or subtle flyouts are much less disruptive.

---

## 2. Intentional Component Rules

### 2.1 The "Does It Need a Box?" Test
Before creating a card container, answer:
- Does this chunk of content represent an independent, self-contained entity that can be dragged, dismissed, or reordered?
- Does it sit against a background that conflicts with its readability?
- **If NO to both**: Remove the container! Use whitespace, dividers, or typographic scale.

### 2.2 Border Radius Proportionality
Border radius should scale proportionally to the component's physical dimensions:

| Component Type | Height / Dimensions | Recommended Radius | Tailwind Class |
| :--- | :--- | :--- | :--- |
| **Tags / Badges** | 20px – 24px | 2px – 4px (or full pill `9999px` if strictly rounded) | `rounded-sm` or `rounded-full` |
| **Buttons / Inputs**| 36px – 42px | 4px – 6px | `rounded` or `rounded-md` |
| **Cards / Panels**  | 150px – 400px | 6px – 10px | `rounded-lg` |
| **Modal Dialogs**   | 400px+ | 8px – 12px | `rounded-lg` or `rounded-xl` |

*Never use `rounded-3xl` (24px) on a standard 36px input or button unless specifically pursuing a retro-bubble/playful archetype.*

### 2.3 Strict Button Hierarchy
Every screen must have a clear visual hierarchy of actions:
1. **Primary Button** (Limit 1 per view context): High contrast, solid background, definitive call-to-action.
2. **Secondary Button**: Outlined or muted background (`border border-border bg-background hover:bg-muted`), supporting action.
3. **Ghost / Tertiary Button**: Borderless, text-only with hover background (`hover:bg-muted text-muted-foreground hover:text-foreground`), navigation, cancel, or minor toggles.
4. **Destructive Button**: Clear red hue, reserved strictly for irreversible actions (delete, revoke, purge).

---

## 3. Direct Code Transformations

### Anti-Pattern: Nested Card Madness & Pill Abuse
```html
<!-- BAD: Cards inside cards, pill overdrive, competing buttons -->
<div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
  <div class="flex gap-2 mb-4">
    <span class="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs">✨ AI Inside</span>
    <span class="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs">⚡ Fast</span>
    <span class="rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs">🚀 Turbo</span>
  </div>
  <div class="rounded-2xl border border-gray-100 bg-gray-50 p-6">
    <div class="text-lg font-bold">Billing Details</div>
    <div class="rounded-xl border border-gray-200 bg-white p-4 mt-4 flex justify-between items-center">
      <span>Plan: Pro Annual</span>
      <button class="rounded-full bg-indigo-600 text-white px-4 py-2 text-sm shadow">Upgrade</button>
      <button class="rounded-full bg-indigo-600 text-white px-4 py-2 text-sm shadow">Manage</button>
    </div>
  </div>
</div>
```

### Remediated: Clean Surface, Purposeful Actions
```html
<!-- GOOD: Semantic layout, 1 primary action, no redundant boxes -->
<section class="max-w-2xl rounded-lg border border-border bg-card p-6 text-card-foreground">
  <div class="flex items-start justify-between border-b border-border pb-4">
    <div>
      <h2 class="text-base font-semibold text-foreground">Subscription & Billing</h2>
      <p class="text-sm text-muted-foreground mt-0.5">Manage your team tier and payment methods.</p>
    </div>
    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary text-secondary-foreground">
      Pro Annual
    </span>
  </div>

  <div class="mt-4 flex items-center justify-between text-sm py-2">
    <div>
      <p class="font-medium text-foreground">Next invoice</p>
      <p class="text-xs text-muted-foreground">$240.00 due on November 1, 2026</p>
    </div>
    <div class="flex items-center gap-2">
      <button class="px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
        View invoice history
      </button>
      <button class="px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
        Manage plan
      </button>
    </div>
  </div>
</section>
```
