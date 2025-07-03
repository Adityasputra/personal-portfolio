"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ClsxTest() {
  const [active, setActive] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Tes `clsx`</h1>

      <button
        onClick={() => setActive(!active)}
        className={clsx(
          "px-6 py-3 rounded text-white transition",
          active ? "bg-green-600" : "bg-gray-500"
        )}
      >
        {active ? "Aktif" : "Tidak Aktif"}
      </button>

      <p
        className={clsx(
          "text-lg font-medium",
          active ? "text-green-600" : "text-gray-500"
        )}
      >
        Status: {active ? "ON" : "OFF"}
      </p>
    </div>
  );
}
