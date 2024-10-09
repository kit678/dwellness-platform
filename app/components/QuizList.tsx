'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

type Quiz = {
  id: string
  title: string
  description: string
  questionCount: number
  completed: boolean
}

const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Wellness Assessment',
    description: 'Evaluate your overall wellness and identify areas for improvement.',
    questionCount: 10,
    completed: false
  },
  {
    id: '2',
    title: 'Stress Management',
    description: 'Assess your stress levels and learn coping strategies.',
    questionCount: 8,
    completed: true
  },
  {
    id: '3',
    title: 'Nutrition Knowledge',
    description: 'Test your understanding of balanced nutrition and healthy eating habits.',
    questionCount: 12,
    completed: false
  },
  {
    id: '4',
    title: 'Sleep Quality',
    description: 'Evaluate your sleep patterns and get tips for better rest.',
    questionCount: 6,
    completed: false
  }
]

export default function QuizList() {
  return (
    <div className="min-h-screen bg-[#F7F4EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#6B4E71] mb-8">Wellness Quizzes</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#6B4E71] mb-2">{quiz.title}</h2>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{quiz.questionCount} questions</span>
                  {quiz.completed && (
                    <span className="flex items-center text-green-500">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                <Link
                  href={`/quizzes/${quiz.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#6B4E71] hover:bg-[#9D8AA5]"
                >
                  {quiz.completed ? 'Review Quiz' : 'Start Quiz'}
                  <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}