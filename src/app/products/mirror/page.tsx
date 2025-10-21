import { Metadata } from "next";
import React, { Suspense } from "react";
import Spinner from "@/_Components/Spinner";
import SectionHeader from "../_Components/SectionHeader";
import ItemsList from "../_Components/ItemsList";
import { handleFilter } from "@/lib/helper/FilterPrice";
import Filteration from "../_Components/Filteration";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: " Bride Mirror",
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
        title='Our Luxury Bride Mirror'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
          to embody your beauty and style.'
      />

      <div className='flex justify-end mb-3 md:mb-5'>
        <Filteration />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='2' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
