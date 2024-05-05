import Link from 'next/link'
import DataForDevResources from '@/components/data/DataForDevResources'
import H2SectionHeader from '@/components/typography/H2SectionHeader'
import Button from '@/components/buttons/StandardButton'

const featuredResources = DataForDevResources.filter(resource => resource.featured === true);
const featuredResourcesSortedByName = featuredResources.sort((a, b) => a.name.localeCompare(b.name));

export default function MainResources() {
  return (
    <div className="w-full resources-list">
      <H2SectionHeader text="Featured Dev Resources" />
      <div className="grid grid-cols-2 justify-center gap-4 xl:gap-6">
        {featuredResourcesSortedByName.map((resource, index) => (
          <Link href={resource.url} key={index} className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-6 xl:gap-12 resource border-slate-700 bg-slate-900 hover:bg-slate-900 w-full p-4 xl:px-8">
            <div className="flex justify-center !text-white fill-white stroke-white">
              <span className="fill-white text-white">
                <resource.icon classes="size-8 fill-slate-100"/>
              </span>
            </div>
            <span className="px-4 text-[10px] md:text-xs leading-tight text-center uppercase lg:w-full tracking w-full tracking-wider lg:text-left italic">
              {resource.name}
            </span>
          </Link>
        ))}  
      </div>
      <div className="flex justify-start mt-8 lg:mt-16">
        <Button label="See All" title="See More Resources" href="/web-development/dev-resources" />
      </div>
    </div>
  )
}