import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import DataForDevResources from "@/components/data/Data_For_DevResources";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

const ResourcesSortedByName = DataForDevResources.sort((a, b) => a.name.localeCompare(b.name));
const tags = ResourcesSortedByName.map((resource) => resource.tags).flat();
tags.sort();

export default function PAGE_DEV_RESOURCES() {
    return (
        <div className={`${globalPageStyles} bg-graph-paper-background bg-teal-800 text-slate-300`}>
            <Header />
            <main className={mainStyles}>
                <H1 text={`Dev Resources`} />
                <div className={`flex flex-wrap justify-center gap-2 p-2 resource-tags-all lg:w-3/4`}>
                {Array.from(new Set(tags)).map((tag, index) => (
                    <button 
                        className={`border border-teal-950/50 bg-teal-500/50 py-1 px-2 rounded-lg tracking-wide text-[10px] text-teal-950`} 
                        key={index}>
                        {tag}
                    </button>
                ))}
                </div>
                <div className={`grid w-full grid-cols-2 pt-4 resources gap-x-4 gap-y-8 sm:pt-6 sm:grid-cols-3 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 lg:pt-16 xl:grid-cols-5 2xl:grid-cols-6`}>
					{ResourcesSortedByName.map((resource, index) => (
						<Link 
							key={index} 
							target={`_blank`} 
							href={resource.url} 
							className={`flex flex-col items-center justify-center text-center duration-300 rounded-lg resource border-emerald-950 bg-emerald-950 hover:bg-gradient-to-b hover: hover:from-teal-800 hover:to-teal-950 text-white/80 group drop-shadow-lg !overflow-hidden border`}>
							<div className={`relative w-full overflow-hidden bg-teal-700 rounded-t-lg resource-image`}>
								<Image src={resource.screenshot} alt={resource.name} className={`z-0 w-full max-w-full overflow-hidden transition duration-300 rounded-t-lg group-hover:scale-125`} height={300} width={300} priority={index < 5} /> 
							</div>
							<div className={`grid w-full divide-teal-900 grid-cols-1 resource-details grid-rows-[40px_1fr] z-30 py-4 sm:space-y-4`}>
								<span className={`flex justify-center w-full px-2 py-2 text-xs tracking-widest text-center uppercase`}>{resource.name}</span>
								<div className={`flex flex-wrap items-center justify-center w-full gap-2 resource-tags`}>
								{resource.tags.map((tag, index) => (
									<span 
									data-resource-tag={tag} 
									className={`py-1 px-2 rounded-lg tracking-wide text-[10px] border border-emerald-800 w-fit`} 
									key={index}>
									{tag}
									</span>
								))}
								</div>
							</div>
						</Link>
					))}
                </div>
            </main>
        <Footer />
    </div>
  );
}