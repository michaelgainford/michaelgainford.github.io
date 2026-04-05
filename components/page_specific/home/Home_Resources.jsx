import Link from "next/link";
import { featuredResourcesSortedByName } from "@/variables/DevResources";
import H2SectionHeader from "@/components/typography/H2_SectionHeader";
import Button from "@/components/buttons/Button";

export default function Component_FeaturedDevResources() {
	return (
		<div className="w-full rounded-xl border border-slate-800/80 bg-linear-to-br from-slate-950/70 via-slate-900/60 to-slate-950/70 p-4 sm:rounded-[1.5rem] sm:p-5 lg:p-6">
			<H2SectionHeader text="Featured Dev Resources" />
			<div className="grid justify-center grid-cols-2 gap-3 sm:gap-4 md:gap-5 xl:gap-6">
				{featuredResourcesSortedByName.map((resource, index) => (
					<Link
						href={resource.resourceData.url}
						key={index}
						className="group resource flex w-full items-center gap-3 rounded-lg border border-slate-700/70 bg-slate-900/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-500/80 hover:bg-slate-800/80 sm:gap-4 sm:rounded-xl sm:p-5 lg:p-6"
					>
						<span className="flex justify-center rounded-xl border border-white/10 bg-black/20 p-2 text-slate-300 sm:p-3">
							<span className="fill-white text-white size-6 xs:size-7 lg:size-8 3xl:size-10">
								<resource.resourceData.icon
									classes="h-auto size-6 xs:size-7 lg:size-8 3xl:size-10 fill-slate-300 transition duration-300 group-hover:fill-slate-100"
									fill={resource.resourceData.fill ? resource.resourceData.fill : "fill-slate-300"}
								/>
							</span>
						</span>
						<span className="w-full text-left text-[10px] tracking-[0.12em] text-slate-300 transition duration-300 group-hover:text-slate-100 sm:text-xs sm:tracking-[0.16em] xl:text-sm 2xl:text-base">
							{resource.name}
						</span>
					</Link>
				))}
			</div>
			<div className="flex justify-start mt-8 lg:mt-12">
				<Button
					href={`/web-development/dev-resources`}
					label={`View All Resources`}
					title={`View All Resources`}
					ariaLabel={`View All Resources`}
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