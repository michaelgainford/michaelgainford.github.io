"use client";

import { useState } from 'react';
import MainLogo from '@/components/header/MainLogo';
import MainNav from '@/components/header/MainNav';
import MainMobileNav from '@/components/header/MainMobileNav';
import IconHamburgerNav from '@/components/icons/IconHamburgerNav';

export default function MainHeader() {  
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  console.log('MG Mobile Nav Vis Test:', isMobileNavVisible);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className={`w-full`}>
      <div className={`header-content w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-row justify-between sm:items-center gap-1 py-6 mx-auto lg:gap-2`}>
        <MainLogo />
        <MainNav />
        <div className={`hamburger-menu-icon`} onClick={toggleMobileNav}>
          <IconHamburgerNav />
        </div>
        <MainMobileNav isVisible={isMobileNavVisible} toggleVisibility={toggleMobileNav} />
      </div>
    </header>
  );
}