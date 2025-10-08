import React from "react";
import ProductCard from "@/_Components/ProductCard/ProductCard";
import { getAllItems } from "@/services/dataServece";

export default async function MirrorList() {
  const data = await getAllItems();

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
      {data?.length &&
        data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}
