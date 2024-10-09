'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, MapPin } from 'lucide-react'

type ClassType = {
  id: string
  title: string
  instructor: string
  date: string | null
  time: string | null
  duration: string
  location: string
  image: string
  category: string
  keywords: string[]
  description: string
  capacity: number
  enrolled: number
  packageType?: 'single' | 'package' | 'subscription'
  sessions?: number // Number of sessions in a package
  availableDates?: string[] // Dates available for booking
}

const classData: ClassType = {
  id: '1',
  title: 'Morning Yoga Flow',
  instructor: 'Sarah Johnson',
  date: '2023-06-15',
  time: '07:00 AM',
  duration: '60 minutes',
  location: 'Studio A',
  image: '/placeholder.svg',
  category: 'Yoga',
  keywords: ['yoga', 'morning', 'flow', 'beginner'],
  description: "Start your day with an energizing yoga flow suitable for all levels. This class focuses on linking breath with movement to build strength, flexibility, and balance. You'll leave feeling refreshed and ready to tackle your day.",
  capacity: 20,
  enrolled: 12,
  packageType: 'package',
  sessions: 4,
  availableDates: ['2023-06-15', '2023-06-22', '2023-06-29', '2023-07-06']
}

export default function ClassDetail() {
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [selectedDates, setSelectedDates] = useState<string[]>([])

  const handleEnroll = () => {
    if (selectedDates.length === classData.sessions) {
      setIsEnrolled(true)
      // TODO: Implement enrollment logic
    }
  }

  const handleDateSelection = (date: string) => {
    setSelectedDates(prev => {
      if (prev.includes(date)) {
        return prev.filter(d => d !== date)
      } else if (prev.length < (classData.sessions || 0)) {
        return [...prev, date]
      }
      return prev
    })
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F4EF]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={classData.image}
              alt={classData.title}
              width={300}
              height={300}
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-[#6B4E71] font-semibold">
              {classData.category}
            </div>
            <h1 className="mt-1 text-3xl font-bold text-[#6B4E71]">{classData.title}</h1>
            <p className="mt-2 text-gray-500">{classData.description}</p>
          </div>
        </div>
        <div className="px-8 py-4 bg-[#F7F4EF]">
          <div className="flex flex-wrap gap-2 mb-4">
            {classData.keywords.map((keyword, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-[#6B4E71] border border-[#6B4E71]">
                <Tag size={12} className="mr-1" />
                {keyword}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <User size={20} className="mr-2 text-[#6B4E71]" />
              <span>Instructor: {classData.instructor}</span>
            </div>
            {classData.date && classData.time && (
              <>
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-2 text-[#6B4E71]" />
                  <span>Date: {classData.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={20} className="mr-2 text-[#6B4E71]" />
                  <span>Time: {classData.time}</span>
                </div>
              </>
            )}
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2 text-[#6B4E71]" />
              <span>Duration: {classData.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2 text-[#6B4E71]" />
              <span>Location: {classData.location}</span>
            </div>
          </div>
        </div>
        <div className="px-8 py-4">
          <h2 className="text-lg font-semibold text-[#6B4E71] mb-2">Select Dates</h2>
          <div className="grid grid-cols-3 gap-4">
            {classData.availableDates?.map(date => (
              <button
                key={date}
                onClick={() => handleDateSelection(date)}
                className={`py-2 px-4 rounded-md ${
                  selectedDates.includes(date) ? 'bg-[#6B4E71] text-white' : 'bg-gray-200'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
        <div className="px-8 py-4">
          <h2 className="text-lg font-semibold text-[#6B4E71] mb-2">Class Capacity</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">{classData.enrolled} enrolled / {classData.capacity} total</span>
            <div className="w-64 bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#6B4E71] h-2.5 rounded-full" 
                style={{ width: `${(classData.enrolled / classData.capacity) * 100}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={handleEnroll}
            disabled={isEnrolled || selectedDates.length !== (classData.sessions || 0)}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isEnrolled 
                ? 'bg-green-500 cursor-not-allowed' 
                : 'bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]'
            }`}
          >
            {isEnrolled ? 'Enrolled' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </div>
  )
}