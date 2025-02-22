import { NextRequest, NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET(
  request: NextRequest,
  context: { params?: { slug?: string } }
) {
  const slug = context.params?.slug;

  if (!slug) {
    return NextResponse.json({ message: "Missing slug" }, { status: 400 });
  }

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
