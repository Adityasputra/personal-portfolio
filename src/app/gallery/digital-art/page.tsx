import GalleryComingSoonLayout from "@/components/blog/GalleryComingSoonLayout";

export default function GalleryArtDigitalPage() {
  return (
    <GalleryComingSoonLayout
      title="Digital Art Showcase"
      description="Dive into a colorful world of digital paintings, generative art, and conceptual illustrations made with love and code."
      expected="Q4 2025"
      previewImages={[
        "/images/art-digital1.jpg",
        "/images/art-digital2.jpg",
        "/images/art-digital3.jpg",
        "/images/art-digital4.jpg",
      ]}
    />
  );
}
