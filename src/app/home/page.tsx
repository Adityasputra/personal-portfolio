"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TechSection from "@/components/ui/TechSection";

import { NavigationsMenu } from "@/components/NavigationMenu";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Page1() {
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
      <NavigationsMenu />

      <main className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-8 mt-8">
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
              priority
              className="object-center object-cover"
            />
          </div>
        </motion.div>
      </main>

      <section className="bg-[#1A1A1A] py-4 min-h-screen w-full mx-auto">
        <div className="text-[#F8F7F3] p-4 lg:mx-20">
          <h2 className="text-4xl lg:text-5xl">Hello!</h2>
          <h1 className="text-5xl lg:text-6xl mt-4">I&apos;m Aditya Saputra</h1>
          <p className="mt-6">
            I&apos;m a technology enthusiast passionate about programming,
            especially in web development. My journey began in high school and
            continued through completing the Hacktiv8 bootcamp as a full-stack
            JavaScript developer. I&apos;m always learning new technologies to
            stay ahead and improve my skills.
          </p>
        </div>

        <div className="text-[#F8F7F3] p-4 lg:mx-20">
          <h2 className="text-xl lg:text-2xl">Technology that I use:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {techSections.map((section) => (
              <TechSection key={section.title} techSection={section} />
            ))}
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
