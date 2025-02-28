"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { Blog } from "@/types";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BlogPage() {
  const {
    data: blogs = [],
    error,
    isLoading,
  } = useSWR<Blog[]>("/api/blogs", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    fallbackData: [],
  });

  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>

      <div className="container mx-auto min-h-screen px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="mt-2 text-gray-600">Latest articles & tutorials.</p>
        </motion.div>

        {error ? (
          <ErrorMessage />
        ) : isLoading ? (
          <BlogSkeleton />
        ) : blogs.length > 0 ? (
          <BlogGrid blogs={blogs} />
        ) : (
          <NoBlogs />
        )}
      </div>

      <Footer />
    </>
  );
}

const ErrorMessage = () => (
  <p className="text-center text-red-500 font-semibold">
    Failed to load blogs. Please try again later.
  </p>
);

const BlogSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-200 rounded-lg shadow-md h-64 animate-pulse"
      />
    ))}
  </div>
);

const BlogGrid = ({ blogs }: { blogs: Blog[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {blogs.map((blog, index) => (
      <BlogCard key={blog.id} blog={blog} index={index} />
    ))}
  </div>
);

const NoBlogs = () => (
  <p className="text-center text-gray-500">No blogs found.</p>
);

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image
          src={blog.image || "/images/dummy.webp"}
          alt={blog.title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
          // loading="lazy"
          priority
        />
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-gray-500">
            {new Date(blog.date).toLocaleDateString()}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
            {blog.title}
          </h3>
          <p className="mt-2 text-gray-600 flex-grow">{blog.excerpt}</p>
          <span className="inline-block mt-4 text-yellow-600 font-medium hover:underline">
            Read More &rarr;
          </span>
        </div>
      </motion.div>
    </Link>
  );
};
