"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonNav } from "@/components/custom/button";
import { GalleryCard } from "@/components/gallery/GalleryCard";

const galleryCategories = [
  {
    title: "Digital Art",
    description:
      "Digital illustrations, paintings, and visual experiments exploring creativity through technology.",
    href: "/gallery/digital-art",
    icon: require("lucide-react").Palette,
    color: "bg-gradient-to-br from-fuchsia-500 via-purple-500 to-rose-500",
    count: "5+ pieces",
    tags: ["Illustration", "Concept Art", "Character Design"],
    featured: true,
  },
  {
    title: "Design",
    description:
      "UI designs, posters, typography, and visual compositions that blend aesthetics with functionality.",
    href: "/gallery/design",
    icon: require("lucide-react").PenTool,
    color: "bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-400",
    count: "5+ pieces",
    tags: ["UI/UX", "Branding", "Typography"],
    featured: false,
  },
  {
    title: "Photography",
    description:
      "Captured moments, edited compositions, and visual documentation of the world around us.",
    href: "/gallery/photography",
    icon: require("lucide-react").Camera,
    color: "bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-500",
    count: "5+ pieces",
    tags: ["Portrait", "Landscape", "Street"],
    featured: false,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

export default function GalleryPage() {
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
            Creative Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Visual Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of digital art, design work, and
            photography. Each piece represents a journey of creative exploration
            and technical growth.
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
          <h2 className="text-xl font-semibold">Browse Collections</h2>
          <Badge variant="outline" className="text-xs">
            {galleryCategories.length} Categories
          </Badge>
        </div>
      </motion.section>

      {/* Gallery Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
        {galleryCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 2}
          >
            <GalleryCard {...category} />
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={galleryCategories.length + 3}
        className="text-center space-y-6 py-12"
      >
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          New artworks and projects are added regularly. Follow along for the
          latest creative updates.
        </p>
      </motion.section>
    </main>
  );
}
