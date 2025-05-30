// Date utilities
export { formatDate, isValidDate, getRelativeTime } from "./date"

// String utilities
export { capitalize, truncate, slugify, generateId } from "./string"

// API utilities
export { apiRequest, handleApiError } from "./api"

// Validation utilities
export { validateEmail, validatePassword, validateRequired } from "./validation"

// Data transformation utilities
export { sortBy, groupBy, filterBy } from "./data"

// Types
export type { ApiResponse, SortDirection, ValidationResult } from "./types"
// In packages/utils/src/index.ts or wherever your utils are
export function isOverdue(dueDate: Date): boolean {
  return dueDate < new Date()
}
export { formatCurrency, formatTime } from "./date"
