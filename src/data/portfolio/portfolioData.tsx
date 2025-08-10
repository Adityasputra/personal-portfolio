import { Beaker, BrainCircuit, Code, GraduationCap } from "lucide-react";

export interface PortfolioSection {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  status: "active" | "coming-soon" | "beta";
  count: number;
}

export const portfolioSections: PortfolioSection[] = [
  {
    title: "Web Projects",
    description:
      "Collection of modern, responsive, full-stack web applications.",
    icon: Code,
    href: "/portfolio/web",
    status: "coming-soon",
    count: 0,
  },
  {
    title: "AI/ML Projects",
    description: "Showcase of machine learning models and AI experiments.",
    icon: BrainCircuit,
    href: "/portfolio/ai",
    status: "coming-soon",
    count: 0,
  },
  {
    title: "Experimental Projects",
    description: "Creative, playful, and bleeding-edge tech experiments.",
    icon: Beaker,
    href: "/portfolio/experimental",
    status: "coming-soon",
    count: 0,
  },
  {
    title: "Bootcamp Projects",
    description:
      "Projects created during learning phases and coding bootcamps.",
    icon: GraduationCap,
    href: "/portfolio/bootcamp",
    status: "coming-soon",
    count: 0,
  },
];
