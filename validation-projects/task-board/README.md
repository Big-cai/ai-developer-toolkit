# Toolkit Validation Project: Task Board

A deliberately small TypeScript + browser project used to validate AI Developer Toolkit v0.2.

## Feature

The project models tasks with three states:

- todo
- doing
- done

The browser entry renders tasks and supports filtering through `?status=done`.

## Validation

```bash
npm install
npm run typecheck
npm test
npm run build
```

From the Toolkit root:

```bash
node scripts/validate.mjs ./validation-projects/task-board
```

Optional AI review:

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --background-file ./validation-projects/task-board/.ai/review-context.md
```

## Why this project is intentionally small

The purpose is to validate the workflow rather than to demonstrate product complexity. A small repository makes each step observable:

Requirement → Skill → Agent → Implementation → Deterministic Validation → AI Review → Human Gate.
