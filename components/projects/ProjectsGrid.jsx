import Link from "next/link";
import { dataForAllProjects } from "@/data/Variables"
dataForAllProjects.sort((a, b) => a.name.localeCompare(b.name))
dataForAllProjects.sort((a, b) => a.archived - b.archived)

export default function Component_ProjectsGrid() {
	return (
		<div className="grid flex-wrap w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 3xl:grid-cols-5 2xl:gap-16 relative">
			{dataForAllProjects.map((project, index) => (
			<Link
				key={index}
				href={project.href}
				className={`border ${project.border} ${project.hover} ${project.color} h-full rounded-lg space-y-8 flex flex-col justify-between bg-transparent max-sm:w-[80%] max-sm:mx-auto transition-all hover:transition duration-[700ms] ${project.archived ? `opacity-50` : ``} cursor-pointer group xl:border-2`}
			>
				<span className={`flex justify-center items-center gap-2 lg:gap-4 pt-4 rounded-t-sm py-4 ${project.bg}`}>
					<span className="flex items-center justify-center gap-4 size-4 lg:size-5 2xl:size-6">
						<project.icon
							fill={`fill-current`}
							className={`stroke-slate-300`}
						/>
					</span>
					<h2 className="text-xs font-medium xl:text-sm 2xl:text-lg">
						{project.name}
					</h2>
				</span>
				<span className="flex flex-col justify-between gap-5 px-4 pb-6 text-slate-200">
					<p className="leading-relaxed text-center text-sm tracking-wider text-current text-balance line-clamp-2">
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