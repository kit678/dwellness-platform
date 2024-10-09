'use client'

import React from 'react'
import Link from 'next/link'
import { Users, BarChart2, DollarSign, Calendar, Book, Settings, AlertCircle, PlusCircle } from 'lucide-react'

type StatCard = {
  title: string
  value: string
  icon: React.ReactNode
  change: string
  trend: 'up' | 'down'
}

const statCards: StatCard[] = [
  {
    title: 'Total Users',
    value: '5,234',
    icon: <Users className="h-6 w-6 text-[#6B4E71]" />,
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Active Classes',
    value: '187',
    icon: <Book className="h-6 w-6 text-[#6B4E71]" />,
    change: '+5%',
    trend: 'up'
  },
  {
    title: 'Monthly Revenue',
    value: '$24,500',
    icon: <DollarSign className="h-6 w-6 text-[#6B4E71]" />,
    change: '+8%',
    trend: 'up'
  },
  {
    title: 'User Retention',
    value: '76%',
    icon: <BarChart2 className="h-6 w-6 text-[#6B4E71]" />,
    change: '-2%',
    trend: 'down'
  }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#F7F4EF] rounded-full p-3">
                  {card.icon}
                </div>
                <span className={`text-sm font-medium ${card.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#6B4E71]">{card.value}</h2>
              <p className="text-gray-600">{card.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-5 w-5 text-[#6B4E71]" />
                <span>New class "Advanced Yoga" created by Sarah Johnson</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Users className="mr-2 h-5 w-5 text-[#6B4E71]" />
                <span>50 new users registered in the last 24 hours</span>
              </li>
              <li className="flex items-center text-gray-600">
                <AlertCircle className="mr-2 h-5 w-5 text-[#6B4E71]" />
                <span>3 reported issues require attention</span>
              </li>
            </ul>
            <Link 
              href="/admin/activity"
              className="mt-4 inline-block text-[#6B4E71] hover:text-[#9D8AA5] font-medium"
            >
              View All Activity
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="/admin/users"
                className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
              >
                <Users className="mr-2 h-5 w-5" />
                Manage Users
              </Link>
              <Link 
                href="/admin/classes"
                className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
              >
                <Book className="mr-2 h-5 w-5" />
                Manage Classes
              </Link>
              <Link 
                href="/admin/reports"
                className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
              >
                <BarChart2 className="mr-2 h-5 w-5" />
                View Reports
              </Link>
              <Link 
                href="/admin/settings"
                className="flex items-center justify-center p-4 bg-[#6B4E71] text-white rounded-lg hover:bg-[#9D8AA5] transition-colors duration-200"
              >
                <Settings className="mr-2 h-5 w-5" />
                Platform Settings
              </Link>
            </div>
          </div>
        </div>

        {/* User Growth Chart Placeholder */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#6B4E71] mb-4">User Growth</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">User Growth Chart Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  )
}