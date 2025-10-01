import React from "react";
import Sidebar from "./_Components/Sidebar";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='md:grid md:grid-cols-[16rem_1fr] h-full gap-4 md:gap-12 md:divide-x md:divide-primary-300'>
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
