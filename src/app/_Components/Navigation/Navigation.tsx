import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='about'>About</Link>
      </li>
      <li>
        <Link href='blogs'>Blogs</Link>
      </li>
    </ul>
  );
}

export default Navigation;
