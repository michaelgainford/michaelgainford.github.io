import Image from "next/image";
import Link from "next/link";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Button from "@/components/buttons/Button_Global";
import Footer from "@/components/footer/Footer";
import Icons_Skills from "@/components/icons/Icons_Skills";
import Icons_Socials from "@/components/icons/Icons_Socials";
import RandomJokeGenerator from "@/components/RandomJokeGenerator";

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">
					Site Maintenance Tracker
				</div>

			</main>

			<Footer />

		</div>
	);
}