"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Starfield from "./Starfield";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GridBackground({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden transition-colors duration-300",
        "bg-background text-foreground",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>

      {/* Grid animasi */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-[3] pointer-events-none"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: isDark
            ? `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `
            : `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          filter: "blur(0.3px)",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1), rgba(0,0,0,0.1))",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
