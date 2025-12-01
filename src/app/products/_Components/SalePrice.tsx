export default function SalePrice({
  price,
  priceAfterSale,
  on_sale,
}: {
  price: number;
  priceAfterSale?: number;
  on_sale?: boolean;
}) {
  return (
    <div className='mb-4'>
      <div className='flex items-center gap-3 text-lg'>
        {on_sale && priceAfterSale ? (
          <>
            <span className='line-through text-primary-500'>{price} EGP</span>
            <span className='text-primary-200 font-bold'>
              {priceAfterSale} EGP
            </span>
          </>
        ) : (
          <span className='text-primary-200 font-bold'>{price} EGP</span>
        )}
      </div>
    </div>
  );
}
