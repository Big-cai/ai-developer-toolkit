# OpenCodeReview Integration

This integration adapts Alibaba OpenCodeReview into the Toolkit's `CodeReviewProvider` boundary.

Official repository:

`https://github.com/alibaba/open-code-review`

## Why integrate instead of reimplement

OpenCodeReview already provides:

- Git diff / branch / commit review
- full-file scan
- structured JSON output
- review rules
- agent-oriented output
- CI integrations

The Toolkit therefore owns orchestration, normalization and validation rather than duplicating the review engine.

## Adapter

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --background-file ./validation-projects/task-board/.ai/review-context.md
```

The adapter executes:

```bash
ocr review --repo <repo> --format json --audience agent
```

and writes a normalized report.

Use `--output` to choose the destination:

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --output ./artifacts/review.json
```

## Provider states

The adapter distinguishes:

- `passed` — provider executed successfully; zero findings
- `findings` — provider executed successfully; findings exist
- `unavailable` — `ocr` is not installed
- `failed` — OCR executed but returned an error
- `invalid_output` — OCR returned data that cannot be normalized

A provider state is never silently converted to `passed`.

## Traceability

The raw OCR JSON is retained when possible. Normalized findings contain provider metadata so later agents can trace a finding back to its source.

## Current CLI assumptions

The integration follows the current documented OCR interface using `--format json`, `--audience agent`, repository selection and optional background context. Verify the installed OCR version against the official documentation before relying on additional flags.
