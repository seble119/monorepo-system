/**
 * Sort an array of objects by a property
 */
export function sortBy(array, key, direction = "asc") {
    return [...array].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (aVal < bVal)
            return direction === "asc" ? -1 : 1;
        if (aVal > bVal)
            return direction === "asc" ? 1 : -1;
        return 0;
    });
}
/**
 * Group an array of objects by a property
 */
export function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const groupKey = String(item[key]);
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
    }, {});
}
/**
 * Filter an array of objects by a predicate
 */
export function filterBy(array, predicate) {
    return array.filter(predicate);
}
