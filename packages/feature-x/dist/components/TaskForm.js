"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button } from "@monorepo/ui-components";
import { Input } from "@monorepo/ui-components";
import { Textarea } from "@monorepo/ui-components";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@monorepo/ui-components";
import { X, Plus } from "lucide-react";
export function TaskForm({ isOpen, onClose, onSubmit, onUpdate, editingTask, categories }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        category: "",
        dueDate: "",
        tags: [],
    });
    const [newTag, setNewTag] = useState("");
    const [newCategory, setNewCategory] = useState("");
    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description || "",
                status: editingTask.status,
                priority: editingTask.priority,
                category: editingTask.category,
                dueDate: editingTask.dueDate ? editingTask.dueDate.toISOString().split("T")[0] : "",
                tags: editingTask.tags,
            });
        }
        else {
            setFormData({
                title: "",
                description: "",
                status: "todo",
                priority: "medium",
                category: categories[0] || "",
                dueDate: "",
                tags: [],
            });
        }
    }, [editingTask, categories, isOpen]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            ...formData,
            dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined,
        };
        if (editingTask && onUpdate) {
            onUpdate(editingTask.id, taskData);
        }
        else {
            onSubmit(taskData);
        }
        onClose();
    };
    const addTag = () => {
        if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
            setFormData((prev) => ({
                ...prev,
                tags: [...prev.tags, newTag.trim()],
            }));
            setNewTag("");
        }
    };
    const removeTag = (tagToRemove) => {
        setFormData((prev) => ({
            ...prev,
            tags: prev.tags.filter((tag) => tag !== tagToRemove),
        }));
    };
    const addCategory = () => {
        if (newCategory.trim() && !categories.includes(newCategory.trim())) {
            setFormData((prev) => ({
                ...prev,
                category: newCategory.trim(),
            }));
            setNewCategory("");
        }
    };
    return (_jsx(Dialog, { open: isOpen, onOpenChange: onClose, children: _jsxs(DialogContent, { className: "max-w-md", children: [_jsx(DialogHeader, { children: _jsx(DialogTitle, { children: editingTask ? "Edit Task" : "Create New Task" }) }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Title" }), _jsx(Input, { value: formData.title, onChange: (e) => setFormData((prev) => ({ ...prev, title: e.target.value })), placeholder: "Enter task title", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Description" }), _jsx(Textarea, { value: formData.description, onChange: (e) => setFormData((prev) => ({ ...prev, description: e.target.value })), placeholder: "Enter task description (optional)", rows: 3 })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Status" }), _jsxs("select", { value: formData.status, onChange: (e) => setFormData((prev) => ({ ...prev, status: e.target.value })), className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white", children: [_jsx("option", { value: "todo", children: "To Do" }), _jsx("option", { value: "in-progress", children: "In Progress" }), _jsx("option", { value: "completed", children: "Completed" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Priority" }), _jsxs("select", { value: formData.priority, onChange: (e) => setFormData((prev) => ({ ...prev, priority: e.target.value })), className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white", children: [_jsx("option", { value: "low", children: "Low" }), _jsx("option", { value: "medium", children: "Medium" }), _jsx("option", { value: "high", children: "High" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Category" }), _jsxs("select", { value: formData.category, onChange: (e) => setFormData((prev) => ({ ...prev, category: e.target.value })), className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white mb-2", children: [_jsx("option", { value: "", children: "Select category" }), categories.map((category) => (_jsx("option", { value: category, children: category }, category)))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { placeholder: "New category", value: newCategory, onChange: (e) => setNewCategory(e.target.value), className: "flex-1" }), _jsx(Button, { type: "button", onClick: addCategory, size: "sm", children: _jsx(Plus, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Due Date" }), _jsx(Input, { type: "date", value: formData.dueDate, onChange: (e) => setFormData((prev) => ({ ...prev, dueDate: e.target.value })) })] }), _jsxs("div", { children: [_jsx("label", { className: "text-sm font-medium", children: "Tags" }), _jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx(Input, { placeholder: "Add tag", value: newTag, onChange: (e) => setNewTag(e.target.value), onKeyPress: (e) => e.key === "Enter" && (e.preventDefault(), addTag()), className: "flex-1" }), _jsx(Button, { type: "button", onClick: addTag, size: "sm", children: _jsx(Plus, { className: "h-4 w-4" }) })] }), formData.tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-1", children: formData.tags.map((tag) => (_jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm", children: ["#", tag, _jsx("button", { type: "button", onClick: () => removeTag(tag), className: "text-gray-500 hover:text-gray-700", children: _jsx(X, { className: "h-3 w-3" }) })] }, tag))) }))] }), _jsxs(DialogFooter, { children: [_jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }), _jsx(Button, { type: "submit", children: editingTask ? "Update Task" : "Create Task" })] })] })] }) }));
}
