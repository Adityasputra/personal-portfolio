import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/components/Providers";
import { GridBackground } from "@/components/ui/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Aditya Saputra";
const baseUrl = "https://www.adityasputra.my.id";
const description =
  "Official portfolio of Aditya Saputra, a full-stack developer.";
const keywords = [
  "Aditya Saputra",
  "Full-Stack Developer",
  "Next.js",
  "React.js",
  "Web Development",
  "Frontend Developer",
  "Backend Developer",
  "Portfolio Developer",
];

export const metadata: Metadata = {
  title: `${siteName} | Full-Stack Developer`,
  description,
  keywords,
  creator: siteName,
  metadataBase: new URL(baseUrl),
  robots: "index, follow",
  alternates: { canonical: baseUrl },
  openGraph: {
    title: `${siteName} | Full-Stack Developer`,
    description,
    url: baseUrl,
    siteName,
    images: [
      {
        url: `${baseUrl}/images/display.webp`,
        width: 1200,
        height: 630,
        alt: "Portfolio of Aditya Saputra",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head />
      <body className="antialiased">
        <Providers>
          <GridBackground>{children}</GridBackground>
        </Providers>
      </body>
    </html>
  );
}
