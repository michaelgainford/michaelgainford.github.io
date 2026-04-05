import Link from "next/link";
import H2SectionHeader from "@/components/typography/H2_SectionHeader";
import Button from "@/components/buttons/Button";
import { featuredProjects } from "@/variables/Data";

export default function Component_FeaturedProjects() {
	return (
		<div className="w-full rounded-xl border border-slate-800/80 bg-linear-to-br from-slate-950/70 via-slate-900/60 to-slate-950/70 p-4 projects-list sm:rounded-[1.5rem] sm:p-5 lg:p-6">
			<H2SectionHeader text={`Featured Dev Projects`} />
			{/* Featured Projects Grid */}
			<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 xl:gap-6">
				{featuredProjects.map((project, index) => (
					<Link
						key={index}
						href={project.href}
						className="group project flex aspect-3/2 flex-col items-center justify-center gap-3 rounded-lg border border-slate-700/70 bg-slate-900/45 p-3 text-center tracking-wide transition duration-300 hover:-translate-y-1 hover:border-slate-500/80 hover:bg-slate-800/80 sm:gap-4 sm:rounded-xl sm:p-4"
					>
						<span className="flex w-[30%] justify-center items-end sm:w-[28%] md:w-[24%]">
							<project.icon
								fill={project.fill}
								classes="h-8 w-auto fill-slate-300 transition duration-300 group-hover:fill-slate-100 sm:h-11 md:h-14 2xl:h-16 3xl:h-20"
							/>
						</span>
						<span className="text-[10px] tracking-[0.12em] text-slate-300 transition duration-300 group-hover:text-slate-100 sm:text-xs sm:tracking-[0.18em] md:text-sm 2xl:text-base">
							{project.name}
						</span>
					</Link>
				))}
			</div>
			{/* View All Projects Button */}
			<div className="flex justify-start mt-8 lg:mt-12">
				<Button
					href={`/projects`}
					label={`View All Projects`}
					title={`View All Projects`}
					ariaLabel={`View All Projects`}
					background_colour={`bg-slate-800`}
					border_colour={`border-slate-700`}
					hover_background_colour={`hover:bg-amber-500`}
					text_colour={`text-current`}
					hover_text_colour={`hover:text-slate-900`}
					after={`after:content-['→'] after:ml-2`}
				/>
			</div>
		</div>
	);
}