import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className='md:text-xl hidden md:block'>
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
            href='/products'
            className='hover:text-primary-200 duration-300'
          >
            Products
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

        <li>
          <Link
            href='/dashboard'
            className='hover:text-primary-200 duration-300'
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
