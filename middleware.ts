import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "1251yuki";
const COOKIE_NAME = "auth_token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/login")) return NextResponse.next();

  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === PASSWORD) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
