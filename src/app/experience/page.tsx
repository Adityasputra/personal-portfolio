"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaSchool, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

import data from "../../data/experiences.json";

export default function ExperiencePage() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <div className="container mx-auto min-h-screen px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">My Experience</h1>
          <p className="mt-2 text-gray-600">
            My journey from learning the basics to becoming a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-gradient pl-6">
          {data.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 flex items-start"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-300 bg-white">
                {exp.icon === "school" ? (
                  <FaSchool className="text-yellow-500 text-lg" />
                ) : exp.icon === "course" ? (
                  <FaLaptopCode className="text-yellow-500 text-lg" />
                ) : (
                  <FaBriefcase className="text-yellow-500 text-lg" />
                )}
              </div>

              {/* Experience Details */}
              <div className="ml-6 bg-white p-4 rounded-lg shadow-md w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-600">{exp.institution}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
                <span className="text-xs text-gray-500 block mt-1">
                  {exp.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
