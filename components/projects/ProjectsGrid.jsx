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
		<div className="relative grid w-full gap-5 pb-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-7  xL;grid-cols-4 3xl:grid-cols-5">
			{sortedProjects.map((project, index) => (
				<article
					key={index}
					className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-slate-800 bg-linear-to-br from-slate-950/95 via-slate-950/88 to-slate-900/90 transition duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-900/95 sm:min-h-88 ${project.projectStatus.archived ? "opacity-50" : ""}`}
				>
					<div className="h-1 w-full bg-linear-to-r from-white/0 via-white/10 to-white/0" />
					<div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
						<div className="flex items-start justify-between gap-4">
							<div className={`inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-28 text-slate-400 ${project.projectStatus.archived ? "opacity-80" : ""}`}>
								<span className={`h-2 w-2 rounded-full ${project.color}`} />
								<span>{project.category}</span>
							</div>
							{project.projectStatus.archived ? (
								<span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-28 text-slate-500">
									Archived
								</span>
							) : null}
						</div>

						<div className="flex flex-1 items-center gap-5 py-6 sm:flex-col sm:justify-center sm:py-10 sm:text-center">
							<div className={`flex h-16 w-16 xl:size-32 shrink-0 items-center justify-center rounded-[1.4rem] border border-slate-800 bg-slate-900/80 transition duration-300 group-hover:border-slate-700 sm:h-20 sm:w-20 ${project.color}`}>
								<project.icon
									fill="currentColor"
									classes="h-9 w-auto fill-current transition duration-300 group-hover:scale-105 sm:h-12 lg:h-16"
								/>
							</div>
							<div className="min-w-0 space-y-3">
								<h2 className="text-lg font-medium tracking-em-16 text-slate-100 sm:text-xl">
									{project.name}
								</h2>
								<p className="mx-auto hidden max-w-[24ch] text-sm leading-7 tracking-wide text-slate-400 sm:line-clamp-3 sm:text-sm-plus">
									{project.description}
								</p>
							</div>
						</div>

						<details className="group/details mb-4 sm:hidden">
							<summary className="cursor-pointer text-xxs-plus uppercase tracking-em-28 text-slate-400">
								<span className="group-open/details:hidden">Read more</span>
								<span className="hidden group-open/details:inline">Read less</span>
								<span className="sr-only"> about {project.name}</span>
							</summary>
							<p className="mt-3 text-sm leading-7 tracking-wide text-slate-400">{project.description}</p>
						</details>

						<Link href={project.href} className="flex items-center justify-between gap-4 border-t border-slate-800/80 pt-4 text-xxs-plus uppercase tracking-em-28 text-slate-500 sm:after:absolute sm:after:inset-0">
							<span>Open Project</span>
							<span className="sr-only">: {project.name}</span>
							<span className="text-slate-400 transition duration-300 group-hover:text-slate-200">→</span>
						</Link>
					</div>
				</article>
			))}
		</div>
	);
}