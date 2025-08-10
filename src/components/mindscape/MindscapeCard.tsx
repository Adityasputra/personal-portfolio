"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MindscapeCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  gradient: string;
  index: number;
}

export function MindscapeCard({
  title,
  desc,
  icon: Icon,
  href,
  gradient,
  index,
}: MindscapeCardProps) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={href}>
        <Card className="group overflow-hidden border hover:shadow-md hover:-translate-y-1 transition-all">
          {/* Top gradient bar */}
          <div className={cn("h-1 w-full bg-gradient-to-r", gradient)} />

          <CardHeader className="flex flex-col items-center text-center pt-6">
            {/* Icon with gradient background */}
            <div
              className={cn(
                "p-3 rounded-full bg-gradient-to-br text-white mb-4",
                gradient
              )}
            >
              <Icon className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center gap-1 items-center text-sm text-primary group-hover:gap-2 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
