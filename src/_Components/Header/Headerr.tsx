import Link from "next/link";
import Logo from "../Logo/Logo";
import MobileMenu from "../Navigation/MobileMenu";

export default function Header() {
  const links = [
    { name: "Best-seller", href: "/best-seller" },
    { name: "products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const baseStyle = "text-sm hover:text-primary-200 duration-300 block py-2";

  return (
    <nav className='bg-neutral-primary relative w-full z-20 border-b border-default'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <Logo />

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 rtl:space-x-reverse'>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={baseStyle}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <MobileMenu links={links} />
      </div>
    </nav>
  );
}
