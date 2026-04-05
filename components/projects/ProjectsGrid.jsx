import Link from "next/link";
import { dataForAllProjects } from "@/variables/Data";

const sortedProjects = [...dataForAllProjects].sort((leftProject, rightProject) => {
	if (leftProject.projectStatus.archived !== rightProject.projectStatus.archived) {
		return Number(leftProject.projectStatus.archived) - Number(rightProject.projectStatus.archived);
	}

	return leftProject.name.localeCompare(rightProject.name);
});

export default function Component_ProjectsGrid() {
	return (
		<div className="relative flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-7 3xl:grid-cols-5">
			{sortedProjects.map((project, index) => (
				<Link
					key={index}
					href={project.href}
					className={`group flex h-full min-h-[22rem] snap-start flex-col justify-between overflow-hidden rounded-[1.4rem] border border-slate-800 bg-linear-to-br from-slate-950/95 via-slate-950/88 to-slate-900/90 transition duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-900/95 max-sm:min-w-[300px] max-sm:mx-auto ${project.projectStatus.archived ? "opacity-50" : ""}`}
				>
					<div className="h-1 w-full bg-linear-to-r from-white/0 via-white/10 to-white/0" />
					<div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
						<div className="flex items-start justify-between gap-4">
							<div className={`inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-400 ${project.projectStatus.archived ? "opacity-80" : ""}`}>
								<span className={`h-2 w-2 rounded-full ${project.color}`} />
								<span>{project.category}</span>
							</div>
							{project.projectStatus.archived ? (
								<span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-500">
									Archived
								</span>
							) : null}
						</div>

						<div className="flex flex-1 flex-col items-center justify-center gap-5 py-8 text-center sm:py-10">
							<div className={`flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-slate-800 bg-slate-900/80 transition duration-300 group-hover:border-slate-700 ${project.color}`}>
								<project.icon
									fill="currentColor"
									classes="h-11 w-auto fill-current transition duration-300 group-hover:scale-105 sm:h-12"
								/>
							</div>
							<div className="space-y-3">
								<h2 className="text-lg font-medium tracking-[0.16em] text-slate-100 sm:text-xl">
									{project.name}
								</h2>
								<p className="mx-auto max-w-[24ch] text-sm leading-7 tracking-wide text-slate-400 line-clamp-3 sm:text-[15px]">
									{project.description}
								</p>
							</div>
						</div>

						<div className="flex items-center justify-between gap-4 border-t border-slate-800/80 pt-4 text-[11px] uppercase tracking-[0.28em] text-slate-500">
							<span>Open Project</span>
							<span className="text-slate-400 transition duration-300 group-hover:text-slate-200">→</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}