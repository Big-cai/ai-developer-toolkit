# Requirements Analysis Prompt

## Context

You are analyzing a software requirement for an existing application.

Inputs:

- Requirement: `{{requirement}}`
- Product context: `{{product_context}}`
- Existing architecture: `{{architecture}}`
- Relevant files: `{{relevant_files}}`

## Constraints

- Do not invent APIs, database fields or business rules.
- Clearly distinguish facts from assumptions.
- Identify missing information instead of silently filling it in.
- Preserve existing architecture unless a change is justified.

## Command

Analyze the requirement and produce an implementation-ready specification.

## Result

Return:

1. Goal
2. User flows
3. Functional requirements
4. Non-functional requirements
5. Existing components/services to reuse
6. Files likely to change
7. API/data implications
8. Edge cases
9. Open questions
10. Acceptance criteria

## Validation

Before finalizing:

- every requirement is mapped to at least one acceptance criterion
- assumptions are explicitly labeled
- no invented API contract is presented as fact
- edge cases cover loading, empty, error and permission states where applicable
