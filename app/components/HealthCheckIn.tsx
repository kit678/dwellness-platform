'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HealthCheckIn = () => {
  const icons = [
    { label: 'Calm', icon: '🌿' },
    { label: 'Heart Rate', icon: '❤️' },
    { label: 'Mental Clarity', icon: '🧠' },
    { label: 'Nutrition', icon: '🍽️' },
    { label: 'Exercise', icon: '🏋️' },
    { label: 'Stress Level', icon: '🧘' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl font-bold">Health Check-In</h1>
      <p>Select icons that best represent your current health status</p>
      <div className="grid grid-cols-3 gap-4">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
      <div className="w-full max-w-md space-y-4">
        <Slider label="How do you feel in the morning?" />
        <Slider label="Rate your energy level throughout the day" />
        <Slider label="How well do you sleep at night?" />
      </div>
      <div className="flex space-x-4">
        <motion.button
          className="px-6 py-2 bg-gray-700 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          More Quizzes
        </motion.button>
        <motion.button
          className="px-6 py-2 bg-gray-700 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Explore
        </motion.button>
      </div>
    </div>
  );
};

const Slider = ({ label }: { label: string }) => (
  <div>
    <p className="mb-2">{label}</p>
    <input type="range" className="w-full" />
  </div>
);

export default HealthCheckIn;
