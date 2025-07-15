import { GraduationCap, Code, Plane, Sparkles } from "lucide-react";

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "completed" | "in-progress" | "planned" | "future";
  location?: string;
  achievements?: string[];
  skills?: string[];
  gradient?: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    year: "2024",
    title: "Graduated from SMK YPM 3 Taman – Multimedia",
    description:
      "Completed vocational education with a strong foundation in multimedia design and technology.",
    icon: <GraduationCap className="w-5 h-5" />,
    status: "completed",
    location: "Sidoarjo, Indonesia",
    achievements: [
      "Top scores in programming-related subjects",
      "Completed basic web development training",
      "Delivered several multimedia projects",
    ],
    skills: ["Photoshop", "Illustrator", "Video Editing", "2D/3D Animation"],
  },
  {
    id: "2",
    year: "2024",
    title: "Full Stack JavaScript Bootcamp – Hacktiv8",
    description:
      "Intensive learning experience building real-world projects using modern web technologies.",
    icon: <Code className="w-5 h-5" />,
    status: "completed",
    location: "Surabaya, Indonesia",
    achievements: [
      "Completed multiple full-stack projects",
      "Earned Full Stack JavaScript certification",
      "Built end-to-end applications",
    ],
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    id: "3",
    year: "2025",
    title: "Preparing for Computer Science Studies in Germany",
    description:
      "Focused on academic and language preparation to pursue higher education in Germany.",
    icon: <Plane className="w-5 h-5" />,
    status: "in-progress",
    location: "Jakarta → Germany",
    achievements: [
      "Studying German (A1–B2 levels)",
      "Mastering mathematics for CS fundamentals",
      "Building an AI project portfolio",
    ],
    skills: ["German Language", "Mathematics", "AI/ML", "Data Structures"],
  },
  {
    id: "4",
    year: "Future",
    title: "Becoming a Global Tech Innovator",
    description:
      "Fusing creativity, logic, and AI to create sustainable and groundbreaking technologies.",
    icon: <Sparkles className="w-5 h-5" />,
    status: "future",
    location: "Global",
    achievements: [
      "Contributed to open-source AI projects",
      "Built impactful technology products",
      "Spoke at international tech conferences",
    ],
    skills: ["AI/ML", "Leadership", "Innovation", "Global Collaboration"],
  },
];
