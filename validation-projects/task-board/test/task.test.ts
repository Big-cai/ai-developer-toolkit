import test from "node:test";
import assert from "node:assert/strict";
import { completeTask, createTask, filterTasks } from "../src/task.js";

test("createTask trims the title and starts in todo", () => {
  const task = createTask({ title: "  ship feature  " }, new Date("2026-09-18T00:00:00Z"));
  assert.equal(task.title, "ship feature");
  assert.equal(task.status, "todo");
  assert.equal(task.createdAt, "2026-09-18T00:00:00.000Z");
});

test("createTask rejects an empty title", () => {
  assert.throws(() => createTask({ title: "   " }), /Task title is required/);
});

test("filterTasks returns only the requested status", () => {
  const tasks = [
    createTask({ title: "a" }),
    { ...createTask({ title: "b" }), status: "done" as const }
  ];

  assert.equal(filterTasks(tasks, "done").length, 1);
  assert.equal(filterTasks(tasks, "done")[0].title, "b");
});

test("completeTask changes only the selected task", () => {
  const a = createTask({ title: "a" });
  const b = createTask({ title: "b" });
  const result = completeTask([a, b], b.id);

  assert.equal(result[0].status, "todo");
  assert.equal(result[1].status, "done");
});
