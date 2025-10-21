"use client";

import { useState } from "react";

export default function RangeInput() {
  const [value, setValue] = useState(50);

  console.log(value);

  return (
    // <div className='w-full max-w-sm space-y-2'>
    //   <label htmlFor='price' className='text-sm font-medium'>
    //     Max-Price: <span className='text-primary-600 mr-2'>{value} E£</span>
    //   </label>

    //   <input
    //     id='price'
    //     type='range'
    //     min='100'
    //     max='2000'
    //     step='10'
    //     value={value}
    //     onChange={(e) => {
    //       setValue(Number(e.target.value));
    //     }}
    //     className='
    //       w-[100px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500
    //       [&::-webkit-slider-thumb]:appearance-none
    //       [&::-webkit-slider-thumb]:h-3
    //       [&::-webkit-slider-thumb]:w-3
    //       [&::-webkit-slider-thumb]:rounded-full
    //       [&::-webkit-slider-thumb]:bg-primary-500
    //       [&::-webkit-slider-thumb]:cursor-pointer
    //       [&::-webkit-slider-thumb]:transition
    //       [&::-webkit-slider-thumb]:duration-150
    //       [&::-webkit-slider-thumb]:hover:scale-110
    //     '
    //   />
    // </div>
      <div className='border'>
          
    </div>
  );
}
