import Link from "next/link"
import DataForAllProjects from "@/components/data/Data_For_Projects";
import H2SectionHeader from "@/components/typography/H2SectionHeader";
import Button from "@/components/buttons/Button_Global";

const featuredProjects = DataForAllProjects.filter(project => project.featuredProject === true);

export default function HOME_PROJECTS() {
	return (
		<div className={`w-full projects-list`}>
			<H2SectionHeader text={`Featured Projects`} />
			<div className={`grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 md:gap-8 lg:gap-8 lg:grid-cols-2 xl:gap-12 2xl:grid-cols-2`}>
			{featuredProjects.map((project, index) => (
				<Link
				  key={index}
				  href={project.href}
				  className={`flex flex-col items-center justify-center font-light tracking-wide transition border rounded-lg ${project.border} ${project.group} project ${project.hover} bg-gradient-to-b from-slate-900/40 to-slate-900/60 hover:opacity-100 sm:p-4 aspect-[3/2] 2xl:border-2 group border-opacity-50  bg-slate-800/30`}>
					<span 
					  className={`flex w-[27%] md:w-[23%] xl:w-[20%] justify-center items-end ${project.groupHover} h-1/2`} >  
						<project.icon 
							fill={`${project.fill}`} 
							classes={`size-7 lg:size-12 2xl:size-16 fill-slate-400 flex justify-center`}/>
					</span>
					<span 
					  className={`text-xs tracking-wider text-center h-1/2 -mt-1 sm:pt-1 flex items-center group-hover:text-white md:text-sm max-lg:text-slate-400 lg:text-base`}>
						{project.name}
					</span>
				</Link>
			))}
			</div>
			<div className={`flex justify-start mt-8 lg:mt-12`}>
				<Button label={`View All Projects`} title={`View All Projects`} href={`/projects`} />
			</div>
		</div>
	)
}