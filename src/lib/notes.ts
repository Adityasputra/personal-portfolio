import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface NoteData {
  title: string;
  date: string;
  tags: string[];
}

export interface Note extends NoteData {
  slug: string;
  content: string;
}

const notesDirectory = path.join(process.cwd(), "content/notes");

export function getAllNotes(): Note[] {
  if (!fs.existsSync(notesDirectory)) return [];

  const filenames = fs.readdirSync(notesDirectory);

  return filenames
    .filter((f) => f.endsWith(".mdx"))
    .map((filename): Note => {
      const filePath = path.join(notesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = filename.replace(/\.mdx?$/, "");

      return {
        slug,
        content,
        ...(data as NoteData),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNoteBySlug(slug: string): Note | null {
  const fullPath = path.join(notesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    content,
    ...(data as NoteData),
  };
}
export function getAllTags(): string[] {
  const notes = getAllNotes();
  const tags = new Set<string>();
  notes.forEach((note) => {
    note.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAdjacentNotes(slug: string): {
  prev: Note | null;
  next: Note | null;
} {
  const notes = getAllNotes();
  const index = notes.findIndex((note) => note.slug === slug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: notes[index + 1] || null,
    next: notes[index - 1] || null,
  };
}
