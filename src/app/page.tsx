"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/GridBackground";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function DigitalGatePage() {
  const [entering, setEntering] = useState(false);
  const router = useRouter();

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  };

  return (
    <GridBackground>
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <section className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BlurText
            text="Welcome to My Digital Universe"
            animateBy="words"
            delay={100}
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
          />
        </motion.div>

        <motion.p
          className="mt-4 text-base md:text-lg max-w-xl text-neutral-600 dark:text-neutral-300 font-light italic"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          A gateway where logic meets creativity, and imagination becomes
          reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            onClick={handleEnter}
            className="mt-8 text-base md:text-lg px-6 py-3 rounded-lg "
          >
            Enter the Portal
          </Button>
        </motion.div>

        <AnimatePresence>
          {entering && (
            <motion.div
              className="fixed inset-0 z-50 bg-white dark:bg-neutral-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </section>
    </GridBackground>
  );
}
