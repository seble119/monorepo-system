"use client"

import { Card, CardContent } from "@monorepo/ui-components"
import { Button } from "@monorepo/ui-components"
import { Badge } from "@monorepo/ui-components"
import { Checkbox } from "@monorepo/ui-components"
import type { Task } from "../Types/task"
import { TaskComments } from "./TaskComments"
import { Calendar, Clock, Edit, Trash2, AlertTriangle } from "lucide-react"
import { formatDate, isOverdue } from "@monorepo/utils"

interface TaskCardProps {
  task: Task
  onUpdate: (id: string, updates: Partial<Task>) => void
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
  onAddComment: (taskId: string, text: string) => void
  onDeleteComment: (taskId: string, commentId: string) => void
  isSelected: boolean
  onToggleSelect: (taskId: string) => void
}

export function TaskCard({
  task,
  onUpdate,
  onDelete,
  onEdit,
  onAddComment,
  onDeleteComment,
  isSelected,
  onToggleSelect,
}: TaskCardProps) {
  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "todo":
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const overdue = task.dueDate && isOverdue(task.dueDate) && task.status !== "completed"

  return (
    <Card
      className={`transition-all duration-200 hover:shadow-md ${isSelected ? "ring-2 ring-blue-500" : ""} ${overdue ? "border-red-300" : ""}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox checked={isSelected} onCheckedChange={() => onToggleSelect(task.id)} className="mt-1" />

          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className={`font-medium ${task.status === "completed" ? "line-through text-gray-500" : ""}`}>
                  {task.title}
                </h3>
                {task.description && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
              </div>

              <div className="flex gap-1 ml-2">
                <Button variant="ghost" size="sm" onClick={() => onEdit(task)} className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(task.id)}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className={getStatusColor(task.status)}>{task.status.replace("-", " ")}</Badge>
              <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
              <Badge variant="outline">{task.category}</Badge>
              {task.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>

            {task.dueDate && (
              <div className={`flex items-center gap-1 text-sm ${overdue ? "text-red-600" : "text-gray-600"}`}>
                {overdue ? <AlertTriangle className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                Due: {formatDate(task.dueDate)}
                {overdue && <span className="font-medium">(Overdue)</span>}
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Created {formatDate(task.createdAt)}
              </span>
              {task.comments.length > 0 && (
                <span>
                  {task.comments.length} comment{task.comments.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            <TaskComments
              comments={task.comments}
              onAddComment={(text) => onAddComment(task.id, text)}
              onDeleteComment={(commentId) => onDeleteComment(task.id, commentId)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
