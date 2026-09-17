> 中文版 | English: [interview-guide.md](./interview-guide.md)

# 面试指南

## 问：你的 v0.1 到 v0.2 做了什么升级？

> v0.1 主要证明我能设计 Prompt、Skill、Agent 和 Workflow。v0.2 开始从文档进入实际执行和验证。我增加了「确定性检查 + AI 代码评审 + 人工关卡」三层验证架构。AI 评审没有重复造一个 Review Engine，而是接入 Alibaba OpenCodeReview 作为成熟的外部 Provider。我的 Toolkit 负责的是工作流编排、Provider 抽象、结果标准化和反馈闭环。

## 问：为什么不自己写代码评审引擎？

> 因为那是在重复实现成熟基础设施。我更希望证明工程判断：知道什么应该自己构建，什么应该集成。OpenCodeReview 负责专业的代码评审，而我的系统把它抽象成可替换的 CodeReviewProvider。未来更换 Provider 时，工作流契约不需要重写。

## 问：你真正做了什么？

> 我做的是 Review Engine 外面的工程层：准备需求和仓库上下文，运行确定性检查，调用 Provider，把结果转换成自己的 ReviewReport Schema，验证 Findings，进入修复流程，再重新执行测试和 Review。Provider 不可用或失败时会明确记录状态，绝不会当成通过。

## 问：怎么证明 Toolkit 不是 PPT？

> 我增加了 `validation-projects/task-board` 真实验证项目，用 Toolkit 的工作流推进它。项目有 typecheck、测试、build 等确定性检查，也有 OpenCodeReview 集成入口。验证记录会记录需求、实现、验证命令、Provider 状态和限制。

## 问：Skill 和 Prompt 有什么区别？

> Prompt 是一次性的指令；Skill 是一个可复用的能力契约，里面定义触发条件、输入、上下文策略、规则、工作流、输出、验证和失败处理。

## 问：什么时候拆 Agent？

> 当一个任务拥有独立的目标、上下文或验证方式时，我会建立 Agent 边界。不会为了显得复杂而把所有事情都拆成 Agent，因为无意义的编排会增加延迟和失败点。

## 问：AI 失败怎么办？

> 先给失败归因，再改 Prompt。如果是上下文不足就改 Context；违反规则就强化 Constraint；任务含糊就改 Command；输出格式不稳定就加强 Result Schema；看起来正确但实际跑不通，就强化 Validation。
