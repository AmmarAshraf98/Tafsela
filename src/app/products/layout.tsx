import React from "react";
import Filteration from "./_Components/Filteration";
import CategorySlider from "./_Components/CategorySlider/CategorySlider";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className=''>
      <CategorySlider />
      <div className='md:grid md:grid-cols-[3rem_1fr] lg:grid-cols-[16rem_1fr] h-full gap-4 md:gap-12 md:divide-x md:divide-primary-300'>
        <div className='mb-8 md:mb-0'>
          <Filteration />
        </div>
        <div className='py-1'>{children}</div>
      </div>
    </section>
  );
} 

export default layout;
