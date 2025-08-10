"use client";

import MindscapeComingSoonLayout from "@/components/mindscape/MindscapeComingSoonLayout";
import { Book, Brain, FileText, PenTool } from "lucide-react";

export default function PhilosophyPage() {
  return (
    <MindscapeComingSoonLayout
      title="Philosophy and Logics"
      description="Explorations of ideas, reasoning, and the art of thinking — from abstract concepts to practical wisdom."
      expected="November 2025"
      badges={[
        {
          icon: FileText,
          label: "Essays",
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
          icon: Brain,
          title: "Critical Thinking",
          desc: "Analyses and discussions on reasoning, problem-solving, and intellectual clarity.",
          color: "text-orange-500",
        },
        {
          icon: Book,
          title: "Philosophical Essays",
          desc: "Deep dives into ethics, metaphysics, and the nature of knowledge.",
          color: "text-blue-500",
        },
        {
          icon: PenTool,
          title: "Logic & Reasoning",
          desc: "Structured arguments and thought experiments to sharpen the mind.",
          color: "text-violet-600",
        },
      ]}
    />
  );
}
