import { createTask, filterTasks, type Task } from "./task.js";

const tasks: Task[] = [
  createTask({ title: "Read Toolkit v0.2" }),
  { ...createTask({ title: "Integrate OpenCodeReview" }), status: "doing" },
  { ...createTask({ title: "Verify workflow" }), status: "done" }
];

const status = new URLSearchParams(globalThis.location?.search ?? "").get("status") as Task["status"] | null;
const visibleTasks = filterTasks(tasks, status ?? undefined);

const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("App root not found");

root.innerHTML = `
  <main>
    <h1>AI Developer Toolkit — Validation Project</h1>
    <p>Tasks: ${visibleTasks.length}</p>
    <ul>
      ${visibleTasks.map(task => `<li data-status="${task.status}"><strong>${escapeHtml(task.title)}</strong> — ${task.status}</li>`).join("")}
    </ul>
  </main>
`;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char] ?? char));
}
