import Image from 'next/image'
import Link from 'next/link'
import H2SectionHeader from '/components/typography/H2SectionHeader'
import Button from '/components/buttons/StandardButton'

const featuredDevResources = [
  {
    title: "W3 Schools",
    logo: "/icons/w3-schools-logo.svg",
    url: "https://www.w3schools.com/"
  },
  {
    title: "GitHub",
    logo: "/icons/icon-github.svg",
    url: "https://github.com"
  },
  {
    title: "MDN Docs",
    logo: "/icons/placeholder-icon.svg",
    url: "https://developer.mozilla.org"
  },
  {
    title: "Coolors",
    logo: "/icons/placeholder-icon.svg",
    url: "https://coolors.co"
  },
  {
    title: "Tailwind CSS",
    logo: "/icons/placeholder-icon.svg",
    url: "https://tailwindcss.com"
  },
  {
    title: "Google Fonts",
    logo: "/icons/placeholder-icon.svg",
    url: "https://fonts.google.com"
  }
]

const featuredDevResourcesSortedByName = featuredDevResources.sort((a, b) => a.title.localeCompare(b.title));

export default function MainResources() {
  return (
    <div className="w-full resources-list">
      <H2SectionHeader text="Featured Dev Resources" />
      <div className="grid grid-cols-2 justify-center gap-4 xl:gap-6">
        {featuredDevResourcesSortedByName.map((resource, index) => (
          <Link href={resource.url} key={index} className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-6 xl:gap-12 resource border-slate-700 bg-slate-900 hover:bg-slate-900 w-full p-4">
            <div className="flex justify-center !text-white fill-white stroke-white">
              <Image src={resource.logo} alt={resource.title} width={48} height={48} className="size-6 sm:size-8 text-white stroke-white fill-white" />
            </div>
            <span className="px-4 text-[10px] md:text-xs leading-tight text-center uppercase lg:w-full tracking w-full tracking-wider lg:text-left">
              {resource.title}
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