'use client'

import React, { useState, useEffect } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'

type SearchResult = {
  id: string
  title: string
  type: 'class' | 'instructor' | 'article'
  description: string
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        setIsLoading(true)
        // Simulating an API call
        fetchSearchResults(query).then((data) => {
          setResults(data)
          setIsLoading(false)
        })
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  const fetchSearchResults = async (searchQuery: string): Promise<SearchResult[]> => {
    // This is a mock function. In a real application, you would make an API call here.
    await new Promise(resolve => setTimeout(resolve, 500)) // Simulating network delay
    return [
      { id: '1', title: 'Morning Yoga Flow', type: 'class', description: 'Start your day with energizing yoga' },
      { id: '2', title: 'Sarah Johnson', type: 'instructor', description: 'Experienced yoga and meditation instructor' },
      { id: '3', title: 'Benefits of Meditation', type: 'article', description: 'Learn about the science-backed benefits of regular meditation' },
    ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())) as SearchResult[]
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for classes, instructors, or articles..."
          className="w-full px-4 py-2 pl-10 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6B4E71] focus:border-transparent"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {isLoading && (
        <div className="mt-4 text-center text-gray-600">
          Searching...
        </div>
      )}
      {results.length > 0 && (
        <div className="mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          {results.map((result) => (
            <div key={result.id} className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
              <h3 className="text-lg font-semibold text-[#6B4E71]">{result.title}</h3>
              <p className="text-sm text-gray-600">{result.description}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                {result.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}