"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface ButtonNavProps {
  href: string;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function ButtonNav({
  href,
  label = "Back to Home",
  icon = (
    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
  ),
  className,
}: ButtonNavProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn("w-full flex justify-center mb-8", className)}
    >
      <Link href={href}>
        <Button
          variant="ghost"
          className="group hover:bg-background/50 transition-colors"
        >
          {icon}
          {label}
        </Button>
      </Link>
    </motion.div>
  );
}
