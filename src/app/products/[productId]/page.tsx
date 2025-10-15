import { getAllItems, getSpecificProduct } from "@/services/dataServece";
import React from "react";
import SwipComp from "../_Components/Swiper";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const id = params.productId;
  return { title: `product ${id}` };
}

// generate static params to convert this page from dynamic to static
export async function generateStaticParams() {
  const products = await getAllItems();
  console.log(products);

  const ids = products?.map((product) => ({ productId: String(product.id) }));

  return ids;
}

export default async function page({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;

  const product = await getSpecificProduct(productId);

  // if (!product) return;

  const {
    category,
    description,
    name,
    main_img,
    img_1,
    img_2,
    img_3,
    img_4,
    on_sale,
    price,
  } = product;

  const imageList = [img_1, img_2, img_3, img_4, main_img].filter(Boolean);

  return (
    <div className='max-w-fit md:max-w-4xl xl:max-w-6xl mx-auto mt-8'>
      <div className='grid md:grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-2 md:px-10 mb-24'>
        {/* Swiper */}
        <div className='static z-0 justify-self-center max-w-3xs sm:max-w-xs md:max-w-sm lg:max-w-md'>
          <SwipComp images={imageList} scrAlt={description} />
        </div>

        {/* product content */}
        <div>
          <h3
            className='text-primary-100 text-3xl bg-primary-800 text-center rounded-md py-1'
            // className='text-primary-100 font-black text-6xl mb-5 translate-x-[-254px] bg-primary-600 p-6 pb-1 w-[150%]'
          >
            {name}
          </h3>

          <p className='text-lg text-primary-300 mb-10'>{description}</p>

          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <TbCategory className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                : <span className='font-bold'>{category}</span>
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              {/* <MapPinIcon className="h-5 w-5 text-primary-600" /> */}
              <FaLocationDot className='h-5 w-5 text-primary-600' />:
              <span className='font-bold'>El Marg</span>{" "}
              <span className='text-lg'>(cairo)</span>
            </li>
            <li className='flex gap-3 items-center'>
              <FaPhoneAlt className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                phone <span className='font-bold'>01015947685</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className='text-5xl font-semibold text-center'>
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
