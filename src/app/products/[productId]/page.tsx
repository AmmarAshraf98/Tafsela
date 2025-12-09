import { getCategoryName } from "@/lib/helper/getCategoryName";
import { getAllItems, getSpecificProduct } from "@/services/dataServece";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import Badge from "../_Components/Badge";
import ProductDescription from "../_Components/ProductDesc";
import SalePrice from "../_Components/SalePrice";
import SwipComp from "../_Components/Swiper";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  return { title: `product ${productId}` };
}

// generate static params to convert this page from dynamic to static (SSG)
export async function generateStaticParams() {
  const products = await getAllItems();

  const ids = products?.map((product) => ({ productId: String(product.id) }));

  return ids;
}

// when page is dynamic | has generate static params no need to use await with the params
export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

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
    priceAfterSale,
  } = product;

  const imageList = [img_1, img_2, img_3, img_4, main_img].filter(Boolean);

  return (
    <div className='max-w-fit md:max-w-4xl xl:max-w-6xl mx-auto mt-8'>
      {/* border border-primary-800 */}
      <div className='grid relative md:grid-cols-[3fr_4fr] gap-5 md:gap-7 lg:gap-9  py-3 px-1.5 md:px-4 mb-24'>
        {on_sale && <Badge />}

        {/* Swiper */}
        <div className='w-full justify-self-center overflow-hidden'>
          <div className='max-w-full'>
            <SwipComp images={imageList} scrAlt={description} />
          </div>
        </div>

        {/* product content */}
        <div>
          {/* Product Name */}
          <h3 className='text-primary-100 tracking-wide  mb-1.5  text-lg md:text-xl lg:text-3xl bg-primary-800 text-center py-1 px-0.5'>
            {name}
          </h3>

          {/*product description */}
          <ProductDescription description={description} />

          {/* Product Price */}
          <SalePrice
            price={price}
            on_sale={on_sale}
            priceAfterSale={priceAfterSale}
          />

          {/*  information list */}
          <ul className='flex flex-col gap-1'>
            <li className='flex gap-2 items-center'>
              <TbCategory className='size-3.5 sm:size-4 md:size-5  text-primary-600' />
              :
              <span className='text-base md:text-lg'>
                <strong className='capitalize font-normal'>
                  {getCategoryName(category)}
                </strong>
              </span>
            </li>

            <li className='flex gap-2 items-center'>
              {/* <MapPinIcon className="size-3.5 sm:size-4 md:size-5  text-primary-600" /> */}
              <LuMapPin className='size-3.5 sm:size-4 md:size-5  text-primary-600' />
              :<span className=''>El Marg</span>
              <span className='text-base md:text-lg'>(cairo)</span>
            </li>

            <li className='flex gap-2 items-center'>
              <MdOutlinePhoneInTalk className='size-3.5 sm:size-4 md:size-5  text-primary-600' />
              :
              <a
                href='https://wa.me/201014851383'
                target='_blank'
                // for security reasons when using target blank
                rel='noopener noreferrer'
                className='text-base md:text-lg hover:underline'
              >
                <span className=''>order now</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
