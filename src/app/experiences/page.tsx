"use client";

import { FaSchool, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Experience } from "@/types";
import useSWR from "swr";
import { useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ExperiencePage() {
  const { data: experiences = [], isLoading } = useSWR<Experience[]>(
    "/api/experiences",
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: true,
      fallbackData: [],
    }
  );

  return (
    <main className="container mx-auto min-h-screen px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          My Experience
        </h1>
        <p className="mt-2 text-muted-foreground">
          My journey from learning the basics to becoming a developer.
        </p>
      </div>

      <div className="relative border-l-2 border-border pl-6 space-y-10">
        {isLoading ? (
          <ExperienceSkeleton />
        ) : (
          experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))
        )}
      </div>
    </main>
  );
}

const ExperienceSkeleton = () => (
  <div className="space-y-10">
    {[...Array(2)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex items-start gap-4"
      >
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-24 flex-1 rounded-lg" />
      </motion.div>
    ))}
  </div>
);

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const Icon = useMemo(() => {
    switch (exp.icon) {
      case "school":
        return <FaSchool className="text-yellow-500 text-lg" />;
      case "course":
        return <FaLaptopCode className="text-yellow-500 text-lg" />;
      default:
        return <FaBriefcase className="text-yellow-500 text-lg" />;
    }
  }, [exp.icon]);

  return (
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md border bg-background">
        {Icon}
      </div>

      <Card className="flex-1">
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
          <p className="text-sm text-muted-foreground">{exp.institution}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground mb-2">{exp.description}</p>
          <span className="text-xs text-muted-foreground">{exp.date}</span>
        </CardContent>
      </Card>
    </motion.div>
  );
};
