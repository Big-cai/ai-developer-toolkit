# Skill: Code Review

## Purpose

Detect correctness, security, performance and maintainability problems in a change set.

## Trigger

Use before merge or after AI-generated implementation.

## Input

- git diff
- requirement
- project rules
- relevant architecture context

## Workflow

```text
Read Requirement
 ↓
Read Diff
 ↓
Trace Affected Behavior
 ↓
Check Correctness
 ↓
Check Security
 ↓
Check Performance
 ↓
Check Tests
 ↓
Produce Evidence-based Findings
```

## Rules

- changed behavior first
- evidence required
- no duplicate findings
- separate defects from suggestions
- do not invent runtime facts

## Output

Structured review findings with severity, evidence and suggestions.

## Validation

Every finding must be traceable to code or an explicit project rule.
