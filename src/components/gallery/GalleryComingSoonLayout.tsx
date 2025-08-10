"use client";

import React, { useState } from "react";
import { Bell, Clock, CheckCircle, AlertCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ButtonNav } from "../custom/button";
import IconAnimation from "../portfolio/IconAnimation";

interface BadgeItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  variant: "secondary" | "outline";
  color?: string;
}

interface GalleryComingSoonProps {
  title: string;
  description: string;
  badges: BadgeItem[];
  expected: string;
}

export default function GalleryComingSoonLayout({
  title,
  description,
  badges,
  expected,
}: GalleryComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNotifyMe = async () => {
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const SHEETBEST_URL = process.env.NEXT_PUBLIC_SHEETBEST_URL;
      if (!SHEETBEST_URL) throw new Error("SheetBest URL is not defined");

      const formattedTimestamp = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const response = await fetch(SHEETBEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          category: "Gallery",
          section: title,
          timestamp: formattedTimestamp,
          status: "subscribed",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Subscription error:", err);
      if (err instanceof Error) {
        if (err.message.includes("fetch")) {
          setError("Network error. Please check your connection.");
        } else if (err.message.includes("400")) {
          setError("Invalid data. Please try again.");
        } else if (err.message.includes("500")) {
          setError("Server error. Please try again later.");
        } else {
          setError("Failed to subscribe. Please try again.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNotifyMe();
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-600/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-600/20 blur-3xl animate-float-delay" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full"
        >
          <h1 className="sr-only">{title}</h1>

          <div className="mt-4">
            <ButtonNav href="/gallery" label="Back to Gallery" />
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-muted/80 backdrop-blur-lg border border-border/50 p-8 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <IconAnimation />

            {/* Badges */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex flex-wrap justify-center gap-2"
            >
              {badges.map(({ icon: Icon, label, variant, color }, idx) => (
                <Badge
                  key={idx}
                  variant={variant}
                  className={`text-sm ${
                    color ? `text-${color}` : ""
                  } border-opacity-30`}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {label}
                </Badge>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {[
                { value: "50+", label: "Items" },
                { value: "4K", label: "Quality" },
                { value: "∞", label: "Inspiration" },
                { value: "🎨", label: "Creative" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Subscription Form */}
            <motion.div variants={itemVariants} className="mb-8">
              {!isSubscribed ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Get Early Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Be the first to know when this gallery section launches
                      with exclusive previews.
                    </p>
                  </div>

                  <form
                    className="space-y-4 max-w-md mx-auto"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleNotifyMe();
                    }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={handleEmailChange}
                        onKeyDown={handleKeyDown}
                        className={`text-center ${
                          error ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        disabled={loading}
                        required
                      />

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-red-500 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {error}
                        </motion.div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={!email.trim() || loading || !!error}
                      className="w-full"
                      size="lg"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A8 8 0 014 12H0c0 3.04 1.14 5.82 3 7.94l3-2.65z"
                            />
                          </svg>
                          Subscribing...
                        </span>
                      ) : (
                        <>
                          <Bell className="w-4 h-4 mr-2" />
                          Notify Me When Ready
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground flex justify-center items-center gap-1">
                    <Check className="w-3 h-3" />
                    No spam, unsubscribe anytime
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                    You&apos;re all set!
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    We&apos;ll notify you as soon as this gallery section is
                    ready.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-8 mb-4 text-center">
            <div className="inline-flex items-center gap-2 bg-background/50 border border-border/30 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Expected launch:{" "}
                <span className="text-primary font-medium">{expected}</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
