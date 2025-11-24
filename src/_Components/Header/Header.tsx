import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { sessionType } from "@/lib/types/session";

function Header({ session }: { session: sessionType | null }) {
  return (
    <header className='px-8 py-5 z-10'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />

        <Navigation session={session} />
      </div>
    </header>
  );
}

export default Header;
