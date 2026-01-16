import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuth = req.cookies.get("auth");
  const isProtected = req.nextUrl.pathname.startsWith("/add-item");

  if (isProtected && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
