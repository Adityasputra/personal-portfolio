"use client";

import { motion } from "framer-motion";
import { Wrench, Sparkles } from "lucide-react";

export default function IconAnimation() {
  return (
    <motion.div
      animate={{
        rotate: [0, 10, -10, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mb-8"
    >
      <div className="relative inline-block">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
          <Wrench className="h-10 w-10 text-white" />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "backInOut",
          }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-sm"
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}
