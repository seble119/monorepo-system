"use client"

import { UserProfile } from "@monorepo/feature-y"
import { TaskManager } from "@monorepo/feature-x"
export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile System</h1>
        <p className="text-gray-600">Feature Y - Full Implementation</p>
      </div>
      <UserProfile />
       <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Manager System</h1>
        <p className="text-gray-600">Feature X - Full Implementation</p>
      </div>
      
      <TaskManager />
    </div>
  )
}
