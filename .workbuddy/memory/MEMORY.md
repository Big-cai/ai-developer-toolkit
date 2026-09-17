# 项目长期记忆 — ai-developer-toolkit

## 仓库定位

面向作品集的 AI 辅助软件工程方法论工具箱。核心模型：Context → Constraint → Command → Result → Validation（C-C-C-R-V）。
分层：prompt-engineering / context-engineering / skill-design / agent-subagent / workflow-orchestration / validation。

## 文档约定

- 英文文档为 **source of truth**，中文为平行镜像。
- 中文版本一律新建 `*.zh.md`，不原地混排。命名：`README.md` → `README.zh.md`，`SKILL.md` → `SKILL.zh.md`，其余 `<原名>.zh.md`。
- 每个 `.zh.md` 顶部保留一行语言导航：`> 中文版 | English: [原文件](./原文件)`。
- 处理代码块：```text 流程图保留围栏、内部标签译中文；JSON/代码 schema 不译。

## 待办 / 已知缺口

- `toolkit.json` 尚未加入 `i18n` / `languages` 字段。
- 仓库结构图仅列出英文文件名，未逐条列出 `.zh.md`。
