import Spinner from "@/_Components/Spinner";
import { handleFilter } from "@/lib/helper/FilterPrice";
import { Metadata } from "next";
import { Suspense } from "react";
import ItemsList from "../_Components/ItemsList";
import SectionHeader from "../_Components/SectionHeader";

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

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='2' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
