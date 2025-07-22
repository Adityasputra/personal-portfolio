"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  ArrowDown,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";

import Timeline from "@/components/layout/Timeline";
import ScrollVelocity from "@/components/ScrollVelocity";
import SkillsetAndTools from "@/components/layout/SkillsetAndTools";
import AboutMe from "@/components/layout/AboutMe";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import CallToAction from "@/components/layout/CallToAction";
import { Button } from "@/components/ui/button";

export default function Page() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md">
        <Navbar />
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 lg:pt-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Hi there, I&apos;m{" "}
                <span className="bg-clip-text">Aditya Saputra</span>
              </motion.h1>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Be creative in every step, keep learning, and bring ideas to
                life through simple yet impactful code.
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Sidoarjo, Indonesia</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Full-stack Developer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3"
              >
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
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
            >
              <div className="relative group">
                {/* Main Image */}
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-border/20 shadow-xl">
                  <Image
                    src="/images/avatar.webp"
                    alt="Aditya Saputra's Avatar Profile"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-background border border-border rounded-full p-2 sm:p-3 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
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
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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

      {/* Marquee Section */}
      <motion.section
        className="bg-muted/50 border-y border-border/50 py-2 sm:py-4"
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

      {/* Main Content Sections */}
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
