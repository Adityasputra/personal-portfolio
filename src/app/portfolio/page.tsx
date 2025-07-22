"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code,
  BrainCircuit,
  Beaker,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Home,
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    title: "Web Projects",
    description:
      "Collection of modern, responsive, full-stack web applications.",
    icon: Code,
    href: "/portfolio/web",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    status: "active",
    count: 8,
  },
  {
    title: "AI/ML Projects",
    description: "Showcase of machine learning models and AI experiments.",
    icon: BrainCircuit,
    href: "/portfolio/ai",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    status: "coming-soon",
    count: 5,
  },
  {
    title: "Experimental Projects",
    description: "Creative, playful, and bleeding-edge tech experiments.",
    icon: Beaker,
    href: "/portfolio/experimental",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    status: "active",
    count: 3,
  },
  {
    title: "Bootcamp Projects",
    description:
      "Projects created during learning phases and coding bootcamps.",
    icon: GraduationCap,
    href: "/portfolio/bootcamp",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    status: "active",
    count: 12,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return {
        icon: <CheckCircle className="w-3 h-3" />,
        label: "Available",
        className: "bg-green-500/10 text-green-500 border-green-500/20",
      };
    case "coming-soon":
      return {
        icon: <Clock className="w-3 h-3" />,
        label: "Coming Soon",
        className: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      };
    case "beta":
      return {
        icon: <AlertCircle className="w-3 h-3" />,
        label: "Beta",
        className: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      };
    default:
      return {
        icon: <CheckCircle className="w-3 h-3" />,
        label: "Available",
        className: "bg-green-500/10 text-green-500 border-green-500/20",
      };
  }
};

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 30],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            {/* Back to Home Button */}
            <div className="flex justify-center mb-8">
              <Link href="/">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Title Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Project Showcase</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              My Project{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Explore curated collections of my work — from production-ready
              applications to creative experiments and learning projects.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 sm:gap-8"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {sections.reduce((acc, section) => acc + section.count, 0)}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Total Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {sections.length}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Categories
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto"
          >
            {sections.map(
              ({
                title,
                description,
                icon: Icon,
                href,
                color,
                bgColor,
                borderColor,
                status,
                count,
              }) => {
                const statusBadge = getStatusBadge(status);

                return (
                  <motion.div
                    key={title}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className={`group rounded-2xl border ${borderColor} p-6 sm:p-8 ${bgColor} backdrop-blur-md shadow hover:shadow-xl transition-all duration-300`}
                  >
                    <Link href={href}>
                      <div className="cursor-pointer">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`p-3 rounded-xl ${bgColor} ${color} ring-1 ring-white/10`}
                          >
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${statusBadge.className}`}
                            >
                              {statusBadge.icon}
                              <span className="ml-1">{statusBadge.label}</span>
                            </Badge>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                              {title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {count} {count === 1 ? "project" : "projects"}
                            </Badge>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {description}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 pt-4 border-t border-border/30">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {status === "active"
                                ? "View Projects"
                                : "Coming Soon"}
                            </span>
                            <motion.div
                              className={`w-2 h-2 rounded-full ${
                                status === "active"
                                  ? "bg-green-500"
                                  : "bg-orange-500"
                              }`}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              }
            )}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <Button variant="outline" className="group">
                  <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="group">
                  <Sparkles className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Let&apos;s Work Together
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
}
