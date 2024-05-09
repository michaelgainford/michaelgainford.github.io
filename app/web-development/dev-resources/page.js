//import Image from "next/image";
import Link from "next/link";
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

// sort the tags alphabetically
tags.sort();

export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-gradient-to-t from-teal-900/80 to-teal-700 text-slate-300`}>

      <MainHeader />

      <main className={mainStyles}>
         <H1 text="Dev Resources" />
         <div className="flex flex-wrap justify-center gap-2 p-2 resource-tags lg:w-3/4">
          {Array.from(new Set(tags)).map((tag, index) => (
            <button className="border border-teal-950/50 bg-teal-500/50 py-1 px-2 rounded-lg tracking-wide text-[10px] text-teal-950" key={index}>{tag}</button>
          ))}
        </div>
        
         <div className="grid w-full grid-cols-2 pt-4 sm:pt-6 lg:pt-16 resources md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 border-rose-500 gap-x-4 gap-y-8 md:gap-8 lg:gap-12">

          {ResourcesSortedByName.map((resource, index) => (
            <Link target="_blank" href={resource.url} key={index} className="flex items-center justify-center px-2 text-center duration-300 border rounded-lg resource border-emerald-950 bg-emerald-950 hover:bg-emerald-800 text-white/80 group aspect-square drop-shadow-lg">
              <div className="hidden w-full bg-teal-700 rounded-t-lg resource-image aspect-square">
                {/* <Image src={`/resource-screenshots/screenshot-of-${resource.image}.png`} alt={resource.name} width={250} height={200} className="object-cover w-full h-full transition rounded-t-lg lg:opacity-20 group-hover:opacity-100" /> */}
              </div>
              <div className="py-2 resource-details gap-y-4">
                <span className="py-2 text-xs tracking-widest text-center uppercase">{resource.name}</span>
                <div className="flex flex-wrap justify-center gap-2 p-2 resource-tags">
                  {resource.tags.map((tag, index) => (
                    <span className="border border-emerald-800 py-1 px-2 rounded-lg tracking-wide text-[10px]" key={index}>{tag}</span>
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