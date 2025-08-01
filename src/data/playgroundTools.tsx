import { Bot, FileText, Sparkles } from "lucide-react";

export const playgroundTools = [
  {
    title: "Text Summarizer",
    description: "Summarize long texts into concise and informative summaries.",
    icon: <FileText />,
    href: "/ai/playground/tools/text-summarizer",
    color: "from-purple-500 to-pink-500",
    available: true,
  },
  {
    title: "Prompt Tester (Coming Soon)",
    description: "Test AI prompts and instantly see the output.",
    icon: <Sparkles />,
    href: "#",
    color: "from-teal-500 to-emerald-500",
    available: false,
  },
  {
    title: "Chatbot Builder (Coming Soon)",
    description: "Build simple AI chatbots directly from your browser.",
    icon: <Bot />,
    href: "#",
    color: "from-orange-500 to-red-500",
    available: false,
  },
];
