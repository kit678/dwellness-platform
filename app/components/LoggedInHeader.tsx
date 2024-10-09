'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search as SearchIcon, X, Bell, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type SearchResult = {
  id: string
  title: string
  type: 'class' | 'instructor' | 'article'
  description: string
}

type UserProps = {
  name: string
  avatar: string
}

export default function LoggedInHeader({ user }: { user: UserProps }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    } else {
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true)
      const delayDebounceFn = setTimeout(() => {
        fetchSearchResults(searchQuery).then((results) => {
          setSearchResults(results)
          setIsSearching(false)
        })
      }, 300)

      return () => clearTimeout(delayDebounceFn)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const fetchSearchResults = async (query: string): Promise<SearchResult[]> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return [
      { id: '1', title: 'Morning Yoga Flow', type: 'class' as const, description: 'Start your day with energizing yoga' },
      { id: '2', title: 'Sarah Johnson', type: 'instructor' as const, description: 'Experienced yoga and meditation instructor' },
      { id: '3', title: 'Benefits of Meditation', type: 'article' as const, description: 'Learn about the science-backed benefits of regular meditation' },
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link className="flex items-center justify-center" href="/">
            <Image src="/placeholder.svg" alt="Dwellness Logo" width={48} height={48} className="rounded-lg" />
            <span className="ml-3 text-2xl font-bold text-[#6B4E71] tracking-tight">Dwellness</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <Link className="text-sm font-medium text-gray-700 hover:text-[#6B4E71] transition-colors" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-[#6B4E71] transition-colors" href="#dwellness-digest">
              Dwellness Digest
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-[#6B4E71] transition-colors" href="/instructors">
              Instructors
            </Link>
            <button
              onClick={toggleSearch}
              className="text-sm font-medium text-gray-700 hover:text-[#6B4E71] transition-colors focus:outline-none"
              aria-label={isSearchOpen ? "Close search" : "Open search"}
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link href="/notifications" className="text-gray-700 hover:text-[#6B4E71] transition-colors">
              <Bell className="h-5 w-5" />
            </Link>
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 focus:outline-none"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <Image
                  src={user.avatar}
                  alt={`${user.name}'s avatar`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="hidden sm:inline-block text-sm font-medium text-gray-700">{user.name}</span>
              </button>
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                    <Link href="/my-classes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Classes</Link>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                    <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-[#6B4E71] transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Services
              </Link>
              <Link href="#dwellness-digest" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Dwellness Digest
              </Link>
              <Link href="/instructors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Instructors
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Dashboard
              </Link>
              <Link href="/my-classes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                My Classes
              </Link>
              <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Profile
              </Link>
              <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Settings
              </Link>
              <Link href="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#6B4E71] hover:bg-gray-50">
                Sign out
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="relative">
                <motion.input
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border-b-2 border-[#6B4E71] focus:outline-none focus:border-[#9D8AA5] transition-all duration-300"
                  placeholder="Search for classes, instructors, or articles..."
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#6B4E71] transition-colors"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {isSearching && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-gray-500"
                >
                  Searching...
                </motion.p>
              )}
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-4 space-y-4 max-h-64 overflow-y-auto"
                >
                  {searchResults.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <h4 className="font-medium text-[#6B4E71]">{result.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                      <span className="text-xs text-gray-400 mt-2 inline-block">{result.type}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}