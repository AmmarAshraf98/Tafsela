import { Metadata } from "next";
import React, { Suspense } from "react";
import Spinner from "@/_Components/Spinner";
import SectionHeader from "../_Components/SectionHeader";
import ItemsList from "../_Components/ItemsList";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: " Bride Mirror",
};

async function page() {
  return (
    <section>
      <SectionHeader
        title='Our Luxury Bride Mirror'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
          to embody your beauty and style.'
      />

      <Suspense fallback={<Spinner />}>
        <ItemsList categoryID='2' />
      </Suspense>
    </section>
  );
}

export default page;
