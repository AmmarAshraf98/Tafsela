import Link from "next/link";
import logo from "../../../public/tafsela.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src={logo}
        alt='tafsela website'
        className='rounded-full'
        width={48}
        height={48}
      />
      <span className='text-xl uppercase tracking-wide'>Tafsela</span>
    </Link>
  );
}

export default Logo;
