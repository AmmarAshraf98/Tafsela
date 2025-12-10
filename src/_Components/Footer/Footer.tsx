// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

// function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className='mt-10 border-t  pt-6 pb-8 bg-primary-950/20 backdrop-blur-sm'>
//       <div className='max-w-7xl mx-auto px-4'>
//         <div className='flex flex-col md:flex-row items-center justify-between gap-6 min-h-24'>
//           {/* Logo */}
//           <Link
//             href='/'
//             className='text-2xl uppercase font-bold tracking-widest text-primary-200 hover:text-primary-400 transition'
//           >
//             Tafsela
//           </Link>

//           {/* Social Icons */}
//           <div className='flex items-center gap-5 text-primary-300 text-xl'>
//             <a
//               href='https://facebook.com'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='hover:text-primary-500 transition-colors'
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href='https://instagram.com'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='hover:text-primary-500 transition-colors'
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href='https://wa.me/201014851383'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='hover:text-primary-500 transition-colors'
//             >
//               <FaWhatsapp />
//             </a>
//           </div>

//           {/* Copyright  */}
//           <div className='flex items-center h-6'>
//             <p className='text-primary-400 text-sm tracking-wide text-center md:text-right'>
//               © {year}{" "}
//               <span className='text-primary-300 font-medium'>Tafsela</span> —
//               All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-10 border-t border-primary-800 pt-6 pb-12 bg-primary-950/20 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* العنصر ده هو السحر – بيحجز مساحة ثابتة من أول مللي ثانية مهما حصل */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left'>
          {/* Logo */}
          <Link
            href='/'
            className='text-2xl uppercase font-bold tracking-widest text-primary-200 hover:text-primary-400 transition justify-self-center md:justify-self-start'
          >
            Tafsela
          </Link>

          {/* Social Icons */}
          <div className='flex items-center justify-center gap-6 text-primary-300 text-xl'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary-500 transition-colors'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary-500 transition-colors'
            >
              <FaInstagram />
            </a>
            <a
              href='https://wa.me/201014851383'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary-500 transition-colors'
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Copyright – بدون أي min-h ولا h-6 */}
          <p className='text-primary-400 text-sm tracking-wide justify-self-center md:justify-self-end'>
            © {year}{" "}
            <span className='text-primary-300 font-medium'>Tafsela</span> — All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
