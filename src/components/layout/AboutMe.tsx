import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Quote,
  Calendar,
  MapPin,
  Coffee,
  ArrowRight,
  Sparkles,
  User,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { contentData } from "@/data/aboutme/aboutme";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-20 text-foreground overflow-hidden">
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
            <User className="w-4 h-4" />
            <span>Get to know me</span>
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
              <span>Active since 2022</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Sidoarjo, Indonesia</span>
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
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                  getGridClass(item.size || "medium")
                )}
              >
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
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/30 bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                  (item.size === "extra-large" || item.size === "large") &&
                    "md:col-span-2"
                )}
              >
                <div className="relative p-5">
                  {/* Header with Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary backdrop-blur-sm shrink-0"
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground/90 group-hover:text-primary transition-colors truncate">
                        {item.title}
                      </h3>
                    </div>

                    {item.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 font-medium whitespace-nowrap">
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
                          className="text-center py-2 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
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
                          className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 hover:bg-primary/10 hover:text-primary transition-colors"
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span>
              <Sparkles className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            </span>
            <span>
              Keep growing, keep building — greatness is crafted, not gifted.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/portfolio")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary bg-primary/5 text-primary hover:bg-primary hover:text-background transition-all shadow-sm hover:shadow-primary/20"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/Aditya-Saputra-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/70 text-foreground hover:bg-muted transition-all shadow-sm hover:shadow-muted-foreground/10 border border-border/30 cursor-pointer"
            >
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/gallery")}
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
