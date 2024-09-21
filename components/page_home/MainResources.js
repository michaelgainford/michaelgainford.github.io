import Link from 'next/link'
import DataForDevResources from '@/components/data/DataForDevResources'
import H2SectionHeader from '@/components/typography/H2SectionHeader'
import Button from '@/components/buttons/StandardButton'

const featuredResources = DataForDevResources.filter(resource => resource.featured === true);
const featuredResourcesSortedByName = featuredResources.sort((a, b) => a.name.localeCompare(b.name));

export default function MainResources() {
  return (
    <div className={`w-full resources-list`}>
      <H2SectionHeader text="Featured Dev Resources" />
      <div className={`grid justify-center grid-cols-2 gap-4 border rounded-lg lg:p-8 border-slate-800/50 bg-slate-800/30 xl:gap-6`}>
        {featuredResourcesSortedByName.map((resource, index) => (
          <Link href={resource.url} key={index} className={`flex items-center w-full p-4 text-lg transition border rounded-lg opacity-75 lg:gap-4 lg:p-6 xl:gap-8 resource border-slate-700 bg-gradient-to-b from-slate-900/40 to-slate-900/60 to-90% hover:opacity-100 hover:bg-slate-800 xl:px-8 group`}>
            <div className={`flex justify-center !text-white fill-white stroke-white`}>
              <span className={`text-white fill-white`}>
                <resource.icon classes={`w-8 h-auto fill-slate-100`}/>
              </span>
            </div>
            <span className={`px-4 text-[10px] md:text-xs leading-tight text-center lowercase lg:w-full tracking w-full tracking-wider lg:text-left italic group-hover:text-white`}>
              {resource.name}
            </span>
          </Link>
        ))}  
      </div>
      <div className={`flex justify-start mt-8 lg:mt-12`}>
        <Button label="See All" title="See More Resources" href="/web-development/dev-resources" />
      </div>
    </div>
  )
}