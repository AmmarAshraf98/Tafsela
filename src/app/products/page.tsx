import Spinner from "@/_Components/Spinner";
import { handleFilter } from "@/lib/helper/FilterPrice";
import { Metadata } from "next";
import { Suspense } from "react";
import ItemsList from "./_Components/ItemsList";
import SectionHeader from "./_Components/SectionHeader";

//====> was needed for ISR but after using searchParams it's not needed cause the page is now dynamic
// export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Our Products",
};

async function page({
  searchParams,
}: {
  searchParams: Promise<{ price: string }>;
}) {
  // to use searchParams just be sure to make the function async
  const filter = (await searchParams).price;

  const filtration = handleFilter(filter);

  return (
    <section>
      <SectionHeader
        title=' Our Luxury items'
        description=' Explore our exquisite collection of handcrafted items, each
          meticulously designed to add a touch of elegance and sophistication to
          your special day. Discover the perfect pieces to complement your
          unique style and make your moments truly unforgettable.'
      />

      <Suspense fallback={<Spinner />} key={filter}>
        <ItemsList categoryID='' filter={filtration} />
      </Suspense>
    </section>
  );
}

export default page;
