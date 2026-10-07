# Rule 02: Typography Systems

## The Anti-Slop Principle
> "Typography is the foundation of digital interface design. If your typography is deliberate, 80% of your visual hierarchy is already solved."

AI generators treat fonts as decoration: they insert whatever generic sans-serif is loaded (Inter, Roboto, system default) and use arbitrary font weights (`font-bold`, `font-semibold`, `font-extrabold`) without a mathematical scale, resulting in gray sludge with zero contrast.

---

## 1. The Symptoms of Sloppy Typography

1. **Typographic Flaccidity**: Every level of text uses similar sizes (e.g. Title: 20px, Subtitle: 17px, Body: 15px, Small: 14px). When sizes are too close, the eye struggles to parse importance.
2. **Infinite Font Sizes**: Mixing 11px, 13px, 14px, 15px, 17px, 19px, 22px, 26px, 32px haphazardly across files instead of adhering to a scale.
3. **Leading (Line-Height) Neglect**:
   - Giant headlines with standard line-height (`leading-normal`), causing unsightly gaps between lines.
   - Long body paragraphs with tight line-height (`leading-tight`), causing text lines to collide and exhausting the reader.
4. **Unconstrained Measure**: Body paragraphs stretching across 1200px screens without a max-width, forcing uncomfortable eye-tracking across the display.
5. **Arbitrary Letter-Spacing**: Tighter tracking on small text (making it illegible) while keeping large display text loose.

---

## 2. Intentional Typographic Rules

### 2.1 The Harmonic Scale
Standardize on a strict modular scale. For digital software interfaces, the **Minor Third (1.200)** or **Major Second (1.125)** scales work best:

| Step | Pixel Size | Tailwind Equivalent | Role |
| :--- | :--- | :--- | :--- |
| **Caption / Overline** | 11px – 12px | `text-xs` (0.75rem) | Metadata, timestamp, uppercase tracker |
| **Secondary / Meta** | 13px – 14px | `text-sm` (0.875rem) | Table cells, secondary descriptions |
| **Body** | 15px – 16px | `text-base` (1rem) | Primary content, inputs, readable copy |
| **Section Title** | 18px – 20px | `text-lg` / `text-xl` | Card heads, panel titles, subheaders |
| **Page Title (H2)** | 24px – 28px | `text-2xl` | View headers, major section headers |
| **Display (H1)** | 36px – 48px | `text-4xl` / `text-5xl` | Hero statements, single focal KPI |

### 2.2 Optical Tracking & Leading Formula
- **Large Headlines (≥ 28px)**:
  - Tight line-height: `leading-tight` or `line-height: 1.1 - 1.2`
  - Negative letter-spacing: `tracking-tight` (`-0.02em` to `-0.03em`)
- **Body Text (15px - 16px)**:
  - Comfortable line-height: `leading-relaxed` or `line-height: 1.5 - 1.6`
  - Normal letter-spacing: `tracking-normal` (`0em`)
  - Measure constraint: `max-w-prose` (45ch – 75ch characters per line)
- **Small Metadata (≤ 12px)**:
  - Open tracking: `tracking-wider` or `tracking-widest` (`+0.04em` to `+0.08em`) when uppercase.

### 2.3 Deliberate Font Pairings (By Archetype)
- **Technical / Console**: Clean grotesque sans (`Geist`, `Inter`, `JetBrains Mono` for tabular/numeric data).
- **Editorial**: High-character serif display (`Newsreader`, `Instrument Serif`, `Playfair`) paired with crisp sans body (`Inter`, `Plus Jakarta Sans`).
- **Minimal Swiss**: Pure neutral sans (`Helvetica Neue`, `Geist`, `Inter`) using weight variation rather than font changes.
- **Industrial**: Monospace or condensed display (`Space Grotesk`, `Chivo`, `IBM Plex Mono`).

---

## 3. Direct Code Transformations

### Anti-Pattern: Sloppy, Undifferentiated Typography
```html
<!-- BAD: Low contrast, poor line-height, unconstrained measure -->
<div class="p-8">
  <div class="text-xs text-gray-400">ANNOUNCEMENT</div>
  <div class="text-2xl font-bold text-gray-800">Our New Platform Is Now Live</div>
  <div class="text-lg text-gray-600">
    We are excited to bring you the next generation of cloud developer tools engineered to maximize performance across distributed systems worldwide.
  </div>
</div>
```

### Remediated: Structured, Distinctive Typographic Rhythm
```html
<!-- GOOD: High optical contrast, disciplined tracking, clear hierarchy -->
<div class="space-y-4 max-w-xl">
  <div class="flex items-center gap-2">
    <span class="font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Release Notes</span>
    <span class="text-muted-foreground/40">•</span>
    <time class="font-mono text-[11px] text-muted-foreground">v2.4.0</time>
  </div>
  <h1 class="text-3xl font-semibold tracking-tight text-foreground leading-tight">
    Zero-overhead telemetry for distributed edge runtimes.
  </h1>
  <p class="text-base text-muted-foreground leading-relaxed">
    We re-engineered the metric collection pipeline to write directly to shared memory buffers, eliminating GC pressure in high-throughput services.
  </p>
</div>
```
