import Image from "next/image";
import landing from "../../public/landing/landing.png";
import Link from "next/link";

export default async function Home() {
  return (
    <div className='mt-24 grid place-items-center'>
      <Image
        src={landing}
        fill
        placeholder='blur'
        className='object-cover'
        alt='Welcome to tafsela website'
      />

      <div className='relative z-10 text-center'>
        <h1 className='text-8xl mb-10 tracking-tight font-normal text-primary-200 capitalize'>
          welcome to tafsela.
        </h1>
        <Link
          href='/best-seller'
          className='bg-primary-200 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-primary-600 transition-all'
        >
          explore luxury items
        </Link>
      </div>
    </div>
  );
}
