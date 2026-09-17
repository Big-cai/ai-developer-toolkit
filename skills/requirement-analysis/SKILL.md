# Skill: Requirement Analysis

## Purpose

Convert an ambiguous software requirement into an implementation-ready specification.

## Trigger

Use when:

- a requirement is incomplete or ambiguous
- a feature request needs decomposition
- acceptance criteria are missing
- implementation scope is unclear

## Input

- raw requirement
- product context
- current architecture
- relevant repository files

## Context policy

Retrieve only context that can affect:

- behavior
- architecture
- API/data contracts
- constraints
- acceptance criteria

## Rules

1. Never invent missing business rules.
2. Mark assumptions explicitly.
3. Prefer existing abstractions.
4. Every functional requirement needs acceptance criteria.
5. Identify open questions before implementation.

## Workflow

```text
Raw Requirement
 ↓
Extract Actors / Goal
 ↓
Extract Constraints
 ↓
Map Existing System
 ↓
Identify Gaps
 ↓
Define Acceptance Criteria
 ↓
Generate Implementation Spec
 ↓
Self-check
```

## Output

Implementation-ready specification containing:

- goal
- user flow
- requirements
- affected areas
- edge cases
- acceptance criteria
- open questions

## Validation

- no unsupported assumptions
- requirements are testable
- edge states are covered
- affected system boundaries are identified
