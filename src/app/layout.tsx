import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Aditya Saputra | Developer Portfolio",
  description:
    "Official portfolio of Aditya Saputra, a full stack javascript developer.",
  keywords: [
    "Next.js",
    "React",
    "Frontend Developer",
    "Full Stack Javascript Developer",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Saputra", url: "https://github.com/Adityasputra" }],
  openGraph: {
    title: "Aditya Saputra | Developer Portfolio",
    description: "Explore recent experiences, projects and posts.",
    type: "website",
    // url: "https://website.com",
    images: [
      {
        url: "/images/display.jpeg",
        width: 1200,
        height: 630,
        alt: "Aditya Saputra Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
