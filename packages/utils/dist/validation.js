/**
 * Validate email address
 */
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return {
        isValid,
        message: isValid ? "" : "Please enter a valid email address",
    };
}
/**
 * Validate password strength
 */
export function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < minLength) {
        return {
            isValid: false,
            message: `Password must be at least ${minLength} characters long`,
        };
    }
    if (!hasUpperCase) {
        return {
            isValid: false,
            message: "Password must contain at least one uppercase letter",
        };
    }
    if (!hasLowerCase) {
        return {
            isValid: false,
            message: "Password must contain at least one lowercase letter",
        };
    }
    if (!hasNumbers) {
        return {
            isValid: false,
            message: "Password must contain at least one number",
        };
    }
    if (!hasSpecialChar) {
        return {
            isValid: false,
            message: "Password must contain at least one special character",
        };
    }
    return {
        isValid: true,
        message: "Password is strong",
    };
}
/**
 * Validate required field
 */
export function validateRequired(value, fieldName = "Field") {
    const isValid = value.trim().length > 0;
    return {
        isValid,
        message: isValid ? "" : `${fieldName} is required`,
    };
}
