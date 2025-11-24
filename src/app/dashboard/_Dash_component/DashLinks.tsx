import React from "react";
import DashLink from "./DashLink";
import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import { RiAddLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import SignOutButton from "@/_Components/SignoutButton";

const links: SideNavigationLinks[] = [
  {
    id: 1,
    name: "add item",
    icon: <RiAddLine />,
    href: "/dashboard/add",
  },
  {
    id: 2,
    name: "all store",
    icon: <FaUsers />,
    href: "/dashboard/allstore",
  },
  {
    id: 3,
    name: "all usres",
    icon: <IoStorefrontOutline />,
    href: "/dashboard/users",
  },
];

function DashLinks() {
  return (
    <ul className={`md:flex-col flex-row flex gap-0.5 h-full`}>
      {links.map((ele, index) => (
        <DashLink dashLink={ele} key={index} />
      ))}
      <SignOutButton />
    </ul>
  );
}

export default DashLinks;
