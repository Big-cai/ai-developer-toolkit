# Review Context

This repository is the validation project for AI Developer Toolkit v0.2.

## Requirement

Add a minimal task board domain and expose a browser view that can filter tasks by status.

## Constraints

- TypeScript strict mode.
- No framework dependency.
- Preserve the task domain API.
- Do not add unnecessary dependencies.
- Keep the change small and reviewable.

## Acceptance Criteria

1. Task titles are trimmed and empty titles are rejected.
2. Tasks support todo/doing/done states.
3. Filtering by status returns only matching tasks.
4. Completing one task does not modify unrelated tasks.
5. Browser output escapes task titles before inserting HTML.
6. Typecheck, tests and build pass.
