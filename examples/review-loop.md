# Review → Fix → Re-review

The review loop is deliberately separate from the coding agent.

```text
Coder
  ↓
Deterministic checks
  ↓
OpenCodeReview Provider
  ↓
Normalize Findings
  ↓
Reviewer Agent
  ↓
Fix Agent
  ↓
Deterministic checks
  ↓
OpenCodeReview again
  ↓
Human Gate
```

## Important rule

A review with zero findings is not equivalent to a successful build, and a successful build is not equivalent to a safe architecture decision.

Each layer answers a different question.

## Example state machine

```text
READY
 ↓
CHECKING
 ↓
REVIEWING
 ├── unavailable → HUMAN / INSTALL PROVIDER
 ├── failed      → FIX PROVIDER
 ├── passed      → HUMAN GATE
 └── findings    → FIX
                    ↓
                  CHECKING
                    ↓
                  REVIEWING
```
