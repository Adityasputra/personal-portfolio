import Navbar from "@/components/Navbar";
import TechSection from "@/components/ui/TechSection";
import Image from "next/image";
import data from "../data/projects.json";
import Card from "@/components/ui/Card";

import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const filteredData = data.filter((project) => project.star === true);

  return (
    <>
      <header className="container mx-auto lg:absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </header>

      <main className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-center text-center gap-4 px-4 lg:items-start lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-[#FEB143]">
            Building the Future with Code
          </h1>
          <blockquote className="text-lg font-light leading-relaxed">
            Jadilah kreatif dalam setiap langkah, terus belajar, dan wujudkan
            ide-ide melalui kode yang sederhana namun berdampak besar
          </blockquote>
          <p className="text-sm italic font-light text-gray-600">
            @Adityasputra
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/Avatar.jpeg"
              alt="Aditya Saputra's Avatar Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </main>

      <section className="bg-[#0e1224] py-4 min-h-screen w-full mx-auto">
        <div className="text-[#F8F7F3] p-10 mx-5 lg:mx-20">
          <h2 className="text-4xl lg:text-5xl">Hello!</h2>
          <h1 className="text-5xl lg:text-6xl mt-4">I'm Aditya Saputra</h1>
          <p className="mt-6">
            I'm a technology enthusiast passionate about programming, especially
            in web development. My journey began in high school and continued
            through completing the Hacktiv8 bootcamp as a full-stack JavaScript
            developer. I'm always learning new technologies to stay ahead and
            improve my skills.
          </p>
        </div>

        <div className="text-[#F8F7F3] p-10 mx-5 lg:mx-20">
          <h2 className="text-xl lg:text-2xl">Technology that I use:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <TechSection
              techSection={{
                title: "Language",
                technologies: ["Javascript", "Typescript", "Go"],
              }}
            />
            <TechSection
              techSection={{
                title: "Frontend & Mobile",
                technologies: [
                  "React",
                  "NextJs",
                  "Tailwind",
                  "Redux",
                  "Vite",
                  "React Native",
                ],
              }}
            />
            <TechSection
              techSection={{
                title: "Backend & Database",
                technologies: ["ExpressJs", "NodeJs", "PostgreSQL", "MongoDB"],
              }}
            />
            <TechSection
              techSection={{
                title: "Cloud & DevOps",
                technologies: ["AWS", "Docker", "Git/Github"],
              }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="text-[#0e1224] p-10 mx-5 lg:mx-20">
          <h2 className="text-4xl lg:text-5xl">Projects</h2>
          <h1 className="text-5xl lg:text-6xl mt-4">Featured Projects</h1>
          <p className="mt-6">
            Here are some of my featured projects that I have worked on. These
            projects are built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 mx-5 lg:mx-20">
          {filteredData.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center pb-10">
          <Link
            href="/projects"
            className="inline-block mx-5 lg:mx-20 py-2 px-4 rounded-md text-[#F8F7F3] bg-gradient-to-r from-yellow-400 to-yellow-600 hover:bg-[#FEB143] hover:from-[#FEB143] hover:to-[#FEB143] transition-colors duration-300 ease-in-out"
          >
            See More
          </Link>
        </div>
      </section>

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
    </>
  );
}
