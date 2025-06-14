import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
const Select = React.forwardRef(({ className, children, ...props }, ref) => (_jsxs("div", { className: "relative", children: [_jsx("select", { className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref, ...props, children: children }), _jsx(ChevronDown, { className: "absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" })] })));
Select.displayName = "Select";
const SelectContent = ({ children }) => _jsx(_Fragment, { children: children });
const SelectItem = React.forwardRef(({ className, ...props }, ref) => (_jsx("option", { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none", className), ...props })));
SelectItem.displayName = "SelectItem";
const SelectTrigger = Select;
const SelectValue = ({ placeholder }) => (_jsx("option", { value: "", disabled: true, hidden: true, children: placeholder }));
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
