# Workflow: Feature Development v0.2

## Goal

Deliver a feature from requirement to independently validated implementation.

```text
Requirement
   ↓
Requirement Analysis
   ↓
Planner
   ↓
Architecture Check
   ↓
Coder
   ↓
Tester
   ↓
Deterministic Validation
   ├── typecheck
   ├── lint
   ├── tests
   └── build
   ↓
CodeReviewProvider
   ↓
Normalize Findings
   ↓
Fix / Re-review Loop
   ↓
Human Gate
   ↓
Merge
```

## Validation gates

### Gate A — Deterministic

The implementation must pass applicable technical checks.

### Gate B — AI review

The provider must return a meaningful state:

- passed
- findings
- unavailable
- failed
- invalid_output

Only `passed` means the provider found no issues. `unavailable` is not a pass.

### Gate C — Human

Human review is required for architecture, security-sensitive changes, migrations, externally visible behavior and final merge decisions.

## Completion criteria

A feature is complete only when:

- acceptance criteria are satisfied
- deterministic checks pass
- AI review has passed or findings are explicitly resolved/accepted
- provider failures are not hidden
- required human gates are satisfied
- the final diff remains within the approved scope
