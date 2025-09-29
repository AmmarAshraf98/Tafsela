import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className='px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
