"use client"

import type { Task } from "../Types/task"
import { TaskCard } from "./TaskCard"
import { Button } from "@monorepo/ui-components"
import { CheckSquare, Square } from "lucide-react"

interface TaskListProps {
  tasks: Task[]
  onUpdate: (id: string, updates: Partial<Task>) => void
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
  onAddComment: (taskId: string, text: string) => void
  onDeleteComment: (taskId: string, commentId: string) => void
  selectedTasks: Set<string>
  onToggleSelect: (taskId: string) => void
  onSelectAll: () => void
  onClearSelection: () => void
}

export function TaskList({
  tasks,
  onUpdate,
  onDelete,
  onEdit,
  onAddComment,
  onDeleteComment,
  selectedTasks,
  onToggleSelect,
  onSelectAll,
  onClearSelection,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg mb-2">No tasks found</div>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    )
  }

  const allSelected = tasks.length > 0 && tasks.every((task) => selectedTasks.has(task.id))
  const someSelected = tasks.some((task) => selectedTasks.has(task.id))

  return (
    <div className="space-y-4">
      {tasks.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={allSelected ? onClearSelection : onSelectAll}
            className="flex items-center gap-2"
          >
            {allSelected ? <CheckSquare className="h-4 w-4" /> : <Square className="h-4 w-4" />}
            {allSelected ? "Deselect All" : "Select All"}
          </Button>
          {someSelected && (
            <span className="text-sm text-gray-600">
              {selectedTasks.size} of {tasks.length} selected
            </span>
          )}
        </div>
      )}

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onEdit={onEdit}
          onAddComment={onAddComment}
          onDeleteComment={onDeleteComment}
          isSelected={selectedTasks.has(task.id)}
          onToggleSelect={onToggleSelect}
        />
      ))}
    </div>
  )
}
