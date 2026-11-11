import type { Metadata } from "next";
import React from "react";
import "./globals.css";

import Footer from "@/_Components/Footer/Footer";
import Header from "@/_Components/Header/Headerr";

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
  return (
    <html>
      <body
        className='font-sans antialiased bg-primary-900 text-primary-100 flex flex-col min-h-screen divide-y divide-primary-50/20'
      >
        <Header />
        <div className='flex-1 md:px-8 px-3 py-12'>
          <main className=' max-w-7xl mx-auto w-full'>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
