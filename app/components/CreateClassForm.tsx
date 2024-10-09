'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Users, DollarSign, MapPin, FileText, Package, Repeat } from 'lucide-react'

type ClassFormData = {
  title: string
  description: string
  type: 'single' | 'package' | 'subscription'
  price: string
  category: string
}

const initialFormData: ClassFormData = {
  title: '',
  description: '',
  type: 'single',
  price: '',
  category: ''
}

export default function ClassForm({ existingClass = null }) {
  const [formData, setFormData] = useState<ClassFormData>(existingClass || initialFormData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">
          {existingClass ? 'Edit Class' : 'Create New Class'}
        </h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Class Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Class Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
            >
              <option value="single">Single Class</option>
              <option value="package">Package</option>
              <option value="subscription">Subscription</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <div className="relative">
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                step="0.01"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
              />
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B4E71]"
            >
              <option value="">Select a category</option>
              <option value="yoga">Yoga</option>
              <option value="meditation">Meditation</option>
              <option value="fitness">Fitness</option>
              <option value="nutrition">Nutrition</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#6B4E71] text-white rounded-md hover:bg-[#9D8AA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
            >
              {existingClass ? 'Update Class' : 'Create Class'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}