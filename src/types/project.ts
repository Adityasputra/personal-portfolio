export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  appUrl?: string | null;
  imageUrl?: string | null;
  star: boolean;
}
