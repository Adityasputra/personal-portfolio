"use client";

import { useEffect, useState } from "react";

export default function DarkModeTest() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-colors bg-white text-black dark:bg-zinc-900 dark:text-white">
      <h1 className="text-3xl font-bold">Dark Mode Test</h1>
      <p className="mb-4">Toggle untuk melihat apakah dark mode berjalan.</p>
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 bg-zinc-800 text-white dark:bg-white dark:text-black rounded"
      >
        Toggle Mode
      </button>
    </div>
  );
}
