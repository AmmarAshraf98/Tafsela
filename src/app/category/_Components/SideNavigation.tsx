import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import Link from "next/link";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiAmpleDress, GiDiamondRing, GiHandheldFan } from "react-icons/gi";
import { ImMagicWand } from "react-icons/im";

const links: SideNavigationLinks[] = [
  {
    id: 1,
    name: "Wedding Contract",
    href: "/category/wedding-contract",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 2,
    name: "Dresses",
    href: "/category/dresses",
    icon: <GiAmpleDress />,
  },
  {
    id: 3,
    name: "Ring Trays",
    href: "/category/trays",
    icon: <GiDiamondRing />,
  },
  {
    id: 4,
    icon: <ImMagicWand />,
    name: "Resin",
    href: "/category/resin",
  },
  {
    id: 5,
    name: " Bride Mirror",
    href: "/category/mirror",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 6,
    name: "Hand Fan",
    href: "/category/fan",
    icon: <GiHandheldFan />,
  },
];

function SideNavigation() {
  return (
    <ul className='flex flex-col space-y-2.5 text-lg font-medium md:mr-2'>
      {links.map((link) => (
        <li
          key={link.id}
          className=' text-primary-200 cursor-pointer md:py-3 md:px-3 transition-all duration-300 hover:text-primary-900 hover:bg-primary-400'
        >
          <Link href={link.href} className='flex items-center gap-2'>
            <span>{link.icon}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideNavigation;
