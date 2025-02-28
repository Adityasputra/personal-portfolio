export interface Project {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  content: string;
  technologies: string[]; 
  repoUrl: string;
  appUrl?: string;
  imageUrl?: string | null;
  images?: string[];
  featured: boolean;
  status: "ongoing" | "completed" | "paused";
}
