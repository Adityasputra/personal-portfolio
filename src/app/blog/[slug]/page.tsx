"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import blogs from "../../../data/blogs.json";
import { FaCalendarAlt } from "react-icons/fa";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Article not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <div className="container mx-auto min-h-screen px-6 py-12 max-w-4xl">
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-6">{blog.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaCalendarAlt className="mr-2 text-[#FEB143]" />
          <span>{blog.date}</span>
        </div>

        <article className="mt-6 text-gray-700 leading-relaxed text-lg">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
      <Footer />
    </>
  );
}
