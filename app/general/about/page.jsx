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

const MySites = [
	{
		name: "Fairway Golf Holidays",
		image: "/my-sites/fairway-golf-holidays.webp",
		alt: "Fairway Golf Holidays",
		description: "Fairway Golf Group Holidays",
	},
	{
		name: "Michael Gainford Portfolio",
		image: "/my-sites/michael-gainford-portfolio.webp",
		alt: "Michael Gainford Portfolio",
		description: "Michael Gainford Portfolio",
	},
	{
		name: "Golf Membership",
		image: "/my-sites/golf-membership.webp",
		alt: "Golf Membership",
		description: "Golf Membership North West",
	},
];

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">
					<div className="grid grid-cols-12 gap-8 xl:gap-y-16 3xl:gap-24 max-lg:mt-8">
						<div data-card="about-me" className="flex flex-col items-center col-span-12 py-12 text-xs transition-all duration-500 border rounded xxs:px-6 md:col-span-8 md:p-8 border-slate-500/10 hover:bg-slate-500/10 group/about hover:border-amber-500 2xl:py-16 xl:col-span-5">
							<h1 className={`${sharedHeadingStyles} group-hover/about:border-amber-500/80`}>
								About Me
							</h1>
							<p className="text-center lg:text-left max-lg:px-4 text-sm/5 lg:text-lg/8">
								My name is Michael. I am Front-End Developer with over 15 years experience in a wide range of frontend technologies. I am passionate about creating beautiful and functional websites that are easy to use and accessible to all users. I regularly keep up to date with the latest web technologies and best practices to ensure that I am always delivering the best possible solutions to my clients. I am always looking for new opportunities to work on exciting projects and expand my skillset.
							</p>
							<div className="flex max-lg:px-4 justify-start mt-8 lg:mt-12 motion motion-preset-slide-up motion-delay-[1200ms]">
								<Button 
									href="#socials"
									label="Connect"
									title="Connect" 
									ariaLabel="Connect"
									background_colour="bg-slate-800"
									border_colour="border-slate-700" 
									hover_background_colour="hover:bg-amber-500"
									text_colour="text-current"
									hover_text_colour="hover:text-slate-900 ml-0 mx-auto"	
								/>
							</div>
						</div>
						<div data-card="tools" className="col-span-12 px-6 py-12 text-xs transition-all duration-500 border rounded-lg md:col-span-4 xl:col-span-3 something-3 border-slate-500/10 group/tools hover:border-amber-500 lg:p-8 2xl:py-16">
							<h2 className={`${sharedHeadingStyles} group-hover/tools:border-amber-500/80`}>Tools I Made</h2>
							<ul className="flex flex-col gap-4 lg:gap-8 [&_li]:flex [&_a]:border  text-left [&_a]:border-slate-500/50 [&_a]:p-3 [&_a]:rounded-lg [&_a]:w-full [&_li]:w-full [&_a]:lg:py-4 [&_li]:bg-slate-600/10 lg:text-base">
								<li>
									<Link href="/tools/url-converter" className="flex h-full transition-all duration-500 hover:bg-amber-500 hover:text-slate-950">
										URL Concatenator
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
							</ul>
						</div>
						<div data-card="other sites" className="col-span-12 md:col-span-12 px-6 py-12 max-lg:px-0 md:p-8 text-xs border rounded-lg something-2 border-slate-500/10 [&_.site-image]:aspect-square flex flex-col hover:border-amber-500 duration-500 transition-all xl:col-span-4  hover:bg-slate-500/10 2xl:py-16 2xl:pr-0 group/other_sites">
							<h2 className={`${sharedHeadingStyles} group-hover/other_sites:border-amber-500/80 lg:-translate-x-6`}>Other Sites</h2>
							<div className="flex w-full h-full grid-cols-2 gap-6 overflow-scroll no-scrollbar flex-nowrap 2xl:gap-12">
								{MySites.map((site, index) => (
									<div key={index} className="first:col-span-2 grid-item group">
										<div className="w-full border rounded-lg site border-slate-200/20 site-image bg-slate-600/10 aspect-square hover:bg-slate-900">
											<Image src={site.image} alt={site.alt} className="object-cover w-full h-full transition-all duration-500 lg:rounded-t-md opacity-50 hover:opacity-100 min-w-[240px]" width={400} height={300} title={site.description} />
											<p className="py-4">{site.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						
						<Icons_Skills data-card="built with" heading="Site Built Using" heading_styles={sharedHeadingStyles} />

						<Icons_Socials data-card="socials" heading="Socials" heading_styles={sharedHeadingStyles} />
						<div data-card="joke" className="col-span-12 px-6 py-12 text-xs text-left transition-all duration-500 border lg:px-12 md:col-span-5 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10 group-hover/joke:border-slate-500/10 group/gift">
							<h2  className={`${sharedHeadingStyles} group-hover/gift:border-amber-500/80`}>Something for you</h2>
							<p className="text-sm/6">If you have got this far, then all I can is <q>Thank You</q>. Here is a random joke selected from my <Link href="/projects/jokes">Jokes page</Link>.</p>
							<div className="flex flex-col gap-8 p-8 mt-8 text-center border rounded joke border-slate-200/20 !bg-amber-500/5 hover:!border-amber-500 group/joke">
								<RandomJokeGenerator />
							</div>

						</div>
					</div>
					

				</div>

			</main>

			<Footer />

		</div>
	);
}