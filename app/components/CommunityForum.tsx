'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MessageSquare, ThumbsUp, Eye, Clock, Search, PlusCircle } from 'lucide-react'

type ForumPost = {
  id: string
  title: string
  author: string
  authorAvatar: string
  date: string
  category: string
  replies: number
  likes: number
  views: number
}

const forumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Tips for maintaining a consistent yoga practice',
    author: 'YogaEnthusiast',
    authorAvatar: '/placeholder.svg',
    date: '2023-06-10',
    category: 'Yoga',
    replies: 15,
    likes: 32,
    views: 128
  },
  {
    id: '2',
    title: 'Best pre-workout meals for HIIT sessions',
    author: 'FitnessFanatic',
    authorAvatar: '/placeholder.svg',
    date: '2023-06-09',
    category: 'Nutrition',
    replies: 23,
    likes: 41,
    views: 205
  },
  {
    id: '3',
    title: 'Dealing with meditation challenges',
    author: 'MindfulMeditator',
    authorAvatar: '/placeholder.svg',
    date: '2023-06-08',
    category: 'Meditation',
    replies: 19,
    likes: 37,
    views: 156
  }
]

const categories = ['All', 'Yoga', 'Fitness', 'Nutrition', 'Meditation', 'Mental Health']

export default function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = forumPosts.filter(post => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Community Forum</h1>

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Link
            href="/new-post"
            className="w-full sm:w-auto flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#6B4E71] hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            New Discussion
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-[#6B4E71] text-white'
                  : 'bg-white text-[#6B4E71] hover:bg-[#F7F4EF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredPosts.map((post) => (
              <li key={post.id} className="p-6 hover:bg-[#F7F4EF] transition-colors duration-200">
                <Link href={`/forum/${post.id}`} className="flex flex-col sm:flex-row sm:items-center">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h2 className="text-xl font-semibold text-[#6B4E71] mb-2">{post.title}</h2>
                    <div className="flex items-center text-sm text-gray-500">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      {post.replies}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {post.views}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}