"use client";

import MindscapeComingSoonLayout from "@/components/mindscape/MindscapeComingSoonLayout";
import { Book, StickyNote, Lightbulb, PenTool } from "lucide-react";

export default function NotesPage() {
  return (
    <MindscapeComingSoonLayout
      title="Notes"
      description="A personal space for quick thoughts, ideas, and reflections — from daily musings to concept sketches."
      expected="November 2025"
      badges={[
        {
          icon: StickyNote,
          label: "Personal Notes",
          variant: "secondary",
        },
        {
          icon: Book,
          label: "In Progress",
          variant: "outline",
          color: "purple-500",
        },
      ]}
      features={[
        {
          icon: PenTool,
          title: "Quick Ideas",
          desc: "Capture flashes of inspiration and creative sparks before they fade.",
          color: "text-orange-500",
        },
        {
          icon: Lightbulb,
          title: "Concept Drafts",
          desc: "Rough outlines and mind maps for future projects or writings.",
          color: "text-blue-500",
        },
        {
          icon: Book,
          title: "Personal Reflections",
          desc: "Notes on experiences, lessons, and thoughts worth remembering.",
          color: "text-violet-600",
        },
      ]}
    />
  );
}
