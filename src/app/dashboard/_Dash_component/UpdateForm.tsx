"use client";
import { updateProductAction } from "@/lib/actions";
import React, { useState } from "react";
import CheckBoxCom from "./CheckBoxCom";
import SelectComponent from "./SelectComponent";
import { useFormStatus } from "react-dom";
import { product } from "@/lib/types/product_i";

function UpdateForm({ product }: { product: product }) {
  const {
    name,
    category,
    priceAfterSale,
    main_img,
    on_sale,
    price,
    description,
    id,
    img_1,
    img_2,
    img_3,
    img_4,
  } = product;

  const images = [main_img, img_1, img_2, img_3, img_4];

  // get valid images
  const validImages = images.filter(
    (img) => typeof img === "string" && img.trim()
  );

  // useState to manage the number of image input fields
  const [imgInput, setImgInput] = useState<number>(validImages.length - 1);

  // handle add new input field
  const handleAddInput = () => {
    setImgInput((prev) => prev + 1);
  };

  // handle remove input field
  const handleRemoveInput = () => {
    if (imgInput > 1) {
      setImgInput((prev) => prev - 1);
    }
  };

  // Wrap the action so it matches React's expected type: (formData) => void | Promise<void>
  const handleAction = async (formData: FormData): Promise<void> => {
    // call updateProductAction but do not return its value to satisfy the expected void return type

    await updateProductAction(formData);
  };

  return (
    <div className='px-4 mx-auto max-w-2xl min-h-screen'>
      <h2 className='mb-4 text-xl text-primary-300 font-bold capitalize dark:text-primary-300'>
        Update product
      </h2>
      <form action={handleAction} className='space-y-4'>
        {/* hidden input from carry id to be involved in formData */}
        <input type='hidden' name='id' value={id} />

        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          {/* name */}
          <div className='sm:col-span-2'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-700 block w-full p-2.5 dark:bg-primary-900 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700 ring-0 outline-0 focus:outline-0'
              placeholder='Type product name'
              required
              defaultValue={name}
            />
          </div>

          {/* price */}
          <div className='w-full'>
            <label
              htmlFor='price'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Price
            </label>
            <input
              type='number'
              name='price'
              id='price'
              className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 outline-0 focus:outline-0 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
              placeholder='E£2999'
              required
              defaultValue={price}
            />
          </div>

          {/* get Discount */}
          <div className='w-full'>
            <label
              htmlFor='on_sale'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Sale
            </label>
            <CheckBoxCom defaultValue={on_sale} />
          </div>

          {/* Price After Discount*/}
          <div className='w-full'>
            <label
              htmlFor='priceAfterSale'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Price After Discount
            </label>
            <input
              type={on_sale ? "number" : "text"}
              name='priceAfterSale'
              id='priceAfterSale'
              className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 outline-0 focus:outline-0 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
              placeholder='E£2999'
              required
              defaultValue={priceAfterSale ?? "this item has no discount"}
            />
          </div>

          {/* category */}
          <div>
            <label
              htmlFor='category'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Category
            </label>
            <SelectComponent defaultValue={String(category)} />
          </div>

          {/*  Main Image*/}
          <div className='w-full'>
            <div className='flex items-center justify-between mb-0.5'>
              <label
                htmlFor='Image'
                className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
              >
                Image
              </label>
              <button
                className='w-6 bg-primary-700 cursor-pointer rounded-md hover:bg-primary-400 transition-all duration-200'
                onClick={handleAddInput}
              >
                +
              </button>
            </div>
            <input
              type='text'
              name='main_img'
              id='Image'
              className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 outline-0 focus:outline-0 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
              placeholder='Product Main Image'
              required
              defaultValue={main_img}
            />
          </div>

          {/* secon image  */}
          {[...Array(imgInput)].map((_, index) => (
            <div key={index}>
              <div className='flex items-center justify-between mb-0.5'>
                <label
                  htmlFor={`img_${index + 1}`}
                  className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
                >
                  image
                </label>
                {index >= 1 && (
                  <button
                    className='w-6 bg-primary-700 cursor-pointer rounded-md hover:bg-primary-400 transition-all duration-200'
                    onClick={handleRemoveInput}
                  >
                    -
                  </button>
                )}
              </div>
              <input
                type='text'
                name={`img_${index + 1}`}
                id={`img_${index + 1}`}
                className='bg-primary-900 border border-primary-700 text-primary-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary-900 outline-0 focus:outline-0 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
                placeholder='image url'
                required
                defaultValue={validImages[index + 1]}
              />
            </div>
          ))}

          {/* description */}
          <div className='sm:col-span-2'>
            <label
              htmlFor='description'
              className='block mb-2 text-sm font-medium text-primary-600 dark:text-primary-300'
            >
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows={8}
              className='block p-2.5 w-full text-sm text-primary-600 bg-primary-900 rounded-lg border border-primary-700 focus:ring-primary-700 focus:border-primary-500 dark:bg-primary-900 outline-0 focus:outline-0 dark:border-primary-900 dark:placeholder-primary-400 dark:text-primary-300 dark:focus:ring-primary-700 dark:focus:border-primary-700'
              placeholder='Your description here'
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
}

// Button component to submit form and use {useFormStatus} hooks to show loading state
function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-primary-300 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed'
      disabled={pending}
    >
      {pending ? "Updating ..." : "Update product"}
    </button>
  );
}

export default UpdateForm;
