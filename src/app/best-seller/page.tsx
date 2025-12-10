import ProductCard from "@/_Components/ProductCard/ProductCard";
import Spinner from "@/_Components/Spinner";
import { getBestSellerProducts } from "@/services/dataServece";
import { Suspense } from "react";
import SectionHeader from "../products/_Components/SectionHeader";

function page() {
  return (
    <div>
      <SectionHeader
        title='Top Picks of the Season'
        description='Shop the items everyone is talking about. Our best sellers combine unmatched craftsmanship, unique designs, and irresistible value'
      />

      <Suspense fallback={<Spinner />}>
        <BestSeller />
      </Suspense>
    </div>
  );
}

// component to fetch data
const BestSeller = async () => {
  const data = await getBestSellerProducts();

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
};
export default page;
