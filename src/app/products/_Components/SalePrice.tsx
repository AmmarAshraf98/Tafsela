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
            <span className='line-through text-primary-500'>E£ {price} </span>
            <span className='text-primary-200 font-bold'>
              E£ {priceAfterSale}
            </span>
          </>
        ) : (
          <span className='text-primary-200 font-bold'>E£ {price}</span>
        )}
      </div>
    </div>
  );
}
