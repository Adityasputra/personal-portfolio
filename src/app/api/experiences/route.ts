import { NextResponse } from "next/server";
import experiences from "@/data/experiences.json";

export async function GET() {
  return NextResponse.json(experiences, { status: 200 });
}
