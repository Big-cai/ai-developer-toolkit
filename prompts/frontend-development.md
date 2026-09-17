# Frontend Development Prompt

## Context

- Requirement: `{{requirement}}`
- Project stack: `{{stack}}`
- Project rules: `{{rules}}`
- Existing components: `{{components}}`
- Relevant files: `{{files}}`

## Constraints

- Reuse existing components and utilities.
- Do not introduce a dependency without justification.
- Preserve existing API contracts.
- Keep TypeScript types explicit at external boundaries.
- Do not rewrite unrelated files.

## Command

Implement the requested frontend change.

## Result

Return:

1. Implementation plan
2. Files to modify
3. Code changes
4. Tests
5. Verification commands
6. Risks / follow-up items

## Validation

Run or reason through:

- TypeScript correctness
- lint
- loading/empty/error states
- responsive behavior where relevant
- accessibility
- test coverage
- build compatibility
