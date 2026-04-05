import Link from "next/link";
import H2SectionHeader from "@/components/typography/H2_SectionHeader";
import { featuredProjects } from "@/variables/Data";

const spotlightProject =
	featuredProjects.find((project) => project.name === "Movies Database") ||
	featuredProjects[0];

export default function Component_HomeSpotlight() {
	if (!spotlightProject) {
		return null;
	}

	return (
		<section className="w-full pb-8 lg:pb-12 xl:pb-16 hidden">
			<H2SectionHeader text="Current Spotlight" />
			<div className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-5 sm:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-8 xl:p-8">
				<div className={`relative flex min-h-[220px] flex-col justify-center overflow-hidden rounded-[1.5rem] border bg-linear-to-br p-5 sm:p-6 ${spotlightProject.border} ${spotlightProject.hover} from-slate-900/80 to-slate-950/90`}>
					<div className="absolute -top-10 right-2 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
					<div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
					<div className="relative mx-auto flex w-full max-w-md flex-col items-center text-center">
						<p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 sm:text-xs">
							Featured project
						</p>
						<div className={`mt-5 inline-flex rounded-3xl border border-white/10 bg-black/20 p-6 ${spotlightProject.group}`}>
							<spotlightProject.icon
								fill={spotlightProject.fill}
								classes={`h-14 w-auto fill-slate-300 sm:h-16 ${spotlightProject.groupHover}`}
							/>
						</div>
						<p className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-500">
							{spotlightProject.category}
						</p>
						<h3 className="mt-2 text-2xl text-slate-100 sm:text-3xl">
							{spotlightProject.name}
						</h3>
						<p className="mt-4 max-w-xs text-sm leading-7 tracking-wide text-slate-400">
							A quick way into this section with the main page and key related content.
						</p>
					</div>
				</div>

				<div className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-slate-800 bg-slate-950/60 p-5 sm:p-6">
					<div className="space-y-4">
						<p className="text-[10px] uppercase tracking-[0.35em] text-amber-400 sm:text-xs">
							Why it is on the home page
						</p>
						<h3 className="text-xl leading-tight text-slate-100 sm:text-2xl xl:text-3xl">
							A broader entry point into the movie side of the site.
						</h3>
						<p className="text-sm leading-7 tracking-wide text-slate-400 sm:text-base">
							{spotlightProject.description}
						</p>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<Link
							href={spotlightProject.href}
							className="inline-flex items-center justify-center rounded-sm border border-amber-500/40 bg-amber-500 px-5 py-3 text-xs tracking-[0.24em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 lg:text-sm"
						>
							Open Project
						</Link>
						<Link
							href="/projects"
							className="inline-flex items-center justify-center rounded-sm border border-slate-700 bg-slate-900 px-5 py-3 text-xs tracking-[0.24em] text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 lg:text-sm"
						>
							See All Projects
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}