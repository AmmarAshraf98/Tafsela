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
    <div className='md:fixed'>
      <h2 className='md:text-3xl capitalize mb-3 text-primary-600 hidden lg:block'>
        our category
      </h2>
      <ul className='flex md:flex-col gap-x-3 flex-wrap md:justify-start py-1 md:py-0 space-y-2.5 text-lg font-medium md:mr-2'>
        {links.map((link) => (
          <li
            key={link.id}
            className=' text-primary-200 cursor-pointer inline-block border border-primary-800 p-3 md:py-3 md:px-3 transition-all rounded-full duration-300 hover:text-primary-900 hover:bg-primary-400 size-14 md:size-auto'
          >
            <Link
              href={link.href}
              className='flex items-center justify-center lg:justify-start lg:gap-2'
            >
              <span className='text-2xl lg:text-base'>{link.icon}</span>
              <span className='hidden lg:block'>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavigation;
