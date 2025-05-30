"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, Settings, CreditCard, LogOut, Bell, Search, ChevronDown } from 'lucide-react'
import { LucideUser } from 'lucide-react';
import { useRouter } from 'next/navigation'; // For App Router

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface HeaderProps {
  isAuthenticated?: boolean
  user?: User | null
  onLoginClick?: () => void
  onRegisterClick?: () => void
  onLogout?: () => void
  onProfileClick?: () => void
  onSettingsClick?: () => void
  onBillingClick?: () => void
  className?: string
}

export function Header({
  isAuthenticated = false,
  user,
  onLogout,
  onProfileClick,
  onSettingsClick,
  onBillingClick,
  className = "",
}: HeaderProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  

  const onLoginClick = () => {
    router.push("/login")
  }

  const onRegisterClick = () => {
    router.push("/register")
  }
  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
    { name: "Support", href: "#support" },
  ]

  return (
    <header className={`bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 backdrop-blur-sm backdrop-filter ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p>Project</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-slate-800 dark:text-slate-100 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
          <div className="flex items-center space-x-3">
            <button
              onClick={onLoginClick}
              className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Sign in
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
            ) : (
              /* Authenticated state */
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative p-2 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                {/* User menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full flex items-center justify-center">
                      {user?.avatar ? (
                        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-8 h-8 rounded-full" />
                      ) : (
                        <span className="text-white text-sm font-medium">
                          {user?.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      )}
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name || "User"}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  </button>

                  {/* User dropdown menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50">
                      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
                      </div>
                      <div className="py-2">
                        <button
                          onClick={onProfileClick}
                          className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          <LucideUser className="h-4 w-4 mr-3" />
                          Your Profile
                        </button>
                        <button
                          onClick={onSettingsClick}
                          className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </button>
                        <button
                          onClick={onBillingClick}
                          className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          <CreditCard className="h-4 w-4 mr-3" />
                          Billing
                        </button>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700 py-2">
                        <button
                          onClick={onLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search bar - Mobile */}
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-600 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Navigation items */}
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}

              {/* Auth buttons - Mobile */}
              {!isAuthenticated && (
               <div className="flex items-center space-x-3">
                <button
                  onClick={() => router.push('/user-login')} // Navigate to login page
                  className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Sign in
                </button>
                <button
                  onClick={() => router.push('/user-registration')} // Navigate to registration page
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transform hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay for user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  )
}
