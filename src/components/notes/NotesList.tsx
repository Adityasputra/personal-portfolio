"use client";

import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { NoteCard } from "./NoteCard";
import { useState } from "react";

interface Note {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

interface NotesListProps {
  notes: Note[];
}

export const NotesList = ({ notes }: NotesListProps) => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const activeTag = searchParams.get("tag")?.toLowerCase();

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesTag = activeTag
      ? note.tags.map((t) => t.toLowerCase()).includes(activeTag)
      : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-6">
      <Input
        placeholder="Cari catatan berdasarkan judul atau tag..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map((note) => (
          <NoteCard key={note.slug} {...note} />
        ))}
        {filteredNotes.length === 0 && (
          <p className="text-muted-foreground">Tidak ada catatan ditemukan.</p>
        )}
      </div>
    </div>
  );
};
