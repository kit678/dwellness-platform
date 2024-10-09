'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, BarChart2, Book, Settings } from 'lucide-react'
import QuizList from './QuizList'

type UpcomingClass = {
  id: string
  title: string
  instructor: string
  date: string
  time: string
  image: string
}

const upcomingClasses: UpcomingClass[] = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    instructor: 'Sarah Johnson',
    date: '2023-06-15',
    time: '07:00 AM',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    instructor: 'Mike Thompson',
    date: '2023-06-16',
    time: '06:00 PM',
    image: '/placeholder.svg'
  }
]

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Welcome back, Jane!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Profile Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg"
                alt="Profile picture"
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#6B4E71]">Jane Doe</h2>
                <p className="text-gray-600">jane.doe@example.com</p>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/profile"
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium flex items-center"
              >
                <Settings className="mr-2 h-5 w-5" />
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Wellness Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Your Wellness Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Classes Attended</p>
                <p className="text-2xl font-bold text-[#6B4E71]">12</p>
              </div>
              <div>
                <p className="text-gray-600">Hours Practiced</p>
                <p className="text-2xl font-bold text-[#6B4E71]">24</p>
              </div>
              <div>
                <p className="text-gray-600">Streak</p>
                <p className="text-2xl font-bold text-[#6B4E71]">5 days</p>
              </div>
              <div>
                <p className="text-gray-600">Next Milestone</p>
                <p className="text-2xl font-bold text-[#6B4E71]">30 days</p>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/stats"
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium flex items-center"
              >
                <BarChart2 className="mr-2 h-5 w-5" />
                View Detailed Stats
              </Link>
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Upcoming Classes</h2>
            {upcomingClasses.map((classItem) => (
              <div key={classItem.id} className="mb-4 last:mb-0">
                <div className="flex items-center">
                  <Image
                    src={classItem.image}
                    alt={classItem.title}
                    width={48}
                    height={48}
                    className="rounded-md mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-[#6B4E71]">{classItem.title}</h3>
                    <p className="text-sm text-gray-600">{classItem.instructor}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="mr-1 h-4 w-4" />
                      {classItem.date}
                      <Clock className="ml-2 mr-1 h-4 w-4" />
                      {classItem.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <Link 
                href="/classes"
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium flex items-center"
              >
                <Book className="mr-2 h-5 w-5" />
                View All Classes
              </Link>
            </div>
          </div>

          {/* Quiz List */}
          <div className="md:col-span-2 lg:col-span-3">
            <QuizList />
          </div>
        </div>
      </div>
    </div>
  )
}