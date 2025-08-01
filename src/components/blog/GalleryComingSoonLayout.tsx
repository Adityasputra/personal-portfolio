"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Image as ImageIcon,
  CheckCircle,
  Calendar,
  Bell,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface GalleryComingSoonLayoutProps {
  title: string;
  description: string;
  previewImages?: string[];
  expected: string;
  category?: string;
  estimatedCount?: number;
}

export default function GalleryComingSoonLayout({
  title,
  description,
  expected,
  category = "Gallery",
  estimatedCount = 50,
}: GalleryComingSoonLayoutProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNotify = async () => {
    if (email && isValidEmail(email)) {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribed(true);
      setEmail("");
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full"
        >
          {/* Back Button */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <Link href="/home">
              <Button variant="ghost" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center gap-2 mb-4"
                >
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    <ImageIcon className="w-3 h-3 mr-1" />
                    {category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-orange-500 border-orange-500/30"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                >
                  {title}
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
                >
                  {description}
                </motion.p>
              </div>

              {/* Preview Grid */}
              {/* {previewImages.length > 0 && (
                <motion.div variants={itemVariants} className="mb-10">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Preview Gallery</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {previewImages.slice(0, 6).map((src, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group overflow-hidden rounded-xl border border-border/20 bg-muted/30"
                      >
                        <div className="aspect-square">
                          <Image
                            src={src}
                            alt={`Preview ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-white font-medium">
                            Preview {i + 1}
                          </span>
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )} */}

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
              >
                <div className="text-center p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {estimatedCount}+
                  </div>
                  <div className="text-xs text-muted-foreground">Items</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">HD</div>
                  <div className="text-xs text-muted-foreground">Quality</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">∞</div>
                  <div className="text-xs text-muted-foreground">
                    Inspiration
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">🎨</div>
                  <div className="text-xs text-muted-foreground">Creative</div>
                </div>
              </motion.div>

              {/* Notification Section */}
              <motion.div
                variants={itemVariants}
                className="max-w-md mx-auto mb-8"
              >
                {!subscribed ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Get notified when this gallery launches
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        Join early access and be the first to explore
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleNotify}
                        disabled={!email || !isValidEmail(email) || isLoading}
                        className="whitespace-nowrap"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Clock className="w-4 h-4 mr-2" />
                          </motion.div>
                        ) : (
                          <Bell className="w-4 h-4 mr-2" />
                        )}
                        {isLoading ? "Subscribing..." : "Notify Me"}
                      </Button>
                    </div>

                    {email && !isValidEmail(email) && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500 text-center"
                      >
                        Please enter a valid email address
                      </motion.p>
                    )}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-green-600">
                      You&apos;re on the early access list!
                    </p>
                    <p className="text-xs text-green-600/80 mt-1">
                      We&apos;ll notify you when the gallery launches
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Footer Actions */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Expected: </span>
                  <span className="font-medium text-primary">{expected}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
