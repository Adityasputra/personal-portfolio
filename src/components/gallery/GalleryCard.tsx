import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GalleryCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
  count: string;
  tags: string[];
  featured?: boolean;
}

export function GalleryCard({
  title,
  description,
  href,
  icon: Icon,
  color,
  count,
  tags,
  featured = false,
}: GalleryCardProps) {
  return (
    <Card className="group h-full bg-white transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-[#18181b]">
      <CardContent className="flex h-full flex-col p-0">
        {/* Header */}
        <div
          className={`${color} relative p-6 text-white dark:bg-gradient-to-br dark:from-[#23272f] dark:to-[#18181b]`}
        >
          <div className="absolute inset-0 bg-black/10 dark:bg-black/60" />

          <div className="relative z-10">
            <div className="mb-3 flex items-center justify-between">
              <Icon className="h-8 w-8" />

              {featured && (
                <Badge className="bg-white/20 text-white border-white/30 dark:bg-primary dark:text-primary-foreground dark:border-primary/40">
                  Featured
                </Badge>
              )}
            </div>

            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <p className="text-sm text-white/90 dark:text-white/80">{count}</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="mb-3 line-clamp-3 text-sm text-muted-foreground dark:text-gray-300">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="whitespace-nowrap text-xs dark:bg-[#23272f] dark:text-gray-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              className="w-full transition-colors hover:bg-primary hover:text-primary-foreground dark:border-primary dark:bg-[#23272f] dark:text-gray-200 dark:hover:bg-primary dark:hover:text-primary-foreground"
            >
              <Link href={href}>
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
