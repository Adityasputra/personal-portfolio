"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Code, Palette, Brain } from "lucide-react";

export default function Loading() {
  const [loadingText, setLoadingText] = useState("Initializing");
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const steps = [
      { text: "Initializing", progress: 20 },
      { text: "Loading components", progress: 40 },
      { text: "Preparing content", progress: 60 },
      { text: "Setting up workspace", progress: 80 },
      { text: "Almost ready", progress: 95 },
      { text: "Ready!", progress: 100 },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLoadingText(steps[currentStep].text);
        setProgress(steps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { icon: Code, delay: 0, color: "text-blue-500" },
    { icon: Palette, delay: 0.2, color: "text-purple-500" },
    { icon: Brain, delay: 0.4, color: "text-green-500" },
    { icon: Sparkles, delay: 0.6, color: "text-orange-500" },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted/20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-float-delay" />
      </div>

      {/* Main Loading Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center space-y-8"
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="relative"
        >
          {/* Main Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="w-20 h-20 bg-gradient-to-br from-primary via-purple-600 to-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-2xl"
          >
            A
          </motion.div>

          {/* Orbiting Elements */}
          <div className="absolute inset-0">
            {floatingIcons.map(({ icon: Icon, delay, color }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  rotate: 360,
                }}
                transition={{
                  scale: { delay: delay + 0.5, duration: 0.5 },
                  opacity: { delay: delay + 0.5, duration: 0.5 },
                  rotate: {
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                    delay: delay,
                  },
                }}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${45 + index * 10}px 0px`,
                  transform: `translate(-50%, -50%) rotate(${index * 90}deg)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                  }}
                  className={`w-8 h-8 ${color} bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Pulse Ring */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-2xl border-2 border-primary/30"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center space-y-2"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
            Adityasputra
          </h1>
          <p className="text-sm text-muted-foreground">
            Creative Developer & Designer
          </p>
        </motion.div>

        {/* Loading Text with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="text-center space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground font-medium"
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-muted/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
            />
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="text-xs text-muted-foreground"
          >
            {progress}%
          </motion.div>
        </motion.div>

        {/* Floating Dots */}
        <div className="absolute -bottom-20 flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
