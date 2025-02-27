"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function ProductOverview() {
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your password validation logic here
    if (password === "demo123") {
      // Replace with actual password check
      router.push("/presentation")
    }
  }

  return (
    <div className="min-h-screen bg-[#1a2b5f] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* KnoCard Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="KnoCard Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Password Form */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 bg-white/20 border-white/30 text-white placeholder-white/50"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-white/30 data-[state=checked]:bg-blue-600"
              />
              <label htmlFor="remember" className="text-sm text-white">
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </form>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Lock className="w-4 h-4" />
              <p className="text-sm">
                This page is password-protected. Please contact the person who shared KnoCard with you for access and a
                guided presentation.
              </p>
            </div>
          </div>
        </div>

        {/* Pop Logo */}
        <div className="flex justify-center pt-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            POP
          </div>
        </div>
      </div>
    </div>
  )
}

