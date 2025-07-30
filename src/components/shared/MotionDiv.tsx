"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionDiv = ({
  children,
  className,
  delay = 0,
}: MotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};
