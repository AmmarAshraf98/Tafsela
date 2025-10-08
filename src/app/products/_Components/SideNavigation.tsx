import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import { getCategories } from "@/services/dataServece";
import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiAmpleDress, GiDiamondRing, GiHandheldFan } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";
import { MdStorefront } from "react-icons/md";

const links: SideNavigationLinks[] = [
  {
    id: 1,
    name: "All products",
    href: "/products/",
    icon: <MdStorefront />,
  },
  {
    id: 2,
    name: "Wedding Contract",
    href: "/products/wedding-contract",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 3,
    name: "Dresses",
    href: "/products/dresses",
    icon: <GiAmpleDress />,
  },
  {
    id: 4,
    name: "Ring Trays",
    href: "/products/trays",
    icon: <GiDiamondRing />,
  },
  {
    id: 5,
    icon: <ImMagicWand />,
    name: "Resin",
    href: "/products/resin",
  },
  {
    id: 6,
    name: " Bride Mirror",
    href: "/products/mirror",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 7,
    name: "Hand Fan",
    href: "/products/fan",
    icon: <GiHandheldFan />,
  },
];

async function SideNavigation() {
  return (
    <header className='bg-primary-500/10 rounded-md p-4 '>
      <h2 className='md:text-3xl capitalize mb-3 text-primary-600 font-semibold'>
        our category
      </h2>
      <div
        className='max-w-4xl p-2 mb-10 overflow-x-auto overflow-visible custom-scroll scroll-smooth scroll-px-4
      snap-x snap-mandatory'
      >
        <ul className='flex gap-x-3 font-sm'>
          {links.map((link) => (
            <li
              key={link.id}
              className=' text-primary-200 cursor-pointer block border border-primary-800 px-2 py-1 transition-all rounded-full duration-300 hover:text-primary-900 hover:bg-primary-400'
            >
              <Link
                href={link.href}
                className='flex items-center justify-center gap-2 '
              >
                <span className='text-2xl lg:text-base'>{link.icon}</span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default SideNavigation;
