"use client"

import { useState, useEffect, useMemo } from "react"
import type { Task, TaskFilterOptions, TaskStats } from "../Types/task"

const STORAGE_KEY = "monorepo-tasks"

const defaultCategories = ["Work", "Personal", "Shopping", "Health", "Learning"]

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filters, setFilters] = useState<TaskFilterOptions>({})
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set())

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsedTasks = JSON.parse(stored).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
          comments:
            task.comments?.map((comment: any) => ({
              ...comment,
              createdAt: new Date(comment.createdAt),
            })) || [],
        }))
        setTasks(parsedTasks)
      } catch (error) {
        console.error("Failed to parse stored tasks:", error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // Filtered tasks based on current filters
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filters.status && task.status !== filters.status) return false
      if (filters.priority && task.priority !== filters.priority) return false
      if (filters.category && task.category !== filters.category) return false
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        if (!task.title.toLowerCase().includes(searchLower) && !task.description?.toLowerCase().includes(searchLower)) {
          return false
        }
      }
      if (filters.dueDateRange) {
        if (!task.dueDate) return false
        if (filters.dueDateRange.start && task.dueDate < filters.dueDateRange.start) return false
        if (filters.dueDateRange.end && task.dueDate > filters.dueDateRange.end) return false
      }
      return true
    })
  }, [tasks, filters])

  // Task statistics
  const stats: TaskStats = useMemo(() => {
    const now = new Date()
    const overdue = tasks.filter((task) => task.dueDate && task.dueDate < now && task.status !== "completed").length

    const byCategory = tasks.reduce(
      (acc, task) => {
        acc[task.category] = (acc[task.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const byPriority = tasks.reduce(
      (acc, task) => {
        acc[task.priority] = (acc[task.priority] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "completed").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      todo: tasks.filter((t) => t.status === "todo").length,
      overdue,
      byCategory,
      byPriority,
    }
  }, [tasks])

  // Get unique categories from tasks
  const categories = useMemo(() => {
    const taskCategories = [...new Set(tasks.map((task) => task.category))]
    return [...new Set([...defaultCategories, ...taskCategories])]
  }, [tasks])

  const addTask = (taskData: Omit<Task, "id" | "createdAt" | "updatedAt" | "comments">) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      comments: [],
    }
    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
    setSelectedTasks((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }

  const addComment = (taskId: string, text: string) => {
    const comment = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date(),
    }

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              comments: [...task.comments, comment],
              updatedAt: new Date(),
            }
          : task,
      ),
    )
  }

  const deleteComment = (taskId: string, commentId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              comments: task.comments.filter((c) => c.id !== commentId),
              updatedAt: new Date(),
            }
          : task,
      ),
    )
  }

  const bulkUpdateTasks = (taskIds: string[], updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (taskIds.includes(task.id) ? { ...task, ...updates, updatedAt: new Date() } : task)),
    )
  }

  const bulkDeleteTasks = (taskIds: string[]) => {
    setTasks((prev) => prev.filter((task) => !taskIds.includes(task.id)))
    setSelectedTasks(new Set())
  }

  const toggleTaskSelection = (taskId: string) => {
    setSelectedTasks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(taskId)) {
        newSet.delete(taskId)
      } else {
        newSet.add(taskId)
      }
      return newSet
    })
  }

  const selectAllTasks = () => {
    setSelectedTasks(new Set(filteredTasks.map((task) => task.id)))
  }

  const clearSelection = () => {
    setSelectedTasks(new Set())
  }

  return {
    tasks: filteredTasks,
    allTasks: tasks,
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
  }
}
