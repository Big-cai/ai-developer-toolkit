# Validation Architecture

## Goal

Validation is an independent boundary between AI-generated output and accepted engineering change.

## Three layers

### 1. Deterministic validation

Use checks that do not depend on model judgment:

- typecheck
- lint
- unit/integration tests
- build
- schema validation
- security scanners where applicable

### 2. AI validation

Use a specialized review provider to find issues that deterministic checks cannot easily express:

- correctness risks
- missing edge cases
- security patterns
- maintainability problems
- architectural inconsistencies

The first provider is Alibaba OpenCodeReview.

### 3. Human validation

The human remains the decision-maker for:

- architecture changes
- security-sensitive changes
- data migrations
- externally visible behavior
- release/merge approval

## Admission rule

A passing AI review does not imply that a change is safe.

A change is accepted only when:

```text
deterministic checks pass
AND
AI findings are resolved or explicitly accepted
AND
human gates are satisfied where required
```

## Provider abstraction

```text
CodeReviewProvider
       │
       ├── OpenCodeReview
       ├── FutureProvider
       └── CustomReviewer
```

The workflow should depend on the provider contract, not on OCR-specific output details.

## Why this matters

This keeps the toolkit focused on orchestration and engineering methodology. A mature external tool can evolve independently without forcing the entire workflow to change.
