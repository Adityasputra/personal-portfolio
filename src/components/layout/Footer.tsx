import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export const currentYear: number = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link
            href="/"
            className={`${greatVibes.className} hover:text-[#FEB143] text-2xl font-semibold hidden lg:block`}
          >
            Adityasputra
          </Link>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            © Copyright {currentYear}
          </p>

          <div className="flex -mx-2">
            <a
              href="https://github.com/Adityasputra"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-[#FEB143] "
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.instagram.com/adityasputra_cv/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-[#FEB143]"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="mailto:aditsputra.cv@gmail.com"
              className="mx-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-[#FEB143] "
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-saputra-653133292/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-[#FEB143] "
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
