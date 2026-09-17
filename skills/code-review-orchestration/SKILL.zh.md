> 中文版 | English: [SKILL.md](./SKILL.md)

# 技能：代码评审编排

## 目的

把代码评审作为验证阶段进行编排，而不是重新实现一个专业代码评审引擎。

## 触发条件

适用于：

- AI 生成实现之后
- 合并之前
- 重要重构之后
- 确定性检查通过但仍需要语义评审时

## 输入

- 仓库路径
- git diff / commit / 分支区间
- 需求或 PR 描述
- 项目规则
- 架构上下文
- 验证命令

## Provider

默认 Provider 为 Alibaba OpenCodeReview。

统一契约：

```text
review(input) -> ReviewReport
```

工作流不应直接依赖 Provider 的内部实现。

## 工作流

```text
准备上下文
 ↓
执行确定性检查
 ↓
调用 CodeReviewProvider
 ↓
解析 / 标准化 Findings
 ↓
证据检查
 ↓
去重 / 分类
 ↓
修复需要处理的问题
 ↓
再次执行确定性检查
 ↓
重新评审
 ↓
人工关卡
```

## 规则

1. Provider 不可用绝不能视为评审通过。
2. Provider 失败时不得伪造 Findings。
3. 每条 Finding 都必须有证据。
4. 区分缺陷与可选优化。
5. 保留原始 Provider 输出以便追溯。
6. 高影响变更不得自动合并。
7. 发生实质修复后必须重新验证。

## 输出

输出必须符合：

- `schemas/review-finding.schema.json`
- `schemas/review-report.schema.json`

至少包含：

- provider
- status
- findings
- summary
- verification
- 原始输出引用（如有）

## 验证

只有满足以下条件，编排才算成功：

- Provider 失败与「无发现」能够明确区分
- 输出符合 Schema
- 确定性检查独立记录
- Findings 可追溯到 Provider 原始结果
- 可以比较修复前后的 Review 状态
