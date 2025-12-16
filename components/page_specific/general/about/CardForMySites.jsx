import Image from "next/image";
import { mySites, sharedHeadingStyles } from "@/data/Variables";

export default function Component_CardMySites() {
	return (
		<div
			data-card="other sites"
			className="col-span-12 md:col-span-12 px-6 py-12 max-lg:px-0 md:p-8 text-xs border rounded-lg something-2 border-slate-500/10 [&_.site-image]:aspect-300/169 flex flex-col hover:border-amber-500 duration-500 transition-all xl:col-span-4  hover:bg-slate-500/10 2xl:py-16 2xl:pr-0 group/sites"
		>
			<h2
				className={`${sharedHeadingStyles} group-hover/sites:border-amber-500/80 lg:-translate-x-6`}
			>
				Other Sites
			</h2>
			<div className="flex w-full h-full grid-cols-2 gap-6 overflow-scroll no-scrollbar flex-nowrap 2xl:gap-12">
				{mySites.map((site, index) => (
					<div key={index} className="first:col-span-2 grid-item group">
						<div className="w-full border rounded-lg site border-slate-200/20 site-image bg-slate-600/10 aspect-3/2 hover:bg-slate-900">
							<Image
								src={site.image}
								alt={site.alt}
								className="object-cover w-full h-full transition-all duration-500 lg:rounded-t-md opacity-50 hover:opacity-100 min-w-[200px] lg:min-w-[300px]"
								width={300}
								height={169}
								title={site.description}
							/>
							<p className="py-4">{site.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
