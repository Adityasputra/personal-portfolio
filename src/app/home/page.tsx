"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Head from "next/head";

import {
  MapPin,
  Calendar,
  ArrowDown,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";

const AboutMe = dynamic(() => import("@/components/layout/AboutMe"), {
  ssr: false,
});
const Timeline = dynamic(() => import("@/components/layout/Timeline"), {
  ssr: false,
});
const SkillsetAndTools = dynamic(
  () => import("@/components/layout/SkillsetAndTools"),
  { ssr: false }
);
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});
const CallToAction = dynamic(() => import("@/components/layout/CallToAction"), {
  ssr: false,
});
const ScrollVelocity = dynamic(() => import("@/components/ScrollVelocity"), {
  ssr: false,
});

export default function Page() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Aditya Saputra – Full Stack Developer</title>
        <meta
          name="description"
          content="Digital playground and portfolio of Aditya Saputra. Full Stack Developer, Designer, and Creative Thinker."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi there, I&apos;m{" "}
                <span className="bg-clip-text text-primary">
                  Aditya Saputra
                </span>
              </h1>

              <blockquote className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Be creative in every step, keep learning, and bring ideas to
                life through simple yet impactful code.
              </blockquote>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Sidoarjo, Indonesia</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Full-stack Developer</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Follow me:
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      window.open("https://github.com/Adityasputra", "_blank")
                    }
                    className="hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/aditya-saputra-653133292",
                        "_blank"
                      )
                    }
                    className="hover:text-primary"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative group">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-border/20 shadow-xl">
                  <Image
                    src="/images/avatar.webp"
                    alt="Aditya Saputra"
                    width={384}
                    height={384}
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-background border border-border rounded-full p-3 shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 hover:text-primary"
          >
            <span className="text-xs hidden sm:block">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </Button>
        </motion.div>
      </main>

      {/* Marquee */}
      <motion.section
        className="bg-muted/50 border-y border-border/50 py-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ScrollVelocity
          texts={["Creative", "Visionary"]}
          velocity={100}
          className="custom-scroll-text"
        />
      </motion.section>

      {/* Content */}
      <div id="about">
        <AboutMe />
      </div>
      <SkillsetAndTools />
      <Timeline />
      <CallToAction />
      <Footer />
    </>
  );
}
