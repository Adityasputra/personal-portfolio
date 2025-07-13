"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { NavigationsMenu } from "@/components/NavigationMenu";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Timeline from "@/components/Timeline";
import ScrollVelocity from "@/components/ScrollVelocity";

const AboutMe = dynamic(() => import("@/components/layout/AboutMe"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

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
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/portfolio" },
    { name: "Projects", href: "/projects" },
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

          <Link
            href="#contact"
            className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
          >
            Let&apos;s Connect
          </Link>
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

      <section className="bg-muted py-12">
        <ScrollVelocity
          texts={["Hello", "World"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </section>

      <AboutMe />

      {/* Skills Section */}
      {/* <section className="bg-gray-900 py-12 px-4 md:px-20">
        <Card>
          <CardHeader>
            <CardTitle>Skillset & Tools</CardTitle>
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
      </section> */}

      <Timeline />

      {/* Call to Action */}
      <section
        id="contact"
        className="bg-primary text-white py-16 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Collaborate</h2>
        <p className="mb-6">
          Whether it’s a project, an idea, or just a chat — I’m open!
        </p>
        <Link
          href="mailto:youremail@example.com"
          className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition"
        >
          Contact Me
        </Link>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
