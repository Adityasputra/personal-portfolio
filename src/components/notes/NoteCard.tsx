import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Link from "next/link";

interface NoteCardProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

export const NoteCard = ({
  slug,
  title,
  date,
  tags,
  content,
}: NoteCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/blog/notes/${slug}`}>
        <Card className="w-full h-full border border-muted-foreground/20 shadow-sm hover:bg-muted/30 transition-colors">
          <CardContent className="p-4 space-y-2">
            <div className="text-sm text-muted-foreground">
              {format(new Date(date), "dd MMM yyyy")}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm line-clamp-3 text-muted-foreground">
              {content.slice(0, 100)}...
            </p>
            <div className="flex flex-wrap gap-1 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
