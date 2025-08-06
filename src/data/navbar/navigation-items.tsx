import {
  Home,
  Briefcase,
  BookOpen,
  Image as ImageIcon,
  Code,
  Globe,
  Star,
  BrainCircuit,
  FlaskConical,
  ListMusic,
} from "lucide-react";

export interface navigationType {
  title: string;
  icon: React.ReactNode;
  submenu: {
    title: string;
    href: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
  }[];
}

export const navigationItems: navigationType[] = [
  {
    title: "Home",
    icon: <Home className="w-4 h-4" />,
    submenu: [
      {
        title: "AI Playground",
        href: "/ai-playground",
        description: "Explore my experiments in AI and machine learning",
        icon: <BrainCircuit className="w-4 h-4" />,
      },
      {
        title: "Experimental Code",
        href: "/lab/experimental-code",
        description: "Creative coding experiments and tech stack showcases",
        icon: <FlaskConical className="w-4 h-4" />,
      },
      {
        title: "Playlist",
        href: "/playlist",
        description: "Highlights of my journey—projects, music, and more",
        icon: <ListMusic className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Portfolio",
    icon: <Briefcase className="w-4 h-4" />,
    submenu: [
      {
        title: "Web Projects",
        href: "/portfolio/web",
        description: "Modern websites, landing pages, and web platforms",
        icon: <Globe className="w-4 h-4" />,
        badge: "15+",
      },
      {
        title: "AI / ML Projects",
        href: "/portfolio/ai",
        description:
          "Artificial Intelligence and Machine Learning implementations",
        icon: <Star className="w-4 h-4" />,
        badge: "New",
      },
      {
        title: "Bootcamp Projects",
        href: "/portfolio/bootcamp",
        description: "Project deliverables from training programs",
        icon: <Code className="w-4 h-4" />,
        badge: "8+",
      },
      {
        title: "Experimental Projects",
        href: "/portfolio/experimental",
        description: "Concepts, prototypes, and innovative ideas",
        icon: <BookOpen className="w-4 h-4" />,
        badge: "Beta",
      },
    ],
  },
  {
    title: "Mindscape",
    icon: <BookOpen className="w-4 h-4" />,
    submenu: [
      {
        title: "Notes",
        href: "/Mindscape/notes",
        description: "Self-study notes across topics",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        title: "Programming",
        href: "/Mindscape/programming",
        description: "Tips, guides and development insights",
        icon: <Code className="w-4 h-4" />,
      },
      {
        title: "Philosophy and Logic",
        href: "/Mindscape/philosophy",
        description: "Philosophy, logic, and cognitive exploration",
        icon: <Star className="w-4 h-4" />,
      },
      {
        title: "Self-Development",
        href: "/Mindscape/self-development",
        description: "Personal growth and self-reflection",
        icon: <Home className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Gallery",
    icon: <ImageIcon className="w-4 h-4" />,
    submenu: [
      {
        title: "Digital Art",
        href: "/gallery/digital-art",
        description: "Original digital artwork and illustrations",
        icon: <ImageIcon className="w-4 h-4" />,
      },
      {
        title: "Design",
        href: "/gallery/design",
        description: "Posters, layouts, and graphic designs",
        icon: <Briefcase className="w-4 h-4" />,
      },
      {
        title: "Photography",
        href: "/gallery/photography",
        description: "Photo collections and visual stories",
        icon: <Star className="w-4 h-4" />,
      },
    ],
  },
];
