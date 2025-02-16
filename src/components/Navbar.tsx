"use client";

import { formatDate } from "@/lib/dateFormated";
import { AlignJustify, Sparkles } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const isActive = useMemo(
    () => (path: string) =>
      pathName === path ? "text-[#FEB143]" : "text-[#0e1424]",
    [pathName]
  );

  return (
    <>
      <div className="mt-4 flex w-full items-center">
        <span className="border-b w-full border-[#b9a87d]"></span>
      </div>

      <nav className="flex items-center justify-end lg:justify-between w-full mx-auto py-2 max-w-6xl">
        {/* Logo */}
        <Link
          href="/"
          className={`${greatVibes.className} hover:text-[#FEB143] text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0 `}
        >
          Adityasputra
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`block lg:hidden p-2 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          <AlignJustify />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/experiences", label: "Experiences" },
            { href: "/blogs", label: "Blogs" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${isActive(href)} hover:text-[#FEB143] transition`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Date */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
            {formatDate(new Date())}
            <Sparkles strokeWidth={1.5} className="h-5 w-5 text-[#FEB143]" />
          </span>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-[80%] shadow-lg rounded-md bg-gray-100">
          <div className="flex flex-col items-center gap-4 py-4">
            {[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/experiences", label: "Experiences" },
              { href: "/blogs", label: "Blogs" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href)} hover:text-[#FEB143] transition`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex w-full items-center">
        <span className="border-b w-full border-[#b9a87d]"></span>
      </div>
    </>
  );
}
