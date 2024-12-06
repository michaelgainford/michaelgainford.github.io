import Link from "next/link";
import { globalPageStyles, mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Card_AboutMe from "@/components/cards/Card_AboutMe";
import Card_Tools from "@/components/cards/Card_Tools";
import Card_MySites from "@/components/cards/Card_MySites";
import Card_IconsSkills from "@/components/icons/Icons_Skills";
import Card_IconsSocials from "@/components/icons/Icons_Socials";
import RandomJokeGenerator from "@/components/RandomJokeGenerator";
import Footer from "@/components/footer/Footer";

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

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
						<Card_IconsSkills data-card="built with" heading="Site Built Using" heading_styles={sharedHeadingStyles} />
						<Card_IconsSocials data-card="socials" heading="Connect" heading_styles={sharedHeadingStyles} />
						<div data-card="joke" className="col-span-12 px-6 py-12 text-xs text-left transition-all duration-500 border lg:px-12 md:col-span-5 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10 group-hover/joke:border-slate-500/10 group/gift">
							<h2 className={`${sharedHeadingStyles} group-hover/gift:border-amber-500/80`}>
								Something for you
							</h2>
							<div className="flex flex-col gap-8 p-8 mt-8 text-center border rounded-sm joke border-slate-200/20 bg-amber-500/5! hover:border-amber-500! group/joke mb-4">
								<div className="flex flex-col items-center justify-center p-4 space-y-4 text-center rounded-lg">
									<RandomJokeGenerator />
								</div>
							</div>
							<p className="mt-4 text-center text-xs/6 text-balance">
								That random joke from my <Link href="/projects/jokes" className="underline transition-all duration-500 underline-offset-2 hover:text-amber-500">Jokes page</Link> is just a little appreciation for you getting this far. Thank you for visiting, I hope you found something that you liked.
							</p>
						</div>
					</div>
				</div>

			</main>

			<Footer />

		</div>
	);
}