import { maxLength } from "@/lib/helper/descriptionLength";
import { convertDriveLink } from "@/lib/helper/getImageUrl";
import { product } from "@/lib/types/product_i";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { BiUser } from "react-icons/bi";

function ProductCard({ product }: { product: product }) {
  const { id, name, description, price, on_sale, main_img, priceAfterSale } =
    product;
  const res = convertDriveLink(main_img);
  //   const x = product;
  // console.log("name=>", name);

  // console.log("product in ProductCard =>", res);
  // console.log("====================================");

  //   {
  //     category: 2,
  //     created_at: "2025-10-01T12:22:09.169737+00:00",
  //     description: "asdsa ad asdlidqw adpoqjeq a;doisap",
  //     id: 2,
  //     img_1:
  //       "https://drive.google.com/file/d/1KdhAtmj_68AG4D4IzS17pI76ZExQ1rDS/view?usp=sharing",
  //     img_2:
  //       "https://drive.google.com/file/d/1CNAOtNBcBFRQrSUljzX3DzuzL913Mwa2/view?usp=sharing",
  //     img_3:
  //       "https://drive.google.com/file/d/1CNAOtNBcBFRQrSUljzX3DzuzL913Mwa2/view?usp=sharing",
  //     img_4:
  //       "https://drive.google.com/file/d/1CNAOtNBcBFRQrSUljzX3DzuzL913Mwa2/view?usp=sharing",
  //     main_img:
  //       "https://drive.google.com/file/d/1Ao1wBJKSzNSLbwa194jN_P8H_gSfvVsV/view?usp=sharing",
  //     name: "bride mirror",
  //     on_sale: false,
  //     price: 490,
  //   };

  return (
    <div className='border-primary-800 border relative'>
      {/* MAIN_Image */}
      <div className='relative h-[300px]'>
        <Image
          src={res}
          fill
          alt={`Cabin ${name}`}
          className=' object-cover object-top'
        />
      </div>

      {/* PRODUCT_CONTENT */}
      <div className='pt-5 pb-4 px-3 md:px-5 bg-primary-900 flex-grow mb-[50px]'>
        <h3 className='text-accent-500 font-semibold text-xl mb-3'>
          Cabin {name}
        </h3>

        {/* description */}
        <p className='text-md text-primary-200'>
          {/* For up to <span className='font-bold'>{maxCapacity}</span> guests */}
          <span className='font-bold'>{maxLength(description)}</span>
        </p>

        {/* price */}
        <p className='flex gap-3 justify-end items-baseline'>
          {on_sale ? (
            <>
              <span className='text-2xl font-[350]'>${price}</span>
              <span className='line-through font-semibold text-primary-500'>
                ${priceAfterSale}
              </span>
            </>
          ) : (
            <span className='text-2xl font-[350]'>${price}</span>
          )}
          <span className='text-primary-200'>/ 1 item</span>
        </p>
      </div>

      {/* CARD_FOOTER */}
      <div className='text-right border-t border-primary-800 absolute bottom-0 w-full'>
        <Link
          href={`/products/${id}`}
          className='py-4 px-6 inline-block border-l border-primary-800 text-primary-200 cursor-pointer md:py-3 md:px-3 transition-all duration-300 hover:text-primary-900 hover:bg-primary-400'
        >
          Details &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
