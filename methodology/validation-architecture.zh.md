> 中文版 | English: [validation-architecture.md](./validation-architecture.md)

# 验证架构

## 目标

Validation 是 AI 生成结果与最终接受的工程变更之间的独立边界。

## 三层验证

### 1. 确定性验证

使用不依赖模型判断的检查：

- typecheck
- lint
- 单元 / 集成测试
- build
- schema 校验
- 适用时的安全扫描

### 2. AI 验证

使用专业 Review Provider 发现确定性检查难以表达的问题：

- 正确性风险
- 缺失的边界情况
- 安全模式
- 可维护性问题
- 架构不一致

当前第一个 Provider 是 Alibaba OpenCodeReview。

### 3. 人工验证

以下事项仍然由人工做最终决策：

- 架构变更
- 安全敏感变更
- 数据迁移
- 对外可见行为
- 发布 / 合并

## 接纳规则

AI Review 通过不代表变更一定安全。

最终接受必须满足：

```text
确定性检查通过
AND
AI Findings 已解决或明确接受
AND
必要的人工关卡已完成
```

## Provider 抽象

```text
CodeReviewProvider
       │
       ├── OpenCodeReview
       ├── FutureProvider
       └── CustomReviewer
```

工作流依赖 Provider 契约，而不是 OCR 的内部实现。

## 为什么这样设计

Toolkit 专注于编排和工程方法论，成熟外部工具可以独立演进，而不会迫使整个工作流跟着改变。
