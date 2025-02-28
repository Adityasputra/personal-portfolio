"use client";

import dynamic from "next/dynamic";
import useSWR from "swr";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { Project } from "@/types";
import Link from "next/link";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProjectsPage() {
  const {
    data: projects,
    error,
    isLoading,
  } = useSWR<Project[]>("/api/projects", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    fallbackData: [],
  });

  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">
            Featured Projects
          </h1>
          <p className="mt-2 text-gray-600">
            Explore my latest creations, from dynamic web apps to seamless
            mobile experiences.
          </p>
        </motion.div>

        {isLoading && <ProjectSkeleton />}
        {error && <ErrorMessage />}
        {!isLoading && !error && (projects ?? []).length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {projects?.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="h-auto min-h-[320px] flex shadow-md hover:shadow-lg rounded-2xl"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        )}
        {!isLoading && !error && (projects ?? []).length === 0 && (
          <NoProjects />
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="h-auto min-h-[420px] flex flex-col shadow-md hover:shadow-lg rounded-2xl"
    >
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-white relative shadow-md flex flex-col h-full">
        {project.featured && (
          <FaStar
            className="absolute z-10 top-3 right-3 text-yellow-500"
            size={24}
            title="Featured Project"
          />
        )}

        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl || "/images/dummy.webp"}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="p-4 flex flex-col gap-3 flex-grow">
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full min-h-[24px] flex items-center justify-center w-fit ${
                project.status === "ongoing"
                  ? "bg-yellow-200 text-yellow-800"
                  : project.status === "completed"
                  ? "bg-green-200 text-green-800"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {project.status === "ongoing"
                ? "Ongoing"
                : project.status === "completed"
                ? "Completed"
                : "Paused"}
            </span>
            <div className="flex items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  title="GitHub Repository"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.appUrl && (
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>

          <Link href={`/projects/${project.id}`}>
            <h3 className="text-lg font-semibold leading-tight hover:underline">
              {project.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 line-clamp-2 flex-grow">
            {project.shortDescription}
          </p>

          <div className="mt-auto">
            <Link
              href={`/projects/${project.id}`}
              className="block text-center px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 transition"
            >
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ErrorMessage = () => (
  <p className="text-center text-red-500 font-semibold">
    Failed to load projects. Please try again later.
  </p>
);
const NoProjects = () => (
  <p className="text-center text-gray-500 mt-6">
    No projects available at the moment.
  </p>
);
const ProjectSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="w-full max-w-md overflow-hidden rounded-2xl border bg-gray-200 shadow-md animate-pulse"
      >
        <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
        <div className="p-4">
          <div className="h-5 bg-gray-300 w-2/3 rounded"></div>
          <div className="mt-2 h-4 bg-gray-300 w-5/6 rounded"></div>
          <div className="mt-1 h-4 bg-gray-300 w-4/6 rounded"></div>
          <div className="mt-4 h-8 bg-gray-300 w-1/3 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);
