// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import Header from "@/_Components/Header/Header";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import React from "react";
import "./globals.css";

// google font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  // weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});

// meta data
export const metadata: Metadata = {
  title: {
    template: "%s | Tafsela",
    default: "Welcome / Tafsela",
  },
  description: "A place to find all your favorite dresses, gifts and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-primary-100 flex flex-col min-h-screen divide-y divide-primary-50/20`}
      >
        <Header />
        <div className='flex-1 md:px-8 px-3 py-12'>
          <main className=' max-w-7xl mx-auto w-full'>{children}</main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
