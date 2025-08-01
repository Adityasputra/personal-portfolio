"use client";

import { PlaygroundCard } from "@/components/ai-playground/PlaygroundCard";
import { playgroundTools } from "@/data/playgroundTools";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function PlaygroundPage() {
  const hasTools = playgroundTools.length > 0;

  return (
    <div className="min-h-screen p-6 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <Link
            href="/home"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="p-3 rounded-xl bg-primary/10 text-primary shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">AI Playground</h1>
            <p className="text-muted-foreground">
              Experiment with cutting-edge AI tools and models
            </p>
          </div>
        </motion.header>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">{playgroundTools.length} AI Tools</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/20">
            <span className="text-sm">Multiple Categories</span>
          </div>
        </motion.section>

        {/* Main Content */}
        {!hasTools ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <div className="p-4 rounded-full bg-muted/50 mb-4">
              <Sparkles className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No AI Tools Available</h3>
            <p className="text-muted-foreground max-w-md">
              We&apos;re currently working on adding new AI tools to the playground.
              Check back soon!
            </p>
          </motion.div>
        ) : (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {playgroundTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <PlaygroundCard {...tool} />
              </motion.div>
            ))}
          </motion.section>
        )}
      </div>
    </div>
  );
}
