import React from "react";

interface TechSection {
  title: string;
  technologies: string[];
}

interface TechSectionProps {
  techSection: TechSection;
}

const TechSection = React.memo(({ techSection }: TechSectionProps) => {
  return (
    <div>
      <p className="font-semibold">{techSection.title}</p>
      <div className="flex flex-wrap mt-2 gap-2">
        {techSection.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gradient-to-r from-[#FEB143] to-[#b9a87d] px-3 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
});

export default TechSection;
