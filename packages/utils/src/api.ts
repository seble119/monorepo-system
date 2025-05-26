import type { ApiResponse } from "./types"

/**
 * Make an API request with error handling
 */
export async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`
      try {
        const errorData = await response.json()
      } catch {
        // If JSON parsing fails, use the default error message
      }

      return {
        success: false,
        error: errorMessage,
        data: null,
      }
    }

    const data = (await response.json()) as T

    return {
      success: true,
      data,
      error: null,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
      data: null,
    }
  }
}

/**
 * Handle API errors consistently
 */
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === "string") {
    return error
  }
  return "An unexpected error occurred"
}
