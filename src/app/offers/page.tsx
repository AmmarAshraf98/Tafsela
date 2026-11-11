import ProductCard from "@/_Components/ProductCard/ProductCard";
import Spinner from "@/_Components/Spinner";
import { getOffersProducts } from "@/services/dataServece";
import { Suspense } from "react";
import SectionHeader from "../products/_Components/SectionHeader";

export const dynamic = "force-dynamic";

function page() {
  return (
    <section>
      <SectionHeader
        title='Exclusive Offers'
        description='Explore our curated collection of handcrafted items available at special offer prices, where elegance meets exceptional value.'
      />

      <Suspense fallback={<Spinner />}>
        <OfferItems />
      </Suspense>
    </section>
  );
}

// async component for data to use suspense to display loader
async function OfferItems() {
  const data = await getOffersProducts();
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
      {data?.length &&
        data.map((product, index) => (
          <ProductCard
            product={product}
            key={product.id}
            priority={index < 3}
          />
        ))}
    </div>
  );
}
export default page;
