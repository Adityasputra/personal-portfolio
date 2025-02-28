import React from "react";

type TechSectionProps = {
  techSection: {
    title: string;
    technologies: string[];
  };
};

const TechSection: React.FC<TechSectionProps> = React.memo(
  ({ techSection }) => {
    if (!techSection || !techSection.technologies) return null;

    return (
      <div>
        <p className="font-semibold">{techSection.title}</p>
        <div className="flex flex-wrap mt-2 gap-2">
          {techSection.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 rounded-md text-white text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }
);

export default TechSection;
