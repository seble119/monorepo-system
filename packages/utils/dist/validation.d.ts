import type { ValidationResult } from "./types";
/**
 * Validate email address
 */
export declare function validateEmail(email: string): ValidationResult;
/**
 * Validate password strength
 */
export declare function validatePassword(password: string): ValidationResult;
/**
 * Validate required field
 */
export declare function validateRequired(value: string, fieldName?: string): ValidationResult;
