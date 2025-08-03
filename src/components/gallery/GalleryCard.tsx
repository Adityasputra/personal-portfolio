import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface GalleryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
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
    <Card className="group transition-all hover:shadow-lg hover:-translate-y-1 h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className={`${color} p-6 text-white relative`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <Icon className="w-8 h-8" />
              {featured && (
                <Badge className="bg-white/20 text-white border-white/30">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{count}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 p-6">
          <div>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs whitespace-nowrap"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Button
              asChild
              variant="outline"
              className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Link href={href}>
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
