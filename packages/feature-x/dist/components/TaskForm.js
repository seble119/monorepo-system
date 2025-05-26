"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea, Button } from "@monorepo/ui-components";
import { validateRequired } from "@monorepo/utils";
export function TaskForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "medium",
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        const titleValidation = validateRequired(formData.title, "Title");
        if (!titleValidation.isValid) {
            newErrors.title = titleValidation.message;
        }
        const descriptionValidation = validateRequired(formData.description, "Description");
        if (!descriptionValidation.isValid) {
            newErrors.description = descriptionValidation.message;
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit(formData);
        }
    };
    return (_jsxs(Card, { className: "max-w-md mx-auto", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Create New Task" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "title", children: "Title" }), _jsx(Input, { id: "title", value: formData.title, onChange: (e) => setFormData((prev) => ({ ...prev, title: e.target.value })), placeholder: "Enter task title" }), errors.title && _jsx("p", { className: "text-sm text-red-600 mt-1", children: errors.title })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "description", children: "Description" }), _jsx(Textarea, { id: "description", value: formData.description, onChange: (e) => setFormData((prev) => ({ ...prev, description: e.target.value })), placeholder: "Enter task description", rows: 3 }), errors.description && _jsx("p", { className: "text-sm text-red-600 mt-1", children: errors.description })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "priority", children: "Priority" }), _jsxs("select", { id: "priority", value: formData.priority, onChange: (e) => setFormData((prev) => ({ ...prev, priority: e.target.value })), className: "w-full p-2 border border-gray-300 rounded-md", children: [_jsx("option", { value: "low", children: "Low" }), _jsx("option", { value: "medium", children: "Medium" }), _jsx("option", { value: "high", children: "High" })] })] }), _jsxs("div", { className: "flex gap-2 pt-4", children: [_jsx(Button, { type: "submit", className: "flex-1", children: "Create Task" }), _jsx(Button, { type: "button", variant: "outline", onClick: onCancel, className: "flex-1", children: "Cancel" })] })] }) })] }));
}
