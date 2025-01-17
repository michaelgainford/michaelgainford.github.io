import Link from "next/link"
import H2SectionHeader from "@/components/typography/H2_SectionHeader";
import Button from "@/components/buttons/Button";
import { featuredProjects } from "@/variables/Data";

export default function COMPONENT_HOME_PROJECTS() {
	return (
		<div className="w-full projects-list">
			<H2SectionHeader text="Featured Dev Projects" />
			<div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 md:gap-8 lg:gap-8 lg:grid-cols-2 xl:gap-12 2xl:grid-cols-2">
			{featuredProjects.map((project, index) => (
				<Link
					key={index}
					href={project.href}
					className={`flex flex-col items-center border justify-center font-light tracking-wide transition-all duration-300 rounded-lg ${project.border} ${project.group} project ${project.hover} bg-linear-to-b from-slate-900/40 to-slate-900/60 aspect-3/2 group border-opacity-50 bg-slate-800/30 sm:aspect-square sm:gap-2 sm:p-2 md:aspect-3/2 md:p-4 xl:border-2 hover:opacity-100 2xl:border-opacity-30 3xl:border-4 space-y-4`}
				>
					<span className={`flex w-[27%] justify-center items-end md:w-[23%] xl:w-[20%] ${project.groupHover}`}>  
						<project.icon 
						  fill={project.fill}
						  classes="h-7 fill-slate-400 flex justify-center lg:h-12 2xl:h-16 w-auto"
						/>
					</span>
					<span className="flex items-start -mt-1 text-xs tracking-wider text-center group-hover:text-white sm:pt-1 max-lg:text-slate-400 lg:text-sm 2xl:text-base 3xl:text-lg">
						{project.name}
					</span>
				</Link>
			))}
			</div>
			<div className="flex justify-start mt-8 lg:mt-12">
				<Button 
					href="/projects"
					label="View All Projects"
					title="View All Projects" 
					ariaLabel="View All Projects"
					background_colour="bg-slate-800"
					border_colour="border-slate-700" 
					hover_background_colour="hover:bg-amber-500"
					text_colour="text-current"
					hover_text_colour="hover:text-slate-900"
				/>
			</div>
		</div>
	)
}