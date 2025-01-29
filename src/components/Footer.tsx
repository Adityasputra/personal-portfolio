import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1224] text-[#F8F7F3] text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Aditya Saputra. All Rights Reserved.
      </p>
      <div className="flex justify-center items-center gap-x-4 mt-4">
        <a
          href="https://github.com/Adityasputra"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-[#FEB143] transition-colors duration-300 ease-in-out"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.instagram.com/adityasputra_cv/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-400 hover:text-[#FEB143] transition-colors duration-300 ease-in-out"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="mailto:aditsputra.cv@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-[#FEB143] transition-colors duration-300 ease-in-out"
        >
          <FaEnvelope size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/aditya-saputra-653133292/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-[#FEB143] transition-colors duration-300 ease-in-out"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
