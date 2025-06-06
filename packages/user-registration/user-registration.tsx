"use client"

import { useState } from "react"
import { Button } from "@monorepo/ui-components"
import { Input } from "@monorepo/ui-components"
import { Label } from "@monorepo/ui-components"
import { Checkbox } from "@monorepo/ui-components"
import { Card, CardContent, CardHeader, CardTitle } from "@monorepo/ui-components"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function UserRegistration() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const router = useRouter()

  const handleSignInClick = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Get Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Firstname
            </Label>
            <Input id="firstname" type="text" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastname" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Lastname
            </Label>
            <Input id="lastname" type="text" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input id="email" type="email" className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} className="w-full pr-10" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-600 hover:text-violet-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </Label>
            <div className="relative">
              <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} className="w-full pr-10" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-600 hover:text-violet-700"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
              I accept the{" "}
              <Link href="#" className="text-violet-600 hover:text-violet-700 underline">
                Terms and Conditions
              </Link>
            </Label>
          </div>

          <Button
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded-md"
            disabled={!acceptTerms}
          >
            Sign Up
          </Button>

          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button onClick={handleSignInClick} className="text-violet-600 hover:text-violet-700 font-medium">
              Sign in
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserRegistration
