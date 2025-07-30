"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: string[];
}

export const TagFilter = ({ tags }: TagFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");

  const handleClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }
    router.push(`/blog/notes?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`px-3 py-1 text-sm rounded-full border ${
            activeTag === tag
              ? "bg-primary text-white"
              : "text-muted-foreground hover:bg-muted"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
