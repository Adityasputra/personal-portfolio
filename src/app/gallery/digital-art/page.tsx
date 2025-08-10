"use client";

import GalleryComingSoonLayout from "@/components/gallery/GalleryComingSoonLayout";
import { Palette, Sparkles } from "lucide-react";

export default function ArtDigitalPage() {
  return (
    <GalleryComingSoonLayout
      title="Digital Art Gallery"
      description="A collection of digital illustrations, conceptual artworks, and visual experiments exploring imagination through pixels and code."
      expected="November 2025"
      badges={[
        {
          icon: Palette,
          label: "Digital Art",
          variant: "secondary",
        },
        {
          icon: Sparkles,
          label: "Work in Progress",
          variant: "outline",
          color: "yellow-500",
        },
      ]}
    />
  );
}
