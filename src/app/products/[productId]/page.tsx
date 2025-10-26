import { getAllItems, getSpecificProduct } from "@/services/dataServece";
import SwipComp from "../_Components/Swiper";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { Metadata } from "next";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { getCategoryName } from "@/lib/helper/getCategoryName";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const id = params.productId;
  return { title: `product ${id}` };
}

// generate static params to convert this page from dynamic to static
export async function generateStaticParams() {
  const products = await getAllItems();

  const ids = products?.map((product) => ({ productId: String(product.id) }));

  return ids;
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;

  const product = await getSpecificProduct(productId);

  if (!product) return null;

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
      <div className='grid md:grid-cols-[3fr_4fr] gap-4 sm:gap-5 md:gap-8 lg:gap-12 border border-primary-800 py-3 px-1.5 md:px-4 mb-24'>
        {/* Swiper */}
        <div className='w-full justify-self-center overflow-hidden'>
          <div className='max-w-full'>
            <SwipComp images={imageList} scrAlt={description} />
          </div>
        </div>

        {/* product content */}
        <div>
          <h3
            className='text-primary-100  mb-1.5  text-lg md:text-xl lg:text-3xl bg-primary-800 text-center rounded-md py-1 px-0.5'
            // className='text-primary-100 font-black text-6xl mb-5 translate-x-[-254px] bg-primary-600 p-6 pb-1 w-[150%]'
          >
            {name}
          </h3>

          <p className='text-lg text-primary-300 mb-10'>{description}</p>

          {/*  information list */}
          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <TbCategory className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                :
                <strong className='capitalize'>
                  {getCategoryName(category)}
                </strong>
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              {/* <MapPinIcon className="h-5 w-5 text-primary-600" /> */}
              <LuMapPin className='h-5 w-5 text-primary-600' />:
              <span className='font-bold'>El Marg</span>{" "}
              <span className='text-lg'>(cairo)</span>
            </li>
            <li className='flex gap-3 items-center'>
              <MdOutlinePhoneInTalk className='h-5 w-5 text-primary-600' />:
              <a
                href='https://wa.me/201015947685'
                target='_blank'
                // for security reasons when using target blank
                rel='noopener noreferrer'
                className='text-lg hover:underline'
              >
                <span className='font-bold'>01015947685</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h6 className='text-5xl font-semibold text-center'>Reserve today.</h6>
      </div>
    </div>
  );
}
