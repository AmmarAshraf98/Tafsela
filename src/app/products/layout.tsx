import React from "react";
import CategorySlider from "./_Components/CategorySlider/CategorySlider";

function layout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <section className=''>
      <div className='lg:grid lg:grid-cols-[14rem_1fr]  h-full gap-4 md:gap-12 lg:divide-x lg:divide-primary-300'>
        <div className='mb-8 md:mb-0'>
          <CategorySlider />
        </div>

        <div className='py-1'>{children}</div>
      </div>
    </section>
  );
}

export default layout;
