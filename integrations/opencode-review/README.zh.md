> 中文版 | English: [README.md](./README.md)

# OpenCodeReview 集成

本集成把 Alibaba OpenCodeReview 适配为 Toolkit 的 `CodeReviewProvider`。

官方仓库：

`https://github.com/alibaba/open-code-review`

## 为什么选择集成而不是重写

OpenCodeReview 已经提供：

- Git diff / 分支 / commit 评审
- 全文件扫描
- JSON 结构化输出
- Review Rules
- 面向 Agent 的输出模式
- CI 集成

因此 Toolkit 负责的是编排、标准化和验证，而不是重复实现 Review Engine。

## 运行

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --background-file ./validation-projects/task-board/.ai/review-context.md
```

核心调用：

```bash
ocr review --repo <repo> --format json --audience agent
```

也可以指定输出：

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --output ./artifacts/review.json
```

## Provider 状态

明确区分：

- `passed`：Provider 正常执行且没有发现
- `findings`：Provider 正常执行且发现问题
- `unavailable`：本机没有安装 `ocr`
- `failed`：OCR 执行失败
- `invalid_output`：OCR 输出无法标准化

Provider 异常绝不能静默变成 `passed`。

## 可追溯性

尽可能保留 OCR 原始 JSON。标准化后的 Finding 保留 Provider 信息，后续 Agent 可以追溯到原始评审结果。
