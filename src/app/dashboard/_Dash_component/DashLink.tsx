"use client";
import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DashLink({ dashLink }: { dashLink: SideNavigationLinks }) {
  const pathName = usePathname();

  return (
    <li
      className={`capitalize bg-primary-10 flex-shrink-0 
 max-w-full
  text-primary-200 cursor-pointer 
  px-3 py-2.5 transition-all duration-300 
  hover:text-primary-400 hover:bg-primary-800/80 ${
    pathName === dashLink.href ? " bg-primary-800/80 " : ""
  }`}
    >
      <Link href={dashLink.href} className={`flex items-start gap-2`}>
        <span className='text-lg'>{dashLink.icon}</span>

        <span className='hidden sm:block'>{dashLink.name}</span>
      </Link>
    </li>
  );
}

export default DashLink;
