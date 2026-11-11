"use client";
import MiniSpiner from "@/_Components/MiniSpiner";
import { deleteProductAction } from "@/lib/actions";
import { useTransition } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

/* 
 1- call server action inside client action cause this function need productId which can't get using form so instead using form to invoke server action we just call server action directly on button click

 2- revalidate data after delete product using revalidatePath at function body in actions file

 3- to handle button status need to use useTransition hooks from react
*/

function DeleteProductBtn({ productID }: { productID: number }) {
  const [isPending, startTransitio] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this product?"))
      startTransitio(async () => {
        await deleteProductAction(productID);
      });
  }

  return (
    <button
      onClick={handleDelete}
      className='border border-primary-600 text-primary-500           
                          hover:scale-105 
                          px-4 py-1.5 
                          transition-all 
                          duration-200
                          flex items-center gap-1 cursor-pointer hover:bg-primary-900'
    >
      {isPending ? (
        <span className='mx-auto flex items-center justify-center'>
          <MiniSpiner />
        </span>
      ) : (
        <>
          <RiDeleteBin6Line />
          Delete
        </>
      )}
    </button>
  );
}

export default DeleteProductBtn;
