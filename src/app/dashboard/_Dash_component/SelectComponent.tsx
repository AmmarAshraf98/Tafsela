"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectComponent({ defaultValue }: { defaultValue?: string }) {
  return (
    <Select name='category' defaultValue={defaultValue}>
      {/* الزرار اللي بيعرض القيمة المختارة */}
      <SelectTrigger className='w-full bg-primary-900 border border-primary-700 text-primary-200 focus:ring-2 focus:ring-primary-500 data-[placeholder]:text-primary-300'>
        <SelectValue placeholder='Select Category' />
      </SelectTrigger>

      {/* قائمة الاختيارات */}
      <SelectContent className='bg-primary-700 border border-primary-500 text-primary-50'>
        <SelectItem
          value='1'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          dresses
        </SelectItem>
        <SelectItem
          value='2'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          bridal touches
        </SelectItem>
        <SelectItem
          value='3'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          hand embroidery
        </SelectItem>
        <SelectItem
          value='4'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          bride set
        </SelectItem>
        <SelectItem
          value='5'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          resin
        </SelectItem>
        <SelectItem
          value='6'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          bouquets
        </SelectItem>
        <SelectItem
          value='7'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          giveaways
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
