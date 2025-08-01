"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PlaygroundCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  tags?: string[];
  color?: string;
  available?: boolean;
}

export function PlaygroundCard({
  title,
  description,
  icon,
  href,
  tags = [],
  color = "from-primary to-secondary",
  available = true,
}: PlaygroundCardProps) {
  return (
    <motion.div whileHover={{ scale: available ? 1.03 : 1 }} className="h-full">
      <div
        className={`h-full border border-border/30 rounded-xl bg-muted/20 transition-all overflow-hidden shadow-sm 
        ${
          available
            ? "hover:bg-muted/50 hover:shadow-md"
            : "opacity-60 cursor-not-allowed"
        }`}
      >
        {available ? (
          <Link href={href}>
            <CardContent />
          </Link>
        ) : (
          <div>
            <CardContent />
          </div>
        )}
      </div>
    </motion.div>
  );

  function CardContent() {
    return (
      <div className="p-6 h-full min-h-[220px] flex flex-col justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white shadow-md`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {!available && (
              <Badge
                variant="outline"
                className="mt-2 text-xs border-muted-foreground/40 text-muted-foreground"
              >
                Coming Soon
              </Badge>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end mt-6">
          <div className="flex flex-wrap gap-2 max-w-[85%]">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
        </div>
      </div>
    );
  }
}
