import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

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
    url: "https://www.adityasputra.my.id/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
