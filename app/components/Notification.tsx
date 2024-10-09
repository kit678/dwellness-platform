'use client'

import React, { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

type NotificationType = 'success' | 'error' | 'info'

interface NotificationProps {
  type: NotificationType
  message: string
  duration?: number
  onClose?: () => void
}

export default function Notification({ type, message, duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose && onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-400" />
      case 'info':
        return <Info className="h-5 w-5 text-blue-400" />
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50'
      case 'error':
        return 'bg-red-50'
      case 'info':
        return 'bg-blue-50'
    }
  }

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-green-400'
      case 'error':
        return 'border-red-400'
      case 'info':
        return 'border-blue-400'
    }
  }

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-800'
      case 'error':
        return 'text-red-800'
      case 'info':
        return 'text-blue-800'
    }
  }

  return (
    <div className={`fixed bottom-4 right-4 w-full max-w-sm ${getBackgroundColor()} border-l-4 ${getBorderColor()} p-4 shadow-md rounded-md`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3 w-0 flex-1 pt-0.5">
          <p className={`text-sm font-medium ${getTextColor()}`}>{message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            className="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B4E71]"
            onClick={() => {
              setIsVisible(false)
              onClose && onClose()
            }}
          >
            <span className="sr-only">Close</span>
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}