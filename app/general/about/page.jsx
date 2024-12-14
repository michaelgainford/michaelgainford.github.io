import { globalPageStyles, mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Card_AboutMe from "@/components/cards/Card_AboutMe";
import Card_Tools from "@/components/cards/Card_Tools";
import Card_MySites from "@/components/cards/Card_MySites";
import Card_IconsSkills from "@/components/icons/Icons_Skills";
import Card_IconsSocials from "@/components/icons/Icons_Socials";
import Card_RandomJoke from "@/components/cards/Card_RandomJoke";
import Footer from "@/components/footer/Footer";

const pageStyles = "bg-slate-900 text-slate-400 bg-brand-background bg-repeat";
const sharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";

export const metadata = {
	title: "About",
	description: "Michael is a Front-End Developer with over 15 years experience in a wide range of frontend technologies. He is passionate about creating beautiful and functional websites that are easy to use and accessible to all users. He regularly keeps up to date with the latest web technologies and best practices to ensure that he is always delivering the best possible solutions to his clients. He is always looking for new opportunities to work on exciting projects and expand his skillset."
};

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={`${mainStyles}`}>
				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">
					<div className="grid grid-cols-12 gap-8 xl:gap-y-24 3xl:gap-24 max-lg:mt-8">
						<Card_AboutMe />
						<Card_Tools />
						<Card_MySites />
						<Card_IconsSkills 
						  heading="Site Built Using" 
						  heading_styles={sharedHeadingStyles} 
						/>
						<Card_IconsSocials 
						  heading="Connect" 
						  heading_styles={sharedHeadingStyles}
						/>
						<Card_RandomJoke />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}