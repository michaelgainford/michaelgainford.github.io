import Link from "next/link";
import Image from "next/image";
import { devResources } from "@/data/Variables";

const ResourcesSortedByName = devResources.sort((a, b) =>
  a.name.localeCompare(b.name)
);
const tags = ResourcesSortedByName.map((resource) => resource.tags).flat();
tags.sort();

export default function COMPONENT_ALL_PROJECTS() {
  return (
    <>
      <div className="grid w-full pt-4 resources gap-x-4 gap-y-6 md:pt-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 lg:pt-16">
        {ResourcesSortedByName.map((resource, index) => (
          <Link
            key={index}
            target="_blank"
            href={resource.url}
            className="flex flex-row md:flex-col items-center justify-center text-center rounded-lg resource border-emerald-950 bg-emerald-950 group drop-shadow-lg !overflow-hidden border text-white/80 hover:bg-linear-to-b hover:from-teal-800 hover:to-teal-950 md:relative transition-all duration-500"
            title={resource.description ? resource.description : resource.name}
          >
            <div className="w-full max-md:flex flex-row md:flex-col">
              <div className="md:w-full overflow-hidden bg-teal-700 md:rounded-t-lg resource-image">
                <Image
                  src={resource.screenshot}
                  alt={resource.name}
                  className="z-0 w-full h-full object-cover max-w-full overflow-hidden transition duration-300 md:rounded-t-lg lg:opacity-75 group-hover:opacity-100"
                  height={320}
                  width={600}
                  priority={index < 5}
                />
              </div>
              <div className="grid w-full divide-teal-900 grid-cols-1 resource-details grid-rows-[40px_1fr] z-30 py-4 gap-y-4 @container">
                <span className="flex justify-center w-full px-2 py-2 text-xs tracking-normal text-center uppercase lg:text-sm lg:tracking-wider">
                  {resource.name}
                </span>
                <div className="flex flex-wrap items-center justify-center w-full gap-2 resource-tags">
                  {resource.tags.map((tag, index) => (
                    <span
                      data-resource-tag={tag}
                      className="py-1 px-2 rounded-lg tracking-wide text-[10px] border border-emerald-800 w-fit"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="max-md:hidden absolute inset-0 bg-emerald-950 translate-y-[100%] transition-all duration-700 group-hover:translate-y-0 flex rounded-t-lg px-4 items-center justify-center h-full flex-col my-auto gap-8">
              <p className="text-sm px-2 leading-relaxed">
                {resource.description}
              </p>
              <span className="border px-4 py-2 flex gap-1.5 rounded-lg text-center justify-center w-fit mx-auto transition-all duration-300 text-sm uppercase group-hover:bg-teal-100 group-hover:text-teal-950 after:content-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)]">
                View {resource.name}
              </span>
            </div>
          </Link>
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
