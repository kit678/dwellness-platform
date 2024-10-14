import React from 'react';
import { motion } from 'framer-motion';

const ResetPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/logo.svg" alt="Logo" className="mb-4" />
          <h1 className="text-2xl font-bold">Dwellness</h1>
          <h2 className="text-xl mt-4">Reset Password</h2>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 rounded-full bg-gray-800 text-gray-400 focus:outline-none"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            className="w-full max-w-md mt-4 p-3 rounded-full bg-black text-white font-bold hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Confirm
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResetPassword;
