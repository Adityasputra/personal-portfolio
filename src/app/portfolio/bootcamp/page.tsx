"use client";

import ComingSoonLayout from "@/components/portfolio/ComingSoonLayout";
import { GraduationCap, FileText, Cpu } from "lucide-react";

export default function PortfolioBootcampPage() {
  return (
    <ComingSoonLayout
      title="Bootcamp Projects"
      description="Projects completed during my intensive coding bootcamp journey. Expect solid foundations and best practices."
      expected="Q4 2025"
      badges={[
        {
          icon: GraduationCap,
          label: "Bootcamp Portfolio",
          variant: "secondary",
        },
        {
          icon: FileText,
          label: "Coming Soon",
          variant: "outline",
          color: "yellow-500",
        },
      ]}
      features={[
        {
          icon: FileText,
          title: "Fundamental Projects",
          desc: "CRUD apps, auth, and data management",
          color: "text-blue-500",
        },
        {
          icon: Cpu,
          title: "Practical Skills",
          desc: "Problem solving & real-world logic",
          color: "text-purple-500",
        },
        {
          icon: GraduationCap,
          title: "Bootcamp Certified",
          desc: "Trained with project-based curriculum",
          color: "text-rose-500",
        },
      ]}
    />
  );
}
