"use client";

import { checkAdmin } from "@/lib/helper/checkISAdmin";
import { MobileMenuProps } from "@/lib/types/headerLinks";
import { sessionType } from "@/lib/types/session";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import MobileMenu from "../Navigation/MobileMenu";
import SignOutButton from "../SignoutButton";

const links: MobileMenuProps["links"] = [
  { name: "Best-seller", href: "/best-seller" },
  { name: "Offers", href: "/offers" },
  { name: "products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
];

const loggedInLinks: MobileMenuProps["links"] = [
  { name: "Best-seller", href: "/best-seller" },
  { name: "Offers", href: "/offers" },
  { name: "products", href: "/products" },
  { name: "About", href: "/about" },
];

const addminLinks: MobileMenuProps["links"] = [
  { name: "Best-seller", href: "/best-seller" },
  { name: "Offers", href: "/offers" },
  { name: "products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

const baseStyle = "text-sm hover:text-primary-200 duration-300 block py-2";

export default function ClientComponent() {
  const [session, setSession] = useState<sessionType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // get session so keep pages static
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        if (!res.ok) throw new Error("Failed to fetch session");
        const data = await res.json();
        setSession(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
  }, []);

  const isLoggedIn = !!session?.user;
  const isAdmin = checkAdmin(session?.user?.email || "");

  if (isLoading) return null;

  return (
    <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4 transition-colors duration-300 bg-transparent'>
      <Logo />

      <div className='flex items-center gap-2'>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 rtl:space-x-reverse'>
          {/* display basic links */}
          {!isLoggedIn &&
            links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={baseStyle}>
                  {link.name}
                </Link>
              </li>
            ))}

          {/* links if user loggedIn */}
          {isLoggedIn && !isAdmin
            ? loggedInLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={baseStyle}>
                    {link.name}
                  </Link>
                </li>
              ))
            : null}

          {/* admin links */}
          {isAdmin &&
            addminLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={baseStyle}>
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>

        {isLoggedIn && (
          <div className='hidden md:block'>
            <SignOutButton />
          </div>
        )}
      </div>

      {/* ------------------------------------------  Mobile Menu ----------------------------------- */}
      {/*LoggedIn Mobile Menu */}
      {isLoggedIn && !isAdmin && (
        <MobileMenu
          links={loggedInLinks}
          isLoggedIn={isLoggedIn}
          session={session}
        />
      )}

      {/* Basic Mobile Menu */}
      {!isLoggedIn && (
        <MobileMenu
          links={links}
          isLoggedIn={isLoggedIn}
          session={session ?? undefined}
        />
      )}

      {/* Admin Mobile Menu */}
      {isAdmin && (
        <MobileMenu
          links={addminLinks}
          isLoggedIn={isLoggedIn}
          session={session ?? undefined}
        />
      )}
    </div>
  );
}
