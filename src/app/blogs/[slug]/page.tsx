"use client";

import useSWR from "swr";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BlogDetailPage() {
  const { slug } = useParams();

  const {
    data: blog,
    error,
    isLoading,
  } = useSWR(slug ? `/api/blogs/${slug}` : null, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    fallbackData: null,
  });

  if (isLoading) {
    return (
      <>
        <header className="container mx-auto">
          <Navbar />
        </header>
        <div className="container mx-auto min-h-screen px-6 py-12 max-w-4xl">
          <div className="w-full h-64 bg-gray-200 animate-pulse rounded-lg shadow-md"></div>
          <div className="mt-6 h-10 bg-gray-200 animate-pulse rounded w-3/4"></div>
          <div className="mt-2 h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
          <div className="mt-6 space-y-4">
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <header className="container mx-auto">
          <Navbar />
        </header>
        <div className="container mx-auto min-h-screen px-6 py-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-red-500">Blog not found!</h1>
          <p className="text-gray-600 mt-2">
            The requested blog does not exist.
          </p>
        </div>
        <Footer />
      </>
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
            src={blog?.image || "/images/dummy.webp"}
            alt={blog?.title || "Blog Image"}
            width={800}
            height={400}
            className="w-full h-full object-cover object-center"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-6">{blog?.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaCalendarAlt className="mr-2 text-[#FEB143]" />
          <span>{new Date(blog?.date).toLocaleDateString()}</span>
        </div>

        <article className="mt-6 text-gray-700 leading-relaxed text-lg">
          {blog?.content
            ?.split("\n")
            .map((paragraph: string, index: number) => (
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
