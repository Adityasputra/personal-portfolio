import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  User,
  Target,
  Heart,
  Code,
  Lightbulb,
  TrendingUp,
  Quote,
  Calendar,
  MapPin,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface ContentData {
  title: string;
  content?: string;
  size?: "small" | "medium" | "large" | "extra-large";
  icon?: React.ReactNode;
  quote?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
}

const contentData: ContentData[] = [
  {
    title: "Brief Biography",
    content:
      "I'm from Indonesia — a web developer who thrives on learning. My journey began with curiosity and has grown into a career as a fullstack developer.",
    quote: '"Curiosity was the spark, coding is the journey."',
    size: "extra-large",
    icon: <User className="w-5 h-5" />,
    badge: "🇮🇩 Indonesia",
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Projects", value: "50+" },
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
      "To build meaningful digital products that make a positive impact and are used by many.",
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

// Helper function to get grid class based on content size
const getGridClass = (size: string) => {
  switch (size) {
    case "small":
      return "col-span-1 row-span-1";
    case "medium":
      return "col-span-2 row-span-2";
    case "large":
      return "col-span-3 row-span-2";
    case "extra-large":
      return "col-span-4 row-span-3";
    default:
      return "col-span-2 row-span-2";
  }
};

export default function AboutMe() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-20 bg-background text-foreground overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 opacity-20 pointer-events-none z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto space-y-16 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>Get to know me</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My journey as a developer, my values, and the vision I&apos;m
            working toward
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>Active since 2021</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Jakarta, Indonesia</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <Coffee className="w-4 h-4 text-primary" />
              <span>Coffee Enthusiast</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop Masonry Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 auto-rows-[120px] gap-4">
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                  getGridClass(item.size || "medium")
                )}
              >
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full p-5 flex flex-col">
                  {/* Header with Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary backdrop-blur-sm"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground/90 leading-relaxed flex-1 mb-3">
                    {item.content}
                  </p>

                  {/* Stats */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {item.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          whileHover={{ y: -2 }}
                          className="text-center py-2 rounded-lg bg-muted/50 border border-border/20 hover:bg-muted/70 transition-colors"
                        >
                          <div className="text-sm font-semibold text-primary">
                            {stat.value}
                          </div>

                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="default"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  {item.quote && (
                    <div className="flex items-start gap-2 mt-auto pt-3 border-t border-border/10">
                      <Quote className="w-3 h-3 text-primary/50 mt-0.5 flex-shrink-0" />
                      <p className="text-xs italic text-primary/70">
                        {item.quote}
                      </p>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Auto-fit Grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-max">
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                  (item.size === "extra-large" || item.size === "large") &&
                    "md:col-span-2"
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                <div className="relative p-5">
                  {/* Header with Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary backdrop-blur-sm"
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    {item.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 font-medium border border-primary/10">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-muted-foreground/90 leading-relaxed mb-3">
                    {item.content}
                  </p>

                  {/* Stats */}
                  {item.stats && (
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {item.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          whileHover={{ y: -2 }}
                          className="text-center py-2 rounded-lg bg-muted/50 border border-border/20 hover:bg-muted/70 transition-colors"
                        >
                          <div className="text-sm font-semibold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  {item.quote && (
                    <div className="flex items-start gap-2 pt-3 border-t border-border/10">
                      <Quote className="w-3 h-3 text-primary/50 mt-0.5 flex-shrink-0" />
                      <p className="text-xs italic text-primary/70">
                        {item.quote}
                      </p>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/15 transition-colors">
            <span>✨</span>
            <span>
              Let&apos;s collaborate and create something impactful together
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary bg-primary/5 text-primary hover:bg-primary hover:text-background transition-all shadow-sm hover:shadow-primary/20"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 text-foreground hover:bg-muted transition-all shadow-sm hover:shadow-muted-foreground/10 border border-border/30"
            >
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 text-foreground hover:bg-muted transition-all shadow-sm hover:shadow-muted-foreground/10 border border-border/30"
            >
              Gallery
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
