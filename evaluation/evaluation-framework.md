# Evaluation Framework

## Why evaluation matters

Prompt quality cannot be judged only by whether one example looks good.

The toolkit evaluates AI workflows across repeatable criteria.

## Dimensions

| Dimension | Question |
|---|---|
| Correctness | Does the result satisfy the requirement? |
| Constraint adherence | Did it follow project rules? |
| Completeness | Were important cases handled? |
| Consistency | Does it behave reliably across similar inputs? |
| Verifiability | Can the result be independently checked? |
| Efficiency | Is unnecessary context/work avoided? |

## Evaluation loop

```text
Baseline
 ↓
Run N representative cases
 ↓
Record failures
 ↓
Change one variable
 ↓
Run same cases
 ↓
Compare
```

## Failure log

Use:

```text
Case:
Expected:
Actual:
Failure type:
Likely cause:
Change:
Result:
```

## Important principle

Do not optimize for token count or prompt length. Optimize for reliable task completion.
