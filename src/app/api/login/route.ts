// src/app/api/login/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", `isLoggedIn=true; Path=/`);
  return response;
}
