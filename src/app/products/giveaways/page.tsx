import Spinner from "@/_Components/Spinner";
import { handleFilter } from "@/lib/helper/FilterPrice";
import { Metadata } from "next";
import { Suspense } from "react";
import ItemsList from "../_Components/ItemsList";
import SectionHeader from "../_Components/SectionHeader";

export const metadata: Metadata = {
  title: "Giveaways",
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
        title='Our Fancy giveaways'
        description='simple yet elegant giveaways to cherish the special moments with your loved ones.'
      />

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='7' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
