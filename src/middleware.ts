/* 

// middelware using native next.js but there is an other way using Nextauth lib

import { NextResponse } from "next/server";
export function middleware(request: Request) {
  console.log("MIDDLEWARE RUNNING", request);
  return NextResponse.redirect(new URL("/about", request.url));
}
  */

/*
// just using auth method that came from nextauth at auth file we just created
export const middleware = auth;
*/

// the same way with nextAuth just add a little logic inside the auth method
// import { auth } from "./lib/auth";
// export default auth((req) => {
//   const isLoggedIn = !!req.auth?.user;

//   const isTryingToAccessDashboard =
//     req.nextUrl.pathname.startsWith("/dashboard");

//   if (!isLoggedIn && isTryingToAccessDashboard) {
//     return Response.redirect(new URL("/login", req.url));
//   }

// });

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

// export default auth;

import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth?.user;

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
