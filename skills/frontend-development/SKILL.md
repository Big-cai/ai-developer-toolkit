# Skill: Frontend Development

## Purpose

Implement frontend features within an existing codebase while minimizing unnecessary changes.

## Trigger

Use for React/TypeScript-style feature implementation, UI behavior changes, forms, tables, state and API integration.

## Input

- approved requirement
- architecture decision
- project rules
- relevant source files
- API contracts

## Rules

- reuse existing components
- preserve API contracts
- avoid unrelated refactors
- type external data
- handle loading, empty and error states
- consider accessibility

## Workflow

```text
Requirement
 ↓
Inspect Existing Code
 ↓
Plan
 ↓
Implement Smallest Change
 ↓
Add/Update Tests
 ↓
Typecheck + Lint + Build
 ↓
Self Review
```

## Output

- changed files
- implementation
- tests
- verification result
- remaining risks

## Validation

A feature is not complete until acceptance criteria and technical checks pass.
