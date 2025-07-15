import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Adityasputra",
    icon: <Github className="w-5 h-5" />,
    color: "hover:bg-gray-900 hover:text-white",
    hoverColor: "group-hover:text-gray-900 dark:group-hover:text-gray-100",
    description: "View my code",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-saputra-653133292/",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:bg-blue-600 hover:text-white",
    hoverColor: "group-hover:text-blue-600",
    description: "Connect with me",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adityasputra_cv/",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:bg-pink-600 hover:text-white",
    hoverColor: "group-hover:text-pink-600",
    description: "Follow my journey",
  },
  {
    name: "Email",
    href: "mailto:aditsputra.cv@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:bg-red-600 hover:text-white",
    hoverColor: "group-hover:text-red-600",
    description: "Send me a message",
  },
];
