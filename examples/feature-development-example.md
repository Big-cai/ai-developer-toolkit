# Example: User Table Pagination

## Requirement

Add pagination to an existing user-management table. Preserve the existing API contract and UI component library.

## Context

- React + TypeScript
- existing UserTable component
- existing API client
- existing Pagination component

## Planner output

```text
1. Inspect UserTable data flow.
2. Confirm API pagination contract.
3. Reuse Pagination component.
4. Add page/pageSize state.
5. Pass pagination parameters through existing API layer.
6. Add tests for page changes and empty results.
```

## Coder output

The Coder changes only the files required by the plan.

## Tester output

Acceptance criteria:

- first page loads correctly
- changing page requests correct data
- page size changes correctly
- empty page renders empty state
- API errors render error state

## Reviewer output

Review checks:

- API layer reused
- no direct fetch in component
- no duplicate state source
- types preserved
- tests cover changed behavior

## Human gate

Developer checks the final diff and runs the project verification commands.

## Why this example matters

The example demonstrates that the workflow is not:

> "Ask AI to write a page."

It is:

> requirement → context → plan → constrained implementation → verification → review.
