import { Laptop, Wrench, Sparkles } from "lucide-react";

export interface skillCategoriesType {
  title: string;
  icon: React.ReactNode;
  items: {
    name: string;
    level: string;
    experience: string;
  }[];
}

export const skillCategories = [
  {
    title: "Frontend",
    icon: <Laptop className="w-5 h-5" />,
    items: [
      { name: "React", level: "expert", experience: "3+ years" },
      { name: "Next.js", level: "expert", experience: "2+ years" },
      { name: "TypeScript", level: "advanced", experience: "2+ years" },
      { name: "Tailwind CSS", level: "expert", experience: "3+ years" },
      { name: "Framer Motion", level: "intermediate", experience: "1+ years" },
      { name: "ShadCN UI", level: "advanced", experience: "1+ years" },
    ],
  },
  {
    title: "Backend",
    icon: <Wrench className="w-5 h-5" />,
    items: [
      { name: "Node.js", level: "advanced", experience: "2+ years" },
      { name: "Express.js", level: "advanced", experience: "2+ years" },
      { name: "REST API", level: "expert", experience: "3+ years" },
      { name: "MongoDB", level: "intermediate", experience: "1+ years" },
      { name: "Prisma", level: "intermediate", experience: "1+ years" },
      { name: "tRPC", level: "beginner", experience: "6+ months" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      { name: "Git", level: "expert", experience: "3+ years" },
      { name: "GitHub", level: "expert", experience: "3+ years" },
      { name: "VSCode", level: "expert", experience: "3+ years" },
      { name: "Postman", level: "advanced", experience: "2+ years" },
      { name: "Figma", level: "intermediate", experience: "1+ years" },
      { name: "Vercel", level: "advanced", experience: "2+ years" },
    ],
  },
];
