import { Metadata } from "next";
import React from "react";
import SectionHeader from "./_Components/SectionHeader";
import { getAllItems } from "@/services/dataServece";

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
        <p>
          Discover more than {items_number.length} items from our Luxury store
        </p>
      </div>
    </section>
  );
}

export default page;
