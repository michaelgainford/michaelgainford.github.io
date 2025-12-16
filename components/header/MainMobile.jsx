"use client";
import { useState } from "react";

import Link from "next/link";
import DataForMainNavJSON from "@/data/data_for__sitemap.json";
const DataForMainNav = DataForMainNavJSON.Pages;
import MainLogo from "./MainLogo";
import IconCrossNav from "../icons/IconCrossNav";
import { brandTextColour } from "@/data/Variables";
const mobileNavLinks = DataForMainNav.filter((link) => link.mainNav === true);

// get all links get that contain the string '/projects/' and store for later
const projectsLinks = DataForMainNav.filter((link) =>
  link.href.includes("/projects/")
);

export default function MAIN_MOBILE({ isVisible, toggleVisibility }) {
  // set a state that tracks sub menu visibility so when the Projects link is clicked, the .projects-sub-menu hidden class is toggled
  const [isProjectsSubMenuVisible, setIsProjectsSubMenuVisible] =
    useState(false);

  // toggle the sub menu visibility
  const toggleProjectsSubMenu = () => {
    setIsProjectsSubMenuVisible(!isProjectsSubMenuVisible);
  };

  // if the sub menu is visible, add the hidden class to the sub menu
  const projectsSubMenuVisibility = isProjectsSubMenuVisible ? `` : `hidden`;
  return (
    <div
      className={`mobile-nav absolute inset-0 right-4 z-99 w-full h-full p-8 bg-slate-900 lg:hidden flex flex-col gap-8 overflow-y-auto ${brandTextColour} ${
        isVisible ? `` : `hidden`
      }`}
    >
      <div className={`grid grid-cols-1 gap-8 grid-rows-[60px_1fr] h-full`}>
        <div className={`flex text-center justify-center mb-4 pt-8`}>
          <MainLogo />
          <div className={`flex justify-end`}>
            <div
              className={`cursor-pointer absolute top-5 right-[17px] -mt-1.5`}
              onClick={toggleVisibility}
            >
              <IconCrossNav />
            </div>
          </div>
        </div>
        <nav className={`flex flex-col justify-start nav logo rounded-lg`}>
          <ul
            className={`flex flex-col items-stretch max-md:overflow-auto text-[14px] md:text-xs tracking-wider uppercase lg:py-8 lg:justify-center w-full gap-4 h-full`}
          >
            {mobileNavLinks.map((link, index) => (
              <li
                key={index}
                className={`flex mb-4 ${
                  link.label === `Projects` ? `flex-col` : ``
                }`}
                onClick={() => { 
                  setTimeout(() => { 
                    toggleVisibility();
                  },
                  1000);
                }}
              >
                <Link
                  className={`px-4 py-3 transition border-l-4 w-full hover:text-slate-300 lg:px-4 lg:py-5 text-center ${link.border_colour} ${link.hover} min-w-max duration-300 capitalize`}
                  href={link.href}
                  onClick={isProjectsSubMenuVisible}
                >
                  {link.label === `Projects` ? <>{link.label}</> : link.label}
                </Link>
                {link.label === `Projects` && (
                  <ul
                    className={`projects-sub-menu flex flex-col justify-center items-stretch max-md:overflow-auto md:text-xs tracking-wider uppercase lg:py-8 lg:justify-center w-full gap-1 h-full text-[10px]`}
                  >
                    {projectsLinks.map((link, index) => (
                      <li key={index} className={`flex`}>
                        <Link
                          className={`px-4 py-3 transition w-full hover:text-slate-300 lg:px-4 lg:py-5 text-center ${link.border_colour} ${link.hover} min-w-max duration-300 capitalize`}
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
