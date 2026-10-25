
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Tousif",
    age: 21,
    generatedAt: new Date().toISOString(),
  });
}