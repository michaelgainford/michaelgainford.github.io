"use client";

import { useState } from "react";
import MainLogo from "@/components/header/MainLogo";
import MainNav from "@/components/header/MainNav";
import MainMobileNav from "@/components/header/MainMobile";
import IconHamburgerNav from "@/components/icons/IconHamburgerNav";

export default function Component_Header() {
	const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

	const toggleMobileNav = () => {
		setIsMobileNavVisible(!isMobileNavVisible);
		const body = document.querySelector("body");
		if (isMobileNavVisible) {
			body.style.overflow = "auto";
		} else {
			body.style.overflow = "hidden";
		}
	}

	return (
		<header className="w-full">
			<div className="header-content w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-row justify-between gap-1 py-6 mx-auto sm:items-center lg:gap-2">
				<MainLogo />
				<MainNav />
				<div
					className="hamburger-menu-icon cursor-pointer lg:hidden fill-current!"
					onClick={toggleMobileNav}
				>
					<IconHamburgerNav />
				</div>
				<MainMobileNav
					isVisible={isMobileNavVisible}
					toggleVisibility={toggleMobileNav}
				/>
			</div>
		</header>
	);
}
