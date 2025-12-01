"use client";
import { maxLength } from "@/lib/helper/descriptionLength";
import { useState } from "react";

function ProductDescription({ description }: { description: string }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <p className='text-md sm:text-lg text-primary-300 mb-2 md:mb-4 lg:mb-5'>
      {maxLength(description, 0, 16, showFull)}
      {description.split(" ").length > 8 && (
        <button
          className='text-primary-500 underline cursor-pointer ms-1'
          onClick={() => setShowFull((prev) => !prev)}
        >
          {showFull ? "see less" : "see more"}
        </button>
      )}
    </p>
  );
}

export default ProductDescription;
