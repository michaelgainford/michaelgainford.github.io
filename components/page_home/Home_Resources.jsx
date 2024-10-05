import Link from 'next/link'
import DataForDevResources from '@/components/data/Data_For_DevResources';
import H2SectionHeader from '@/components/typography/H2SectionHeader';
import Button from "@/components/buttons/Button_Global";

const featuredResources = DataForDevResources.filter(resource => resource.featured === true);
const featuredResourcesSortedByName = featuredResources.sort((a, b) => a.name.localeCompare(b.name));

export default function HOME_RESOURCES () {
	return (
	<div className={`w-full resources-list`}>
		<H2SectionHeader text={`Featured Dev Resources`} />
		<div className={`grid justify-center grid-cols-2 gap-4 rounded-lg xl:gap-8 2xl:gap-12`}>
		{featuredResourcesSortedByName.map((resource, index) => (
			<Link href={resource.url} key={index} className={`flex items-center w-full p-4 text-lg transition border rounded-lg opacity-75 lg:gap-4 lg:p-6 xl:gap-8 resource border-slate-700 bg-gradient-to-b from-slate-900/40 to-slate-900/60 to-90% hover:opacity-100 hover:bg-slate-800 xl:px-8 group 2xl:py-8`}>
			<div className={`flex justify-center !text-white fill-white stroke-white`}>
				<span className={`text-white fill-white`}>
				<resource.icon classes={`w-8 h-auto fill-slate-400`}/>
				</span>
			</div>
			<span className={`px-4 text-[10px] leading-tight text-center tracking w-full tracking-wider uppercase group-hover:text-white md:text-xs lg:w-full lg:text-left`}>
				{resource.name}
			</span>
			</Link>
		))}  
		</div>
		<div className={`flex justify-start mt-8 lg:mt-12`}>
			<Button label={`See All`} title={`See More Resources`} href={`/web-development/dev-resources`} />
		</div>
	</div>
	)
}