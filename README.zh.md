> 中文版 | English: [README.md](./README.md)

# AI Developer Toolkit v0.2

这是一个可复用、可验证的 AI 辅助软件工程工具箱。

AI Developer Toolkit 不是提示词堆积，而是把 AI 开发建模成一个工程闭环：

**上下文 → 约束 → 指令 → 结果 → 验证 → 反馈**

## v0.2 做了什么

- 增加「确定性检查 + AI 评审 + 人工关卡」三层验证模型。
- 增加代码评审 Provider 抽象。
- 接入 Alibaba OpenCodeReview 作为第一个外部验证 Provider。
- 增加机器可读的 Review Schema。
- 增加可执行的 Node.js 验证 Runner。
- 增加真实项目 `validation-projects/task-board`。
- 增加一次完整的端到端验证记录。
- 增加 Review → Fix → Re-review 闭环示例。
- 英文文档继续作为结构基准，同时提供中文镜像文档。

## 核心架构

```text
                         功能开发工作流
                                │
              ┌─────────────────┼─────────────────┐
              ↓                 ↓                 ↓
             需求             Planner            上下文
              │                 │                 │
              └─────────────────┼─────────────────┘
                                ↓
                              Coder
                                ↓
                              Tester
                                ↓
                           验证层
                                │
             ┌──────────────────┼──────────────────┐
             ↓                  ↓                  ↓
          确定性验证          AI 评审             人工关卡
        typecheck/lint/     OpenCodeReview      架构/安全/合并
          test/build            │
             │                  │
             └──────────────────┼──────────────────┘
                                ↓
                         Findings 标准化
                                ↓
                       Reviewer / Fix Agent
                                ↓
                             再验证
```

## 为什么接入 OpenCodeReview

这里不重新实现一个成熟的代码评审引擎，而是把 OpenCodeReview 当成：

> **CodeReviewProvider / 代码评审验证提供者**

Toolkit 自己负责：

1. 准备需求和仓库上下文
2. 调用 Provider
3. 消费 JSON 评审结果
4. 将结果标准化为 Toolkit Schema
5. 执行类型检查、Lint、测试、构建等确定性检查
6. 对发现进行分类、去重和二次验证
7. 对高影响决策进入人工关卡
8. 修复后重新验证

这样做体现的是工程判断，而不是重复造轮子。

## 目录

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

## 快速验证

```bash
cd validation-projects/task-board
npm install
npm test
npm run build
```

然后回到 Toolkit 根目录：

```bash
node scripts/validate.mjs ./validation-projects/task-board
```

如果本机已经安装并配置 OpenCodeReview，还可以执行：

```bash
node integrations/opencode-review/run.mjs   --repo ./validation-projects/task-board   --background-file ./validation-projects/task-board/.ai/review-context.md
```

Provider 不可用时不会伪造评审结果，而是明确返回 unavailable 状态。
