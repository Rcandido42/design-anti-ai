# Workflow 07: Bounded Iteration Protocol (Phase 7)

## Objective
Govern iterative refinement when the user invokes `/anti-slop iterate` or requests continued design improvements, ensuring high visual quality while strictly preventing infinite loops or code churn.

---

## The Iteration Loop Rules

```
┌────────────────────────────────────────────────────────┐
│ Cycle 1: Audit ──► Apply High-Impact Fixes ──► Verify  │
└──────────────────────────┬─────────────────────────────┘
                           │ Heuristic Score < 8.5
                           ▼
┌────────────────────────────────────────────────────────┐
│ Cycle 2: Micro-Audit ──► Micro-Refinement ──► Verify   │
└──────────────────────────┬─────────────────────────────┘
                           │ Residual Defect Detected
                           ▼
┌────────────────────────────────────────────────────────┐
│ Cycle 3: Final Polish ──► Final Verification (Cap)     │
└────────────────────────────────────────────────────────┘
```

### 1. Hard Ceiling (Max 3 Cycles)
The iteration loop must never exceed **3 cycles** in a single execution session. If residual improvements remain after 3 cycles, log them as recommendations for future development rather than automatically continuing.

### 2. Stopping Criteria
Terminate the loop immediately if any of the following conditions are met:
1. **Target Score Reached**: Heuristic composite score reaches **≥ 8.5 / 10**.
2. **Defect Elimination**: Zero `CRITICAL` or `HIGH` severity defects remain in the audit catalog.
3. **Diminishing Returns**: The score delta between consecutive iterations is less than **+0.3**.
4. **User Intervention**: The user approves the current state or asks to stop.

---

## Cycle Execution Template

For each iteration cycle, the agent must output a concise status record:

```markdown
### Iteration Cycle [N] of 3
- **Residual Defect Identified**: [Description, file/line]
- **Targeted Rationale**: [Why this remaining element still shows AI slop symptoms]
- **Surgical Adjustment Made**: [Precise change applied]
- **Post-Iteration Score**: [New score] (Delta: +X.X)
- **Status**: [Continuing to Cycle N+1 | Terminating: Stopping Criteria Met]
```
