/* 

// middelware using native next.js but there is an other way using Nextauth lib

import { NextResponse } from "next/server";
export function middleware(request: Request) {
  console.log("MIDDLEWARE RUNNING", request);
  return NextResponse.redirect(new URL("/about", request.url));
}
  */

import { auth } from "./lib/auth";

// just using auth method that came from nextauth at auth file we just created

export const middleware = auth;

export const config = {
  matcher: ["/dashboard/:path*"],
};
