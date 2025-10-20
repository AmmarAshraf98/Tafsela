import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "../_Components/SectionHeader";
import ItemsList from "../_Components/ItemsList";

export const metadata: Metadata = {
  title: "Dresses",
};

async function page() {
  return (
    <section>
      <SectionHeader
        title='Our Fancy Dresses'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
              to embody your beauty and style.'
      />

      <Suspense>
        <ItemsList categoryID='1' />
      </Suspense>
    </section>
  );
}

export default page;
