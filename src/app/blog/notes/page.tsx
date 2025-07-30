import { getAllNotes, getAllTags } from "@/lib/notes";
import NotesView from "./NotesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Aditya Saputra",
  description:
    "Kumpulan catatan, pemikiran, dan pelajaran pribadi tentang berbagai topik.",
  openGraph: {
    title: "Notes | Aditya Saputra",
    description:
      "Kumpulan catatan, pemikiran, dan pelajaran pribadi tentang berbagai topik.",
    url: "https://gamevers.vercel.app/blog/notes",
    siteName: "Aditya Saputra's Digital Realm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes | Aditya Saputra",
    description:
      "Kumpulan catatan, pemikiran, dan pelajaran pribadi tentang berbagai topik.",
  },
};

export default function NotesPage() {
  const notes = getAllNotes();
  const tags = getAllTags();

  return <NotesView allNotes={notes} tags={tags} />;
}
