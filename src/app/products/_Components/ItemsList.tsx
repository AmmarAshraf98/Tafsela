import React from "react";
import ProductCard from "@/_Components/ProductCard/ProductCard";
import { getAllItems, getAllProductForCategory } from "@/services/dataServece";

export default async function ItemsList({
  categoryID,
}: {
  categoryID: string;
}) {
  let data;

  if (!categoryID) {
    data = await getAllItems();
  } else {
    data = await getAllProductForCategory(categoryID);
  }
  // const data =
  //   (await categoryID) === ""
  //     ? getAllItems()
  //     : getAllProductForCategory(categoryID);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
      {data?.length &&
        data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </div>
  );
}
