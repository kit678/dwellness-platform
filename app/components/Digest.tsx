'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

export default function Digest() {
  const [isClicking, setIsClicking] = useState(false)

  const digestItems = [
    { type: "blog", title: "10 Minute Morning Yoga Routine", excerpt: "Start your day right with this energizing sequence...", image: "/placeholder.svg" },
    { type: "instagram", content: "Breathwork exercise for stress relief #mindfulness", image: "/placeholder.svg" },
    { type: "blog", title: "The Benefits of Plant-Based Eating", excerpt: "Discover how a plant-based diet can improve your health...", image: "/placeholder.svg" },
    { type: "instagram", content: "Today's intention: Gratitude #dailyintention", image: "/placeholder.svg" },
    { type: "blog", title: "Meditation Myths Debunked", excerpt: "Learn the truth about common meditation misconceptions...", image: "/placeholder.svg" },
    { type: "instagram", content: "New yoga flow class starting next week! #yogaflow", image: "/placeholder.svg" },
  ]

  return (
    <section className="snap-start w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-[90%] h-[85%] max-w-6xl">
        {/* "Dwellness Digest" button at the top */}
        <div className="absolute -top-14 left-0 right-0 overflow-hidden z-0">
          <Link
            href="/dwellness-digest"
            className={`block w-full h-20 bg-[#7A9B9F] text-white font-medium text-lg 
                        flex items-start justify-end px-12 pt-1 transition-all duration-200 
                        hover:bg-[#6B8A8E] focus:outline-none focus:ring-2 focus:ring-[#6B4E71] focus:ring-opacity-50
                        rounded-full ${isClicking ? 'transform translate-y-1' : ''}`}
            onMouseDown={() => setIsClicking(true)}
            onMouseUp={() => setIsClicking(false)}
            onMouseLeave={() => setIsClicking(false)}
          >
            <div className="bg-white bg-opacity-30 px-6 py-2 rounded-full mt-1">
              Dwellness Digest
            </div>
          </Link>
        </div>

        <div className="absolute inset-0 bg-[#B8D0C9] rounded-3xl shadow-2xl transform rotate-1 skew-y-1 scale-105"></div>
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#B8D0C9] opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col px-6 md:px-12 py-10 z-10">
          <div className="flex-grow overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
              {digestItems.map((item, index) => (
                <div key={index} className={`bg-white bg-opacity-80 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm ${item.type === 'instagram' ? 'row-span-1' : 'row-span-2'}`}>
                  <div className="relative h-40">
                    <Image 
                      src={item.image ?? ''} 
                      alt={item.title || item.content || ''}
                      fill
                      className="object-cover"
                    />
                    {item.type === 'instagram' && (
                      <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                        <Instagram className="h-5 w-5 text-[#6B4E71]" />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    {item.type === 'blog' ? (
                      <>
                        <h3 className="text-base font-semibold text-[#4A6C6F] mb-1">{item.title}</h3>
                        <p className="text-[#6B4E71] text-xs">{item.excerpt}</p>
                        <Link href="#" className="mt-1 inline-flex items-center text-[#7A9B9F] hover:text-[#6B4E71] text-sm">
                          Read More
                        </Link>
                      </>
                    ) : (
                      <p className="text-[#6B4E71] text-xs">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}