import GalleryComingSoonLayout from "@/components/blog/GalleryComingSoonLayout";

export default function GalleryDesignPage() {
  return (
    <GalleryComingSoonLayout
      title="UI/UX Design Gallery"
      description="Coming soon: a modern gallery of user interface explorations, UX flows, and design prototypes."
      expected="Q4 2025"
      previewImages={[
        "/images/design1.jpg",
        "/images/design2.jpg",
        "/images/design3.jpg",
        "/images/design4.jpg",
        "/images/design5.jpg",
      ]}
    />
  );
}
