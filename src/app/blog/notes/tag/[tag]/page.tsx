import { NotesList } from "@/components/notes/NotesList";
import TagList from "@/components/notes/TagList";
import { getAllNotes, getAllTags } from "@/lib/notes";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: { tag: string };
}

export default function TagPage({ params }: TagPageProps) {
  const allNotes = getAllNotes();
  const tags = getAllTags();

  const filteredNotes = allNotes.filter((note) =>
    note.tags.includes(params.tag)
  );

  if (filteredNotes.length === 0) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">
        Catatan dengan tag: <span className="text-primary">#{params.tag}</span>
      </h1>
      <TagList tags={tags} />
      <NotesList notes={filteredNotes} />
    </div>
  );
}
