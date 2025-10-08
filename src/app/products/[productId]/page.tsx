import { getSpecificProduct } from "@/services/dataServece";
import React from "react";
import { PiUserSwitchDuotone } from "react-icons/pi";
import Image from "next/image";
import { convertDriveLink } from "@/lib/helper/getImageUrl";

export default async function page({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;

  const product = await getSpecificProduct(productId);
  console.log(product);

  if (!product) return;

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

  console.log(main_img);

  // PLACEHOLDER DATA
  const cabin = {
    id: 89,
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
    image:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
  };

  const { id, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
        <div className='relative scale-[1.15] -translate-x-3'>
          <Image fill src={`${convertDriveLink(main_img)}`} alt={name} />
        </div>

        <div>
          <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
            {name}
          </h3>

          <p className='text-lg text-primary-300 mb-10'>{description}</p>

          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <PiUserSwitchDuotone className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Category : <span className='font-bold'>{category}</span> guests
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              {/* <MapPinIcon className="h-5 w-5 text-primary-600" /> */}
              <span className='text-lg'>
                Our Location :<span className='font-bold'>El Marg</span> (cairo)
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              {/* <EyeSlashIcon  className="h-5 w-5 text-primary-600" /> */}
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
