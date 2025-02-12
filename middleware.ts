import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  return res;
}

export const config = {
  matcher: "/:path*", // Apply middleware to all routes
};
