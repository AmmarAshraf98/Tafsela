import { Metadata } from "next";
import React, { Suspense } from "react";
import SectionHeader from "../_Components/SectionHeader";
import ItemsList from "../_Components/ItemsList";
import Spinner from "@/_Components/Spinner";

export const metadata: Metadata = {
  title: "Hand Fan",
};

function page() {
  return (
    <section>
      <SectionHeader
        title='Our Special Hand Fan'
        description='Timeless elegance, perfectly reflected. Bespoke Bride Mirrors crafted
                to embody your beauty and style.'
      />

      <Suspense fallback={<Spinner />}>
        <ItemsList categoryID='6' />
      </Suspense>
    </section>
  );
}

export default page;
