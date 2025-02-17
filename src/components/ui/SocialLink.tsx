import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface SocialLinksProps {
  project: {
    repoUrl?: string;
    appUrl?: string;
  };
}

const SocialLinks = React.memo(({ project }: SocialLinksProps) => {
  return (
    <div className="flex gap-2">
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="hover:scale-110 transition-transform duration-200"
        >
          <FaGithub size={24} />
        </a>
      )}
      {project.appUrl && (
        <a
          href={project.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Website"
          className="hover:scale-110 transition-transform duration-200"
        >
          <CgWebsite size={24} />
        </a>
      )}
    </div>
  );
});

export default SocialLinks;
