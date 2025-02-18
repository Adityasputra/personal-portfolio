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

const siteName = "Aditya Saputra";
const baseUrl = "https://www.adityasputra.my.id";
const description =
  "Aditya Saputra adalah seorang full-stack developer dengan keahlian dalam Next.js, React, dan teknologi modern lainnya. Temukan proyek, pengalaman, dan artikel terbaru di sini.";
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
  title: `${siteName} | Full-Stack Developer & Web Enthusiast`,
  description: description,
  keywords: keywords,
  authors: [{ name: siteName, url: baseUrl }],
  metadataBase: new URL(baseUrl),
  robots: "index, follow",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: `${siteName} | Full-Stack Developer`,
    description: description,
    url: baseUrl,
    siteName: siteName,
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
  // verification: {
  //   google: "",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
