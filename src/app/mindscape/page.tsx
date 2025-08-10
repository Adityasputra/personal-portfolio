"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ButtonNav } from "@/components/custom/button";
import { Badge } from "@/components/ui/badge";
import { sections } from "@/data/mindscape/mindscapeData";

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
        {sections.map(({ title, desc, icon: Icon, href, gradient }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link href={href}>
              <Card className="group overflow-hidden border hover:shadow-md hover:-translate-y-1 transition-all">
                <div className={cn("h-1 w-full bg-gradient-to-r", gradient)} />
                <CardHeader className="flex flex-col items-center text-center pt-6">
                  <div
                    className={cn(
                      "p-3 rounded-full bg-gradient-to-br text-white mb-4",
                      gradient
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center text-sm text-primary group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
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
