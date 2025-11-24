import Header from "@/_Components/Header/Header";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { auth } from "@/lib/auth";

import { Roboto } from "next/font/google";
import { sessionType } from "@/lib/types/session";
// google font
const robot = Roboto({
  display: "swap",
  // subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--roboto",
});

// meta data
export const metadata: Metadata = {
  title: {
    template: "%s | Tafsela",
    default: "Welcome / Tafsela",
  },
  description: "A place to find all your favorite dresses, gifts and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <html>
      <body
        className={`${robot.className} antialiased bg-primary-900 text-primary-100 flex flex-col min-h-screen divide-y divide-primary-50/20`}
      >
        <Header session={session} />
        <div className='flex-1 md:px-8 px-3 py-12'>
          <main className=' max-w-7xl mx-auto w-full'>{children}</main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
