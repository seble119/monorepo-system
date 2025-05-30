"use client"

import { Button } from "@monorepo/ui-components"
import { Trash2, CheckCircle, Clock, Circle } from "lucide-react"
import { useState } from "react"

interface BulkActionsProps {
  selectedCount: number
  onBulkUpdate: (updates: any) => void
  onBulkDelete: () => void
  onClearSelection: () => void
  categories: string[]
}

export function BulkActions({
  selectedCount,
  onBulkUpdate,
  onBulkDelete,
  onClearSelection,
  categories,
}: BulkActionsProps) {
  const [bulkStatus, setBulkStatus] = useState("")
  const [bulkPriority, setBulkPriority] = useState("")
  const [bulkCategory, setBulkCategory] = useState("")

  if (selectedCount === 0) return null

  const handleBulkUpdate = (field: string, value: string) => {
    if (!value) return

    const updates: any = {}
    if (field === "status") updates.status = value
    if (field === "priority") updates.priority = value
    if (field === "category") updates.category = value

    onBulkUpdate(updates)

    // Reset selections
    setBulkStatus("")
    setBulkPriority("")
    setBulkCategory("")
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-blue-900">
          {selectedCount} task{selectedCount !== 1 ? "s" : ""} selected
        </span>

        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => handleBulkUpdate("status", "completed")}>
            <CheckCircle className="h-4 w-4 mr-1" />
            Complete
          </Button>

          <Button size="sm" variant="outline" onClick={() => handleBulkUpdate("status", "in-progress")}>
            <Clock className="h-4 w-4 mr-1" />
            In Progress
          </Button>

          <Button size="sm" variant="outline" onClick={() => handleBulkUpdate("status", "todo")}>
            <Circle className="h-4 w-4 mr-1" />
            To Do
          </Button>
        </div>

        <select
          value={bulkPriority}
          onChange={(e) => handleBulkUpdate("priority", e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white min-w-[120px] h-8"
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select
          value={bulkCategory}
          onChange={(e) => handleBulkUpdate("category", e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white min-w-[120px] h-8"
        >
          <option value="">Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="destructive" onClick={onBulkDelete}>
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>

          <Button size="sm" variant="outline" onClick={onClearSelection}>
            Clear Selection
          </Button>
        </div>
      </div>
    </div>
  )
}
