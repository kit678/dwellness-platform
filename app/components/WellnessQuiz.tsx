'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

type Question = {
  id: number
  text: string
  options: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How often do you exercise?',
    options: ['Never', '1-2 times a week', '3-4 times a week', '5 or more times a week']
  },
  {
    id: 2,
    text: 'How would you rate your stress level?',
    options: ['Low', 'Moderate', 'High', 'Very High']
  },
  {
    id: 3,
    text: 'How many hours of sleep do you get on average?',
    options: ['Less than 5', '5-6', '7-8', 'More than 8']
  },
  {
    id: 4,
    text: 'How would you describe your diet?',
    options: ['Poor', 'Fair', 'Good', 'Excellent']
  },
  {
    id: 5,
    text: 'How often do you practice mindfulness or meditation?',
    options: ['Never', 'Rarely', 'Sometimes', 'Daily']
  }
]

export default function Component() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Quiz submitted:', answers)
    setQuizCompleted(true)
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#6B4E71]">
            Thank you for completing the Wellness Quiz!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We'll analyze your responses and provide personalized recommendations soon.
          </p>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-[#F7F4EF] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#6B4E71]">
            Wellness Quiz
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#6B4E71] mb-4">{question.text}</h3>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full text-left px-4 py-2 border rounded-md ${
                  answers[currentQuestion] === option
                    ? 'bg-[#6B4E71] text-white'
                    : 'bg-white text-[#6B4E71] hover:bg-[#F7F4EF]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
              currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#6B4E71] text-white hover:bg-[#9D8AA5]'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </button>
          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-[#6B4E71] text-white hover:bg-[#9D8AA5]"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-[#6B4E71] text-white hover:bg-[#9D8AA5]"
            >
              Next
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}