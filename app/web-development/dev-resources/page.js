//import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForDevResources from "@/components/data/DataForDevResources";

// sort aAtaForDevResources by name
const ResourcesSortedByName = DataForDevResources.sort((a, b) => a.name.localeCompare(b.name));

// get all the tags from the resources
const tags = ResourcesSortedByName.map((resource) => resource.tags).flat();
tags.sort();

// sort the tag by name


export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-graph-paper-background bg-teal-800 text-slate-300`}>

      <MainHeader />

      <main className={mainStyles}>
         <H1 text="Dev Resources" />
         <div className="flex flex-wrap justify-center gap-2 p-2 resource-tags lg:w-3/4">
          {Array.from(new Set(tags)).map((tag, index) => (
            <button className="border border-teal-950/50 bg-teal-500/50 py-1 px-2 rounded-lg tracking-wide text-[10px] text-teal-950" key={index}>{tag}</button>
          ))}
        </div>
        
         <div className="grid w-full grid-cols-2 pt-4 sm:grid-cols-3 sm:pt-6 lg:pt-16 resources md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-8 lg:gap-12">

          {ResourcesSortedByName.map((resource, index) => (
            <Link target="_blank" href={resource.url} key={index} className="flex flex-col items-center justify-center text-center duration-300 rounded-lg resource border-emerald-950 bg-emerald-950 hover:bg-gradient-to-b hover: hover:from-teal-800 hover:to-teal-950 text-white/80 group lg:aspect-square drop-shadow-lg !overflow-hidden">
              <div className="w-full bg-teal-700 rounded-t-lg resource-image aspect-[5/3] relative overflow-hidden">
              <Image src={resource.screenshot} alt={resource.name} className="z-0 w-full h-auto max-w-full overflow-hidden transition duration-300 rounded-t-lg group-hover:scale-125" height={300} width={500} /> 
              </div>
              <div className="grid w-full py-2 sm:space-y-4 divide-teal-900 grid-cols-1 resource-details grid-rows-[40px_1fr] z-30">
                <span className="w-full px-2 py-2 text-xs tracking-widest text-center uppercase max-sm:flex max-sm:items-center">{resource.name}</span>
                <div className="flex flex-col items-center justify-center w-full gap-2 pt-4 md:flex-row sm:flex sm:flex-wrap resource-tags">
                  {resource.tags.map((tag, index) => (
                    <span className=" py-1 px-2 rounded-lg tracking-wide text-[10px] border border-emerald-800 w-fit" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <MainFooter />
    </div>
  );
}