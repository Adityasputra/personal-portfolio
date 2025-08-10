"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { ButtonNav } from "@/components/custom/button";
import { Badge } from "@/components/ui/badge";
import { sections } from "@/data/mindscape/mindscapeData";
import { MindscapeCard } from "@/components/mindscape/MindscapeCard";

export default function MindscapePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <ButtonNav href="/home" />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <Badge variant="secondary" className="mb-2">
          <Sparkles className="w-3 h-3 mr-1" /> Creative Portfolio
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">Mindscape</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A space for notes, deep thoughts, coding projects, and self-growth
          journeys — all in one creative mindscape.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sections.map((section, i) => (
          <MindscapeCard
            key={section.title}
            title={section.title}
            desc={section.desc}
            icon={section.icon}
            href={section.href}
            gradient={section.gradient}
            index={i}
          />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 py-12"
      >
        <h2 className="text-2xl font-bold">Keep Exploring</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Fresh notes, new ideas, and evolving projects are shared here
          regularly. Follow along and grow together in this creative journey.
        </p>
      </motion.section>
    </div>
  );
}
