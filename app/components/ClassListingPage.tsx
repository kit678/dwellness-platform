'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Search, Tag } from 'lucide-react'

type ClassType = {
  id: string
  title: string
  instructor: string
  date: string | null
  time: string | null
  image: string
  category: string
  keywords: string[]
  description: string
  packageType?: 'single' | 'package' | 'subscription'
  sessions?: number // Number of sessions in a package
  availableDates?: string[] // Dates available for booking
}

const classes: ClassType[] = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    instructor: 'Sarah Johnson',
    date: '2023-06-15',
    time: '07:00 AM',
    image: '/placeholder.svg',
    category: 'Yoga',
    keywords: ['yoga', 'morning', 'flow', 'beginner'],
    description: 'Start your day with an energizing yoga flow suitable for all levels.'
  },
  {
    id: '2',
    title: 'HIIT Cardio Blast',
    instructor: 'Mike Thompson',
    date: '2023-06-16',
    time: '06:00 PM',
    image: '/placeholder.svg',
    category: 'Fitness',
    keywords: ['hiit', 'cardio', 'intense', 'weight loss'],
    description: 'High-intensity interval training to boost your metabolism and burn calories.'
  },
  {
    id: '3',
    title: 'Mindful Meditation',
    instructor: 'Emma Davis',
    date: null,
    time: null,
    image: '/placeholder.svg',
    category: 'Meditation',
    keywords: ['meditation', 'mindfulness', 'relaxation', 'stress relief'],
    description: 'Learn techniques to calm your mind and reduce stress through guided meditation.'
  },
  {
    id: '4',
    title: 'Power Yoga',
    instructor: 'Alex Lee',
    date: null,
    time: null,
    image: '/placeholder.svg',
    category: 'Yoga',
    keywords: ['yoga', 'power', 'strength', 'advanced'],
    description: 'A challenging yoga class focusing on building strength and flexibility.'
  },
]

export default function ClassListing() {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredClasses, setFilteredClasses] = useState(classes)

  useEffect(() => {
    const filtered = classes.filter(classItem => 
      (filter === 'All' || classItem.category === filter) &&
      (classItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       classItem.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    setFilteredClasses(filtered)
  }, [filter, searchTerm])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Explore Classes</h1>
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Classes:
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search by title or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#6B4E71] focus:border-[#6B4E71] sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="sm:w-48">
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category:
            </label>
            <select
              id="category-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#6B4E71] focus:border-[#6B4E71] sm:text-sm"
            >
              <option value="All">All Categories</option>
              <option value="Yoga">Yoga</option>
              <option value="Fitness">Fitness</option>
              <option value="Meditation">Meditation</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={classItem.image}
                alt={classItem.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#6B4E71] mb-2">{classItem.title}</h2>
                <p className="text-gray-600 mb-4">{classItem.category}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <User size={16} className="mr-2" />
                  {classItem.instructor}
                </div>
                {classItem.date && classItem.time ? (
                  <>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {classItem.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock size={16} className="mr-2" />
                      {classItem.time}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-500 mb-4">Schedule to be announced</p>
                )}
                <p className="text-sm text-gray-600 mb-4">{classItem.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {classItem.keywords.map((keyword, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#F7F4EF] text-[#6B4E71]">
                      <Tag size={12} className="mr-1" />
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/class/${classItem.id}`}
                  className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
                >
                  {classItem.date && classItem.time ? 'Book Now' : 'Learn More'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}