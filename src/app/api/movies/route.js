import { getRandomMovie } from "@/lib/tmdb";
import { NextResponse } from "next/server";

export async function GET() {
  const movie = await getRandomMovie();
  return NextResponse.json(movie);
}
