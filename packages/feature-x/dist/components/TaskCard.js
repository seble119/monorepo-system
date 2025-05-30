"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@monorepo/ui-components";
import { Button } from "@monorepo/ui-components";
import { Badge } from "@monorepo/ui-components";
import { Checkbox } from "@monorepo/ui-components";
import { TaskComments } from "./TaskComments";
import { Calendar, Clock, Edit, Trash2, AlertTriangle } from "lucide-react";
import { formatDate, isOverdue } from "@monorepo/utils";
export function TaskCard({ task, onUpdate, onDelete, onEdit, onAddComment, onDeleteComment, isSelected, onToggleSelect, }) {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800 border-red-200";
            case "medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "low":
                return "bg-green-100 text-green-800 border-green-200";
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800 border-green-200";
            case "in-progress":
                return "bg-blue-100 text-blue-800 border-blue-200";
            case "todo":
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    const overdue = task.dueDate && isOverdue(task.dueDate) && task.status !== "completed";
    return (_jsx(Card, { className: `transition-all duration-200 hover:shadow-md ${isSelected ? "ring-2 ring-blue-500" : ""} ${overdue ? "border-red-300" : ""}`, children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(Checkbox, { checked: isSelected, onCheckedChange: () => onToggleSelect(task.id), className: "mt-1" }), _jsxs("div", { className: "flex-1 space-y-3", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: `font-medium ${task.status === "completed" ? "line-through text-gray-500" : ""}`, children: task.title }), task.description && _jsx("p", { className: "text-sm text-gray-600 mt-1", children: task.description })] }), _jsxs("div", { className: "flex gap-1 ml-2", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => onEdit(task), className: "h-8 w-8 p-0", children: _jsx(Edit, { className: "h-4 w-4" }) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => onDelete(task.id), className: "h-8 w-8 p-0 text-red-600 hover:text-red-700", children: _jsx(Trash2, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { className: getStatusColor(task.status), children: task.status.replace("-", " ") }), _jsx(Badge, { className: getPriorityColor(task.priority), children: task.priority }), _jsx(Badge, { variant: "outline", children: task.category }), task.tags.map((tag) => (_jsxs(Badge, { variant: "secondary", className: "text-xs", children: ["#", tag] }, tag)))] }), task.dueDate && (_jsxs("div", { className: `flex items-center gap-1 text-sm ${overdue ? "text-red-600" : "text-gray-600"}`, children: [overdue ? _jsx(AlertTriangle, { className: "h-4 w-4" }) : _jsx(Calendar, { className: "h-4 w-4" }), "Due: ", formatDate(task.dueDate), overdue && _jsx("span", { className: "font-medium", children: "(Overdue)" })] })), _jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-3 w-3" }), "Created ", formatDate(task.createdAt)] }), task.comments.length > 0 && (_jsxs("span", { children: [task.comments.length, " comment", task.comments.length !== 1 ? "s" : ""] }))] }), _jsx(TaskComments, { comments: task.comments, onAddComment: (text) => onAddComment(task.id, text), onDeleteComment: (commentId) => onDeleteComment(task.id, commentId) })] })] }) }) }));
}
