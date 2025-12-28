import Link from "next/link";
import Image from "next/image";
import DevResourcesDataJSON from "@/data/data_for__devresources.json";
const DevResourcesData = DevResourcesDataJSON.DevResources;

const ResourcesSortedByName = DevResourcesData.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const tags = ResourcesSortedByName.map((resource) => resource.tags).flat();
tags.sort();

export default function Component_DevResourcesGrid() {
  return (
    <>
      <div className="resources w-full grid pt-4 md:pt-6 lg:pt-16  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-6 md:gap-8 lg:gap-12 [&>a]:flex [&>a]:flex-row [&>a]:sm:flex-col">
        {ResourcesSortedByName.map((resource, index) => (
          <details key={index} className="group items-center justify-center text-center rounded-lg resource border-emerald-950 bg-emerald-950 group drop-shadow-lg overflow-hidden! border text-white/80 hover:bg-linear-to-b hover:from-teal-800 hover:to-teal-950 md:relative transition-all duration-1000 p-4 hover:cursor-pointer">
            <summary className="flex flex-col items-start gap-1 xl:gap-2">
              <span className="text-lg text-left xl:text-xl">{resource.name}</span>
              <div className="flex gap-1">
              {resource.tags.map((tag, index) => (
                <span
                  data-resource-tag={tag}
                  className="py-1 px-2 rounded-lg tracking-wide text-xs border border-emerald-800 w-fit"
                  key={index}
                >
                  {tag}
                </span>
              ))}  
              </div>           
            </summary>
            <Image
                src={resource.screenshot}
                alt={resource.name}
                className="z-0 w-full h-full object-cover max-w-full overflow-hidden transition duration-300 md:rounded-t-base lg:opacity-90 group-hover:opacity-100 aspect-4/3 sm:aspect-5/3 mt-8 my-1 rounded-lg"
                height={320}
                width={600}
                priority={index < 5}
              />
              <p className="w-full text-sm px-2 leading-relaxed mt-4 text-left mb-4">
              {resource.description}
            </p>
          </details>
        ))}
      </div>
      <h2 className="pb-4 mt-16">Tags</h2>
      <div className="flex flex-wrap justify-center gap-2 p-2 resource-tags-all lg:w-3/4">
        {Array.from(new Set(tags)).map((tag, index) => (
          <button
            className="border border-teal-950/50 bg-teal-500/50 py-1 px-2 rounded-lg tracking-wide text-[10px] text-teal-950"
            key={index}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
}
