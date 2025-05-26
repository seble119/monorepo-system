export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error: string | null;
}
export type SortDirection = "asc" | "desc";
export interface ValidationResult {
    isValid: boolean;
    message: string;
}
