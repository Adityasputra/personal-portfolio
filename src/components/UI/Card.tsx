import React from "react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

interface Project {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
  appUrl: string;
  imageUrl: string;
  technologies: string[];
}

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm rounded-lg w-96 transition-transform hover:scale-105">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <Image
          src={project.imageUrl}
          alt={`Image of ${project.name}`}
          width={400}
          height={300}
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h6 className="mb-1 text-slate-800 text-xl font-semibold">
              {project.name}
            </h6>
            <p className="text-slate-600 text-sm leading-normal font-light">
              {project.description}
            </p>
          </div>

          <div className="ml-4">
            <SocialLinks
              githubUrl={project.repoUrl}
              websiteUrl={project.appUrl}
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-4 gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              aria-label={`Technology: ${tech}`}
              className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
