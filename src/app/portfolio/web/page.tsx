"use client";

import ComingSoonPortfolioLayout from "@/components/portfolio/ComingSoonPortfolioLayout";
import { MonitorSmartphone, Code2, Paintbrush } from "lucide-react";

export default function PortfolioWebPage() {
  return (
    <ComingSoonPortfolioLayout
      title="Web Projects Showcase"
      description="A curated selection of responsive websites, UI components, and full-stack projects."
      expected="September 2025"
      badges={[
        {
          icon: MonitorSmartphone,
          label: "Web Portfolio",
          variant: "secondary",
        },
        {
          icon: Code2,
          label: "Coming Soon",
          variant: "outline",
          color: "orange-500",
        },
      ]}
      features={[
        {
          icon: MonitorSmartphone,
          title: "Responsive Design",
          desc: "Optimized for all screen sizes",
          color: "text-sky-500",
        },
        {
          icon: Code2,
          title: "Modern Stack",
          desc: "Next.js, Tailwind, API Routes",
          color: "text-green-500",
        },
        {
          icon: Paintbrush,
          title: "Custom UI",
          desc: "Styled with care and details",
          color: "text-pink-500",
        },
      ]}
    />
  );
}
