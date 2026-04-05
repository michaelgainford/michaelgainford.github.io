"use client";

import Link from "next/link";
import { dataForAllProjects } from "@/variables/Data";
import { devResources } from "@/variables/DevResources";

function timeBasedGreeting() {
	const date = new Date();
	const hours = date.getHours();

	if (hours < 12) {
		return "Good morning";
	}

	if (hours < 18) {
		return "Good afternoon";
	}

	return "Good evening";
}

const activeProjects = dataForAllProjects.filter(
	(project) => project.projectStatus.archived === false
);
const highlightedProjects = activeProjects.filter(
	(project) => project.projectStatus.featuredProject === true
);
const categories = new Set(activeProjects.map((project) => project.category));

const statItems = [
	{
		label: "Projects",
		value: activeProjects.length.toString().padStart(2, "0")
	},
	{
		label: "Resources",
		value: devResources.length.toString().padStart(2, "0")
	},
	{
		label: "Categories",
		value: categories.size.toString().padStart(2, "0")
	}
];

const primaryLinkStyles =
	"inline-flex items-center justify-center rounded-sm border border-amber-500/40 bg-amber-500 px-5 py-3 text-[11px] tracking-[0.18em] text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-400 sm:px-6 sm:text-xs sm:tracking-[0.24em] lg:text-sm";
const secondaryLinkStyles =
	"inline-flex items-center justify-center rounded-sm border border-slate-700 bg-slate-900/70 px-5 py-3 text-[11px] tracking-[0.18em] text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 sm:px-6 sm:text-xs sm:tracking-[0.24em] lg:text-sm";

export default function Component_HomePageIntro() {
	return (
		<section className="relative w-full pt-10 pb-10 lg:pt-14 lg:pb-14 xl:pt-16 xl:pb-16">
			<div className="absolute inset-x-0 top-4 -z-10 h-48 rounded-[2rem] bg-linear-to-r from-amber-500/10 via-transparent to-sky-500/10 blur-3xl" />
			<div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)] xl:gap-8">
				<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-5 sm:rounded-[1.5rem] sm:p-8 xl:p-10">
					<div className="absolute -top-8 right-0 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
					<div className="absolute bottom-0 left-8 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
					<div className="relative flex h-full flex-col justify-between gap-8">
						<div className="space-y-5">
						<p className="text-[10px] uppercase tracking-[0.18em] text-amber-400 sm:text-xs sm:tracking-[0.35em]">
								{timeBasedGreeting()} and welcome
							</p>
							<div className="space-y-4">
								<h1 className="max-w-3xl text-xl leading-tight text-slate-100 text-balance sm:text-3xl lg:text-4xl xl:text-5xl">
									A personal web development site built to collect projects, useful tools, and the ideas behind them.
								</h1>
								<p className="max-w-2xl text-sm leading-6 tracking-normal text-slate-400 sm:text-base sm:leading-7 sm:tracking-wide xl:text-lg">
									michaelgainford.dev brings together original builds, football and movie side projects, and a curated set of development resources in one place. Start with the highlights, or dive straight into the full library.
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
							<Link href="/projects" className={primaryLinkStyles}>
								Browse Projects
							</Link>
							<Link href="/web-development/dev-resources" className={secondaryLinkStyles}>
								Explore Resources
							</Link>
							<Link href="/general/about" className={secondaryLinkStyles}>
								About This Site
							</Link>
						</div>
					</div>
				</div>

				<div className="grid gap-4 grid-cols-1 lg:grid-cols-1">
					<div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 sm:rounded-[1.25rem] sm:p-6">
					<p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.35em]">
						Site Snapshot
					</p>
					<div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
						{statItems.map((item, index) => (
							<div key={item.label} className={`rounded-lg border border-slate-800 bg-slate-900/80 p-3 sm:rounded-xl sm:p-4 ${index === 2 ? 'hidden sm:block' : ''}`}>
								<p className="text-2xl text-slate-100 sm:text-3xl">{item.value}</p>
								<p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
									{item.label}
								</p>
							</div>
						))}
					</div>
					</div>

					<div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 sm:rounded-[1.25rem] sm:p-6 lg:min-h-[220px]">
					<p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.35em]">
						What You Can Expect
					</p>
					<div className="mt-4 space-y-4 text-xs leading-6 tracking-normal text-slate-400 sm:text-sm sm:leading-7 sm:tracking-wide">
							<p>
								Featured work that changes as the site grows, rather than a static landing page.
							</p>
							<p>
								A mix of original projects, experiments, and curated references that are actually useful during development.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}