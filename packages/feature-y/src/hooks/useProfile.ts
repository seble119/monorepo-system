"use client"

import { useState, useCallback } from "react"
import type { User, UserSettings, UpdateProfileData, UpdateSettingsData } from "../types"

export function useProfile() {
  const [user, setUser] = useState<User>({
    id: "1",
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    bio: "Full-stack developer passionate about creating amazing user experiences.",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    joinedAt: new Date("2023-01-15"),
    lastActive: new Date(),
  })

  const [settings, setSettings] = useState<UserSettings>({
    notifications: {
      email: true,
      push: true,
      marketing: false,
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      showLocation: true,
    },
    preferences: {
      theme: "system",
      language: "en",
      timezone: "America/Los_Angeles",
    },
  })

  const updateProfile = useCallback((data: UpdateProfileData) => {
    setUser((prev) => ({ ...prev, ...data }))
  }, [])

  const updateSettings = useCallback((data: UpdateSettingsData) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, ...data.notifications },
      privacy: { ...prev.privacy, ...data.privacy },
      preferences: { ...prev.preferences, ...data.preferences },
    }))
  }, [])

  const updateAvatar = useCallback((avatarUrl: string) => {
    setUser((prev) => ({ ...prev, avatar: avatarUrl }))
  }, [])

  return {
    user,
    settings,
    updateProfile,
    updateSettings,
    updateAvatar,
  }
}
