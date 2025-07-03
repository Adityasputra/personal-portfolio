"use client";

import { FaSchool, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Experience } from "@/types";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { useMemo } from "react";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ExperiencePage() {
  const {
    data: experiences = [],
    isLoading,
  } = useSWR<Experience[]>("/api/experiences", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    fallbackData: [],
  });

  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>

      <main className="container mx-auto min-h-screen px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">My Experience</h1>
          <p className="mt-2 text-gray-600">
            My journey from learning the basics to becoming a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-gradient pl-6">
          {isLoading ? (
            <ExperienceSkeleton />
          ) : (
            experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} exp={exp} index={index} />
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

/* Skeleton Loader */
const ExperienceSkeleton = () => (
  <div>
    {[...Array(2)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="mb-8 flex items-start"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-300 bg-gray-200 animate-pulse" />
        <div className="ml-6 bg-gray-200 p-4 rounded-lg shadow-md w-full h-24 animate-pulse" />
      </motion.div>
    ))}
  </div>
);

/* Experience Item Component */
const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => {
  // to avoid recalculations
  const Icon = useMemo(() => {
    switch (exp.icon) {
      case "school":
        return <FaSchool className="text-yellow-500 text-lg" />;
      case "course":
        return <FaLaptopCode className="text-yellow-500 text-lg" />;
      default:
        return <FaBriefcase className="text-yellow-500 text-lg" />;
    }
  }, [exp.icon]);

  return (
    <motion.div
      className="mb-8 flex items-start"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-300 bg-white">
        {Icon}
      </div>

      {/* Experience Details */}
      <div className="ml-6 bg-white p-4 rounded-lg shadow-md w-full">
        <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
        <p className="text-sm text-gray-600">{exp.institution}</p>
        <p className="mt-2 text-gray-700">{exp.description}</p>
        <span className="text-xs text-gray-500 block mt-1">{exp.date}</span>
      </div>
    </motion.div>
  );
};
