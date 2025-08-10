"use client";

import GalleryComingSoonLayout from "@/components/gallery/GalleryComingSoonLayout";
import { Camera, Sparkles } from "lucide-react";

export default function PhotographyPage() {
  return (
    <GalleryComingSoonLayout
      title="Photography Gallery"
      description="A collection of captured moments, edited visuals, and beautiful scenery from real-life inspiration."
      expected="December 2025"
      badges={[
        {
          icon: Camera,
          label: "Photography",
          variant: "secondary",
        },
        {
          icon: Sparkles,
          label: "Coming Soon",
          variant: "outline",
          color: "yellow-500",
        },
      ]}
    />
  );
}
