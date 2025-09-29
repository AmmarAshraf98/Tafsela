import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src={logo}
        alt='tafsela'
        className='rounded-full'
        width={50}
        height={50}
      />
      <span>Tafsela</span>
    </Link>
  );
}
export default Logo;
