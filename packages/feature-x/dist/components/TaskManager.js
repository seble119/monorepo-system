"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@monorepo/ui-components";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { TaskFilters } from "./TaskFilters";
import { TaskAnalytics } from "./TaskAnalaytics";
import { BulkActions } from "./BulkActions";
import { useTasks } from "../hooks/useTasks";
import { Plus } from "lucide-react";
export function TaskManager() {
    const { tasks, filters, setFilters, stats, categories, selectedTasks, addTask, updateTask, deleteTask, addComment, deleteComment, bulkUpdateTasks, bulkDeleteTasks, toggleTaskSelection, selectAllTasks, clearSelection, } = useTasks();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const handleEdit = (task) => {
        setEditingTask(task);
        setIsFormOpen(true);
    };
    const handleCloseForm = () => {
        setIsFormOpen(false);
        setEditingTask(null);
    };
    const handleBulkUpdate = (updates) => {
        bulkUpdateTasks(Array.from(selectedTasks), updates);
        clearSelection();
    };
    const handleBulkDelete = () => {
        if (confirm(`Are you sure you want to delete ${selectedTasks.size} task(s)?`)) {
            bulkDeleteTasks(Array.from(selectedTasks));
        }
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Task Manager" }), _jsx("p", { className: "text-gray-600 mt-1", children: "Organize and track your tasks efficiently" })] }), _jsxs(Button, { onClick: () => setIsFormOpen(true), children: [_jsx(Plus, { className: "h-4 w-4 mr-2" }), "New Task"] })] }), _jsx(TaskAnalytics, { stats: stats }), _jsx(TaskFilters, { filters: filters, onFiltersChange: setFilters, categories: categories }), _jsx(BulkActions, { selectedCount: selectedTasks.size, onBulkUpdate: handleBulkUpdate, onBulkDelete: handleBulkDelete, onClearSelection: clearSelection, categories: categories }), _jsx(TaskList, { tasks: tasks, onUpdate: updateTask, onDelete: deleteTask, onEdit: handleEdit, onAddComment: addComment, onDeleteComment: deleteComment, selectedTasks: selectedTasks, onToggleSelect: toggleTaskSelection, onSelectAll: selectAllTasks, onClearSelection: clearSelection }), _jsx(TaskForm, { isOpen: isFormOpen, onClose: handleCloseForm, onSubmit: addTask, onUpdate: updateTask, editingTask: editingTask, categories: categories })] }));
}
