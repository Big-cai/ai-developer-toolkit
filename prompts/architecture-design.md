# Architecture Design Prompt

## Context

- Requirement: `{{requirement}}`
- Current architecture: `{{architecture}}`
- Technology stack: `{{stack}}`
- Constraints: `{{constraints}}`

## Command

Design the smallest architecture change that satisfies the requirement while preserving existing project conventions.

## Result

Return:

1. Architecture decision
2. Alternatives considered
3. Decision rationale
4. Component/service boundaries
5. Data flow
6. API changes
7. State management
8. Error handling
9. Security considerations
10. Performance considerations
11. Migration/rollback plan
12. Implementation sequence

## Validation

Check:

- no unnecessary dependencies
- existing abstractions are reused where appropriate
- boundaries are testable
- failure modes are defined
- backward compatibility is addressed
