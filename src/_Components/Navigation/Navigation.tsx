import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className='text-xl'>
      <ul className='flex gap-12 items-center'>
        <li>
          <Link
            href='/best-seller'
            className='hover:text-primary-200 duration-300'
          >
            Best sellers
          </Link>
        </li>

        <li>
          <Link
            href='/category'
            className='hover:text-primary-200 duration-300'
          >
            Category
          </Link>
        </li>

        <li>
          <Link href='/about' className='hover:text-primary-200 duration-300'>
            About
          </Link>
        </li>

        <li>
          <Link href='/blogs' className='hover:text-primary-200 duration-300'>
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
