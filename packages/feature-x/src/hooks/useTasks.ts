"use client"

import { useState, useCallback } from "react"
import { generateId } from "@monorepo/utils"
import type { Task, CreateTaskData, UpdateTaskData } from "../types"

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Setup project structure",
      description: "Create the initial monorepo structure with all packages",
      status: "completed",
      priority: "high",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01"),
    },
    {
      id: "2",
      title: "Implement UI components",
      description: "Build reusable UI components using ShadCN",
      status: "in-progress",
      priority: "medium",
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02"),
    },
    {
      id: "3",
      title: "Create utility functions",
      description: "Develop shared utility functions for the monorepo",
      status: "todo",
      priority: "low",
      createdAt: new Date("2024-01-03"),
      updatedAt: new Date("2024-01-03"),
    },
  ])

  const createTask = useCallback((data: CreateTaskData) => {
    const newTask: Task = {
      id: generateId(),
      ...data,
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setTasks((prev) => [...prev, newTask])
    return newTask
  }, [])

  const updateTask = useCallback((id: string, data: UpdateTaskData) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...data, updatedAt: new Date() } : task)))
  }, [])

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [])

  const getTasksByStatus = useCallback(
    (status: Task["status"]) => {
      return tasks.filter((task) => task.status === status)
    },
    [tasks],
  )

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
  }
}
