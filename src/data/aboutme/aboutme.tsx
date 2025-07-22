import { User, Target, Heart, Code, Lightbulb, TrendingUp } from "lucide-react";

export interface ContentDataType {
  title: string;
  content?: string;
  size?: "small" | "medium" | "large" | "extra-large";
  icon?: React.ReactNode;
  quote?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
}

export const contentData: ContentDataType[] = [
  {
    title: "Brief Biography",
    content:
      "I'm from Indonesia — a web developer who thrives on learning. My journey began with curiosity and has grown into a career as a fullstack developer.",
    quote: '"Curiosity was the spark, coding is the journey."',
    size: "extra-large",
    icon: <User className="w-5 h-5" />,
    badge: "🇮🇩 Indonesia",
    stats: [
      { label: "Experience", value: "1+ Years" },
      { label: "Projects", value: "12+" },
      { label: "Technologies", value: "15+" },
    ],
    tags: ["Frontend", "Backend", "Full Stack"],
  },
  {
    title: "Core Values",
    content:
      "Honesty, hard work, and a spirit of sharing are the cornerstones of my life.",
    quote: '"Integrity and kindness above all."',
    size: "medium",
    icon: <Heart className="w-4 h-4" />,
    badge: "💎 Principles",
    tags: ["Integrity", "Empathy", "Growth"],
  },
  {
    title: "Personal Principles",
    content: "Simple in style, yet strong in meaning and action.",
    quote: '"Simplicity is the ultimate sophistication."',
    size: "medium",
    icon: <Target className="w-4 h-4" />,
    badge: "🎯 Focus",
    tags: ["Minimalism", "Quality", "Purpose"],
  },
  {
    title: "Career Goals",
    content:
      "I want to build digital products that are meaningful to myself and become a tangible manifestation of the life principles I believe in.",
    size: "large",
    icon: <TrendingUp className="w-4 h-4" />,
    badge: "🚀 Vision",
    tags: ["Impact", "Innovation", "Scale", "User-Centric"],
  },
  {
    title: "Daily Motivation",
    content:
      "I believe every line of code has the potential to make a positive difference in someone's life.",
    size: "large",
    icon: <Code className="w-4 h-4" />,
    badge: "⚡ Energy",
    stats: [
      { label: "Daily Coding", value: "6+ Hours" },
      { label: "Learning", value: "2+ Hours" },
    ],
    tags: ["Problem Solving", "Clean Code", "Best Practices"],
  },
  {
    title: "Learning Philosophy",
    content:
      "Learning is not just about gaining knowledge — it's about cultivating patience and curiosity.",
    quote: '"Stay curious, stay patient."',
    size: "large",
    icon: <Lightbulb className="w-4 h-4" />,
    badge: "📚 Growth",
    tags: ["Continuous Learning", "Adaptability", "Curiosity"],
  },
];
