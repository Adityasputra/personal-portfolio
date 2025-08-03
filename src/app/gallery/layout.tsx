import type { Metadata } from "next";

const siteName = "Aditya Saputra";
const baseUrl = "https://www.adityasputra.my.id";
const description =
  "Explore the creative visual gallery of Aditya Saputra, showcasing digital artworks, design compositions, and photography collections.";
const keywords = [
  "Aditya Saputra",
  "Visual Gallery",
  "Digital Art",
  "UI Design",
  "Photography",
  "Creative Portfolio",
  "Artwork Collection",
  "Design Showcase",
];

export const metadata: Metadata = {
  title: `${siteName} | Visual Gallery`,
  description,
  keywords,
  creator: siteName,
  metadataBase: new URL(baseUrl),
  robots: "index, follow",
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
  openGraph: {
    title: `${siteName} | Visual Gallery`,
    description,
    url: `${baseUrl}/gallery`,
    siteName,
    images: [
      {
        url: `${baseUrl}/images/display.webp`,
        width: 1200,
        height: 630,
        alt: "Visual Gallery by Aditya Saputra",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
