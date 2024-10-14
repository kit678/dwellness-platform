'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Onboarding = () => {
  const categories = [
    { label: 'Yoga', icon: '🧘' },
    { label: 'Meditation', icon: '🧘‍♂️' },
    { label: 'Nutrition', icon: '🥗' },
    { label: 'Fitness', icon: '🏋️' },
    { label: 'Mindfulness', icon: '🧠' },
    { label: 'Spirituality', icon: '☮️' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold">What Interests You?</h1>
      <p className="text-lg">Discover diverse categories for your wellness journey</p>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <span className="text-lg font-semibold">{category.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex space-x-2 mt-8">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
      <motion.button
        className="px-8 py-3 bg-gray-800 rounded-full text-lg font-medium mt-8"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Skip
      </motion.button>
    </div>
  );
};

export default Onboarding;
