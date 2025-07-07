"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TechSection from "@/components/ui/TechSection";

import { NavigationsMenu } from "@/components/NavigationMenu";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ExperiencePage from "../experiences/page";

export default function Page() {
  const techSections = [
    { title: "Language", technologies: ["Javascript", "Typescript", "Go"] },
    {
      title: "Frontend & Mobile",
      technologies: [
        "React",
        "NextJs",
        "Tailwind",
        "Redux",
        "Vite",
        "React Native",
      ],
    },
    {
      title: "Backend & Database",
      technologies: ["ExpressJs", "NodeJs", "PostgreSQL", "MongoDB"],
    },
    { title: "Cloud & DevOps", technologies: ["AWS", "Docker"] },
  ];
  const quickLinks = [
    { name: "Blog", href: "/" },
    { name: "Gallery", href: "/portfolio" },
    { name: "Project", href: "/blog" },
  ];

  return (
    <>
      <NavigationsMenu />

      <main className="container mx-auto min-h-screen flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col items-center text-center gap-4 px-4 lg:items-start lg:text-left"
        >
          <h1 className="text-3xl lg:text-6xl font-bold">
            Hi there, I&apos;m Aditya Saputra
          </h1>
          <blockquote className="text-lg font-light leading-relaxed">
            Jadilah kreatif dalam setiap langkah, terus belajar, dan wujudkan
            ide-ide melalui kode yang sederhana namun berdampak besar
          </blockquote>
          <p className="text-sm italic font-light text-gray-600">
            @Adityasputra
          </p>

          <Link href="#"></Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/avatar.webp"
              alt="Aditya Saputra's Avatar Profile"
              width={400}
              height={400}
              priority
              className="object-center object-cover"
            />
          </div>
        </motion.div>
      </main>

      <section className="bg-gray-900 py-4 min-h-screen w-full mx-auto">
        <div className="p-4 lg:mx-20">
          <p className="mt-6">
            I&apos;m a technology enthusiast passionate about programming,
            especially in web development. My journey began in high school and
            continued through completing the Hacktiv8 bootcamp as a full-stack
            JavaScript developer. I&apos;m always learning new technologies to
            stay ahead and improve my skills.
          </p>
        </div>

        <div className=" p-4 lg:mx-20">
          <Card>
            <CardHeader>
              <CardTitle>Skillset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {techSections.map((items) => (
                <div key={items.title} className="space-y-2">
                  <p className="text-sm font-semibold">{items.title}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {items.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <ExperiencePage />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
