/**
 * Format a date to a readable string
 */
export function formatDate(date, format = "short") {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (!isValidDate(dateObj)) {
        return "Invalid Date";
    }
    switch (format) {
        case "short":
            return dateObj.toLocaleDateString();
        case "long":
            return dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        case "relative":
            return getRelativeTime(dateObj);
        default:
            return dateObj.toLocaleDateString();
    }
}
/**
 * Check if a date is valid
 */
export function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
/**
 * Get relative time string (e.g., "2 hours ago")
 */
export function getRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (diffInSeconds < 60) {
        return "just now";
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }
    return formatDate(date, "short");
}
export function formatCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}
export function formatTime(date) {
    return new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);
}
