"use client"

import { useState } from "react"
import { Button } from "@monorepo/ui-components"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import { TaskFilters } from "./TaskFilters"
import { TaskAnalytics } from "./TaskAnalaytics"
import { BulkActions } from "./BulkActions"
import { useTasks } from "../hooks/useTasks"
import type { Task } from "../Types/task"
import { Plus } from "lucide-react"

export function TaskManager() {
  const {
    tasks,
    filters,
    setFilters,
    stats,
    categories,
    selectedTasks,
    addTask,
    updateTask,
    deleteTask,
    addComment,
    deleteComment,
    bulkUpdateTasks,
    bulkDeleteTasks,
    toggleTaskSelection,
    selectAllTasks,
    clearSelection,
  } = useTasks()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingTask(null)
  }

  const handleBulkUpdate = (updates: Partial<Task>) => {
    bulkUpdateTasks(Array.from(selectedTasks), updates)
    clearSelection()
  }

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedTasks.size} task(s)?`)) {
      bulkDeleteTasks(Array.from(selectedTasks))
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <p className="text-gray-600 mt-1">Organize and track your tasks efficiently</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      <TaskAnalytics stats={stats} />

      <TaskFilters filters={filters} onFiltersChange={setFilters} categories={categories} />

      <BulkActions
        selectedCount={selectedTasks.size}
        onBulkUpdate={handleBulkUpdate}
        onBulkDelete={handleBulkDelete}
        onClearSelection={clearSelection}
        categories={categories}
      />

      <TaskList
        tasks={tasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onEdit={handleEdit}
        onAddComment={addComment}
        onDeleteComment={deleteComment}
        selectedTasks={selectedTasks}
        onToggleSelect={toggleTaskSelection}
        onSelectAll={selectAllTasks}
        onClearSelection={clearSelection}
      />

      <TaskForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
        categories={categories}
      />
    </div>
  )
}
