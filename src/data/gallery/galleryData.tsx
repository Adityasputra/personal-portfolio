import { Camera, Palette, PenTool } from "lucide-react";

export interface GalleryCategory {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
  count: string;
  tags: string[];
}
const galleryCategories: GalleryCategory[] = [
  {
    title: "Digital Art",
    description:
      "Digital illustrations, paintings, and visual experiments exploring creativity through technology.",
    href: "/gallery/digital-art",
    icon: Palette,
    color: "bg-gradient-to-br from-fuchsia-500 via-purple-500 to-rose-500",
    count: "5+ pieces",
    tags: ["Illustration", "Concept Art", "Character Design"],
  },
  {
    title: "Design",
    description:
      "UI designs, posters, typography, and visual compositions that blend aesthetics with functionality.",
    href: "/gallery/design",
    icon: PenTool,
    color: "bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-400",
    count: "5+ pieces",
    tags: ["UI/UX", "Branding", "Typography"],
  },
  {
    title: "Photography",
    description:
      "Captured moments, edited compositions, and visual documentation of the world around us.",
    href: "/gallery/photography",
    icon: Camera,
    color: "bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-500",
    count: "5+ pieces",
    tags: ["Portrait", "Landscape", "Street"],
  },
];

export default galleryCategories;
