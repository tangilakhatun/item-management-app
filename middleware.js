import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.cookies.get("auth");
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/add-item") && auth?.value !== "true") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-items"],
};
