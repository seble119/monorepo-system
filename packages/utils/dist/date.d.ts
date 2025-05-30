/**
 * Format a date to a readable string
 */
export declare function formatDate(date: Date | string, format?: "short" | "long" | "relative"): string;
/**
 * Check if a date is valid
 */
export declare function isValidDate(date: Date): boolean;
/**
 * Get relative time string (e.g., "2 hours ago")
 */
export declare function getRelativeTime(date: Date): string;
export declare function formatCurrency(amount: number, currency?: string): string;
export declare function formatTime(date: Date): string;
