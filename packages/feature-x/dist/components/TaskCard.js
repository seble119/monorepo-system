"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Badge } from "@monorepo/ui-components";
import { formatDate } from "@monorepo/utils";
import { Clock, Trash2 } from "lucide-react";
export function TaskCard({ task, onUpdateTask, onDeleteTask }) {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "todo":
                return "bg-gray-100 text-gray-800";
            case "in-progress":
                return "bg-blue-100 text-blue-800";
            case "completed":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const handleStatusChange = (newStatus) => {
        onUpdateTask(task.id, { status: newStatus });
    };
    return (_jsx(Card, { className: "mb-3 hover:shadow-md transition-shadow", children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("h4", { className: "font-medium text-sm", children: task.title }), _jsx("div", { className: "flex gap-1", children: _jsx("button", { onClick: () => onDeleteTask(task.id), className: "p-1 text-gray-400 hover:text-red-600 transition-colors", children: _jsx(Trash2, { size: 14 }) }) })] }), _jsx("p", { className: "text-xs text-gray-600 mb-3", children: task.description }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [_jsx(Badge, { className: `text-xs ${getPriorityColor(task.priority)}`, children: task.priority }), _jsx(Badge, { className: `text-xs ${getStatusColor(task.status)}`, children: task.status })] }), _jsxs("div", { className: "flex items-center text-xs text-gray-500 mb-3", children: [_jsx(Clock, { size: 12, className: "mr-1" }), formatDate(task.createdAt, "relative")] }), _jsxs("div", { className: "flex gap-1", children: [task.status !== "todo" && (_jsx("button", { onClick: () => handleStatusChange("todo"), className: "px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors", children: "To Do" })), task.status !== "in-progress" && (_jsx("button", { onClick: () => handleStatusChange("in-progress"), className: "px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors", children: "In Progress" })), task.status !== "completed" && (_jsx("button", { onClick: () => handleStatusChange("completed"), className: "px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors", children: "Complete" }))] })] }) }));
}
