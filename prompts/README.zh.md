> 中文版 | English: [README.md](./README.md)

# 提示词库

每条提示词都遵循 C-C-C-R-V 模型。

一条生产级提示词应当显式写出这些内容：

- 上下文（Context）
- 约束（Constraints）
- 指令（Command）
- 结果（Result）
- 验证（Validation）

提示词按「行为」而非「长度」做版本管理。修改提示词时，记录：

1. 观察到的失败现象
2. 假设
3. 所做的改动
4. 评估结果
