"use client"

import { UserProfile } from "@monorepo/feature-y"
import { TaskAnalytics, TaskManager } from "@monorepo/feature-x"
import {UserLogin} from "../../../../packages/user-login"
import UserRegistration from "../../../../packages/user-registration/user-registration"



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Monorepo Demo Application</h1>
          <p className="text-lg text-gray-600"> Feature X (Task Management) and Feature Y (User Profile)</p>
        </div>

        {/* User Profile Section */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">User Profile System</h2>
            <p className="text-gray-600">Feature Y - Complete user profile management</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <UserProfile />
          </div>
        </div>
        {/* Task Manager Section */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enhanced Task Manager System</h2>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
              {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="text-blue-800 font-medium text-sm">📊 Analytics Dashboard</div>
                <div className="text-blue-600 text-xs">Real-time task statistics</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-green-800 font-medium text-sm">🏷️ Categories & Tags</div>
                <div className="text-green-600 text-xs">Organize with labels</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="text-purple-800 font-medium text-sm">📅 Due Date Tracking</div>
                <div className="text-purple-600 text-xs">Never miss deadlines</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <div className="text-orange-800 font-medium text-sm">🔍 Advanced Search</div>
                <div className="text-orange-600 text-xs">Find tasks instantly</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="text-red-800 font-medium text-sm">💬 Task Comments</div>
                <div className="text-red-600 text-xs">Add notes and updates</div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                <div className="text-indigo-800 font-medium text-sm">⚡ Bulk Operations</div>
                <div className="text-indigo-600 text-xs">Manage multiple tasks</div>
              </div> */}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <TaskManager />
          </div>
        </div>
     <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">User Profile System</h2>
            <p className="text-gray-600">Feature Y - Complete user profile management</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
           <UserLogin />
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
           <UserRegistration />
          </div>
        </div>

       
      </div>
    </div>
  )
}
