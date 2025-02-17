"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 h-20 border-4 border-yellow-500 border-t-transparent rounded-full"
        />
      </motion.div>

      {/* <p className="mt-4 text-lg font-medium text-gray-700 flex items-center">
        Loading
        <span className="ml-1 flex">
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="ml-1"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="ml-1"
          >
            .
          </motion.span>
        </span>
      </p> */}
    </div>
  );
}
