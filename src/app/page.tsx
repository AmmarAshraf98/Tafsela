import Image from "next/image";
import landing from "../../public/landing/landingCom.webp";
import Link from "next/link";

export default async function Home() {
  return (
    <div className='mt-24 grid place-items-center'>
      <Image
        src={landing}
        fill
        placeholder='blur'
        priority
        className='object-cover'
        alt='Welcome to tafsela website'
      />

      <div className='relative z-10 text-center mt-18 sm:mt-0'>
        <h1 className='text-2xl sm:text-4xl md:text-8xl mb-10 tracking-tight font-normal text-primary-200 capitalize'>
          welcome to tafsela.
        </h1>
        <Link
          href='/products'
          className='bg-primary-600 px-8 py-5 text-primary-900 text-lg font-semibold hover:bg-primary-200 transition-all'
        >
          explore luxury items
        </Link>
      </div>
    </div>
  );
}
