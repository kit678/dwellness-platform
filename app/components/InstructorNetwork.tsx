'use client'

import React from 'react'
import Link from 'next/link'
import { UserPlus } from 'lucide-react'

export default function InstructorNetwork() {
  return (
    <section className="snap-start w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] h-[90%] max-w-6xl">
        <div className="absolute inset-0 bg-[#E8D0C9] rounded-3xl shadow-2xl transform rotate-1 skew-y-1 scale-105"></div>
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#E8D0C9] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-6 md:px-12 z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-[#6B4E71]">Join Our Instructor Network</h2>
            <p className="max-w-[600px] mx-auto text-xl text-gray-700 mb-8">
              Are you a yoga practitioner or wellness professional? Join our platform and share your expertise with our community.
            </p>
            <Link href="/register-instructor" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#6B4E71] rounded-full shadow-lg hover:bg-[#9D8AA5] transition-colors">
              Register as an Instructor
              <UserPlus className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}