import { TaskCard } from "./TaskCard"
import type { Task, TaskStatus } from "../types"

interface TaskListProps {
  tasks: Task[]
  onUpdateTask: (id: string, data: { status: TaskStatus }) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-sm">No tasks in this column</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  )
}
