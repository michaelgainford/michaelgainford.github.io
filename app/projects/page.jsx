import Link from "next/link";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

import DataForProjects from "@/components/data/Data_For_Projects";
{/* Sort the projects by name... */}
DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
{/* ...and then by archived status */}
DataForProjects.sort((a, b) => a.archived - b.archived);

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const pageIntroText = `A collection of some of my favourite web development projects that I have worked on. This is a links to a series of projects.`;

export default function PAGE_PROJECTS() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			<main className={`${mainStyles}`}>
				
				<H1 text={`All Projects`} />
				
				<PageIntro 
				  text={pageIntroText} 
				  text_colour={`font-current`}
				  font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6`}
				  other_classes={`!max-w-[800px] !text-balance !text-center !md:-mt-4`}
				/>

				<div className={`grid flex-wrap w-full grid-cols-1 gap-6 xs:grid-cols-2 xs:gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-5 2xl:gap-16`}>
					{DataForProjects.map((project, index) => (
					<Link key={index} href={project.href} className={`border ${project.border} ${project.bg} ${project.hover} ${project.color} h-full p-4 rounded-lg space-y-4 gap-4 flex flex-col justify-between ${project.archived ? `opacity-50` : ``}`}>
						<span className={`flex flex-col items-center gap-3`}>
							<h2 className={`text-xs uppercase`}>{project.name}</h2>
							<span className={`flex items-center gap-4 size-8`}>
								<project.icon fill={`fill-current`} className={`stroke-slate-300 fill-current`} />
							</span>
						</span>
						<span className={`flex flex-col justify-between gap-4`}>
							<span className={`flex justify-center text-xs tracking-wider text-center text-balance`}>
								<span className={`line-clamp-2 text-center`}>{project.description}</span>
							</span>
							<span className={`flex items-end justify-center`}>
								<span className={`p-1 text-xs tracking-wider lowercase border ${project.border} rounded`}>{project.category}</span>
							</span>
						</span>
					</Link>
					))}
				</div>

			</main>
			<Footer />
		</div>
	);
}