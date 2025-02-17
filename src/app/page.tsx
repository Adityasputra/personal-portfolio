"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import dynamic from "next/dynamic";

import { Project } from "@/types";
import TechSection from "@/components/ui/TechSection";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Card = dynamic(() => import("@/components/ui/Card"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const {
    data: projects = [],
    error,
    isLoading,
  } = useSWR<Project[]>("/api/projects", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
  });

  if (error)
    return <p className="text-red-500 text-center">Failed to load projects.</p>;

  const filteredData = (projects ?? []).filter((project) => project.star);

  const techSections = [
    { title: "Language", technologies: ["Javascript", "Typescript", "Go"] },
    {
      title: "Frontend & Mobile",
      technologies: [
        "React",
        "NextJs",
        "Tailwind",
        "Redux",
        "Vite",
        "React Native",
      ],
    },
    {
      title: "Backend & Database",
      technologies: ["ExpressJs", "NodeJs", "PostgreSQL", "MongoDB"],
    },
    { title: "Cloud & DevOps", technologies: ["AWS", "Docker"] },
  ];

  return (
    <>
      <header className="container mx-auto lg:absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </header>

      <main className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-8 mt-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center text-center gap-4 px-4 lg:items-start lg:text-left"
        >
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
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/avatar.webp"
              alt="Aditya Saputra's Avatar Profile"
              width={400}
              height={400}
              priority={false}
              loading="lazy"
              className="object-center object-cover"
            />
          </div>
        </motion.div>
      </main>

      <section className="bg-[#1A1A1A] py-4 min-h-screen w-full mx-auto">
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
            {techSections.map((section) => (
              <TechSection key={section.title} techSection={section} />
            ))}
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

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-10 mx-5 lg:mx-20">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md h-64 animate-pulse"
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 lg:p-10 mx-5 lg:mx-20">
            {filteredData.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="text-center pb-10">
          <Link
            href="/project"
            className="inline-block mx-5 lg:mx-20 py-2 px-4 rounded-md text-[#F8F7F3] bg-gradient-to-r from-yellow-400 to-yellow-600 hover:bg-[#FEB143] hover:from-[#FEB143] hover:to-[#FEB143] transition-colors duration-300 ease-in-out"
          >
            See More
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
