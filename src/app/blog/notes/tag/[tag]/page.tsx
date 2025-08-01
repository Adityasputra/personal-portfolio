import { NotesList } from "@/components/notes/NotesList";
import TagList from "@/components/notes/TagList";
import { getAllNotes, getAllTags } from "@/lib/notes";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type TagPageProps = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Notes tagged with "${tag}"`,
    description: `All notes tagged with ${tag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const notes = getAllNotes().filter((note) => note.tags.includes(tag));

  if (notes.length === 0) {
    return notFound();
  }

  const allTags = getAllTags();

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-4">
        Catatan dengan tag: <span className="text-primary">#{tag}</span>
      </h1>
      <TagList tags={allTags} />
      <NotesList notes={notes} />
    </div>
  );
}
