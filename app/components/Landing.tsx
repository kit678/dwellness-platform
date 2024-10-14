import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Landing() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-4 right-4">
        <button onClick={toggleDarkMode} className="bg-gray-700 p-2 rounded-full">
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
      <div className="flex flex-col items-center">
        <motion.div className="mb-6" whileHover={{ scale: 1.05 }}>
          <img src="/path/to/image.png" alt="Wellness Tips" className="w-40 h-40 rounded-full" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-2">Welcome to Dwellness & start your wellness</h1>
        <p className="text-lg mb-8">Discover ancient practices in a modern setting.</p>
        <div className="flex space-x-4 mb-8">
          <motion.button
            className={`px-6 py-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
            whileHover={{ scale: 1.1 }}
          >
            Sign in
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
            whileHover={{ scale: 1.1 }}
          >
            Explore now
          </motion.button>
        </div>
        <p className="text-sm">Experience as a visitor</p>
      </div>
    </div>
  );
}
