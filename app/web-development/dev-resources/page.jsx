import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import PageIntro from "@/components/site_elements/Page_Intro";
import DataForDevResources from "@/data/Data_For_DevResources";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

export const metadata = {
	title: `Dev Resources`,
	description: `A collection of some of my favourite web development resources that I use in my standard workflow. This is a links to a series of tools and resources.`
};

{/* Sort the resources by name */}
const ResourcesSortedByName = DataForDevResources.sort((a, b) => a.name.localeCompare(b.name));
{/* Create an array of tags */}
const tags = ResourcesSortedByName.map((resource) => resource.tags).flat();
tags.sort();

const pageIntroText = `A collection of some of my favourite web development resources that I use in my standard workflow. This is a links to a series of tools and resources.`;

export default function PAGE_DEV_RESOURCES() {
    return (
        <div className={`${globalPageStyles} bg-graph-paper-background bg-teal-900/90 text-slate-300`}>
            <Header />
            <main className={mainStyles}>
                <H1 text={`Dev Resources`} />
				<PageIntro 
				  text={pageIntroText} 
				  text_colour={`font-current`} 
				  font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6`}
				  other_classes={`!max-w-[800px] !text-balance !text-center !md:-mt-4 !xl:text-base/6`} />
                <div 
				  className={`
				    grid w-full grid-cols-2 pt-4 resources gap-x-4 gap-y-8 
					sm:pt-6 sm:grid-cols-3 
					md:gap-8 md:grid-cols-3 
					lg:grid-cols-4 lg:gap-12 lg:pt-16 motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500
				  `}
				>
				  {ResourcesSortedByName.map((resource, index) => (
					<Link 
					  key={index} 
					  target={`_blank`} 
					  href={resource.url} 
					  className={`
					    flex flex-col items-center justify-center text-center duration-300 rounded-lg resource border-emerald-950 bg-emerald-950 group drop-shadow-lg !overflow-hidden border text-white/80 
						hover:bg-gradient-to-b hover:from-teal-800 hover:to-teal-950 
					  `}
					  title={resource.description? resource.description : resource.name}
					>
						<div className={`relative w-full overflow-hidden bg-teal-700 rounded-t-lg resource-image`}>
							<Image 
							  src={resource.screenshot} 
							  alt={resource.name} 
							  className={`z-0 w-full max-w-full overflow-hidden transition duration-300 rounded-t-lg group-hover:scale-125`} 
							  height={320} 
							  width={600} 
							  priority={index < 5} 
							/> 
						</div>
						<div 
						  className={`
						    grid w-full divide-teal-900 grid-cols-1 resource-details grid-rows-[40px_1fr] z-30 py-4 sm:space-y-4
						  `}
						>
							<span 
							  className={`
							    flex justify-center w-full px-2 py-2 text-xs tracking-normal text-center uppercase mb-2 
								lg:text-sm lg:tracking-wider
							  `}
							>
								{resource.name}
							</span>
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
				<h2 className={`mt-16 pb-4`}>Tags</h2>
                <div className={`flex flex-wrap justify-center gap-2 p-2 resource-tags-all lg:w-3/4`}>
                {Array.from(new Set(tags)).map((tag, index) => (
                    <button 
					  className={`border border-teal-950/50 bg-teal-500/50 py-1 px-2 rounded-lg tracking-wide text-[10px] text-teal-950`} 
					  key={index}
					>
                        {tag}
                    </button>
                ))}
                </div>
            </main>
        <Footer />
    </div>
  );
}