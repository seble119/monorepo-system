"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components"
import { TaskList } from "./TaskList"
import { TaskForm } from "./TaskForm"
import { useTasks } from "../hooks/useTasks"

export function TaskManager() {
  const { tasks, createTask, updateTask, deleteTask, getTasksByStatus } = useTasks()
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Task Management System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-4 text-gray-600">To Do ({getTasksByStatus("todo").length})</h3>
              <TaskList tasks={getTasksByStatus("todo")} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-blue-600">
                In Progress ({getTasksByStatus("in-progress").length})
              </h3>
              <TaskList tasks={getTasksByStatus("in-progress")} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-green-600">Completed ({getTasksByStatus("completed").length})</h3>
              <TaskList tasks={getTasksByStatus("completed")} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
            </div>
          </div>
        </CardContent>
      </Card>

      {showForm && (
        <TaskForm
          onSubmit={(data) => {
            createTask(data)
            setShowForm(false)
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {!showForm && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add New Task
          </button>
        </div>
      )}
    </div>
  )
}
