import { auth } from "@/lib/auth";
import { checkAdmin } from "@/lib/helper/checkISAdmin";
import { MobileMenuProps } from "@/lib/types/headerLinks";
import { sessionType } from "@/lib/types/session";
import Link from "next/link";
import Logo from "../Logo/Logo";
import MobileMenu from "../Navigation/MobileMenu";
import Profile from "../Profile";

export default async function Header() {
  const links: MobileMenuProps["links"] = [
    { name: "Best-seller", href: "/best-seller" },
    { name: "products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  const loggedInLinks: MobileMenuProps["links"] = [
    { name: "Best-seller", href: "/best-seller" },
    { name: "products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  const addminLinks: MobileMenuProps["links"] = [
    { name: "Best-seller", href: "/best-seller" },
    { name: "products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const baseStyle = "text-sm hover:text-primary-200 duration-300 block py-2";
  const session: sessionType | null = await auth();
  const isLoggedIn = !!session?.user;
  const isAdmin = checkAdmin(session?.user?.email || "");

  return (
    <nav className='bg-neutral-primary relative w-full z-20 border-b border-default'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
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

          {/* User Profile */}
          {isLoggedIn && session?.user?.image && (
            <Profile
              src={session?.user?.image || ""}
              alt={session?.user?.name || ""}
              className='hidden md:block'
            />
          )}
        </div>

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
    </nav>
  );
}
