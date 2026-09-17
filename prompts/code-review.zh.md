> 中文版 | English: [code-review.md](./code-review.md)

# 代码评审提示词

## 上下文

- Git diff：`{{diff}}`
- 项目规则：`{{rules}}`
- 需求：`{{requirement}}`

## 约束

只评审被改动的行为以及直接受影响的区域。除非项目规则有明确要求，否则不要把个人风格偏好当成缺陷上报。

## 指令

执行一次工程化的代码评审。

## 结果

返回结构化的评审发现：

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

## 验证

对每一条发现：

- 指向具体证据
- 避免重复的发现
- 不要臆造运行时行为
- 区分「缺陷」与「可选优化」
