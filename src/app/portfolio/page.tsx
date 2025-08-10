"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonNav } from "@/components/custom/button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { portfolioSections } from "@/data/portfolio/portfolioData";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function PortfolioPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <ButtonNav href="/home" />

      {/* Hero */}
      <section className="text-center space-y-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="w-3 h-3 mr-1" />
            Project Showcase
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">My Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore curated collections of my work — from production-ready
            applications to creative experiments and learning projects.
          </p>
        </motion.div>
      </section>

      {/* Section header */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
        className="flex items-center justify-center"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Browse Projects</h2>
          <Badge variant="outline" className="text-xs">
            {portfolioSections.length} Categories
          </Badge>
        </div>
      </motion.section>

      {/* Portfolio Cards */}
      <PortfolioCard portfolioSections={portfolioSections} />

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={portfolioSections.length + 3}
        className="text-center space-y-6 py-12"
      >
        <h2 className="text-2xl font-bold">Let&apos;s Build Something</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Explore the full breadth of my creative and technical journey — from
          concept to execution — across a variety of categories and disciplines.
        </p>
      </motion.section>
    </main>
  );
}
