// src/components/ThemeToggle.js

import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, darkMode }) => {
  return (
    <>
      <div className="bg-slate-200  bg-opacity-50 px-2 py-1 rounded-lg">
        <motion.button
          onClick={toggleTheme}
          className="theme-toggle "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: darkMode ? 0 : 360 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? '☀️ ' : '  🌙'}
        </motion.button>
        <button className=" text-gray-700 s-text">Tap icon</button>
      </div>
    </>
  );
};

export default ThemeToggle;
