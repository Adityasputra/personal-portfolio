"use client";

import { NotesList } from "@/components/notes/NotesList";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

interface NotesViewProps {
  allNotes: {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    content: string;
  }[];
  tags: string[];
}

export default function NotesView({ allNotes, tags }: NotesViewProps) {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredNotes = allNotes.filter((note) => {
    const matchSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());
    const matchTag = selectedTag === "all" || note.tags.includes(selectedTag);
    return matchSearch && matchTag;
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 max-w-5xl mx-auto px-4 md:px-8"
    >
      <div className="space-y-2 p-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Notes
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Semua catatan pribadi tentang pembelajaran, pemikiran, dan ide-ide
          acak.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <Input
          type="search"
          placeholder="Cari catatan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <Tabs
          defaultValue="all"
          value={selectedTag}
          onValueChange={setSelectedTag}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            {tags.map((tag) => (
              <TabsTrigger key={tag} value={tag}>
                {tag}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Tidak ada catatan yang cocok.
        </p>
      ) : (
        <NotesList notes={filteredNotes} />
      )}
    </motion.section>
  );
}
