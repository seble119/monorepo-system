"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@monorepo/ui-components";
import { Trash2, CheckCircle, Clock, Circle } from "lucide-react";
import { useState } from "react";
export function BulkActions({ selectedCount, onBulkUpdate, onBulkDelete, onClearSelection, categories, }) {
    const [bulkStatus, setBulkStatus] = useState("");
    const [bulkPriority, setBulkPriority] = useState("");
    const [bulkCategory, setBulkCategory] = useState("");
    if (selectedCount === 0)
        return null;
    const handleBulkUpdate = (field, value) => {
        if (!value)
            return;
        const updates = {};
        if (field === "status")
            updates.status = value;
        if (field === "priority")
            updates.priority = value;
        if (field === "category")
            updates.category = value;
        onBulkUpdate(updates);
        // Reset selections
        setBulkStatus("");
        setBulkPriority("");
        setBulkCategory("");
    };
    return (_jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4", children: _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsxs("span", { className: "text-sm font-medium text-blue-900", children: [selectedCount, " task", selectedCount !== 1 ? "s" : "", " selected"] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleBulkUpdate("status", "completed"), children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-1" }), "Complete"] }), _jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleBulkUpdate("status", "in-progress"), children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), "In Progress"] }), _jsxs(Button, { size: "sm", variant: "outline", onClick: () => handleBulkUpdate("status", "todo"), children: [_jsx(Circle, { className: "h-4 w-4 mr-1" }), "To Do"] })] }), _jsxs("select", { value: bulkPriority, onChange: (e) => handleBulkUpdate("priority", e.target.value), className: "px-3 py-1 border border-gray-300 rounded-md text-sm bg-white min-w-[120px] h-8", children: [_jsx("option", { value: "", children: "Priority" }), _jsx("option", { value: "low", children: "Low" }), _jsx("option", { value: "medium", children: "Medium" }), _jsx("option", { value: "high", children: "High" })] }), _jsxs("select", { value: bulkCategory, onChange: (e) => handleBulkUpdate("category", e.target.value), className: "px-3 py-1 border border-gray-300 rounded-md text-sm bg-white min-w-[120px] h-8", children: [_jsx("option", { value: "", children: "Category" }), categories.map((category) => (_jsx("option", { value: category, children: category }, category)))] }), _jsxs("div", { className: "ml-auto flex gap-2", children: [_jsxs(Button, { size: "sm", variant: "destructive", onClick: onBulkDelete, children: [_jsx(Trash2, { className: "h-4 w-4 mr-1" }), "Delete"] }), _jsx(Button, { size: "sm", variant: "outline", onClick: onClearSelection, children: "Clear Selection" })] })] }) }));
}
