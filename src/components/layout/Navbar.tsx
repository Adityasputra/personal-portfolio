"use client";

import Image from "next/image";
import Link from "next/link";
import SuiseiPv from "../../../public/Suisei-pv.jpeg";
import { Great_Vibes } from "next/font/google";
import { useCallback, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const pathName = usePathname();

  const toggleMenu = useCallback(() => setIsOpened((prev) => !prev), []);

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

      <nav className="relative justify-end flex items-center w-full max-w-6xl mx-auto py-2 lg:justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`${greatVibes.className} hover:text-[#FEB143] text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0`}
        >
          Adityasputra
        </Link>

        {/* Hamburger Button */}
        <button
          className={`block focus:outline-none lg:hidden p-2 ${
            isOpened ? "rotate-90" : "rotate-0"
          } transition-transform`}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/project", label: "Project" },
            { href: "/experience", label: "Experience" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${isActive(href)} hover:text-[#FEB143]`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Profile Section */}
        <div className="hidden lg:flex items-center gap-2">
          <Image
            src={SuiseiPv}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </nav>

      {isOpened && (
        <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-[80%] lg:hidden shadow-md rounded-md mt-2 bg-white">
          <div className="flex flex-col items-center gap-4 py-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/project", label: "Project" },
              { href: "/experience", label: "Experience" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href)} hover:text-[#FEB143]`}
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
