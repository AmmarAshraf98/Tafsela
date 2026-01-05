import { maxLength } from "@/lib/helper/descriptionLength";
import { convertDriveLink } from "@/lib/helper/getImageUrl";
import { product } from "@/lib/types/product_i";
import Image from "next/image";
import Link from "next/link";

function ProductCard({
  product,
  priority = false,
}: {
  product: product;
  priority?: boolean;
}) {
  const { id, name, description, price, on_sale, main_img, priceAfterSale } =
    product;

  return (
    <div className='border-primary-800 bg-primary-500 border relative text-primary-900 group'>
      {/* MAIN_Image */}
      <div className='relative aspect-[1/1] w-full overflow-hidden'>
        <Image
          src={convertDriveLink(main_img)}
          fill
          alt={`Tafsela luxury product ${name} – high-end jewelry and accessories`}
          className='object-cover object-top'
          quality={75}
          priority={priority}
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />

        <a
          href='https://wa.me/201014851383'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:bg-primary-500 transition-all duration-300 absolute start-4 end-4 bottom-3 bg-primary-500/80 text-center py-2 capitalize opacity-0 group-hover:opacity-100'
        >
          order now
        </a>
      </div>

      {/* PRODUCT_CONTENT */}
      <div className='pt-5 pb-4 px-3 md:px-5  flex-grow '>
        <h3 className='text-accent-500 font-semibold text-xl mb-3'>{name}</h3>

        {/* description */}
        <p className='text-md text-primary-900'>{maxLength(description)}</p>
      </div>

      {/* Card_Footer */}
      <div className='flex items-center justify-between pt-5 pb-4 px-3 md:px-5'>
        {/* <span className='text-primary-500'>E£ {price}</span> */}
        <p className='flex gap-3 justify-end items-baseline font-bold'>
          {on_sale ? (
            <>
              <span className='font-bold'>
                E£{priceAfterSale}
                <span className='line-through font-semibold px-1'>
                  E£{price}
                </span>
              </span>
            </>
          ) : (
            <span className=''>E£{price}</span>
          )}
        </p>

        <Link href={`/products/${id}`} className=' capitalize'>
          view details &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
