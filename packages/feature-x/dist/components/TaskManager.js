"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";
import { useTasks } from "../hooks/useTasks";
export function TaskManager() {
    const { tasks, createTask, updateTask, deleteTask, getTasksByStatus } = useTasks();
    const [showForm, setShowForm] = useState(false);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Task Management System" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { children: [_jsxs("h3", { className: "font-semibold mb-4 text-gray-600", children: ["To Do (", getTasksByStatus("todo").length, ")"] }), _jsx(TaskList, { tasks: getTasksByStatus("todo"), onUpdateTask: updateTask, onDeleteTask: deleteTask })] }), _jsxs("div", { children: [_jsxs("h3", { className: "font-semibold mb-4 text-blue-600", children: ["In Progress (", getTasksByStatus("in-progress").length, ")"] }), _jsx(TaskList, { tasks: getTasksByStatus("in-progress"), onUpdateTask: updateTask, onDeleteTask: deleteTask })] }), _jsxs("div", { children: [_jsxs("h3", { className: "font-semibold mb-4 text-green-600", children: ["Completed (", getTasksByStatus("completed").length, ")"] }), _jsx(TaskList, { tasks: getTasksByStatus("completed"), onUpdateTask: updateTask, onDeleteTask: deleteTask })] })] }) })] }), showForm && (_jsx(TaskForm, { onSubmit: (data) => {
                    createTask(data);
                    setShowForm(false);
                }, onCancel: () => setShowForm(false) })), !showForm && (_jsx("div", { className: "flex justify-center", children: _jsx("button", { onClick: () => setShowForm(true), className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors", children: "Add New Task" }) }))] }));
}
