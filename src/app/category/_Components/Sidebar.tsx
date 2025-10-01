import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <ul className='flex flex-col gap-3 text-lg font-medium md:mr-2'>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/wedding-contract"}>Wedding Contract</Link>
      </li>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/dresses"}>Dresses</Link>
      </li>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/tray"}>Tray</Link>
      </li>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/resin"}>Resin</Link>
      </li>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/mirror"}>Bride Mirror</Link>
      </li>
      <li className='hover:text-primary-300 text-primary-200 cursor-pointer md:py-2 md:px-3 transition-all duration-300 hover:bg-primary-600'>
        <Link href={"/category/fan"}>hwa hwa</Link>
      </li>
    </ul>
  );
}

export default Sidebar;
