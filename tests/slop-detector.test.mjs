import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  scanFileContent,
  calculateHeuristicScore,
  installSkill,
  SLOP_DETECTORS
} from '../bin/anti-slop.mjs';

describe('Anti-Slop Design: Automated Analyzer & Rules Verification', () => {

  test('detects classic AI slop antipatterns in sloppy fixture', () => {
    const fixturePath = path.resolve('tests/fixtures/sloppy-dashboard.html');
    const content = fs.readFileSync(fixturePath, 'utf-8');
    const findings = scanFileContent(content, fixturePath);

    assert(findings.length >= 5, `Expected at least 5 smells, got ${findings.length}`);

    const detectorIds = findings.map(f => f.detectorId);
    assert(detectorIds.includes('SMELL-01'), 'Should detect Purple Nebula gradient');
    assert(detectorIds.includes('SMELL-05'), 'Should detect hollow buzzword copy');
    assert(detectorIds.includes('SMELL-06'), 'Should detect gradient text clip');
    assert(detectorIds.includes('SMELL-07'), 'Should detect emoji overload');
    assert(detectorIds.includes('SMELL-08'), 'Should detect outline suppression');

    const score = calculateHeuristicScore(findings);
    assert(score < 5.0, `Score for sloppy UI should be low (< 5.0), got ${score}`);
  });

  test('validates clean infrastructure console with 10.0 score', () => {
    const fixturePath = path.resolve('tests/fixtures/clean-dashboard.html');
    const content = fs.readFileSync(fixturePath, 'utf-8');
    const findings = scanFileContent(content, fixturePath);

    assert.strictEqual(findings.length, 0, 'Clean fixture should have 0 slop detections');
    const score = calculateHeuristicScore(findings);
    assert.strictEqual(score, 10.0, 'Clean fixture should achieve perfect 10.0 score');
  });

  test('verifies all 7 core rule definitions exist and are non-empty', () => {
    const rules = [
      '01-layout-and-composition.md',
      '02-typography-systems.md',
      '03-color-and-contrast.md',
      '04-components-and-cards.md',
      '05-motion-and-interaction.md',
      '06-content-and-copy.md',
      '07-heuristics-matrix.md'
    ];

    for (const rule of rules) {
      const p = path.resolve('rules', rule);
      assert(fs.existsSync(p), `Missing rule file: ${rule}`);
      const stat = fs.statSync(p);
      assert(stat.size > 200, `Rule file ${rule} is too small (${stat.size} bytes)`);
    }
  });

  test('verifies all 7 operational workflow files exist and are non-empty', () => {
    const workflows = [
      '01-discovery.md',
      '02-visual-audit.md',
      '03-scoring.md',
      '04-design-direction.md',
      '05-implementation.md',
      '06-visual-qa.md',
      '07-iteration-loop.md'
    ];

    for (const wf of workflows) {
      const p = path.resolve('workflows', wf);
      assert(fs.existsSync(p), `Missing workflow file: ${wf}`);
      const stat = fs.statSync(p);
      assert(stat.size > 200, `Workflow file ${wf} is too small (${stat.size} bytes)`);
    }
  });

  test('verifies installSkill copies SKILL.md to target workspace', () => {
    const tmpDir = path.resolve('tests/fixtures/tmp-workspace');
    fs.mkdirSync(tmpDir, { recursive: true });

    try {
      const installed = installSkill(tmpDir, { all: true });
      assert(installed.length >= 2, 'Should install into at least agent and cursor dirs');

      const installedSkill = path.join(tmpDir, '.agent/skills/anti-slop-design/SKILL.md');
      assert(fs.existsSync(installedSkill), 'Target SKILL.md must exist in .agent/skills');

      const installedCursor = path.join(tmpDir, '.cursor/rules/anti-slop-design.mdc');
      assert(fs.existsSync(installedCursor), 'Target Cursor rule must exist in .cursor/rules');
    } finally {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
  });

});

