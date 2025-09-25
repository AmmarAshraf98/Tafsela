import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className=''>
      Copyright by Tafsela <span className='text-blue-950'>@{year}</span>
    </div>
  );
}

export default Footer;
