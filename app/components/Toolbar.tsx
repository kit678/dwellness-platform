import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaPlus, FaComment } from 'react-icons/fa';

const Toolbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`fixed bottom-4 w-full max-w-md mx-auto flex items-center justify-center bg-gray-900 p-2 rounded-full shadow-lg transition-all duration-500 ${
        expanded ? 'px-8' : 'px-4'
      }`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
    >
      <motion.div
        className={`flex items-center justify-center transition-all duration-500 ${
          expanded ? 'space-x-4' : 'space-x-2'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-2 bg-gray-800 rounded-full shadow-md"
        >
          <FaHome size={24} className="text-white" />
        </motion.div>
        <div className="w-px h-6 bg-gray-600"></div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-2 bg-gray-800 rounded-full shadow-md"
        >
          <FaSearch size={24} className="text-white" />
        </motion.div>
        <div className="w-px h-6 bg-gray-600"></div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-2 bg-gray-800 rounded-full shadow-md"
        >
          <FaPlus size={24} className="text-white" />
        </motion.div>
        {expanded && (
          <>
            <div className="w-px h-6 bg-gray-600"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-2 bg-gray-800 rounded-full shadow-md"
            >
              <FaComment size={24} className="text-white" />
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Toolbar;
