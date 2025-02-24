import { NextResponse } from "next/server";
import { Blog } from "@/types/blog";
import blogs from "@/data/blogs.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const blog = (blogs as Blog[]).find((b) => b.slug === slug);
    if (!blog)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    return NextResponse.json(blog);
  }

  return NextResponse.json(blogs);
}
