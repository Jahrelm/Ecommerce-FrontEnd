// ButtonWithText.jsx
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: "-100%" }, // Move off-screen to the left
  visible: { opacity: 1, x: "-150%" }, // Move to the left by 150%
};

const HoverArrowButton = () => {
  return (
    <div className="relative button-text-expand">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 bg-gray-600 text-white rounded-full flex justify-center items-center"
      >
        <motion.svg
          whileHover={{ rotate: 90 }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2.707 10.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L6.414 10H18a1 1 0 0 1 0 2H6.414l3.707 3.707a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.button>
      <motion.div
        variants={variants}
        initial="hidden"
        whileHover="visible"
        className="absolute left-0 top-0 bg-gray-600 text-white p-4 w-32 rounded shadow-lg"
      >
        Your Text Here
      </motion.div>
    </div>
  );
};

export default HoverArrowButton;
