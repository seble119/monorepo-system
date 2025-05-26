"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components"
import { ProfileCard } from "./ProfileCard"
import { ProfileForm } from "./ProfileForm"
import { SettingsPanel } from "./SettingsPanel"
import { useProfile } from "../hooks/useProfile"

type ActiveTab = "profile" | "edit" | "settings"

export function UserProfile() {
  const { user, settings, updateProfile, updateSettings } = useProfile()
  const [activeTab, setActiveTab] = useState<ActiveTab>("profile")

  const tabs = [
    { id: "profile" as const, label: "Profile", icon: "👤" },
    { id: "edit" as const, label: "Edit Profile", icon: "✏️" },
    { id: "settings" as const, label: "Settings", icon: "⚙️" },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Profile System</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex border-b mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "profile" && <ProfileCard user={user} settings={settings} />}

          {activeTab === "edit" && (
            <ProfileForm
              user={user}
              onSubmit={(data) => {
                updateProfile(data)
                setActiveTab("profile")
              }}
              onCancel={() => setActiveTab("profile")}
            />
          )}

          {activeTab === "settings" && <SettingsPanel settings={settings} onUpdateSettings={updateSettings} />}
        </CardContent>
      </Card>
    </div>
  )
}
