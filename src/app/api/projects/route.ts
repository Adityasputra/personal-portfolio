import { NextRequest, NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (id) {
    const project = projects.find((p) => p.id === parseInt(id));
    if (!project)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    return NextResponse.json(project);
  }

  return NextResponse.json(projects);
}
