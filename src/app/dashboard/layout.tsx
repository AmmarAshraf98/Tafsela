import React from "react";
import DashSidebar from "./_Dash_component/DashSidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

async function layout({ children }: { children: Readonly<React.ReactNode> }) {
  const session = await auth();

  const adminMail = [
    "tafsela0@gmail.com",
    "ammarashraf230@gmail.com",
    "Esesraa908@gmail.com",
  ];

  const isAdmin = adminMail.includes(session?.user?.email || "");

  // after signIn if not user go to products page
  if (!isAdmin) {
    redirect("/products");
  }

  return (
    <div className='grid md:grid-cols-[13rem_1fr] gap-12 md:divide-x md:divide-primary-300 h-full'>
      <aside className='flex justify-end md:block '>
        <DashSidebar />
      </aside>
      <section className='max-h-dvh'>{children}</section>
    </div>
  );
}

export default layout;
