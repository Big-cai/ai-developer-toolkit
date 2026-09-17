export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
}

export interface CreateTaskInput {
  title: string;
}

export function createTask(input: CreateTaskInput, now = new Date()): Task {
  const title = input.title.trim();

  if (!title) {
    throw new Error("Task title is required");
  }

  return {
    id: crypto.randomUUID(),
    title,
    status: "todo",
    createdAt: now.toISOString()
  };
}

export function filterTasks(tasks: Task[], status?: TaskStatus): Task[] {
  if (!status) return [...tasks];
  return tasks.filter(task => task.status === status);
}

export function completeTask(tasks: Task[], id: string): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, status: "done" } : task
  );
}
