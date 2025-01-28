import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

interface SocialLinks {
  githubUrl: string;
  websiteUrl: string;
}

interface SocialLinksProps {
  project: SocialLinks;
}

export default function SocialLinks({ project }: SocialLinksProps) {
  return (
    <div>
      <div className="flex gap-2">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
          <CgWebsite size={24} />
        </a>
      </div>
    </div>
  );
}
