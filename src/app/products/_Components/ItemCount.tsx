import React from "react";
import Filteration from "./Filteration";

function ItemCount({ items_number }: { items_number: number }) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-xs md:text-base'>
        Discover more than
        <span className='text-primary-500 font-bold mx-0.5'>
          {items_number}
        </span>
        items
      </p>
      <Filteration />
    </div>
  );
}

export default ItemCount;
