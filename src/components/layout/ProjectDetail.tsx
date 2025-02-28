"use client";

import useSWR from "swr";
import Image from "next/image";
import { Project } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechSection from "@/components/ui/TechSection";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ProjectDetailProps {
  id: string;
  initialData?: Project;
}

export default function ProjectDetail({ id, initialData }: ProjectDetailProps) {
  const {
    data: project,
    error,
    isLoading,
  } = useSWR<Project>(id ? `/api/projects?id=${id}` : null, fetcher, {
    fallbackData: initialData || undefined,
  });

  if (!id) return <NoProjects />;
  if (isLoading) return <ProjectSkeleton />;
  if (error || !project) return <ErrorMessage />;

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container min-h-screen mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row mt-4 gap-6">
          <div className="flex-1 p-4">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                project.status === "ongoing"
                  ? "bg-yellow-200 text-yellow-800"
                  : project.status === "completed"
                  ? "bg-green-200 text-green-800"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
            <h1 className="text-4xl font-bold mt-2">{project.name}</h1>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <hr className="border-gray-300 mt-4" />
            <p className="mt-4 text-gray-600">{project.content}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-4">
                <TechSection
                  techSection={{
                    title: "Technologies Used",
                    technologies: project.technologies,
                  }}
                />
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-4 text-center">
              <Link
                href="/projects"
                className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 transition flex items-center gap-2"
              >
                <IoIosArrowRoundBack />
                <span>Back</span>
              </Link>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black px-4 py-2 rounded-lg hover:opacity-80 transition"
                >
                  View Repository
                </a>
              )}
              {project.appUrl && (
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="flex-1">
            <BentoGrid project={project} />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

const ErrorMessage = () => (
  <div className="text-center text-red-500 font-semibold mt-10">
    Failed to load project. Please try again later.
  </div>
);

const NoProjects = () => (
  <div className="text-center text-gray-500 font-semibold mt-10">
    No projects available at the moment.
  </div>
);

const ProjectSkeleton = () => (
  <div className="max-w-2xl mx-auto p-6 animate-pulse">
    <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
    <div className="mt-2 h-4 bg-gray-300 w-full rounded"></div>
    <div className="mt-4 h-48 bg-gray-300 rounded"></div>
  </div>
);

const BentoGrid = ({ project }: { project: Project }) => {
  const images = project.images?.length
    ? project.images
    : ["/images/dummy.webp", "/images/dummy.webp"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="col-span-1 lg:col-span-3 lg:row-span-3 min-h-[350px] shadow-lg rounded-lg">
        <ImageCard src={images[0]} alt={`${project.name} Image 1`} />
      </div>

      <div className="col-span-1 lg:col-span-2 lg:row-span-3 min-h-[350px] shadow-lg rounded-lg">
        <ImageCard src={images[1]} alt={`${project.name} Image 2`} />
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-2 min-h-[180px] shadow-lg rounded-lg">
        <ImageCard src={images[0]} alt={`${project.name} Image 3`} />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[180px] shadow-lg rounded-lg">
        <ImageCard src={images[1]} alt={`${project.name} Image 4`} />
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      className="object-cover rounded-lg"
    />
  </div>
);
