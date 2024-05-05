import Link from "next/link"

import { navigation } from "../data/Variables"
// filter navigation based on mainNav being true
const navLinks = navigation.filter((link) => link.mainNav === true)

// Create a variable to store navigational links


// Setup a components called MainNav 
export default function MainNav() {
  return (
    <nav className="flex justify-start items-center nav logo">
      <ul className="flex max-sm:justify-center items-center w-full gap-2 pt-6 sm:pt-0 max-md:overflow-auto text-[10px] md:text-xs tracking-wider uppercase lg:py-8 lg:justify-center lg:gap-7 no-scrollbar">
        {navLinks.map((link, index) => (
          <li key={index} className="">
            <Link className={`inline-block px-4 py-3 transition border sm:border-2 rounded-lg hover:text-slate-300 lg:px-12 lg:py-5 ${link.border} ${link.hover} min-w-max`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}