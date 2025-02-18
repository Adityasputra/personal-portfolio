"use client";

import useSWR from "swr";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import Head from "next/head";
import { useEffect, useState } from "react";

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

  const [pageTitle, setPageTitle] = useState("Loading...");
  const [pageDescription, setPageDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (blog) {
      setPageTitle(`${blog.title} | Aditya Saputra`);
      setPageDescription(blog.excerpt);
      setImageUrl(blog.image || "/images/dummy.webp");
    }
  }, [blog]);

  if (isLoading) {
    return (
      <>
        <header className="container mx-auto">
          <Navbar />
        </header>
        <div className="container mx-auto min-h-screen px-6 py-12 max-w-4xl">
          <p>Loading...</p>
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
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="blog, next.js, SEO, web development" />
        <meta name="author" content="Aditya Saputra" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:url"
          content={`https://www.adityasputra.my.id/blogs/${slug}`}
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <header className="container mx-auto">
        <Navbar />
      </header>
      <div className="container mx-auto min-h-screen px-6 py-12 max-w-4xl">
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <Image
            src={blog.image || "/images/dummy.webp"}
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
          <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        <article className="mt-6 text-gray-700 leading-relaxed text-lg">
          {blog.content.split("\n").map((paragraph: string, index: number) => (
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
