> 中文版 | English: [feature-development.md](./feature-development.md)

# 工作流：功能开发 v0.2

## 目标

把功能从需求推进到经过独立验证的实现。

```text
需求
 ↓
需求分析
 ↓
Planner
 ↓
架构检查
 ↓
Coder
 ↓
Tester
 ↓
确定性验证
 ├── 类型检查
 ├── Lint
 ├── 测试
 └── 构建
 ↓
CodeReviewProvider
 ↓
Findings 标准化
 ↓
修复 / 重新评审
 ↓
人工关卡
 ↓
合并
```

## 三层验证关卡

### Gate A —— 确定性验证

根据项目情况执行 typecheck、lint、测试和 build。

### Gate B —— AI 评审

Provider 必须返回明确状态：

- passed
- findings
- unavailable
- failed
- invalid_output

只有 `passed` 表示 Provider 没有发现问题。`unavailable` 绝不等于通过。

### Gate C —— 人工关卡

架构、安全敏感变更、数据库迁移、对外可见行为以及最终合并决策需要人工复核。

## 完成标准

只有满足以下条件，功能才算完成：

- 验收标准满足
- 确定性检查通过
- AI Review 已通过，或 Findings 已明确处理 / 接受
- Provider 失败没有被隐藏
- 必需的人工关卡已完成
- 最终 diff 仍在批准范围内
