# Debugging Prompt

## Context

- Symptom: `{{symptom}}`
- Expected behavior: `{{expected}}`
- Actual behavior: `{{actual}}`
- Error/logs: `{{logs}}`
- Recent changes: `{{changes}}`
- Relevant code: `{{code}}`

## Constraints

- Do not claim a root cause without evidence.
- Rank hypotheses by evidence.
- Prefer the smallest reproducible explanation.
- Do not make unrelated refactors.

## Command

Find the most likely root cause and propose a minimal fix.

## Result

Return:

1. Observed facts
2. Hypotheses
3. Evidence for/against each hypothesis
4. Root cause
5. Minimal fix
6. Regression test
7. Verification steps

## Validation

The proposed fix must explain the original symptom and include a test that would fail before the fix and pass after it.
