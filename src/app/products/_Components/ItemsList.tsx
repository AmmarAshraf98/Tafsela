import ProductCard from "@/_Components/ProductCard/ProductCard";
import { product } from "@/lib/types/product_i";
import { getAllItems, getAllProductForCategory } from "@/services/dataServece";
import ItemCount from "./ItemCount";

export default async function ItemsList({
  categoryID,
  filter,
}: {
  categoryID: string;
  filter: string;
}) {
  let data;

  if (!categoryID) {
    data = await getAllItems();
  } else {
    data = await getAllProductForCategory(categoryID);
  }

  let displayedItems: product[] = [];

  if (filter === "all") displayedItems = data;
  if (filter === "low") displayedItems = data.filter((p) => p.price < 500);
  if (filter === "medium")
    displayedItems = data.filter((p) => p.price > 500 && p.price < 1000);
  if (filter === "heigh") displayedItems = data.filter((p) => p.price > 1000);

  if (!displayedItems.length)
    return (
      <div className='flex items-center capitalize md:text-lg justify-center py-2 px-5'>
        <p>
          These items are currently{" "}
          <span className='text-primary-500 font-bold'> out of stock 🛍️</span>
        </p>
      </div>
    );

  const items_number = displayedItems.length;

  return (
    <>
      <ItemCount items_number={items_number} />

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8'>
        {displayedItems?.length &&
          displayedItems.map((product, index) => (
            <ProductCard
              product={product}
              key={product.id}
              priority={index < 3}
            />
          ))}
      </div>
    </>
  );
}
