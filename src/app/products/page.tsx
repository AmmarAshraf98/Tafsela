import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "./_Components/SectionHeader";
import { getAllItems } from "@/services/dataServece";
import Spinner from "@/_Components/Spinner";
import ItemsList from "./_Components/ItemsList";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Category",
};

async function page() {
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

      <div>
        <p className='mb-5'>
          Discover more than{" "}
          <span className='text-primary-500 font-bold'>
            {items_number.length}
          </span>{" "}
          items from our Luxury store
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <ItemsList categoryID='' />
      </Suspense>
    </section>
  );
}

export default page;
