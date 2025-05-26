export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  bio?: string
  location?: string
  website?: string
  joinedAt: Date
  lastActive: Date
}

export interface UserSettings {
  notifications: {
    email: boolean
    push: boolean
    marketing: boolean
  }
  privacy: {
    profileVisible: boolean
    showEmail: boolean
    showLocation: boolean
  }
  preferences: {
    theme: "light" | "dark" | "system"
    language: string
    timezone: string
  }
}

export interface UpdateProfileData {
  firstName?: string
  lastName?: string
  bio?: string
  location?: string
  website?: string
}

export interface UpdateSettingsData {
  notifications?: Partial<UserSettings["notifications"]>
  privacy?: Partial<UserSettings["privacy"]>
  preferences?: Partial<UserSettings["preferences"]>
}
