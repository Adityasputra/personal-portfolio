import { getNoteBySlug, getAllNotes, getAdjacentNotes } from "@/lib/notes";
import { mdxComponents } from "@/components/mdx-components";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const note = getNoteBySlug(params.slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.content.slice(0, 120),
  };
}

export default function NotePage({ params }: PageProps) {
  const note = getNoteBySlug(params.slug);
  if (!note) return notFound();

  const { prev, next } = getAdjacentNotes(params.slug);

  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/blog/notes"
        className="mb-6 inline-block text-sm text-primary hover:underline"
      >
        ← Kembali ke Notes
      </Link>

      <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
      <p className="text-sm text-muted-foreground mb-2">
        {new Date(note.date).toLocaleDateString()}
      </p>

      <div className="flex gap-2 mb-6 flex-wrap">
        {note.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <MDXRemote source={note.content} components={mdxComponents} />

      <hr className="my-10" />

      <div className="flex justify-between text-sm text-primary">
        {prev ? (
          <Link href={`/blog/notes/${prev.slug}`} className="hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/blog/notes/${next.slug}`} className="hover:underline">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
