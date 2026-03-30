import Link from "next/link";
import { featuredResourcesSortedByName } from "@/variables/DevResources";
import H2SectionHeader from "@/components/typography/H2_SectionHeader";
import Button from "@/components/buttons/Button";

export default function Component_FeaturedDevResources() {
	return (
		<div className="w-full max-sm:mt-4">
			<H2SectionHeader text="Featured Dev Resources" />
			<div className="grid justify-center grid-cols-2 gap-4 rounded-lg xl:gap-8 2xl:gap-12">
				{featuredResourcesSortedByName.map((resource, index) => (
					<Link
						href={resource.resourceData.url}
						key={index}
						className="flex items-center w-full p-4 sm:py-8 text-lg transition-all duration-300 border rounded-lg gap-2 lg:gap-4 lg:px-6 xl:gap-8 resource border-slate-400/28 bg-linear-to-br from-slate-700/30 via-slate-700/20 to-slate-600/14 hover:from-slate-600/38 hover:to-slate-500/28 hover:border-slate-300/40 shadow-[inset_0_1px_0_rgba(226,232,240,0.1)] backdrop-blur-sm hover:backdrop-blur-md xl:px-8 group 2xl:py-8 xl:border-2"
					>
						<span className="flex justify-center text-slate-200! fill-white stroke-white">
							<span className="text-slate-50 fill-slate-50 size-6 xs:size-7 lg:size-8 3xl:size-12 transition-colors duration-300 group-hover:text-white group-hover:fill-white">
								<resource.resourceData.icon
									classes="size-6 xs:size-7 lg:size-8 3xl:size-12 h-auto"
									fill={resource.resourceData.fill ? resource.resourceData.fill : "fill-slate-400"}
								/>
							</span>
						</span>
						<span className="px-4 text-[10px] leading-tight text-left tracking w-full tracking-wider text-slate-100 transition-colors duration-300 group-hover:text-white sm:text-xs lg:w-full xl:text-sm 2xl:text-base">
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