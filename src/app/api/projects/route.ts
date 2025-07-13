import { NextRequest, NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const projectId = parseInt(id, 10);

      if (isNaN(projectId) || projectId < 1) {
        return NextResponse.json(
          { message: "Invalid project ID" },
          { status: 400 }
        );
      }

      const project = Array.isArray(projects)
        ? projects.find((p) => p.id === projectId)
        : null;

      if (!project) {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(project, {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json(projects, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
