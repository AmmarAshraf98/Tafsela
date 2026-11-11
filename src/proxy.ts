import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { checkAdmin } from "./lib/helper/checkISAdmin";

export const proxy = auth((req) => {
  const isAdmin = checkAdmin(req.auth?.user?.email || "");

  if (!isAdmin && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/products", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
