import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src={logo}
        alt='tafsela website'
        className='rounded-full'
        width={55}
        height={55}
      />
      <span className='text-xl'>Tafsela</span>
    </Link>
  );
}

export default Logo;
