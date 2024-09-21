import { useState } from 'react'
import MainLogo from '@/components/header/MainLogo'
import MainNav from '@/components/header/MainNav'
import MobileNav from '@/components/header/MainMobileNav'
import IconHamburgerNav from '@/components/icons/IconHamburgerNav'
import IconCrossNav from '@/components/icons/IconCrossNav'

export default function MainHeader() {  

  function ToggleVisibility() {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibilityHandler = () => {
      setIsVisible(!isVisible);
    };
  return (
    <header className={`w-full`}>
      <div className={`header-content w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-row justify-between sm:items-center gap-1 py-6 mx-auto lg:gap-2`}>
        <MainLogo />
        <MainNav />
        <div className="hamburger-menu-icon">
          <IconHamburgerNav onClick={toggleMobileNav} />
        </div>
        <div className="hidden cross-menu-icon">
          <IconCrossNav onClick={toggleMobileNav} />
        </div>
        <div>
          <button onClick={toggleVisibilityHandler}>
            Toggle Visibility
          </button>
          {isVisible && (
            <div>
              <div className="hidden mobile-nav">
                <MobileNav />
              </div>
            </div>
          )}
       </div>
      </div>
    </header>
  )
}