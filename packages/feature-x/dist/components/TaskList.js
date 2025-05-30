"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TaskCard } from "./TaskCard";
import { Button } from "@monorepo/ui-components";
import { CheckSquare, Square } from "lucide-react";
export function TaskList({ tasks, onUpdate, onDelete, onEdit, onAddComment, onDeleteComment, selectedTasks, onToggleSelect, onSelectAll, onClearSelection, }) {
    if (tasks.length === 0) {
        return (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "text-gray-400 text-lg mb-2", children: "No tasks found" }), _jsx("p", { className: "text-gray-500", children: "Create your first task to get started!" })] }));
    }
    const allSelected = tasks.length > 0 && tasks.every((task) => selectedTasks.has(task.id));
    const someSelected = tasks.some((task) => selectedTasks.has(task.id));
    return (_jsxs("div", { className: "space-y-4", children: [tasks.length > 0 && (_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: allSelected ? onClearSelection : onSelectAll, className: "flex items-center gap-2", children: [allSelected ? _jsx(CheckSquare, { className: "h-4 w-4" }) : _jsx(Square, { className: "h-4 w-4" }), allSelected ? "Deselect All" : "Select All"] }), someSelected && (_jsxs("span", { className: "text-sm text-gray-600", children: [selectedTasks.size, " of ", tasks.length, " selected"] }))] })), tasks.map((task) => (_jsx(TaskCard, { task: task, onUpdate: onUpdate, onDelete: onDelete, onEdit: onEdit, onAddComment: onAddComment, onDeleteComment: onDeleteComment, isSelected: selectedTasks.has(task.id), onToggleSelect: onToggleSelect }, task.id)))] }));
}
