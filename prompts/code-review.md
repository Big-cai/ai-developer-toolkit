# Code Review Prompt

## Context

- Git diff: `{{diff}}`
- Project rules: `{{rules}}`
- Requirement: `{{requirement}}`

## Constraints

Review only the changed behavior and directly affected areas. Do not report stylistic preferences as defects unless project rules require them.

## Command

Perform an engineering code review.

## Result

Return structured findings:

```json
{
  "findings": [
    {
      "severity": "critical|high|medium|low|info",
      "file": "path",
      "line": 0,
      "category": "correctness|security|performance|maintainability|testing|architecture",
      "problem": "...",
      "evidence": "...",
      "suggestion": "..."
    }
  ],
  "summary": "...",
  "verification": ["..."]
}
```

## Validation

For every finding:

- point to concrete evidence
- avoid duplicate findings
- do not invent runtime behavior
- distinguish defect from optional improvement
