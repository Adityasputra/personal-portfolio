"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  ArrowLeft, 
  Search, 
  FileQuestion,
  Sparkles,
  RefreshCw
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickLinks = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/portfolio", label: "Portfolio", icon: <FileQuestion className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Sparkles className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <RefreshCw className="w-4 h-4" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full text-center"
        >
          {/* 404 Animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-primary/20 select-none"
                animate={{
                  rotateY: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                404
              </motion.div>
              <motion.div
                className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                404
              </motion.div>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/50 backdrop-blur-sm border border-border/50 p-8 md:p-12 rounded-3xl shadow-xl mb-8"
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Oops! Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              The page you&apos;re looking for seems to have wandered off into the digital void. 
              But don&apos;t worry, let&apos;s get you back on track!
            </motion.p>

            {/* Search Box */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-center"
                />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Or try one of these popular pages:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {quickLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={link.href}>
                      <Button
                        variant="outline"
                        className="w-full h-auto py-3 flex flex-col items-center gap-2 hover:bg-primary/5 hover:border-primary/30"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {link.icon}
                        </div>
                        <span className="text-xs font-medium">{link.label}</span>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/home">
                <Button size="lg" className="group w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="group w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <Link href="/contact">
              <Button variant="ghost" size="sm" className="group">
                Contact Support
                <motion.div
                  className="ml-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}