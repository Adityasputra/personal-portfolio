import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientSeoWrapper from "@/components/ClientSeoWrapper";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ClientSeoWrapper />
        {children}
      </body>
    </html>
  );
}
