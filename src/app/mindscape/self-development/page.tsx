"use client";

import MindscapeComingSoonLayout from "@/components/mindscape/MindscapeComingSoonLayout";
import { Book, Target, Sparkles, TrendingUp } from "lucide-react";

export default function SelfDevelopmentPage() {
  return (
    <MindscapeComingSoonLayout
      title="Self-Development & Growth"
      description="Strategies, habits, and mindset shifts for personal growth, productivity, and lifelong learning."
      expected="January 2026"
      badges={[
        {
          icon: TrendingUp,
          label: "Self-Improvement",
          variant: "secondary",
        },
        {
          icon: Book,
          label: "In Progress",
          variant: "outline",
          color: "purple-500",
        },
      ]}
      features={[
        {
          icon: Target,
          title: "Goal Setting",
          desc: "Practical methods to define, plan, and achieve your goals.",
          color: "text-blue-500",
        },
        {
          icon: Sparkles,
          title: "Mindset & Habits",
          desc: "Build positive routines and a growth-oriented mindset.",
          color: "text-yellow-500",
        },
        {
          icon: TrendingUp,
          title: "Productivity Hacks",
          desc: "Tips and tools to work smarter, focus better, and get more done.",
          color: "text-emerald-500",
        },
      ]}
    />
  );
}
