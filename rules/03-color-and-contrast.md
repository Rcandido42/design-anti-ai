# Rule 03: Color & Contrast

## The Anti-Slop Principle
> "Color is an information carrier, not wallpaper. When everything glows, nothing is important."

AI tools are addicted to the **Purple Gradient Nebula**: `bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600`, glowing borders, and iridescent text clips. The result is visual fatigue, poor contrast, and a total breakdown of semantic feedback.

---

## 1. The Symptoms of Sloppy Color

1. **The Indigo / Violet Pandemic**: Defaulting to `#6366f1` / `#8b5cf6` for every button, border, link, icon, and background glow regardless of domain.
2. **Gradient Text Syndrome**: Large blocks of headings using `bg-clip-text text-transparent bg-gradient-to-r`, rendering them unreadable on mid-tones or non-retina displays.
3. **Muddy Dark Mode**: Using pure `#000000` pitch black backgrounds combined with low-contrast `#4b5563` dark gray text, failing WCAG AA (requires at least 4.5:1 ratio).
4. **No Color Hierarchy (The Carnival Effect)**: Using 5 or 6 saturated colors simultaneously with no dominant base, so error badges, success indicators, and marketing CTAs cancel each other out.
5. **Washed Out Glass Contrast**: Putting white or light-gray text on top of semi-transparent cards placed over patterned backgrounds without an opaque underlay.

---

## 2. Intentional Color Guidelines

### 2.1 The 60-30-10 Composition Rule
- **60% Dominant Base**: Neutral foundation (light: deep slate text on clean off-white / light neutral; dark: crisp zinc/charcoal `#121214` to `#18181b` with high-contrast text).
- **30% Secondary Surfaces**: Subtle cards, panel backgrounds, borders (`border-border`), and dividers that provide spatial depth without screaming for attention.
- **10% Intentional Accent**: A single distinct brand or functional color (e.g. international orange `#ff5500`, cobalt blue `#1d4ed8`, forest emerald `#047857`, warm amber `#d97706`).

### 2.2 Semantic Color Discipline
Never overload your brand accent with system statuses:
- **Destructive**: Dedicated red (`#ef4444` / `#dc2626`)
- **Warning**: Dedicated amber (`#f59e0b` / `#d97706`)
- **Success**: Dedicated emerald (`#10b981` / `#059669`)
- **Informational**: Neutral slate or calm cerulean

### 2.3 Accessible Contrast Ratios (WCAG AA & AAA)
- **Normal Text (< 18pt / 24px)**: Minimum **4.5:1** contrast ratio against its direct background.
- **Large Text (≥ 18pt / 24px bold)**: Minimum **3.0:1** contrast ratio.
- **UI Components & Borders**: Minimum **3.0:1** contrast ratio for input borders, checkboxes, and interactive focuses.
- **Focus Rings**: Always use high-contrast rings (`focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`).

---

## 3. Direct Code Transformations

### Anti-Pattern: Sloppy AI Gradient Soup
```html
<!-- BAD: Low-contrast gradient text, purple glow, unanchored dark mode -->
<div class="bg-black text-white p-10">
  <h1 class="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
    Build Faster With Next-Gen Intelligence
  </h1>
  <div class="mt-6 p-6 rounded-2xl bg-white/5 border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
    <p class="text-gray-500 text-sm">Real-time sync across all endpoints.</p>
    <button class="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-purple-500/50">
      Get Started Free
    </button>
  </div>
</div>
```

### Remediated: High-Contrast, Restrained Palette
```html
<!-- GOOD: 4.5:1+ contrast, purposeful accent, crisp surface borders -->
<div class="bg-zinc-950 text-zinc-100 p-10 font-sans">
  <div class="max-w-xl space-y-6">
    <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900 text-xs text-zinc-300">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      Runtime v3.1 is active
    </div>
    <h1 class="text-3xl font-semibold tracking-tight text-zinc-50">
      High-throughput state machines for edge runtimes.
    </h1>
    <p class="text-sm text-zinc-400 leading-relaxed">
      Execute declarative state transitions without cold-start penalties or roundtrip latency.
    </p>
    <div class="flex items-center gap-3 pt-2">
      <button class="px-4 py-2 rounded-md bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
        Deploy cluster
      </button>
      <button class="px-4 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
        Read documentation
      </button>
    </div>
  </div>
</div>
```
