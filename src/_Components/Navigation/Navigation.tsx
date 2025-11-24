import { sessionType } from "@/lib/types/session";
import { DoorClosedIcon, DoorOpenIcon } from "lucide-react";
import Link from "next/link";

function Navigation({ session }: { session: sessionType | null }) {
  const isAdmin = session?.user?.email === "ammarashraf230@gmail.com";
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
        {/* {userImg && (
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
        )} */}

        <li>
          <Link
            href='/dashboard'
            className='text-sm hover:text-primary-200 duration-300'
          >
            {isAdmin ? <DoorOpenIcon /> : <DoorClosedIcon />}
            {/* Dashboard */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
