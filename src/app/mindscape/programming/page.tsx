"use client";

import MindscapeComingSoonLayout from "@/components/mindscape/MindscapeComingSoonLayout";
import { Code, Terminal, Cpu, BookOpen, FileCode } from "lucide-react";

export default function ProgrammingPage() {
  return (
    <MindscapeComingSoonLayout
      title="Programming & Projects"
      description="A collection of code experiments, tools, and creative software projects."
      expected="December 2025"
      badges={[
        {
          icon: FileCode,
          label: "Projects",
          variant: "secondary",
        },
        {
          icon: Code,
          label: "In Progress",
          variant: "outline",
          color: "green-500",
        },
      ]}
      features={[
        {
          icon: Terminal,
          title: "Command-Line Tools",
          desc: "Build powerful CLI utilities to automate tasks and boost workflow.",
          color: "text-blue-500",
        },
        {
          icon: Cpu,
          title: "System Programming",
          desc: "Explore low-level coding for performance and efficiency.",
          color: "text-rose-500",
        },
        {
          icon: BookOpen,
          title: "Learning Resources",
          desc: "Access guides, notes, and curated materials to master programming.",
          color: "text-emerald-500",
        },
      ]}
    />
  );
}
