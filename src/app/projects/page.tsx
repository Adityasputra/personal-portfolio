"use client";

import dynamic from "next/dynamic";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { useMemo } from "react";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Card = dynamic(() => import("@/components/ui/Card"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProjectsPage() {
  const {
    data: projects = [],
    error,
    isLoading,
  } = useSWR<Project[]>("/api/projects", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    fallbackData: [],
  });

  const memoizedProjects = useMemo(() => projects, [projects]);

  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">My Projects</h1>
          <p className="mt-2 text-gray-600">
            A collection of my latest works, from web apps to mobile apps.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-64 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-500">
            Failed to load projects. Please try again later.
          </div>
        )}

        {/* Project Grid */}
        {!isLoading && !error && memoizedProjects.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {memoizedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1,
                  transition: { duration: 0.2, ease: "easeInOut" }, // Smooth effect
                }}
                whileTap={{ scale: 0.98 }}
                className="h-auto min-h-[320px] flex"
              >
                <Card project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && !error && memoizedProjects.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            No projects available at the moment.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
