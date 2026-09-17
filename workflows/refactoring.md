# Workflow: Refactoring

## Goal

Improve internal structure without changing externally observable behavior.

```text
Current Behavior
 ↓
Characterize with Tests
 ↓
Refactor Plan
 ↓
Small Change
 ↓
Tests
 ↓
Review
 ↓
Repeat
```

## Rules

- establish behavior before changing structure
- keep diffs small
- avoid mixing refactoring with feature work
- preserve public contracts
- validate after every meaningful step

## Human gate

Required before large-scale architectural refactoring.
