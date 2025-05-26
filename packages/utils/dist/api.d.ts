import type { ApiResponse } from "./types";
/**
 * Make an API request with error handling
 */
export declare function apiRequest<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>>;
/**
 * Handle API errors consistently
 */
export declare function handleApiError(error: unknown): string;
