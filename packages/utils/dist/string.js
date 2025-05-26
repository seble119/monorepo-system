/**
 * Capitalize the first letter of a string
 */
export function capitalize(str) {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
/**
 * Truncate a string to a specified length
 */
export function truncate(str, length, suffix = "...") {
    if (!str || str.length <= length)
        return str;
    return str.slice(0, length) + suffix;
}
/**
 * Convert a string to a URL-friendly slug
 */
export function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
/**
 * Generate a random ID string
 */
export function generateId(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
