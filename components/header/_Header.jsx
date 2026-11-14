"use client";

import { useEffect, useRef, useState } from "react";
import MainLogo from "@/components/header/MainLogo";
import MainNav from "@/components/header/MainNav";
import MainMobileNav from "@/components/header/MainMobile";
import IconHamburgerNav from "@/components/icons/IconHamburgerNav";

export default function Component_Header() {
	const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
	const menuButtonRef = useRef(null);
	const mobileNavRef = useRef(null);
	const closeButtonRef = useRef(null);

	const toggleMobileNav = () => {
		setIsMobileNavVisible((isVisible) => !isVisible);
	};

	const closeMobileNav = () => {
		setIsMobileNavVisible(false);
	};

	useEffect(() => {
		if (!isMobileNavVisible) return;

		const previousOverflow = document.body.style.overflow;
		const mobileNav = mobileNavRef.current;
		const menuButton = menuButtonRef.current;
		const closeButton = closeButtonRef.current;
		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsMobileNavVisible(false);
		};

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);
		closeButton?.focus();

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);

			if (mobileNav?.contains(document.activeElement)) {
				menuButton?.focus();
			}
		};
	}, [isMobileNavVisible]);

	return (
		<header className="w-full">
			<div className="header-content w-[90%] md:w-[92%] lg:w-[95%] max-w-500 flex flex-row justify-between gap-1 py-6 mx-auto sm:items-center lg:gap-2">
				<MainLogo />
				<MainNav />
				<button
					ref={menuButtonRef}
					type="button"
					className="hamburger-menu-icon cursor-pointer lg:hidden fill-current!"
					onClick={toggleMobileNav}
					aria-label={isMobileNavVisible ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isMobileNavVisible}
					aria-controls="mobile-navigation"
				>
					<IconHamburgerNav />
				</button>
				<MainMobileNav
					isVisible={isMobileNavVisible}
					onClose={closeMobileNav}
					mobileNavRef={mobileNavRef}
					closeButtonRef={closeButtonRef}
				/>
			</div>
		</header>
	);
}
