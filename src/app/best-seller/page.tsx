import ProductCard from "@/_Components/ProductCard/ProductCard";
import { getBestSellerProducts } from "@/services/dataServece";
import SectionHeader from "../products/_Components/SectionHeader";
import { Suspense } from "react";
import Spinner from "@/_Components/Spinner";

function page() {
  return (
    <div>
      {/* <h2 className='text-primary-400 text-2xl text-center mt-16'>
        have no idea what to display here 🤸🏻
      </h2> */}

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
  console.log("data=>", data);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
      {data?.length &&
        data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
};
export default page;
