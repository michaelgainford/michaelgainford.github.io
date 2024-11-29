import Link from "next/link";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { brandPageBackground, brandTextColour, globalPageStyles, mainStyles } from "@/data/Variables";

export const metadata = {
	title: "404 Not Found",
	description: "This page does not exist. Please go to the home page or check out one of these pages instead.",
};


const OtherPages = [
	{
		title: "Projects",
		description: "View a list of projects that I have completed, generally about things of interest to me. This ranges from a variety of topics, including web development, gaming, football and more.",
		link: "/projects"
	},
	{
		title: "About",
		description: "This is a page that includes information about me, the site, the technologies used to build it, and the purpose of the site.",
		link: "/general/about"
	},
	{
		title: "Dev Resources",
		description: "A list of resources that I have found useful in my journey as a web developer. This includes websites, tools, and other resources that I have found useful and hope you do too.",
		link: "/web-development/dev-resources"
	},
	{
		title: "Premier League",
		description: "A featured project of mine that displays information about the English Premier League, including the current standings, fixtures, and results.",
		link: "/projects/football/competitions/english-premier-league"
	}
]

export default function PAGE_404() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={mainStyles}>
				<div className="flex flex-col w-full gap-12 mt-8 text-center max-lg:flex-col">
					<div className="border border-transparent text-wrapper w-full bg-amber-500/5 text-slate-300 lg:max-w-[50dvw] mx-auto p-8 flex flex-col gap-6 rounded-lg justify-start hover:border-amber-500 duration-500 transition-all">
						<h1 className="mx-auto text-xl font-bold lg:text-4xl lg:w-fit">
							Sorry! &#128557; This page does not exist.
						</h1>
						<p className="mx-auto text-base lg:text-2xl text-balance w-fit">Go to the <Link href="/" className="underline transition-all duration-500 underline-offset-4 hover:text-amber-500 ">home page</Link> or check out one of these pages instead.</p>
					</div>
					<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:my-8 [&_.flex]:items-center [&_.flex]:rounded-lg [&_.flex]:transition-all [&_.flex]:duration-500 [&_.flex]:border [&_.flex]:border-slate-500/20 [&_.flex:2xl]:aspect-square [&_.flex:hover]:bg-amber-500/5 [&_.flex:hover]:border-amber-500">
					{OtherPages.map((page, index) => {
						return (
							<li key={index}>
								<Link className="flex flex-col items-start justify-start gap-8 p-8 border 2xl:h-full xl:aspect-square group/link" href={page.link}>
									<h2 className="text-lg font-bold xl:text-2xl text-amber-500/50 group-hover/link:text-amber-500">{page.title}</h2>
									<p className="px-2 text-sm/5">{page.description}</p>
									<span className="px-4 py-2 text-sm transition-all duration-500 border rounded-lg border-slate-500/20 hover:border-amber-500">View {page.title} page</span>
								</Link>
							</li>
						)
					}
					)}
					</ul>
				</div>
			</main>
			<Footer />
		</div>
	);
}