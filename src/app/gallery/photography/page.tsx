import GalleryComingSoonLayout from "@/components/blog/GalleryComingSoonLayout";

export default function GalleryPhotographyPage() {
  return (
    <GalleryComingSoonLayout
      title="Photography Portfolio"
      description="A visual diary of captured moments — street, landscape, and experimental photography coming soon."
      expected="Early 2026"
      previewImages={[
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
      ]}
    />
  );
}
