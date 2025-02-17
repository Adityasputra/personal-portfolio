import { NextResponse } from "next/server";
import experiences from "@/data/experiences.json";

export async function GET() {
  return NextResponse.json(experiences, { status: 200 });
}

// export async function GET() {
//   return new Response(JSON.stringify({ message: "Server error" }), {
//     status: 500, // Server error simulation
//   });
// }
