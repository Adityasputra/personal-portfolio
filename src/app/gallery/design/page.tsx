"use client";

import GalleryComingSoonLayout from "@/components/gallery/GalleryComingSoonLayout";
import { PenTool, Sparkles } from "lucide-react";

export default function DesignPage() {
  return (
    <GalleryComingSoonLayout
      title="Design Gallery"
      description="A showcase of UI/UX designs, branding works, and visual compositions that blend aesthetics with functionality."
      expected="December 2025"
      badges={[
        {
          icon: PenTool,
          label: "Design",
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
