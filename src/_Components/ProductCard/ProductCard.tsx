import { convertDriveLink } from "@/lib/helper/getImageUrl";
import { product } from "@/lib/types/product_i";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";

function ProductCard({ product }: { product: product }) {
  const { id, name, description, price, on_sale, main_img } = product;
  const res = convertDriveLink(main_img);
  //   const x = product;
  console.log("name=>", name);

  console.log("product in ProductCard =>", res);
  console.log("====================================");

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
      <div className='relative h-[280px]'>
        <Image src={res} fill alt={`Cabin ${name}`} className=' object-cover' />
      </div>

      <div className=''>
        <div className='pt-5 pb-4 px-7 bg-primary-900 flex-grow'>
          <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
            Cabin {name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <BiUser className='h-5 w-5 text-primary-600' />
            <p className='text-lg text-primary-200'>
              {/* For up to <span className='font-bold'>{maxCapacity}</span> guests */}
              <span className='font-bold'>{description}</span>
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {on_sale ? (
              <>
                <span className='text-3xl font-[350]'>${price}</span>
                <span className='line-through font-semibold text-primary-600'>
                  ${price}
                </span>
              </>
            ) : (
              <span className='text-3xl font-[350]'>${price}</span>
            )}
            <span className='text-primary-200'>/ night</span>
          </p>
        </div>

        <div className='flex-1 text-right border-t border-primary-800 '>
          <Link
            href={`/cabins/${id}`}
            className='border-l  border-primary-800 py-4 px-6 inline-block hover:bg-primary-600 transition-all hover:text-primary-900'
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
