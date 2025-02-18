import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";
import { Blog } from "@/types";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  const blog: Blog | undefined = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
