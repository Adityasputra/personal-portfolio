"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sparkles, Star, TrendingUp, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skillsetandtool/skillset-and-tools";

const getLevelColor = (level: string) => {
  switch (level) {
    case "expert":
      return "text-green-600 bg-green-100 border-green-200";
    case "advanced":
      return "text-blue-600 bg-blue-100 border-blue-200";
    case "intermediate":
      return "text-orange-600 bg-orange-100 border-orange-200";
    case "beginner":
      return "text-red-600 bg-red-100 border-red-200";
    default:
      return "text-muted-foreground bg-muted/10 border-border/30";
  }
};

const getLevelIcon = (level: string) => {
  switch (level) {
    case "expert":
      return <Star className="w-3 h-3 fill-current" />;
    case "advanced":
      return <TrendingUp className="w-3 h-3" />;
    case "intermediate":
      return <Clock className="w-3 h-3" />;
    case "beginner":
      return <Users className="w-3 h-3" />;
    default:
      return null;
  }
};

export default function SkillsetAndTools() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-20 text-foreground overflow-hidden">
      <div className="relative max-w-7xl mx-auto space-y-20 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>My Technical Arsenal</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            Skillset & Tools
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to craft modern, scalable web
            applications
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <Star className="w-4 h-4 text-primary" />
              <span>15+ Technologies</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>1+ Years Experience</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 text-sm border border-border/50 hover:bg-muted transition-colors"
            >
              <Users className="w-4 h-4 text-primary" />
              <span>Full Stack</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border/30 bg-muted/40 backdrop-blur p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.items.length} skills
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <div className="flex justify-between items-center p-2 rounded-lg bg-background border border-border/20 hover:bg-muted/20 transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              "w-6 h-6 flex items-center justify-center rounded-full",
                              getLevelColor(item.level)
                            )}
                          >
                            {getLevelIcon(item.level)}
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {item.name}
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={cn(
                            "text-xs font-medium",
                            getLevelColor(item.level)
                          )}
                        >
                          {item.level}
                        </Badge>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <p>{item.name}</p>
                        <p className="text-muted-foreground">
                          {item.level} • {item.experience}
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
