"use client";
import { SideNavigationLinks } from "@/lib/types/sideNAvigationKinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CategoryItem({ category }: { category: SideNavigationLinks }) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <li
      className={`capitalize bg-primary-10 flex-shrink-0 
 max-w-[200px]
  text-primary-200 cursor-pointer border border-primary-800 
  px-3 py-1.5 rounded-full transition-all duration-300 
  hover:text-primary-900 hover:bg-primary-400 ${
    pathName === category.href ? " bg-primary-400 text-primary-900" : ""
  }`}
    >
      <Link href={category.href} className={`flex items-center gap-1`}>
        <span className='text-2xl lg:text-base'>{category.icon}</span>
        {category.name}
      </Link>
    </li>
  );
}

export default CategoryItem;
