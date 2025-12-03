"use client";
import { MobileMenuProps } from "@/lib/types/headerLinks";
import { sessionType } from "@/lib/types/session";
import Link from "next/link";
import { useState } from "react";
import Profile from "../Profile";
import SignOutButton from "../SignoutButton";

export default function MobileMenu({
  links,
  isLoggedIn,
  session,
}: {
  links: MobileMenuProps["links"];
  isLoggedIn?: boolean;
  session?: sessionType;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <button
        type='button'
        className='md:hidden p-2 w-10 h-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-neutral-secondary-soft z-50'
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-6 h-6 cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      {/* Overlay Menu */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-30'
          onClick={() => setIsOpen(false)}
        >
          <div
            className='absolute top-0 right-0 w-64 h-full bg-neutral-primary p-6 z-40 bg-primary-900 flex flex-col justify-between'
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside menu
          >
            <ul className='flex flex-col space-y-4'>
              {isLoggedIn && (
                <li>
                  <Profile
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                    className=''
                  />
                </li>
              )}

              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-heading text-lg hover:text-fg-brand'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {session?.user && <SignOutButton />}
          </div>
        </div>
      )}
    </>
  );
}
