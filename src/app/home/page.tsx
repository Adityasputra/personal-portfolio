"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { NavigationsMenu } from "@/components/NavigationMenu";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Timeline from "@/components/Timeline";
import AboutMe from "@/components/layout/AboutMe";

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

      {/* Biography Section */}
      <section className="bg-muted py-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-4">Biography</h2>
        <p className="text-muted-foreground text-sm md:text-base">
          I&apos;m a technology enthusiast passionate about programming,
          especially in web development. My journey began in high school and
          continued through completing the Hacktiv8 bootcamp as a full-stack
          JavaScript developer. I&apos;m always learning new technologies to
          stay ahead and improve my skills.
        </p>
      </section>

      {/* Biography + Life Values in Grid */}
      <section className="py-12 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Biography */}
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            I&apos;m a technology enthusiast passionate about programming,
            especially in web development. My journey began in high school and
            continued through completing the Hacktiv8 bootcamp as a full-stack
            JavaScript developer. I&apos;m always learning new technologies to
            stay ahead and improve my skills.
          </p>
        </div>

        {/* Values & Life Principles */}
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Values & Life Principles</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Live with integrity and honesty.</li>
            <li>Never stop learning and sharing.</li>
            <li>Create impact with intention.</li>
            <li>Balance logic and creativity.</li>
          </ul>
        </div>
      </section>

      <AboutMe />

      {/* Skills Section */}
      <section className="bg-gray-900 py-12 px-4 md:px-20">
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
      </section>

      {/* Life Values Section */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-4">Values & Life Principles</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Live with integrity and honesty.</li>
          <li>Never stop learning and sharing.</li>
          <li>Create impact with intention.</li>
          <li>Balance logic and creativity.</li>
        </ul>
      </section>

      <Timeline />

      {/* Quick Links Section */}
      <section className="bg-muted py-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-primary underline hover:text-primary/80"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

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

      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
