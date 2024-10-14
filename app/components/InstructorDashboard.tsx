'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Users, BarChart2, Book, Settings, PlusCircle } from 'lucide-react'

type UpcomingClass = {
  id: string
  title: string
  date: string
  time: string
  enrolledStudents: number
  maxCapacity: number
}

const upcomingClasses: UpcomingClass[] = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    date: '2023-06-15',
    time: '07:00 AM',
    enrolledStudents: 15,
    maxCapacity: 20
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    date: '2023-06-16',
    time: '06:00 PM',
    enrolledStudents: 18,
    maxCapacity: 25
  }
]

export default function InstructorDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Welcome back, Sarah!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Instructor Profile Summary */}
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
                <h2 className="text-xl font-semibold text-[#6B4E71]">Sarah Johnson</h2>
                <p className="text-gray-600">Yoga & Fitness Instructor</p>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/instructor/profile"
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium flex items-center"
              >
                <Settings className="mr-2 h-5 w-5" />
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Teaching Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Your Teaching Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Classes Taught</p>
                <p className="text-2xl font-bold text-[#6B4E71]">45</p>
              </div>
              <div>
                <p className="text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-[#6B4E71]">320</p>
              </div>
              <div>
                <p className="text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-[#6B4E71]">4.8</p>
              </div>
              <div>
                <p className="text-gray-600">Hours Taught</p>
                <p className="text-2xl font-bold text-[#6B4E71]">68</p>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/instructor/stats"
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
                <div>
                  <h3 className="font-medium text-[#6B4E71]">{classItem.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="mr-1 h-4 w-4" />
                    {classItem.date}
                    <Clock className="ml-2 mr-1 h-4 w-4" />
                    {classItem.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Users className="mr-1 h-4 w-4" />
                    {classItem.enrolledStudents} / {classItem.maxCapacity} students
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <Link 
                href="/instructor/classes"
                className="text-[#6B4E71] hover:text-[#9D8AA5] font-medium flex items-center"
              >
                <Book className="mr-2 h-5 w-5" />
                View All Classes
              </Link>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link 
                  href="/instructor/create-class"
                  className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
                >
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create New Class
                </Link>
                <Link 
                  href="/instructor/messages"
                  className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Message Students
                </Link>
                <Link 
                  href="/instructor/resources"
                  className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
                >
                  <Book className="mr-2 h-5 w-5" />
                  Manage Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
