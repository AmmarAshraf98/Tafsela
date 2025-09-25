import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2 p-4'>
      <img
        src='./logo.png'
        alt='tafsela'
        className='w-[50] h-[50] rounded-full'
      />
      <span>Tafsela</span>
    </Link>
  );
}
export default Logo;
