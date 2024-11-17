import Link from 'next/link'
import DataForDevResources from '@/data/Data_For_DevResources';
import H2SectionHeader from '@/components/typography/H2SectionHeader';
import Button from "@/components/buttons/Button_Global";

const featuredResources = DataForDevResources.filter(resource => resource.featured === true);
const featuredResourcesSortedByName = featuredResources.sort((a, b) => a.name.localeCompare(b.name));
const buttonLabel = `View All Resources`;

export default function COMPONENT_HOME_RESOURCES () {
	return (
	<div className="w-full max-sm:mt-4">
		<H2SectionHeader text="Featured Dev Resources" />
		<div className="grid justify-center grid-cols-2 gap-4 rounded-lg xl:gap-8 2xl:gap-12 motion motion-preset-slide-up motion-delay-[1000ms]">
		{featuredResourcesSortedByName.map((resource, index) => (
			<Link href={resource.url} key={index} className="flex items-center w-full p-4 text-lg transition border rounded-lg opacity-75 gap-2 lg:gap-4 lg:p-6 xl:gap-8 resource border-slate-700/50 bg-gradient-to-b from-slate-900/40 to-slate-900/60 to-90% hover:opacity-100 hover:bg-slate-800 xl:px-8 group 2xl:py-8 motion motion-preset-slide-up motion-delay-[1000ms] xl:border-4 xl:border-slate-700/30">
				<span className="flex justify-center !text-white fill-white stroke-white">
					<span className="text-white fill-white size-6 xs:size-7 lg:size-8 3xl:size-12 ">
						<resource.icon classes={`size-6 xs:size-7 lg:size-8 3xl:size-12 h-auto`} fill={resource.fill ? icon.fill : 'fill-slate-400'} />
					</span>
				</span>
				<span className="px-4 text-[10px] leading-tight text-left tracking w-full tracking-wider group-hover:text-white md:text-xs lg:w-full xl:text-sm 2xl:text-base">
					{resource.name}
				</span>
			</Link>
		))}  
		</div>
		<div className="flex justify-start mt-8 lg:mt-12 motion motion-preset-slide-up motion-delay-[1200ms]">
			<Button 
			  label={buttonLabel}
			  title={buttonLabel}
			  href={`/web-development/dev-resources`} 
			  background_colour={`bg-slate-800`}
			  border_colour={`border-slate-700`} 
			  hover_background_colour={`hover:bg-amber-500`}
			  text_colour={`text-current`}
			  hover_text_colour={`hover:text-slate-900`}
			/>
		</div>
	</div>
	)
}