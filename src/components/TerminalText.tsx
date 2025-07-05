"use client";

import { useEffect, useState } from "react";

export default function TerminalText({
  text = "> Initiating Digital Portal...",
  speed = 50,
  className = "",
}: {
  text?: string;
  speed?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      className={`font-mono text-sm md:text-base text-green-400 mt-4 ${className}`}
    >
      {displayed}
    </p>
  );
}
