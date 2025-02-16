import Image from "next/image";
import SocialLinks from "./SocialLink";

interface Project {
  id: number;
  name: string;
  description: string;
  repoUrl?: string | null;
  appUrl?: string | null;
  imageUrl?: string | null;
  technologies: string[];
  star: boolean;
}

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <div className="flex flex-col md:h-full lg:h-full bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image
          src={project.imageUrl || "/images/dummy.webp"}
          alt={`Image of ${project.name}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-4 lg:line-clamp-5">
              {project.description}
            </p>
          </div>
          <div className="ml-4">
            <SocialLinks
              project={{
                githubUrl: project.repoUrl,
                websiteUrl: project.appUrl,
              }}
            />
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-medium px-3 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
