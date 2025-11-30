import Link from "next/link";
import React from "react";
import { TbEdit } from "react-icons/tb";

function UpdateProductBtn({ productID }: { productID: number }) {
  return (
    <Link
      href={`/dashboard/edit/${productID}`}
      className='border border-primary-600 text-primary-500           
      hover:scale-105 
      px-4 py-1.5 
      transition-all 
      duration-200
      flex items-center gap-1 cursor-pointer hover:bg-primary-900'
    >
      <TbEdit />
      Update
    </Link>
  );
}

export default UpdateProductBtn;
