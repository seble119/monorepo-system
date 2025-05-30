"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@monorepo/ui-components"
import { Input } from "@monorepo/ui-components"
import type { TaskComment } from "../Types/task"
import { MessageCircle, Trash2, Send } from "lucide-react"

// Helper function for time formatting
function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return "just now"
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
  return `${Math.floor(diffInSeconds / 31536000)} years ago`
}

interface TaskCommentsProps {
  comments: TaskComment[]
  onAddComment: (text: string) => void
  onDeleteComment: (commentId: string) => void
}

export function TaskComments({ comments, onAddComment, onDeleteComment }: TaskCommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [showComments, setShowComments] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onAddComment(newComment.trim())
      setNewComment("")
    }
  }

  return (
    <div className="mt-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowComments(!showComments)}
        className="text-gray-600 hover:text-gray-800"
      >
        <MessageCircle className="h-4 w-4 mr-1" />
        Comments ({comments.length})
      </Button>

      {showComments && (
        <div className="mt-3 space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-700">{comment.text}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDeleteComment(comment.id)}
                  className="text-gray-400 hover:text-red-600 h-6 w-6 p-0"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">{formatTimeAgo(comment.createdAt)}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="sm" disabled={!newComment.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}
