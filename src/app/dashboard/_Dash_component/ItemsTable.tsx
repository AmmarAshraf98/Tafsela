import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllItems } from "@/services/dataServece";
import Image from "next/image";
import { convertDriveLink } from "@/lib/helper/getImageUrl";
import { getCategoryName } from "@/lib/helper/getCategoryName";

async function ItemsTable() {
  const data = await getAllItems();

  return (
    <div className='flex-1 border border-primary-800 border-t-0 p-2 shadow-md overflow-auto custom-scrollbar'>
      <Table>
        {/* table footer */}
        <TableCaption className='text-primary-600 font-bold'>
          A list of your all items.
        </TableCaption>

        {/* table header */}
        <TableHeader className='bg-primary-500 text-primary-400 capitalize'>
          <TableRow className='hover:bg-primary-400 border-none'>
            <TableHead className='w-[100px] text-primary-800 font-semibold'>
              name
            </TableHead>
            <TableHead className='text-primary-800 font-semibold'>
              category
            </TableHead>
            <TableHead className='text-primary-800 font-semibold'>
              price
            </TableHead>
            <TableHead className='text-right text-primary-800 font-semibold'>
              sale
            </TableHead>
            <TableHead className='text-right text-primary-800 font-semibold'>
              discount price
            </TableHead>
            <TableHead className='text-right text-primary-800 font-semibold'>
              image
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* table body */}
        <TableBody>
          {data.map((item) => (
            <TableRow
              className='transition-colors hover:bg-primary-700/30 min-h-[90px] border-primary-700/30'
              key={item.id}
            >
              <TableCell className='font-medium text-primary-500'>
                {item.name}
              </TableCell>
              <TableCell className='text-primary-400'>
                {getCategoryName(item.category)}
              </TableCell>
              <TableCell className='text-primary-400'>
                E£ {item.price}
              </TableCell>
              <TableCell className='text-primary-400'>
                <input
                  type='checkbox'
                  checked={item.on_sale}
                  disabled
                  name='sale'
                  className="
          appearance-none
    h-4 w-4  border-2
    border-primary-400
    bg-primary-50
    checked:bg-primary-600 checked:border-primary-600
    relative transition-all duration-200
    disabled:opacity-100 disabled:cursor-not-allowed
    after:content-[''] after:absolute after:inset-0 after:flex after:items-center after:justify-center
    checked:after:content-['✔'] checked:after:text-primary-50 checked:after:text-[10px] md:checked:after:text-[14px]"
                />
              </TableCell>
              <TableCell className='text-primary-400'>
                {item.on_sale && <span>E£ {item.priceAfterSale} </span>}
              </TableCell>
              <TableCell className='text-right text-primary-400 aspect-square relative'>
                <Image
                  src={convertDriveLink(item.main_img)}
                  alt={item.description}
                  className='object-cover'
                  fill
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ItemsTable;
