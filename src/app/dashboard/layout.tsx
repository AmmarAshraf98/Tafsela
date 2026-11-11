import React from "react";
import DashSidebar from "./_Dash_component/DashSidebar";

export const dynamic = "force-dynamic";

async function layout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <div className='grid md:grid-cols-[13rem_1fr] gap-12 md:divide-x md:divide-primary-300 h-full'>
      <aside className='flex justify-end md:block '>
        <DashSidebar />
      </aside>
      <section className='min-h-dvh overflow-auto'>{children}</section>
    </div>
  );
}

export default layout;
