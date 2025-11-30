"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectComponent() {
  return (
    <Select name='category'>
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
          bride mirror
        </SelectItem>
        <SelectItem
          value='3'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          wedding contract
        </SelectItem>
        <SelectItem
          value='4'
          className='data-[highlighted]:bg-primary-600 data-[state=checked]:bg-primary-600 data-[state=checked]:text-primary-200 transition-colors cursor-pointer'
        >
          ring trays
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
          hand fan
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
