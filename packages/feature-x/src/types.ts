export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  createdAt: Date
  updatedAt: Date
  dueDate?: Date
}

export type TaskStatus = "todo" | "in-progress" | "completed"
export type TaskPriority = "low" | "medium" | "high"

export interface CreateTaskData {
  title: string
  description: string
  priority: TaskPriority
  dueDate?: Date
}

export interface UpdateTaskData extends Partial<CreateTaskData> {
  status?: TaskStatus
}
