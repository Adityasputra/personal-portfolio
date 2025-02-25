export interface Project {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  repoUrl: string;
  appUrl?: string;
  imageUrl?: string;
  images?: string[];
  featured: boolean;
  status: "ongoing" | "completed" | "paused";
}
