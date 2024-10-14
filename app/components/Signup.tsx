'use client'

import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="max-w-md w-full px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Join Dwellness</h1>
        <form className="space-y-4">
          <motion.input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
        </form>
        <div className="text-center mt-6">
          <p className="mb-4">Or sign up with</p>
          <div className="flex justify-center space-x-4">
            <motion.button
              className="flex items-center px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <FaGoogle className="w-5 h-5 mr-2" />
              Google
            </motion.button>
            <motion.button
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook className="w-5 h-5 mr-2" />
              Facebook
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
