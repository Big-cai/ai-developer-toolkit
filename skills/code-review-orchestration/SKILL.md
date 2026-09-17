# Skill: Code Review Orchestration

## Purpose

Orchestrate code review as a validation stage without reimplementing a specialized review engine.

## Trigger

Use:

- after AI-generated implementation
- before merge
- after a meaningful refactor
- when deterministic checks pass but semantic review is still required

## Input

- repository path
- git diff / commit / branch range
- requirement or PR description
- project rules
- architecture context
- validation commands

## Provider

The default provider is Alibaba OpenCodeReview.

Provider contract:

```text
review(input) -> ReviewReport
```

The workflow must not depend directly on provider-specific internal data.

## Workflow

```text
Prepare Context
 ↓
Run Deterministic Checks
 ↓
Invoke CodeReviewProvider
 ↓
Parse / Normalize Findings
 ↓
Evidence Check
 ↓
Deduplicate / Classify
 ↓
Fix Required Findings
 ↓
Run Deterministic Checks Again
 ↓
Re-review
 ↓
Human Gate
```

## Rules

1. Never treat provider availability as a successful review.
2. Never invent findings when the provider fails.
3. Every finding needs evidence.
4. Separate defects from optional improvements.
5. Preserve the original provider output for traceability.
6. Do not automatically merge high-impact changes.
7. Re-run validation after material fixes.

## Output

Return a `ReviewReport` matching:

- `schemas/review-finding.schema.json`
- `schemas/review-report.schema.json`

The report should contain:

- provider
- status
- findings
- summary
- verification
- raw output reference where available

## Failure handling

| Failure | Action |
|---|---|
| OCR not installed | mark provider unavailable |
| LLM configuration invalid | mark provider failed |
| malformed JSON | fail normalization, preserve raw output |
| finding without evidence | downgrade/reject finding |
| deterministic check failed | block acceptance |
| provider timeout | retry or route to human |
| fixed issue remains | reopen and continue loop |

## Validation

The orchestration itself is valid only when:

- provider failures are distinguishable from clean reviews
- output conforms to the schema
- deterministic checks are independently reported
- findings remain traceable to provider output
- re-review can compare before/after state
