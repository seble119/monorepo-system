"use client"

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginProps {
  onSubmit?: (data: LoginFormData) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  onGoogleLogin?: () => void;
  onGithubLogin?: () => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
}

export function UserLogin({
  onSubmit,
  onForgotPassword,
  onSignUp,
  onGoogleLogin,
  onGithubLogin,
  isLoading = false,
  error,
  className = "",
}: LoginProps) {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<LoginFormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<LoginFormData> = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await onSubmit?.(formData);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 ${className}`}>
      <div className="w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Lock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome back</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Sign in to your account to continue</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-6">
          <button type="button" onClick={onGoogleLogin} disabled={isLoading} className="w-full flex items-center justify-center gap-3 px-5 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 disabled:opacity-50">
            <Chrome className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">Continue with Google</span>
          </button>
          <button type="button" onClick={onGithubLogin} disabled={isLoading} className="w-full flex items-center justify-center gap-3 px-5 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 disabled:opacity-50">
            <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="font-medium text-slate-700 dark:text-slate-300">Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">Or continue with email</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email address</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`block w-full px-4 py-3 border-2 rounded-2xl shadow-sm transition-all duration-200 ${
                fieldErrors.email ? "border-red-300 dark:border-red-600" : "border-slate-200 dark:border-slate-700"
              }`}
              placeholder="Enter your email"
              disabled={isLoading}
            />
            {fieldErrors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{fieldErrors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={`block w-full px-4 py-3 border-2 rounded-2xl shadow-sm transition-all duration-200 ${
                fieldErrors.password ? "border-red-300 dark:border-red-600" : "border-slate-200 dark:border-slate-700"
              }`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="mt-2 text-sm text-violet-600 hover:text-violet-500"
              disabled={isLoading}
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
            {fieldErrors.password && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">{fieldErrors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                className="h-4 w-4 text-violet-600 border-slate-300 rounded"
                disabled={isLoading}
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-slate-700 dark:text-slate-300">Remember me</label>
            </div>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-violet-600 hover:text-violet-500"
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-2xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-200"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Sign in
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onSignUp}
              className="text-violet-600 hover:text-violet-500"
              disabled={isLoading}
            >
              Sign up
            </button>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-violet-600 hover:text-violet-500">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-violet-600 hover:text-violet-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}