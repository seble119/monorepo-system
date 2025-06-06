import { Card, CardContent, Avatar, AvatarFallback, AvatarImage, Badge } from "@monorepo/ui-components"
import { formatDate, capitalize } from "@monorepo/utils"
import { MapPin, Globe, Mail, Calendar, Activity } from "lucide-react"
import type { User, UserSettings } from "../types"

interface ProfileCardProps {
  user: User
  settings: UserSettings
}

export function ProfileCard({ user, settings }: ProfileCardProps) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-start gap-6">
        <Avatar className="w-25 h-24">
          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={`${user.firstName} ${user.lastName}`} />
          <AvatarFallback className="text-lg">{getInitials(user.firstName, user.lastName)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Mail size={16} />
              {settings.privacy.showEmail ? user.email : "Email hidden"}
            </div>

            {user.location && settings.privacy.showLocation && (
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                {user.location}
              </div>
            )}

            {user.website && (
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Website
                </a>
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">{capitalize(settings.preferences.theme)} Theme</Badge>
            <Badge variant="outline">{settings.privacy.profileVisible ? "Public Profile" : "Private Profile"}</Badge>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      {user.bio && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-gray-700">{user.bio}</p>
          </CardContent>
        </Card>
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={18} className="text-blue-600" />
              <h3 className="font-semibold">Member Since</h3>
            </div>
            <p className="text-gray-600">{formatDate(user.joinedAt, "long")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={18} className="text-green-600" />
              <h3 className="font-semibold">Last Active</h3>
            </div>
            <p className="text-gray-600">{formatDate(user.lastActive, "relative")}</p>
          </CardContent>
        </Card>
      </div>

      {/* Notification Preferences */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Notification Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Email Notifications</span>
              <Badge variant={settings.notifications.email ? "default" : "secondary"}>
                {settings.notifications.email ? "On" : "Off"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Push Notifications</span>
              <Badge variant={settings.notifications.push ? "default" : "secondary"}>
                {settings.notifications.push ? "On" : "Off"}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm">Marketing Emails</span>
              <Badge variant={settings.notifications.marketing ? "default" : "secondary"}>
                {settings.notifications.marketing ? "On" : "Off"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
