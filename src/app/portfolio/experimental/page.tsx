"use client";

import ComingSoonPortfolioLayout from "@/components/portfolio/ComingSoonPortfolioLayout";
import { Beaker, Puzzle, Lightbulb } from "lucide-react";

export default function PortfolioExperimentalPage() {
  return (
    <ComingSoonPortfolioLayout
      title="Experimental Lab"
      description="A collection of UI/UX experiments, animation tests, and playful design ideas that push boundaries."
      expected="September 2025"
      badges={[
        { icon: Beaker, label: "Experimental Lab", variant: "secondary" },
        {
          icon: Puzzle,
          label: "Coming Soon",
          variant: "outline",
          color: "purple-500",
        },
      ]}
      features={[
        {
          icon: Lightbulb,
          title: "Creative Ideas",
          desc: "Trying out new UI/UX concepts",
          color: "text-yellow-500",
        },
        {
          icon: Puzzle,
          title: "Component Experiments",
          desc: "Reusable UI logic and layout tests",
          color: "text-indigo-500",
        },
        {
          icon: Beaker,
          title: "Animations",
          desc: "Framer Motion and transitions",
          color: "text-pink-500",
        },
      ]}
    />
  );
}
