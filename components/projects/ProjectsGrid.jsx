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
		<div className="relative grid w-full gap-5 pb-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-7 xl:grid-cols-4 3xl:grid-cols-5">
			{sortedProjects.map((project, index) => (
				<article
					key={index}
					className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-slate-800 bg-linear-to-br from-slate-950/95 via-slate-950/88 to-slate-900/90 transition duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-900/95 sm:min-h-88 ${project.projectStatus.archived ? "opacity-50" : ""}`}
				>
					<div className="h-1 w-full bg-linear-to-r from-white/0 via-white/10 to-white/0" />
					<div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-7">
						<div className="hidden items-start justify-between gap-4 sm:flex">
							<div className={`inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-28 text-slate-400 ${project.projectStatus.archived ? "opacity-80" : ""}`}>
								<span>{project.category}</span>
							</div>
							{project.projectStatus.archived ? (
								<span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-28 text-slate-500">
									Archived
								</span>
							) : null}
						</div>

						<div className="flex flex-1 items-center gap-5 pb-4 lg:pt-6 sm:flex-col sm:justify-center sm:py-10 sm:text-center">
							<div className={`flex size-12 lg:size-24 xl:size-32 shrink-0 items-center justify-center rounded-[1.4rem] border border-slate-800 bg-slate-900/80 transition duration-300 group-hover:border-slate-700 sm:h-20 sm:w-20 ${project.color}`}>
								<project.icon
									fill="currentColor"
									classes="size-12 lg:size-24 xl:size-32 w-auto fill-current transition duration-300 group-hover:scale-105 sm:h-12 lg:h-16"
								/>
								
							</div>
							<div className="min-w-0 space-y-2">
								<h2 className="text-base font-medium tracking-em-8 lg:text-2xl mb-1 flex flex-col items-center max-sm:mb-1 after:lg:mt-2 after:lg:mb-1 after:lg:rounded after:lg:h-1 after:lg:w-8 after:lg:block after:lg:bg-slate-700">
									{project.name}
								</h2>
								<div className="flex flex-wrap items-start gap-3 sm:hidden">
									<div className={`inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-12 text-slate-400 ${project.projectStatus.archived ? "opacity-80" : ""}`}>
										<span>{project.category}</span>
									</div>
									{project.projectStatus.archived ? (
										<span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xxs uppercase tracking-em-28 text-slate-500">
											Archived
										</span>
									) : null}
								</div>
								<p className="mx-auto hidden max-w-[24ch] text-sm leading-7 tracking-wide text-slate-400 sm:line-clamp-3">
									{project.description}
								</p>
							</div>
						</div>

						<div className="relative">
							<details className="group/details sm:hidden peer">
								<summary className="inline-flex cursor-pointer list-none rounded border border-slate-800/80 p-2 text-xxs-plus uppercase tracking-em-28 text-slate-500 [&::-webkit-details-marker]:hidden">
									<span className="group-open/details:hidden">Read more</span>
									<span className="hidden group-open/details:inline">Read less</span>
									<span className="sr-only"> about {project.name}</span>
								</summary>
								<p className="mt-3 text-sm leading-7 tracking-wide text-slate-400">{project.description}</p>
							</details>

							<Link href={project.href} className="flex items-center justify-between gap-4 border sm:border-b-0 sm:border-x-0 sm:border-t border-slate-800/80 text-xxs-plus uppercase tracking-em-28 text-slate-500 sm:after:absolute sm:after:inset-0 max-sm:absolute max-sm:right-0 max-sm:bottom-0 p-2 rounded sm:pt-6 peer-open:hidden">
								<span>Open Project</span>
								<span className="sr-only">: {project.name}</span>
								<span className="transition duration-300 group-hover:text-slate-200 text-sm lg:text-lg">→</span>
							</Link>
						</div>
					</div>
				</article>
			))}
		</div>
	);
}