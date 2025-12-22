import Link from "next/link";
import { dataForAllProjects } from "@/variables/Data"
dataForAllProjects.sort((a, b) => a.name.localeCompare(b.name))
dataForAllProjects.sort((a, b) => a.archived - b.archived)

export default function Component_ProjectsGrid() {
	return (
		<div className="flex overflow-x-auto sm:grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 3xl:grid-cols-5 2xl:gap-16 relative snap-left snap-mandatory">
			{dataForAllProjects.map((project, index) => (
			<Link
				key={index}
				href={project.href}
				className={`border ${project.border} ${project.hover} ${project.card_colour} h-full rounded-lg space-y-8 flex flex-col justify-between max-sm:min-w-[300px] max-sm:mx-auto transition-all hover:transition duration-700 ${project.archived ? `opacity-50` : ``} cursor-pointer group xl:border-2 py-8 ${project.bg}`}
			>
				<span className={`flex flex-col justify-center items-center gap-2 lg:gap-4 pt-4 rounded-t-sm py-4 border-b ${project.border}`}>
					<span className="flex items-center justify-center gap-4 size-16">
						<project.icon
							fill={`fill-current`}
							className={`stroke-slate-300`}
						/>
					</span>
					<h2 className="text-lg uppercase font-medium xl:text-sm 2xl:text-lg">
						{project.name}
					</h2>
				</span>
				<span className={`flex flex-col justify-start gap-5 px-4 pb-6 ${project.card_colour} xl:px-8 2xl:px-12 2xl:pb-12`}>
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