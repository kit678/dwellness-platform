'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Camera, Save } from 'lucide-react'

export default function UserProfile() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [bio, setBio] = useState('Wellness enthusiast and yoga practitioner')
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    console.log('Profile update submitted:', { name, email, bio })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-[#6B4E71] text-white">
          <h3 className="text-2xl leading-6 font-semibold">User Profile</h3>
          <p className="mt-1 max-w-2xl text-sm">Personal details and preferences.</p>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-full"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-[#6B4E71] text-white p-2 rounded-full hover:bg-[#9D8AA5] transition-colors"
              >
                <Camera size={16} />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <p className="text-sm font-medium text-gray-500">{email}</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#6B4E71] focus:border-[#6B4E71] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#6B4E71] focus:border-[#6B4E71] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                disabled={!isEditing}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#6B4E71] focus:border-[#6B4E71] sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            {isEditing ? (
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
              >
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}