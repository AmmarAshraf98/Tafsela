import SignOutButton from "@/_Components/SignoutButton";
import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import { FaUsers } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiAddLine } from "react-icons/ri";
import DashLink from "./DashLink";

const links: SideNavigationLinks[] = [
  {
    id: 1,
    name: "add item",
    icon: <RiAddLine />,
    href: "/dashboard/add",
  },
  {
    id: 2,
    icon: <IoStorefrontOutline />,
    name: "all store",
    href: "/dashboard/allstore",
  },
  {
    id: 3,
    name: "all usres",
    icon: <FaUsers />,
    href: "/dashboard/users",
  },
];

function DashLinks() {
  return (
    <ul className={`md:flex-col flex-row flex gap-0.5 h-full`}>
      {links.map((ele, index) => (
        <DashLink dashLink={ele} key={index} />
      ))}
      <SignOutButton text='Sign out' />
    </ul>
  );
}

export default DashLinks;
