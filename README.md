# AI Developer Toolkit v0.2

> A portfolio-grade, reusable toolkit for AI-assisted software engineering.

> 中文版：[README.zh.md](./README.zh.md)

AI Developer Toolkit is not a collection of random prompts. It treats AI-assisted development as an engineering system:

**Context → Constraint → Command → Result → Validation → Feedback**

v0.2 turns the original documentation-first prototype into a **workflow + validation architecture** that can be applied to a real project.

## What changed in v0.2

- Added a three-layer validation model: deterministic checks + AI review + human gate.
- Added a provider abstraction for code review.
- Integrated Alibaba OpenCodeReview as the first external validation provider.
- Added machine-readable review schemas.
- Added an executable Node.js validation runner.
- Added a real project under `validation-projects/task-board`.
- Added a recorded end-to-end verification run.
- Added failure-loop and review-loop examples.
- Added Chinese documentation alongside the English source documents.

## Architecture

```text
                         Feature Workflow
                                │
              ┌─────────────────┼─────────────────┐
              ↓                 ↓                 ↓
        Requirement          Planner            Context
              │                 │                 │
              └─────────────────┼─────────────────┘
                                ↓
                              Coder
                                ↓
                              Tester
                                ↓
                       Validation Layer
                                │
             ┌──────────────────┼──────────────────┐
             ↓                  ↓                  ↓
      Deterministic        AI Review          Human Gate
      typecheck/lint/      Provider            architecture/
      tests/build          OpenCodeReview      security/merge
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ↓
                       Finding Normalization
                                ↓
                       Reviewer / Fix Agent
                                ↓
                           Re-validate
```

## Core model

| Layer | Purpose |
|---|---|
| Prompt | Gives the model an explicit instruction |
| Context | Supplies only decision-relevant information |
| Skill | Packages a repeatable capability |
| Agent | Executes a bounded role |
| Workflow | Orchestrates agents and validation gates |
| Validation Provider | Supplies specialized external validation |
| Evaluation | Measures whether the workflow actually works |
| Human Gate | Makes high-impact engineering decisions |

## Validation philosophy

The toolkit does **not** try to reimplement a mature code-review engine.

OpenCodeReview is treated as a `CodeReviewProvider`. The toolkit owns the orchestration around it:

1. prepare requirement and repository context
2. invoke the provider
3. consume structured JSON findings
4. normalize findings into the toolkit schema
5. run deterministic checks
6. classify and deduplicate findings
7. route high-impact decisions to a human
8. re-run validation after fixes

This separation makes the system replaceable and avoids vendor lock-in.

OpenCodeReview currently supports machine-readable review output such as:

```bash
ocr review --format json --audience agent
```

and branch/commit/workspace review modes. See the official project documentation for current installation and CLI details.

## Repository map

```text
ai-developer-toolkit/
├── methodology/
├── prompts/
├── skills/
│   ├── requirement-analysis/
│   ├── frontend-development/
│   ├── debugging/
│   └── code-review-orchestration/
├── agents/
├── workflows/
├── integrations/
│   └── opencode-review/
├── schemas/
├── scripts/
├── evaluation/
├── examples/
├── validation-projects/
│   └── task-board/
└── docs/
```

## Quick start

### 1. Read the methodology

Start with:

```text
methodology/ai-development-methodology.md
skills/README.md
workflows/feature-development.md
evaluation/evaluation-framework.md
```

### 2. Run the included validation project

```bash
cd validation-projects/task-board
npm install
npm test
npm run build
```

The project is intentionally small so the workflow can be inspected end-to-end.

### 3. Run the toolkit validation runner

From the toolkit root:

```bash
node scripts/validate.mjs ./validation-projects/task-board
```

The runner performs deterministic checks and, when `ocr` is installed and configured, can invoke OpenCodeReview.

### 4. Optional: enable OpenCodeReview

Install and configure the provider according to its official documentation, then run:

```bash
ocr review --format json --audience agent
```

or use the toolkit adapter:

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --background-file ./validation-projects/task-board/.ai/review-context.md
```

The adapter does not fake review results: if OCR is unavailable or misconfigured, it returns a clear provider-unavailable status.

## Portfolio positioning

This repository is evidence of:

- Prompt Engineering
- Context Engineering
- Skill Engineering
- Agent/Subagent design
- Workflow orchestration
- External tool integration
- Provider abstraction
- Automated validation
- Evaluation and feedback loops
- Human-in-the-loop engineering

The strongest proof is not the number of Markdown files. It is the **real project verification record** under `validation-projects/task-board/.ai/verification-run.md`.
