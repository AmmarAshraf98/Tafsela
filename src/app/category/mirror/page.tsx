import { Metadata } from "next";
import React from "react";
import { getAllItems } from "@/services/dataServece";
import ProductCard from "@/_Components/ProductCard/ProductCard";

export const metadata: Metadata = {
  title: " Bride Mirror",
};

async function page() {
  const data = await getAllItems();
  console.log("data =>", data);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-14'>
      {data?.length &&
        data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}

export default page;
