"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TimelineItem } from "@/types/experience";

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "Lulus dari SMK YPM 3 Taman - Multimedia",
    description: "Menamatkan pendidikan dengan dasar desain dan teknologi.",
  },
  {
    year: "2024",
    title: "Ikut Bootcamp Full Stack JavaScript - Hacktiv8",
    description:
      "Belajar web development secara intensif dan membangun proyek nyata.",
  },
  {
    year: "2025",
    title: "Mempersiapkan Studi Computer Science di Jerman",
    description: "Fokus belajar matematika, bahasa Inggris, dan AI.",
  },
  {
    year: "Masa Depan",
    title: "Menjadi Inovator Teknologi",
    description:
      "Menggabungkan seni, logika, dan AI untuk menciptakan solusi berdampak.",
  },
];

export default function Timeline() {
  return (
    <section className="relative px-4 py-16 md:py-24 max-w-3xl mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        My Timeline
      </h2>

      <div className="relative border-l border-border pl-6 space-y-10">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div
              className={cn(
                "absolute -left-[0.625rem] top-2.5 h-3 w-3 rounded-full border-2 transition-all duration-300",
                index === timelineData.length - 1
                  ? "bg-primary border-primary shadow-lg"
                  : "bg-muted border-border group-hover:bg-primary group-hover:border-primary"
              )}
            />

            {/* Content */}
            <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
              <Badge
                variant="secondary"
                className="mb-1 text-xs tracking-wide uppercase"
              >
                {item.year}
              </Badge>
              <h3 className="text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
