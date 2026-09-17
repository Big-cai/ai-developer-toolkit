# AI Development Methodology

## 1. Philosophy

AI-assisted software engineering is treated as a controlled engineering loop rather than a chat session.

```text
Requirement
    ↓
Context
    ↓
Constraint
    ↓
Plan
    ↓
Execute
    ↓
Validate
    ↓
Human Review
    ↓
Feedback
    ↺
```

The central rule is:

> The more consequential the output, the stronger the validation boundary should be.

## 2. C-C-C-R-V framework

### Context

Give the model the information it needs:

- business background
- repository structure
- relevant source files
- API contracts
- data models
- existing conventions
- design system
- runtime constraints

### Constraint

Explicitly define boundaries:

- technologies allowed
- technologies forbidden
- files that may/may not be changed
- compatibility requirements
- security requirements
- performance requirements
- coding conventions

### Command

Define one concrete objective.

Bad:

> Improve this project.

Better:

> Add pagination to the existing user table without changing the API response contract.

### Result

Specify the expected artifact:

- implementation plan
- changed files
- code
- tests
- migration
- review report

Whenever possible, use a structured schema.

### Validation

Check the result independently:

- requirement checklist
- type checking
- lint
- unit/integration tests
- build
- static analysis
- security checks
- human review

## 3. Context Engineering

Context is managed deliberately instead of dumping the entire repository into the model.

A useful context hierarchy:

```text
L0: Task
L1: Business requirements
L2: Architecture / project rules
L3: Relevant code
L4: Interfaces / schemas
L5: Examples
L6: Validation criteria
```

Only include context that can change the decision.

## 4. Task decomposition

A large request should be decomposed when:

- subtasks have different objectives
- subtasks need different context
- subtasks can be independently validated
- parallel execution is useful
- failure isolation matters

Do not decompose merely to make an architecture look more sophisticated.

## 5. Human-in-the-loop boundaries

AI may propose or implement changes, but the workflow defines explicit human checkpoints for:

- architecture decisions with material impact
- security-sensitive changes
- database migrations
- destructive operations
- externally visible behavior
- final merge/release decisions

## 6. Failure taxonomy

When AI output fails, classify the failure before changing the prompt:

| Failure | Typical cause | Intervention |
|---|---|---|
| Wrong requirement | insufficient context | improve Context |
| Violates project rule | weak constraint | improve Constraint |
| Wrong implementation | ambiguous task | improve Command |
| Wrong format | implicit output contract | define Result schema |
| Looks correct but fails | missing validation | strengthen Validation |
| Repeats old mistake | no feedback loop | record failure pattern |

## 7. Quality loop

```text
Prompt/Skill
   ↓
Run
   ↓
Evaluate
   ↓
Classify failures
   ↓
Change one variable
   ↓
Run again
   ↓
Compare
```

The goal is not to create the longest prompt. The goal is to create the smallest reliable instruction system that produces acceptable results.
