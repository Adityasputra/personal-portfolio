"use client";

import { Summarizer } from "./components/Summarizer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TextSummarizerPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-10 max-w-3xl mx-auto space-y-8">
      {/* Back Button */}
      <div>
        <Link
          href="/ai-playground"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Playground
        </Link>
      </div>
      {/* Title & Description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Text Summarizer</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Enter a long text and get a concise and informative automatic summary.
          Suitable for articles, essays, news, and more.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Summarizer />
      </motion.div>
    </div>
  );
}
