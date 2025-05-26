import type { SortDirection } from "./types";
/**
 * Sort an array of objects by a property
 */
export declare function sortBy<T>(array: T[], key: keyof T, direction?: SortDirection): T[];
/**
 * Group an array of objects by a property
 */
export declare function groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
/**
 * Filter an array of objects by a predicate
 */
export declare function filterBy<T>(array: T[], predicate: (item: T) => boolean): T[];
