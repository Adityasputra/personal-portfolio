"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ExperimentalCardProps = {
  title: string;
  slug: string;
  description: string;
  tags?: string[];
  date?: string;
};

export const ExperimentalCard = ({
  title,
  slug,
  description,
  tags = [],
  date,
}: ExperimentalCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="flex flex-col justify-between h-full">
        <CardContent className="p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            {date && <p className="text-xs text-muted-foreground">{date}</p>}
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <Link href={`/lab/experimental-code/${slug}`}>
              <Button variant="default" size="sm">
                Try Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            {/* Tombol opsional jika nanti ingin link ke kode */}
            {/* <Link href="https://github.com/..." target="_blank">
              <Button variant="outline" size="sm">
                View Code
              </Button>
            </Link> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
