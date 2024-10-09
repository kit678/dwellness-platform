'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Services() {
  const [isClickingExplore, setIsClickingExplore] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const services = [
    { icon: '🧘', title: "Yoga Classes", description: "Find balance and flexibility through our diverse yoga offerings." },
    { icon: '✨', title: "Meditation", description: "Cultivate mindfulness and inner peace with guided meditation sessions." },
    { icon: '🥗', title: "Nutrition Counseling", description: "Personalized nutrition advice to fuel your body and mind." },
    { icon: '💪', title: "Fitness Training", description: "Achieve your fitness goals with our expert-led training programs." },
  ]

  return (
    <section className="snap-start w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] h-[80%] max-w-6xl">
        <div className="absolute inset-0 bg-[#E8D0C9] rounded-3xl shadow-2xl transform rotate-1 skew-y-1 scale-105 z-10"></div>
        <div className="absolute inset-0 rounded-3xl overflow-hidden z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#E8D0C9] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-12 z-30">
          {/* Search box inside the main container */}
          <div className="absolute top-4 right-4 w-64">
            <div className="w-full h-10 bg-white bg-opacity-80 rounded-full flex items-center px-4 shadow-md">
              <input
                type="text"
                placeholder="Search Services"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent text-[#8B6E73] placeholder-[#8B6E73] opacity-70 focus:opacity-100 outline-none text-sm"
              />
              <button className="ml-2 text-[#8B6E73] hover:text-[#6B4E71] transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#8B6E73]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-sm">
                <span className="text-4xl mb-4">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-[#8B6E73]">{service.title}</h3>
                <p className="text-[#A08387]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* "Explore Services" button at the bottom left */}
        <div className="absolute -bottom-16 -left-5 w-full overflow-hidden z-0">
          <Link
            href="/services"
            className={`block w-full h-32 bg-[#D8C0B9] text-[#8B6E73] font-medium text-lg 
                        flex items-end justify-start px-12 pb-2 transition-all duration-200 
                        hover:bg-[#C0A8A1] focus:outline-none focus:ring-2 focus:ring-[#8B6E73] focus:ring-opacity-50
                        rounded-full ${isClickingExplore ? 'transform translate-y-1' : ''}`}
            onMouseDown={() => setIsClickingExplore(true)}
            onMouseUp={() => setIsClickingExplore(false)}
            onMouseLeave={() => setIsClickingExplore(false)}
          >
            <div className="bg-white bg-opacity-30 px-6 py-2 rounded-full mb-1">
              Explore Services
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-[#F0E0D9] opacity-50 blur-md"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-[#F0E0D9] opacity-50 blur-md"></div>
    </section>
  )
}