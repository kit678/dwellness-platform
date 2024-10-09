'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const [isClicking, setIsClicking] = useState(false)

  return (
    <section className="snap-start w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] h-[80%] max-w-6xl">
        {/* Background container with slanted edges */}
        <div className="absolute inset-0 bg-[#F7F4EF] rounded-3xl shadow-2xl transform rotate-1 skew-y-1 scale-105 z-10"></div>
        
        {/* Main content container */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#F7F4EF] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 z-30">
          <div className="text-center space-y-6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#6B4E71]">
              Discover Your Path to Wellness
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-700">
              Join our community of mindful individuals on a journey to better health and inner peace.
            </p>
          </div>
          <Link
            href="/book-class"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#6B4E71] px-8 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-[#6B4E71] focus:ring-opacity-50 hover:shadow-xl active:transform active:translate-y-1"
          >
            Book Free Class
          </Link>
        </div>

        {/* "Explore Classes" button at the bottom left */}
        <div className="absolute -bottom-16 -left-5 w-full overflow-hidden z-0">
          <Link
            href="/classes"
            className={`block w-full h-32 bg-[#9D8AA5] text-white font-medium text-lg 
                        flex items-end justify-start px-12 pb-2 transition-all duration-200 
                        hover:bg-[#6B4E71] focus:outline-none focus:ring-2 focus:ring-[#6B4E71] focus:ring-opacity-50
                        rounded-full ${isClicking ? 'transform translate-y-1' : ''}`}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            onMouseLeave={() => setIsClicking(false)}
          >
            <div className="bg-white bg-opacity-30 px-6 py-2 rounded-full mb-1">
              Explore Classes
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-[#B8D0C9] opacity-50 blur-md"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[#E8D0C9] opacity-50 blur-md"></div>
    </section>
  )
}