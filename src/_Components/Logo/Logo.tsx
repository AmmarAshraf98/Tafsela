import Link from "next/link";
import logo from "../../../public/logo1.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src={logo}
        alt='tafsela website'
        className='rounded-full'
        width={45}
        height={45}
        priority
        placeholder='blur'
        quality={100}
      />
      <span className='text-xl uppercase tracking-wide'>Tafsela</span>
    </Link>
  );
}

export default Logo;
