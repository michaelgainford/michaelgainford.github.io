import Link from "next/link";
import { dataForAllProjects } from "@/variables/Data"
dataForAllProjects.sort((a, b) => a.name.localeCompare(b.name))
dataForAllProjects.sort((a, b) => a.projectStatus.archived - b.projectStatus.archived)

export default function Component_ProjectsGrid() {
	return (
		<div className="relative w-full flex sm:grid overflow-x-auto gap-8 md:gap-8 lg:gap-8 2xl:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 snap-x snap-always snap-mandatory pb-4">
			{dataForAllProjects.map((project, index) => (
			<Link
				key={index}
				href={project.href}
				className={`border ${project.border} ${project.hover} ${project.card_colour} h-full rounded-md space-y-6 flex flex-col justify-between max-sm:min-w-[300px] max-sm:mx-auto transition-all hover:transition duration-700 ${project.projectStatus.archived ? `opacity-50` : ``} cursor-pointer group xl:border-2 py-2 md:py-4 xl:py-8 ${project.bg} snap-always snap-start`}
			>
				<span className={`flex flex-col justify-end items-center gap-3 lg:gap-4 pt-4 rounded-t-sm py-4 border-b ${project.border} ${project.projectsCard.textColour}`}>
					<span className="flex items-center justify-center gap-4 size-8 lg:size-10 2xl:size-12">
						<project.icon
							fill="currentColor"
							className={`stroke-slate-300 fill-current`}
						/>
					</span>
					<h2 className="text-sm xl:text-base 2xl:text-lg uppercase text-center font-medium tracking-wide  mb-3">
						{project.name}
					</h2>
				</span>
				<span className={`flex flex-col justify-start gap-5 px-4 pb-6 ${project.card_colour} xl:px-8 2xl:px-12 2xl:pb-12`}>
					<p className="leading-relaxed text-center text-xs lg:text-sm tracking-wider text-current text-balance line-clamp-2 px-4">
						{project.description}
					</p>
					<span className="flex items-end justify-center">
						<span
							className={`p-1 text-xs tracking-wider lowercase border ${project.border} rounded-sm`}
						>
							{project.category}
						</span>
					</span>
				</span>
			</Link>
			))}
		</div>
	)
}