/**
 * Anti-Slop Design: Tailwind Theme Extension Preset
 * Use in tailwind.config.js to enforce proportional radii, intentional neutral scales,
 * and semantic color discipline.
 * 
 * Usage:
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require('./templates/design-tokens-tailwind.js')],
 *   ...
 * }
 */

export default {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-bg-canvas, #fafafa)',
        surface: 'var(--color-bg-surface, #ffffff)',
        subtle: 'var(--color-bg-subtle, #f4f4f5)',
        border: 'var(--color-border-subtle, #e4e4e7)',
        'border-strong': 'var(--color-border-strong, #d4d4d8)',
        foreground: 'var(--color-text-primary, #09090b)',
        'muted-foreground': 'var(--color-text-secondary, #52525b)',
        accent: {
          DEFAULT: 'var(--color-accent, #0f172a)',
          hover: 'var(--color-accent-hover, #1e293b)',
          contrast: 'var(--color-accent-contrast, #ffffff)',
        },
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
      lineHeight: {
        tight: '1.15',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.65',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.04em',
        widest: '0.08em',
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionDuration: {
        fast: '120ms',
        base: '180ms',
      },
    },
  },
};
