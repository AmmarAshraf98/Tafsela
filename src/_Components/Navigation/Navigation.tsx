import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Navigation() {
  const session = await auth();

  let userImg = null;
  if (session) {
    userImg = session.user?.image;
  }

  return (
    <nav className='md:text-xl hidden md:block'>
      <ul className='flex gap-12 items-center'>
        <li>
          <Link
            href='/best-seller'
            className='text-sm hover:text-primary-200 duration-300'
          >
            Best sellers
          </Link>
        </li>

        <li>
          <Link
            href='/products'
            className='text-sm hover:text-primary-200 duration-300'
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            href='/about'
            className='text-sm hover:text-primary-200 duration-300'
          >
            About
          </Link>
        </li>

        {/* <li>
          <Link
            href='/blogs'
            className='text-sm hover:text-primary-200 duration-300'
          >
            Blogs
          </Link>
        </li> */}
        {userImg && (
          <li>
            <Link
              href='/blogs'
              className='text-sm hover:text-primary-200 duration-300 flex items-center gap-1 mb-0'
            >
              <img
                src={userImg}
                alt={String(session?.user?.name)}
                className='h-6 rounded-full w-6'
                referrerPolicy='no-referrer'
              />
              <span>{session?.user?.name}</span>
            </Link>
          </li>
        )}

        <li>
          <Link
            href='/dashboard'
            className='text-sm hover:text-primary-200 duration-300'
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
