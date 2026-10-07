#!/usr/bin/env node

/**
 * Anti-Slop Design CLI
 * Zero-dependency heuristic static analyzer and skill installer for AI coding agents.
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PACKAGE_ROOT = path.resolve(__dirname, '..');

// ─── Smell Definitions ──────────────────────────────────────────────────────────
export const SLOP_DETECTORS = [
  {
    id: 'SMELL-01',
    name: 'Purple/Indigo Gradient Nebula',
    severity: 'HIGH',
    regex: /(?:from-purple-|from-indigo-|#6366f1|#8b5cf6|radial-gradient\([^)]*(?:168,\s*85,\s*247|purple|indigo)[^)]*\)|blur-3xl|blur-\[1\d{2}px\])/i,
    description: 'Excessive reliance on purple/indigo gradient radial glows or heavy background blurs.',
    remedy: 'Remove decorative background blobs. Use solid neutral foundations or subtle lighting.',
  },
  {
    id: 'SMELL-02',
    name: 'Card-in-Card Nesting Debt',
    severity: 'HIGH',
    regex: /(?:class="[^"]*card[^"]*"[^>]*>[^<]*<[^>]*class="[^"]*card[^"]*"|<div[^>]*border[^>]*>[^<]*<div[^>]*border[^>]*>[^<]*<div[^>]*border)/i,
    description: 'Deeply nested card containers wrapping sub-cards and pills.',
    remedy: 'Flatten containers; let whitespace rhythm and hairline dividers organize elements.',
  },
  {
    id: 'SMELL-03',
    name: 'Border-Radius Overdrive',
    severity: 'MEDIUM',
    regex: /(?:rounded-3xl|rounded-\[2[4-9]px\]|rounded-\[3\dpx\]|border-radius:\s*(?:2[5-9]|[3-9]\d)px)/i,
    description: 'Overly large border radius applied to small UI elements.',
    remedy: 'Scale radius to component size: 4px–6px for buttons/inputs, 8px–12px for cards.',
  },
  {
    id: 'SMELL-04',
    name: 'Frosted Glass Soup',
    severity: 'HIGH',
    regex: /(?:backdrop-blur-(?:md|lg|xl|2xl|3xl)|backdrop-filter:\s*blur\(\s*(?:1[5-9]|[2-9]\d)px\))/i,
    description: 'Heavy backdrop-filter blur on main content cards degrading contrast and performance.',
    remedy: 'Restrict backdrop-blur to fixed top navigations. Use opaque elevated surfaces for cards.',
  },
  {
    id: 'SMELL-05',
    name: 'Hollow Marketing Buzzword Copy',
    severity: 'MEDIUM',
    regex: /\b(supercharge|unleash|next-gen|revolutionary|seamlessly|cutting-edge|elevate\s+your|smart\s+intelligence)\b/i,
    description: 'Vague AI-generated placeholder copy loaded with generic marketing clichés.',
    remedy: 'Replace buzzwords with concrete facts, specific metrics, and functional capability verbs.',
  },
  {
    id: 'SMELL-06',
    name: 'Gradient Text Clip Abuse',
    severity: 'HIGH',
    regex: /(?:bg-clip-text\s+text-transparent\s+bg-gradient-to-r|-webkit-background-clip:\s*text)/i,
    description: 'Text headlines rendered with multi-color gradient clips, reducing legibility.',
    remedy: 'Use high-contrast solid typography (text-foreground) with strict optical weights.',
  },
  {
    id: 'SMELL-07',
    name: 'Emoji Incontinence',
    severity: 'LOW',
    regex: /[✨🚀🔥💎🔮]/u,
    description: 'Gratuitous sparkle and rocket emojis cluttering buttons and badges.',
    remedy: 'Remove decorative emojis. Use functional icons from Lucide/Radix only where needed.',
  },
  {
    id: 'SMELL-08',
    name: 'Keyboard Outline Suppression',
    severity: 'CRITICAL',
    regex: /(?:outline-none|outline:\s*none|outline:\s*0)(?!.*(?:focus-visible:ring|focus-visible:outline))/i,
    description: 'Suppression of focus outlines without providing an accessible focus-visible alternative.',
    remedy: 'Add high-contrast focus-visible rings (focus-visible:ring-2 focus-visible:ring-primary).',
  },
];

// ─── Scanner Logic ─────────────────────────────────────────────────────────────
export function scanFileContent(content, filename = 'inline') {
  const findings = [];
  const lines = content.split('\n');

  for (const detector of SLOP_DETECTORS) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (detector.regex.test(line)) {
        findings.push({
          detectorId: detector.id,
          name: detector.name,
          severity: detector.severity,
          file: filename,
          line: i + 1,
          lineContent: line.trim(),
          description: detector.description,
          remedy: detector.remedy,
        });
        break; // Match once per detector per file to avoid noise
      }
    }
  }

  return findings;
}

export function calculateHeuristicScore(findings) {
  let score = 10.0;
  for (const f of findings) {
    if (f.severity === 'CRITICAL') score -= 2.0;
    else if (f.severity === 'HIGH') score -= 1.2;
    else if (f.severity === 'MEDIUM') score -= 0.6;
    else if (f.severity === 'LOW') score -= 0.3;
  }
  return Math.max(1.0, Math.min(10.0, Number(score.toFixed(1))));
}

export function scanDirectory(dirPath) {
  const results = [];
  const validExtensions = new Set(['.html', '.css', '.jsx', '.tsx', '.vue', '.svelte']);

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next' || entry.name === 'dist') continue;
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase())) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const fileFindings = scanFileContent(content, fullPath);
        if (fileFindings.length > 0) {
          results.push(...fileFindings);
        }
      }
    }
  }

  walk(dirPath);
  return results;
}

// ─── Installer Logic (npx anti-slop init) ───────────────────────────────────────
export function installSkill(targetCwd = process.cwd(), flags = {}) {
  const skillSourcePath = path.join(PACKAGE_ROOT, 'SKILL.md');
  if (!fs.existsSync(skillSourcePath)) {
    throw new Error(`Cannot locate source SKILL.md at ${skillSourcePath}`);
  }
  const skillContent = fs.readFileSync(skillSourcePath, 'utf-8');

  const installedTargets = [];

  // 1. Antigravity / Universal Agent Directory (.agent/skills/anti-slop-design/SKILL.md)
  const agentSkillDir = path.join(targetCwd, '.agent', 'skills', 'anti-slop-design');
  fs.mkdirSync(agentSkillDir, { recursive: true });
  fs.writeFileSync(path.join(agentSkillDir, 'SKILL.md'), skillContent, 'utf-8');
  installedTargets.push('.agent/skills/anti-slop-design/SKILL.md (Google Antigravity & Codex)');

  // 2. Claude Code (.claude/skills/ or CLAUDE.md)
  if (flags.claude || flags.all || fs.existsSync(path.join(targetCwd, 'CLAUDE.md')) || fs.existsSync(path.join(targetCwd, '.claude'))) {
    const claudeSkillDir = path.join(targetCwd, '.claude', 'skills', 'anti-slop-design');
    fs.mkdirSync(claudeSkillDir, { recursive: true });
    fs.writeFileSync(path.join(claudeSkillDir, 'SKILL.md'), skillContent, 'utf-8');
    installedTargets.push('.claude/skills/anti-slop-design/SKILL.md (Claude Code)');

    const claudeMdPath = path.join(targetCwd, 'CLAUDE.md');
    const claudeInstruction = '\n\n## UI Design & Anti-Slop Guidance\nFollow `.claude/skills/anti-slop-design/SKILL.md` when reviewing or modifying web interfaces. Do not use generic purple gradients or unnecessary card containers.\n';
    if (fs.existsSync(claudeMdPath)) {
      const existing = fs.readFileSync(claudeMdPath, 'utf-8');
      if (!existing.includes('anti-slop-design')) {
        fs.appendFileSync(claudeMdPath, claudeInstruction, 'utf-8');
        installedTargets.push('CLAUDE.md (updated with anti-slop guidelines)');
      }
    }
  }

  // 3. Cursor (.cursor/rules/ or .cursorrules)
  if (flags.cursor || flags.all || fs.existsSync(path.join(targetCwd, '.cursor')) || fs.existsSync(path.join(targetCwd, '.cursorrules'))) {
    const cursorRulesDir = path.join(targetCwd, '.cursor', 'rules');
    fs.mkdirSync(cursorRulesDir, { recursive: true });
    const cursorRuleContent = `---
description: Anti-Slop Design: Audit and refactor AI-generated interfaces into intentional, accessible UIs
globs: ["**/*.{tsx,jsx,vue,svelte,html,css}"]
---

# Anti-Slop Design Guidelines
Refer to the full skill specification at \`.agent/skills/anti-slop-design/SKILL.md\`.
- Always inspect the stack and layout hierarchy before altering code.
- Prioritize contrast (WCAG AA), typographic hierarchy, and intentional spacing over decorative gradients.
- Keep business logic, APIs, and handlers strictly intact.
`;
    fs.writeFileSync(path.join(cursorRulesDir, 'anti-slop-design.mdc'), cursorRuleContent, 'utf-8');
    installedTargets.push('.cursor/rules/anti-slop-design.mdc (Cursor)');
  }

  return installedTargets;
}

// ─── CLI Command Runner ────────────────────────────────────────────────────────
export function runCLI() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  if (command === 'init' || command === 'install' || command === 'add') {
    const flags = {
      all: args.includes('--all'),
      claude: args.includes('--claude'),
      cursor: args.includes('--cursor'),
    };

    console.log('\n======================================================');
    console.log('       ANTI-SLOP DESIGN: SKILL INSTALLER');
    console.log('======================================================');
    console.log(`Target Directory: ${process.cwd()}\n`);

    try {
      const installed = installSkill(process.cwd(), flags);
      console.log('✔ Skill installed successfully:\n');
      for (const item of installed) {
        console.log(`  + ${item}`);
      }
      console.log('\nReady! You can now use in your agent chat:');
      console.log('  > "/anti-slop audit"');
      console.log('  > "/anti-slop fix"');
      console.log('  > "Audit this UI with anti-slop"\n');
      console.log('Or run the standalone static analyzer:');
      console.log('  > npx anti-slop audit .\n');
    } catch (err) {
      console.error(`Failed to install skill: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (command === 'audit') {
    const target = args[1] || '.';
    const targetPath = path.resolve(process.cwd(), target);
    if (!fs.existsSync(targetPath)) {
      console.error(`Target path does not exist: ${targetPath}`);
      process.exit(1);
    }

    let findings = [];
    if (fs.statSync(targetPath).isDirectory()) {
      findings = scanDirectory(targetPath);
    } else {
      const content = fs.readFileSync(targetPath, 'utf-8');
      findings = scanFileContent(content, targetPath);
    }

    const score = calculateHeuristicScore(findings);
    const criticals = findings.filter(f => f.severity === 'CRITICAL').length;
    const highs = findings.filter(f => f.severity === 'HIGH').length;
    const mediums = findings.filter(f => f.severity === 'MEDIUM').length;
    const lows = findings.filter(f => f.severity === 'LOW').length;

    console.log('\n======================================================');
    console.log('       ANTI-SLOP DESIGN: AUDIT REPORT');
    console.log('======================================================');
    console.log(`Audited Target:   ${targetPath}`);
    console.log(`Heuristic Score:  ${score} / 10.0`);
    console.log(`Defects Detected: ${findings.length} (Critical: ${criticals}, High: ${highs}, Medium: ${mediums}, Low: ${lows})\n`);

    if (findings.length === 0) {
      console.log('✔ Clean interface! Zero AI-slop antipatterns detected.');
      console.log('======================================================\n');
      return;
    }

    console.log('Prioritized Findings:');
    for (const f of findings) {
      const tag = `[${f.severity}]`.padEnd(10);
      console.log(`- ${tag} ${f.name} (${f.detectorId})`);
      console.log(`  File:   ${path.relative(process.cwd(), f.file)}:${f.line}`);
      console.log(`  Remedy: ${f.remedy}\n`);
    }

    console.log('Recommended Next Step:');
    console.log('Run `/anti-slop review` or `/anti-slop fix` to remediate these issues.\n');
    return;
  }

  if (command === 'check-rules') {
    const rulesDir = path.join(PACKAGE_ROOT, 'rules');
    if (!fs.existsSync(rulesDir)) {
      console.error('Rules directory not found.');
      process.exit(1);
    }
    const ruleFiles = fs.readdirSync(rulesDir);
    console.log(`✔ Verified ${ruleFiles.length} rule definition files.`);
    return;
  }

  // Help menu
  console.log('\n======================================================');
  console.log('       ANTI-SLOP DESIGN (CLI)');
  console.log('======================================================');
  console.log('Usage:');
  console.log('  npx anti-slop init            Install skill into current agent workspace');
  console.log('  npx anti-slop init --all      Install into Antigravity, Claude Code, and Cursor');
  console.log('  npx anti-slop audit [path]    Run heuristic static audit on files/folders');
  console.log('  npx anti-slop check-rules     Verify all rule files\n');
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runCLI();
}
