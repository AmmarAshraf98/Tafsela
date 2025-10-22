import React from "react";
import DashSidebar from "./_Dash_component/DashSidebar";

function layout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <div className='grid md:grid-cols-[13rem_1fr] gap-12 md:divide-x md:divide-primary-300 h-full'>
      <aside className='flex justify-end md:block'>
        <DashSidebar />
      </aside>
      <div className='overflow-hidden max-h-dvh'>{children}</div>
    </div>
  );
}

export default layout;
