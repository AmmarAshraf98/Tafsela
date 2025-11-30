import { getSpecificProduct } from "@/services/dataServece";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getSpecificProduct(id);
  console.log(product);

  return <div>edit - page</div>;
}

export default page;
