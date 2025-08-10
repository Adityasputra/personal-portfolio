"use client";

import ComingSoonPortfolioLayout from "@/components/portfolio/ComingSoonPortfolioLayout";
import { Code, Rocket, Sparkles, Zap, Clock } from "lucide-react";

export default function PortfolioAIPage() {
  return (
    <ComingSoonPortfolioLayout
      title="Building Something Amazing"
      description="I'm crafting an AI portfolio section that will showcase innovative projects, machine learning experiments, and cutting-edge AI solutions. Stay tuned for interactive demos and technical deep dives!"
      expected="September 2025"
      badges={[
        { icon: Zap, label: "AI Portfolio", variant: "secondary" },
        {
          icon: Clock,
          label: "Coming Soon",
          variant: "outline",
          color: "orange-500",
        },
      ]}
      features={[
        {
          icon: Code,
          title: "ML Projects",
          desc: "Machine learning implementations",
          color: "text-blue-500",
        },
        {
          icon: Rocket,
          title: "AI Tools",
          desc: "Interactive AI applications",
          color: "text-purple-500",
        },
        {
          icon: Sparkles,
          title: "Experiments",
          desc: "Innovative AI experiments",
          color: "text-pink-500",
        },
      ]}
    />
  );
}
