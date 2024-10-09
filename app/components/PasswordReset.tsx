'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function PasswordReset() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F4EF] to-[#E8D0C9]">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#6B4E71] mb-6">Reset Your Password</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#6B4E71] focus:border-transparent"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 mb-4">
              If an account exists for {email}, you will receive password reset instructions.
            </p>
            <p className="text-sm text-gray-600">
              Didn't receive the email? Check your spam folder or{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium"
              >
                try again
              </button>
              .
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-[#6B4E71] hover:text-[#9D8AA5]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}