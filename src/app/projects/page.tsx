import ProjectsPage from "@/components/layout/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aditya Saputra",
  description:
    "Discover a collection of my featured web development projects, showcasing expertise in Next.js, React, and full-stack development.",
  keywords: [
    "Aditya Saputra",
    "Projects",
    "Full-Stack Developer",
    "Next.js",
    "React.js",
    "Web Development",
    "Portfolio",
  ],
  alternates: {
    canonical: "https://www.adityasputra.my.id/projects",
  },
  openGraph: {
    title: "Projects | Aditya Saputra",
    description:
      "Discover a collection of my featured web development projects, showcasing expertise in Next.js, React, and full-stack development.",
    url: "https://www.adityasputra.my.id/projects",
    siteName: "Aditya Saputra",
    images: [
      {
        url: "https://www.adityasputra.my.id/images/projects-banner.webp",
        width: 1200,
        height: 630,
        alt: "Projects by Aditya Saputra",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: "index, follow",
};

export default function Projects() {
  return <ProjectsPage />;
}
