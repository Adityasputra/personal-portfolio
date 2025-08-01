import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExperimentalCard } from "@/components/experimental/ExperimentalCard";

export const metadata: Metadata = {
  title: "Experimental Code | Lab",
  description: "A place for quick experiments and wild ideas executed fast.",
};

const experimentalProjects = [
  {
    title: "Typing Speed Tracker",
    slug: "typing-speed-tracker",
    description: "A simple tool to measure real-time typing speed.",
    tags: ["React", "Hooks", "UX"],
    date: "2025-07-30",
  },
  {
    title: "Shader Playground",
    slug: "shader-playground",
    description:
      "A mini WebGL editor for exploring visual effects and shaders.",
    tags: ["WebGL", "Canvas", "Graphics"],
    date: "2025-07-30",
  },
  {
    title: "Logic Puzzle Engine",
    slug: "logic-puzzle-engine",
    description: "A prototype for a condition-based logic puzzle system.",
    tags: ["Logic", "Game", "Algorithms"],
    date: "2025-07-30",
  },
];

export default function ExperimentalCodePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      {/* Back Button */}
      <div>
        <Link
          href="/home"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Home
        </Link>
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Experimental Code</h1>
        <p className="text-muted-foreground">
          Quick experiments, small ideas, and prototype tools that may or may
          not be useful.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experimentalProjects.map((project) => (
          <ExperimentalCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}
