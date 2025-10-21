import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "../_Components/SectionHeader";
import Spinner from "@/_Components/Spinner";
import ItemsList from "../_Components/ItemsList";
import { handleFilter } from "@/lib/helper/FilterPrice";
import Filteration from "../_Components/Filteration";

export const metadata: Metadata = {
  title: " Rings trays",
};

async function page({
  searchParams,
}: {
  searchParams: Promise<{ price: string }>;
}) {
  const filter = (await searchParams).price;

  const filtration = handleFilter(filter);

  return (
    <section>
      <SectionHeader
        title='Our Lovely Rings Trays'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
                to embody your beauty and style.'
      />

      <div className='flex justify-end mb-3 md:mb-5'>
        <Filteration />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='4' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
