import { NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
