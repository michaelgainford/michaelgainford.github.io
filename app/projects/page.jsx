import Link from "next/link";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

import DataForProjects from "@/data/Data_For_Projects";
{/* Sort the projects by name... */}
DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
{/* ...and then by archived status */}
DataForProjects.sort((a, b) => a.archived - b.archived);

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const pageIntroText = `A collection of projects that I have worked on, that are a part of this website. Some of these projects are still in progress, like my digital garden. Different plants needing tending to in different way. Each project has a brief description and a category that it belongs to. Click on a project to learn more about it.`;

export default function PAGE_PROJECTS() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>
				
				<H1 text={`All Projects`} />
				
				<PageIntro 
				  text={pageIntroText}
				  classes_text_colour={`font-current`}
				  classes_text_alignment={`!text-center !text-balance`}
				  classes_font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6`}
				  classes_font_styling={`font-medium tracking-wider`}
				  classes_width={`max-[80dvw] lg:!max-w-[800px]`}
				  classes_margin={`!md:-mt-4 mb-12`}
				  classes_other={``}
				/>

				<div className="grid flex-wrap w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 3xl:grid-cols-5 2xl:gap-16 motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-50">
					{DataForProjects.map((project, index) => (
					<Link key={index} href={project.href} className={`border ${project.border} ${project.hover} ${project.color} h-full rounded-lg space-y-4 gap-4 flex flex-col justify-between bg-transparent max-sm:w-[80%] max-sm:mx-auto hover:transition duration-500 ${project.archived ? `opacity-50` : ``} cursor-pointer group`}>
						<span className={`flex justify-center items-center gap-2 lg:gap-4 pt-4 rounded-t-md py-4 ${project.bg} bg-opacity-80 group-hover:bg-opacity-100`}>
							<span className={`icon-box size-4 rounded-full ${project.bg} flex items-center justify-center ${project.color}`}>
								<span className="flex items-center justify-center gap-4 size-4">
									<project.icon fill={`fill-current`} className={`stroke-slate-300 fill-current`} />
								</span>
							</span>
							<h2 className="text-xs font-medium uppercase xl:text-sm 2xl:text-base">{project.name}</h2>
						</span>
						<span className="flex flex-col justify-between gap-5 px-4 pb-6 text-slate-200">
							<span className="flex justify-center text-xs tracking-wider text-center text-current text-balance">
								<span className="leading-normal text-center line-clamp-2">{project.description}</span>
							</span>
							<span className="flex items-end justify-center">
								<span className={`p-1 text-xs tracking-wider lowercase border ${project.border} rounded`}>
									{project.category}
								</span>
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