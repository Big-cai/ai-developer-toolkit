> 中文版 | English: [review-loop.md](./review-loop.md)

# Review → Fix → Re-review

代码评审循环与编码 Agent 明确分离。

```text
Coder
  ↓
确定性检查
  ↓
OpenCodeReview Provider
  ↓
Findings 标准化
  ↓
Reviewer Agent
  ↓
Fix Agent
  ↓
确定性检查
  ↓
再次 OpenCodeReview
  ↓
人工关卡
```

## 重要规则

零 Findings 不等于构建成功，构建成功也不等于架构决策正确。

不同验证层回答不同问题。

## 状态机

```text
READY
 ↓
CHECKING
 ↓
REVIEWING
 ├── unavailable → 人工 / 安装 Provider
 ├── failed      → 修复 Provider
 ├── passed      → 人工关卡
 └── findings    → 修复
                    ↓
                  CHECKING
                    ↓
                  REVIEWING
```
