import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  console.log("🚀 ~ middleware ~ accessToken:", accessToken);
  let isAuthenticated = false;

  if (accessToken) {
    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "your-secret-key"
      );
      await jwtVerify(accessToken, secret); // ✅ Xác thực chữ ký + hạn
      isAuthenticated = true;
      console.log("✅ Token hợp lệ");
    } catch (err: any) {
      console.warn("❌ Token invalid/expired:", err.message);
    }
  }

  // ✅ Nếu đã login và đã xác thực → redirect sang /members
  if (isAuthenticated && request.nextUrl.pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/members";
    return NextResponse.redirect(url);
  }

  // ✅ Nếu vào route cần bảo vệ mà chưa xác thực → về /login
  const protectedRoutes = ["/members", "/dashboard"];

  if (
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    ) &&
    !isAuthenticated
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/members/:path*", "/dashboard/:path*"],
};
