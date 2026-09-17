# Agents / Subagents

Agents are role-specific executors.

The toolkit deliberately uses narrow roles:

```text
Planner → Coder → Tester → Reviewer
```

Each agent has:

- objective
- input contract
- allowed context
- output contract
- validation boundary

A role should be split into a separate agent only when the separation improves context isolation, parallelism, or validation.
