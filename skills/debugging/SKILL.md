# Skill: Debugging

## Purpose

Diagnose failures using evidence and produce a minimal, regression-safe fix.

## Trigger

Use when behavior differs from expectation, a test fails, or a runtime error occurs.

## Input

- symptom
- expected/actual behavior
- logs
- stack trace
- recent changes
- relevant code

## Rules

- separate facts from hypotheses
- rank hypotheses by evidence
- avoid unrelated refactors
- preserve a reproducible test case

## Workflow

```text
Symptom
 ↓
Reproduce
 ↓
Collect Evidence
 ↓
Generate Hypotheses
 ↓
Narrow Root Cause
 ↓
Minimal Fix
 ↓
Regression Test
 ↓
Verify
```

## Output

Root cause, minimal fix, regression test and verification steps.

## Validation

The regression test must represent the original failure.
