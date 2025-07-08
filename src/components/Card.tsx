import React from "react";
import Image from "next/image";
import { Project } from "@/types";
import SocialLinks from "./ui/SocialLink";

interface ProjectProps {
  project: Project;
}

const Card = React.memo(({ project }: ProjectProps) => {
  const { name, imageUrl, description, technologies, repoUrl, appUrl } =
    project;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image
          src={imageUrl || "/images/dummy.webp"}
          alt={`Image of ${name}`}
          fill
          // priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-4 lg:line-clamp-5">
              {description || "Description not available."}
            </p>
          </div>
          <div className="ml-4">
            <SocialLinks
              project={{
                repoUrl: repoUrl || "",
                appUrl: appUrl || "",
              }}
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.length > 0 ? (
            technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-medium px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-500">
              No technologies listed
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export default Card;
