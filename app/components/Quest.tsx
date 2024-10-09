'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Quest() {
  const [isClicking, setIsClicking] = useState(false)

  return (
    <section className="snap-start w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] h-[85%] max-w-6xl">
        {/* "Build your profile" button at the top */}
        <div className="absolute -top-14 left-0 right-0 overflow-hidden z-0">
          <Link
            href="/build-profile"
            className={`block w-full h-20 bg-[#6B4E71] text-white font-medium text-lg 
                        flex items-start justify-start pl-6 pt-1 transition-all duration-200 
                        hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-[#6B4E71] focus:ring-opacity-50
                        rounded-full ${isClicking ? 'transform translate-y-1' : ''}`}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            onMouseLeave={() => setIsClicking(false)}
          >
            <div className="bg-white bg-opacity-30 px-6 py-2 rounded-full mt-1">
              Build your profile
            </div>
          </Link>
        </div>

        <div className="absolute inset-0 bg-[#F7F4EF] rounded-3xl shadow-2xl transform rotate-1 -skew-y-3 scale-105"></div>
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#F7F4EF] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col px-6 md:px-12 py-10 z-10">
          <div className="flex-grow overflow-y-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-[#6B4E71]">Discover Your Wellness Path</h2>
              <p className="text-xl text-gray-700 mb-8">
                Take our quick quiz to get personalized wellness recommendations.
              </p>
              <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-[#6B4E71]">How often do you exercise?</h3>
                <div className="space-y-4">
                  {["Never", "Rarely", "Sometimes", "Often", "Always"].map((option, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-2 text-lg font-medium text-[#6B4E71] bg-[#F7F4EF] rounded-full hover:bg-[#E8D0C9] transition-colors shadow-md"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}