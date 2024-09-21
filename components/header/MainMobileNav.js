"use client";

import { useState } from 'react';
import Link from "next/link"
import DataForNavigation from "../data/DataForNavigation"
import MainLogo from "./MainLogo"
import IconCrossNav from "../icons/IconCrossNav"
const navLinks = DataForNavigation.filter((link) => link.mainNav === true)

export default function MainMobileNav({ isVisible, toggleVisibility }) {
  return (
    <div className={`mobile-nav absolute inset-0 z-50 w-full h-full p-8 bg-slate-900 ${isVisible ? '' : 'hidden'}`}>
      <MainLogo />
      <div className={`flex justify-end`}>
        <div className={`cursor-pointer`} onClick={toggleVisibility}>
          <IconCrossNav />
        </div>
      </div>
      <nav className={`flex h-full border nav logo border-emerald-500`}>
        <ul className={`flex flex-col justify-center items-stretch pt-6 sm:pt-0 max-md:overflow-auto text-[14px] md:text-xs tracking-wider uppercase lg:py-8 lg:justify-center w-full gap-8 h-full border border-emerald-400`}>
          {navLinks.map((link, index) => (
            <li key={index} className={`flex border border-rose-500`}>
              <Link className={`px-4 py-3 transition border-l w-full hover:text-slate-300 lg:px-4p lg:py-5 text-center ${link.border_colour} ${link.hover} min-w-max duration-300`} href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}