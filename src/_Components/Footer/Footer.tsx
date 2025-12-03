import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-10 border-primary-800 pt-6 pb-4 bg-primary-950/20 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* Logo + Home */}
        <Link
          href='/'
          className='text-2xl uppercase font-bold tracking-widest text-primary-200 hover:text-primary-400 transition'
        >
          Tafsela
        </Link>

        {/* Social Icons */}
        <div className='flex items-center gap-5 text-primary-300 text-xl'>
          <a
            href='https://facebook.com'
            target='_blank'
            className='hover:text-primary-500 transition-colors'
          >
            <FaFacebookF />
          </a>

          <a
            href='https://instagram.com'
            target='_blank'
            className='hover:text-primary-500 transition-colors'
          >
            <FaInstagram />
          </a>

          <a
            href='https://wa.me/201015947685'
            target='_blank'
            className='hover:text-primary-500 transition-colors'
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <p className='text-primary-400 text-sm tracking-wide'>
          © {year} <span className='text-primary-300'>Tafsela</span>— All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
