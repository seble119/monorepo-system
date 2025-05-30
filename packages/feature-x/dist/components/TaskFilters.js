"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "@monorepo/ui-components";
import { Button } from "@monorepo/ui-components";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@monorepo/ui-components";
import { Search, X } from "lucide-react";
export function TaskFilters({ filters, onFiltersChange, categories }) {
    const updateFilter = (key, value) => {
        onFiltersChange({ ...filters, [key]: value });
    };
    const clearFilters = () => {
        onFiltersChange({});
    };
    const hasActiveFilters = Object.keys(filters).some((key) => filters[key] !== undefined && filters[key] !== "");
    return (_jsx("div", { className: "bg-white p-4 rounded-lg border shadow-sm mb-6", children: _jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [_jsx("div", { className: "flex-1 min-w-[200px]", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" }), _jsx(Input, { placeholder: "Search tasks...", value: filters.search || "", onChange: (e) => updateFilter("search", e.target.value), className: "pl-10" })] }) }), _jsxs(Select, { value: filters.status || "all", onVolumeChange: (value) => updateFilter("status", value || undefined), children: [_jsx(SelectTrigger, { className: "w-[140px]", children: _jsx(SelectValue, { placeholder: "Status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Status" }), _jsx(SelectItem, { value: "todo", children: "To Do" }), _jsx(SelectItem, { value: "in-progress", children: "In Progress" }), _jsx(SelectItem, { value: "completed", children: "Completed" })] })] }), _jsxs(Select, { value: filters.priority || "all", onVolumeChange: (value) => updateFilter("priority", value || undefined), children: [_jsx(SelectTrigger, { className: "w-[140px]", children: _jsx(SelectValue, { placeholder: "Priority" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Priority" }), _jsx(SelectItem, { value: "low", children: "Low" }), _jsx(SelectItem, { value: "medium", children: "Medium" }), _jsx(SelectItem, { value: "high", children: "High" })] })] }), _jsxs(Select, { value: filters.category || "all", onVolumeChange: (value) => updateFilter("category", value || undefined), children: [_jsx(SelectTrigger, { className: "w-[140px]", children: _jsx(SelectValue, { placeholder: "Category" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "all", children: "All Categories" }), categories.map((category) => (_jsx(SelectItem, { value: category, children: category }, category)))] })] }), hasActiveFilters && (_jsxs(Button, { variant: "outline", size: "sm", onClick: clearFilters, children: [_jsx(X, { className: "h-4 w-4 mr-1" }), "Clear"] }))] }) }));
}
