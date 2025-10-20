import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "../_Components/SectionHeader";
import Spinner from "@/_Components/Spinner";
import ItemsList from "../_Components/ItemsList";

export const metadata: Metadata = {
  title: " Wedding Contract",
};

function page() {
  return (
    <section>
      <SectionHeader
        title='Our Wedding Contract'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
                to embody your beauty and style.'
      />

      <Suspense fallback={<Spinner />}>
        <ItemsList categoryID='3' />
      </Suspense>
    </section>
  );
}

export default page;
