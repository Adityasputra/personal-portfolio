"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import blogs from "../../data/blogs.json";

export default function BlogPage() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <div className="container mx-auto min-h-screen px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="mt-2 text-gray-600">Latest articles & tutorials.</p>
        </motion.div>

        {/* Blog List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600 flex-grow">{blog.excerpt}</p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block mt-4 text-yellow-600 font-medium hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
