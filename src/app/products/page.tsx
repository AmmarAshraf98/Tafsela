import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "./_Components/SectionHeader";
import { getAllItems } from "@/services/dataServece";
import Spinner from "@/_Components/Spinner";
import ItemsList from "./_Components/ItemsList";
import { handleFilter } from "@/lib/helper/FilterPrice";
import Filteration from "./_Components/Filteration";

// export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Our Products",
};

async function page({
  searchParams,
}: {
  searchParams: Promise<{ price: string }>;
}) {
  const filter = (await searchParams).price;

  const filtration = handleFilter(filter);

  const items_number = await getAllItems();

  return (
    <section>
      <SectionHeader
        title=' Our Luxury items'
        description=' Explore our exquisite collection of handcrafted items, each
          meticulously designed to add a touch of elegance and sophistication to
          your special day. Discover the perfect pieces to complement your
          unique style and make your moments truly unforgettable.'
      />

      <div className='flex items-center justify-between'>
        <p className='text-xs md:text-base'>
          Discover more than
          <span className='text-primary-500 font-bold mx-0.5'>
            {items_number.length}
          </span>
          items
        </p>
        <Filteration />
      </div>

      <div className='flex justify-end mb-8'></div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
