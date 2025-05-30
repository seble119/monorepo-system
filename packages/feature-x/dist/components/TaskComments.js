"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@monorepo/ui-components";
import { Input } from "@monorepo/ui-components";
import { MessageCircle, Trash2, Send } from "lucide-react";
// Helper function for time formatting
function formatTimeAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60)
        return "just now";
    if (diffInSeconds < 3600)
        return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
        return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000)
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000)
        return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}
export function TaskComments({ comments, onAddComment, onDeleteComment }) {
    const [newComment, setNewComment] = useState("");
    const [showComments, setShowComments] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment.trim());
            setNewComment("");
        }
    };
    return (_jsxs("div", { className: "mt-4", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setShowComments(!showComments), className: "text-gray-600 hover:text-gray-800", children: [_jsx(MessageCircle, { className: "h-4 w-4 mr-1" }), "Comments (", comments.length, ")"] }), showComments && (_jsxs("div", { className: "mt-3 space-y-3", children: [comments.map((comment) => (_jsxs("div", { className: "bg-gray-50 rounded-lg p-3", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx("p", { className: "text-sm text-gray-700", children: comment.text }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => onDeleteComment(comment.id), className: "text-gray-400 hover:text-red-600 h-6 w-6 p-0", children: _jsx(Trash2, { className: "h-3 w-3" }) })] }), _jsx("p", { className: "text-xs text-gray-500 mt-1", children: formatTimeAgo(comment.createdAt) })] }, comment.id))), _jsxs("form", { onSubmit: handleSubmit, className: "flex gap-2", children: [_jsx(Input, { placeholder: "Add a comment...", value: newComment, onChange: (e) => setNewComment(e.target.value), className: "flex-1" }), _jsx(Button, { type: "submit", size: "sm", disabled: !newComment.trim(), children: _jsx(Send, { className: "h-4 w-4" }) })] })] }))] }));
}
