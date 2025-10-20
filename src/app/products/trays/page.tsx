import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "../_Components/SectionHeader";
import Spinner from "@/_Components/Spinner";
import ItemsList from "../_Components/ItemsList";

export const metadata: Metadata = {
  title: " Rings trays",
};

function page() {
  return (
    <section>
      <SectionHeader
        title='Our Lovely Rings Trays'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
                to embody your beauty and style.'
      />

      <Suspense fallback={<Spinner />}>
        <ItemsList categoryID='4' />
      </Suspense>
    </section>
  );
}

export default page;
