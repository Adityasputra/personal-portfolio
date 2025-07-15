"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, MapPin, Trophy, Target } from "lucide-react";
import { timelineData } from "@/data/timeline/timeline";

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500 border-green-500";
    case "in-progress":
      return "bg-blue-500 border-blue-500";
    case "planned":
      return "bg-orange-500 border-orange-500";
    case "future":
      return "bg-purple-500 border-purple-500";
    default:
      return "bg-muted border-border";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return {
        label: "Completed",
        className: "bg-green-500/10 text-green-500 border-green-500/20",
      };
    case "in-progress":
      return {
        label: "In Progress",
        className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      };
    case "planned":
      return {
        label: "Planned",
        className: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      };
    case "future":
      return {
        label: "Future Goal",
        className: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      };
    default:
      return { label: "Unknown", className: "bg-muted text-muted-foreground" };
  }
};

export default function Timeline() {
  return (
    <section className="relative px-4 py-20 ">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>My Journey</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Timeline
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From multimedia student to aspiring tech innovator - here's my
            journey through education, bootcamps, and future aspirations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 hidden md:block" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 top-6 w-5 h-5 items-center justify-center">
                  <motion.div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 transition-all duration-300",
                      getStatusColor(item.status)
                    )}
                    whileHover={{ scale: 1.2 }}
                  />
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    "md:ml-16 relative rounded-2xl border border-border/50 overflow-hidden bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
                    item.gradient
                  )}
                >
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="p-2 rounded-xl bg-primary/10 text-primary"
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="secondary"
                              className="text-xs font-medium"
                            >
                              {item.year}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-xs",
                                getStatusBadge(item.status).className
                              )}
                            >
                              {getStatusBadge(item.status).label}
                            </Badge>
                          </div>
                          {item.location && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">
                            Key Achievements
                          </span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills */}
                    {item.skills && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">
                            Skills & Technologies
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10 hover:bg-primary/10 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>The journey continues... </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
