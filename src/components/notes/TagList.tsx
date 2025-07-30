"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  const pathname = usePathname();
  const activeTag = pathname.split("/").pop();

  return (
    <div className="flex flex-wrap gap-2 py-4">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog/notes/tag/${tag}`}
          className={clsx(
            "px-3 py-1 rounded-full text-sm border transition-all",
            activeTag === tag
              ? "bg-primary text-white border-primary"
              : "text-muted-foreground border-muted hover:border-foreground"
          )}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
