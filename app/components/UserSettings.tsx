'use client'

import React, { useState } from 'react'
import { User, Mail, Lock, Bell, Globe, Moon, Sun } from 'lucide-react'

type UserSettings = {
  fullName: string
  email: string
  password: string
  notifications: {
    email: boolean
    push: boolean
  }
  language: string
  theme: 'light' | 'dark' | 'system'
}

const initialSettings: UserSettings = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  password: '',
  notifications: {
    email: true,
    push: true,
  },
  language: 'en',
  theme: 'system',
}

export default function UserSettings() {
  const [settings, setSettings] = useState<UserSettings>(initialSettings)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement
      setSettings(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked,
        },
      }))
    } else {
      setSettings(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Settings updated:', settings)
    // TODO: Implement settings update logic
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">User Settings</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={settings.fullName}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
              />
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Change Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={settings.password}
                onChange={handleInputChange}
                placeholder="Enter new password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#6B4E71] mb-2">Notification Preferences</h2>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="emailNotifications"
                name="email"
                checked={settings.notifications.email}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#6B4E71] focus:ring-[#6B4E71] border-gray-300 rounded"
              />
              <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                name="push"
                checked={settings.notifications.push}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#6B4E71] focus:ring-[#6B4E71] border-gray-300 rounded"
              />
              <label htmlFor="pushNotifications" className="ml-2 block text-sm text-gray-700">
                Push Notifications
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <div className="relative">
              <select
                id="language"
                name="language"
                value={settings.language}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71] appearance-none"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
              <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
              Theme
            </label>
            <div className="relative">
              <select
                id="theme"
                name="theme"
                value={settings.theme}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71] appearance-none"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
              {settings.theme === 'light' && <Sun className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />}
              {settings.theme === 'dark' && <Moon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />}
              {settings.theme === 'system' && <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#6B4E71] text-white rounded-md hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}