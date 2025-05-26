"use client"
import { Card, CardContent, Badge } from "@monorepo/ui-components"
import { formatDate } from "@monorepo/utils"
import { Clock, Trash2 } from "lucide-react"
import type { Task, TaskStatus } from "../types"

interface TaskCardProps {
  task: Task
  onUpdateTask: (id: string, data: { status: TaskStatus }) => void
  onDeleteTask: (id: string) => void
}

export function TaskCard({ task, onUpdateTask, onDeleteTask }: TaskCardProps) {
  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "todo":
        return "bg-gray-100 text-gray-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleStatusChange = (newStatus: TaskStatus) => {
    onUpdateTask(task.id, { status: newStatus })
  }

  return (
    <Card className="mb-3 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-medium text-sm">{task.title}</h4>
          <div className="flex gap-1">
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-1 text-gray-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-3">{task.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>{task.priority}</Badge>
          <Badge className={`text-xs ${getStatusColor(task.status)}`}>{task.status}</Badge>
        </div>

        <div className="flex items-center text-xs text-gray-500 mb-3">
          <Clock size={12} className="mr-1" />
          {formatDate(task.createdAt, "relative")}
        </div>

        <div className="flex gap-1">
          {task.status !== "todo" && (
            <button
              onClick={() => handleStatusChange("todo")}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              To Do
            </button>
          )}
          {task.status !== "in-progress" && (
            <button
              onClick={() => handleStatusChange("in-progress")}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              In Progress
            </button>
          )}
          {task.status !== "completed" && (
            <button
              onClick={() => handleStatusChange("completed")}
              className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
            >
              Complete
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
