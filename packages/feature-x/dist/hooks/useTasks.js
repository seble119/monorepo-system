"use client";
import { useState, useCallback } from "react";
import { generateId } from "@monorepo/utils";
export function useTasks() {
    const [tasks, setTasks] = useState([
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
    ]);
    const createTask = useCallback((data) => {
        const newTask = {
            id: generateId(),
            ...data,
            status: "todo",
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        setTasks((prev) => [...prev, newTask]);
        return newTask;
    }, []);
    const updateTask = useCallback((id, data) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...data, updatedAt: new Date() } : task)));
    }, []);
    const deleteTask = useCallback((id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);
    const getTasksByStatus = useCallback((status) => {
        return tasks.filter((task) => task.status === status);
    }, [tasks]);
    return {
        tasks,
        createTask,
        updateTask,
        deleteTask,
        getTasksByStatus,
    };
}
