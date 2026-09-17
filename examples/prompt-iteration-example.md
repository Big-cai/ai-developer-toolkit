# Example: Prompt Iteration

## Problem

An initial coding prompt produced code that frequently:

- introduced new dependencies
- called APIs directly from UI components
- omitted error states
- modified unrelated files

## V1

```text
Build the requested React feature.
```

## Diagnosis

The instruction had almost no project context or constraints.

## V2 changes

Added:

- technology stack
- project rules
- existing API layer
- reusable components
- allowed file scope
- explicit output schema
- validation checklist

## Result

The point of the experiment is not a universal numeric benchmark. The important engineering practice is that failures are recorded, classified and used to change the instruction system.

## Lesson

Prompt Engineering is iterative system design:

```text
Observe failure
 ↓
Classify
 ↓
Form hypothesis
 ↓
Change one variable
 ↓
Evaluate
```
