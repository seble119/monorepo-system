"use client"

import { Input } from "@monorepo/ui-components"
import { Button } from "@monorepo/ui-components"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@monorepo/ui-components"
import type { TaskFilterOptions as TaskFiltersType } from "../Types/task"
import { Search, X } from "lucide-react"

interface TaskFiltersProps {
  filters: TaskFiltersType
  onFiltersChange: (filters: TaskFiltersType) => void
  categories: string[]
}

export function TaskFilters({ filters, onFiltersChange, categories }: TaskFiltersProps) {
  const updateFilter = (key: keyof TaskFiltersType, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  const hasActiveFilters = Object.keys(filters).some(
    (key) => filters[key as keyof TaskFiltersType] !== undefined && filters[key as keyof TaskFiltersType] !== "",
  )

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tasks..."
              value={filters.search || ""}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Select value={filters.status || "all"} onVolumeChange={(value) => updateFilter("status", value || undefined)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="todo">To Do</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.priority || "all"}
          onVolumeChange={(value) => updateFilter("priority", value || undefined)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.category || "all"}
          onVolumeChange={(value) => updateFilter("category", value || undefined)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
    </div>
  )
}
