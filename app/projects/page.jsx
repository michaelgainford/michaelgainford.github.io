import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

import DataForProjects from "@/components/data/Data_For_Projects";
DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
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
				  font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6`}
				  other_classes={`!max-w-[800px] !text-balance !text-center !md:-mt-4 !xl:text-base/6`}
				/>
				<div className={`grid flex-wrap w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-5 2xl:gap-16`}>
					{DataForProjects.map((project, index) => (
					<a key={index} href={project.href} className={`border ${project.border} ${project.bg} ${project.hover} ${project.color} h-full p-4 rounded-lg space-y-4 divide-y ${project.divider} ${project.archived ? `opacity-50` : ``}`}>
						<div className={`flex items-center gap-3`}>
							<span className={`flex items-center w-6 h-6 gap-4`}>
								<project.icon className={`w-6 h-6 stroke-slate-300 fill-current`} />
							</span>
							<h2 className={`text-xs`}>{project.name}</h2>
						</div>
						<div className={`flex justify-start pt-6 pb-2 text-xs tracking-wider text-left`}>
							<p className={`line-clamp-2`}>{project.description}</p>
						</div>
						<div className={`flex items-end justify-start pt-4 category`}>
							<span className={`p-1 text-xs tracking-wider lowercase border ${project.border} rounded`}>{project.category}</span>
						</div>
					</a>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}