import { Book, Brain, Code2, Target } from "lucide-react";

export interface SectionType {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  gradient: string;
}

export const sections: SectionType[] = [
  {
    title: "Notes",
    desc: "Personal notes & reflections.",
    icon: Book,
    href: "/mindscape/notes",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Philosophy",
    desc: "Thoughts & ideas about life.",
    icon: Brain,
    href: "/mindscape/philosophy",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Programming",
    desc: "Code projects & experiments.",
    icon: Code2,
    href: "/mindscape/programming",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Self Development",
    desc: "Growth tips & daily tracking.",
    icon: Target,
    href: "/mindscape/self-development",
    gradient: "from-orange-500 to-red-500",
  },
];
