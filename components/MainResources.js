import Image from 'next/image'
import Link from 'next/link'
import H2SectionHeader from './typography/H2SectionHeader'
import Button from '../components/buttons/StandardButton'

const featuredDevResources = [
  {
    title: "W3 Schools",
    logo: "/w3-schools-logo.svg",
    url: "https://www.w3schools.com/"
  },
  {
    title: "GitHub",
    logo: "/github-logo.svg",
    url: "https://github.com"
  },
  {
    title: "MDN Docs",
    logo: "/placeholder-icon.svg",
    url: "https://developer.mozilla.org"
  },
  {
    title: "Coolors",
    logo: "/placeholder-icon.svg",
    url: "https://coolors.co"
  },
  {
    title: "Tailwind CSS",
    logo: "/placeholder-icon.svg",
    url: "https://tailwindcss.com"
  },
  {
    title: "Google Fonts",
    logo: "/placeholder-icon.svg",
    url: "https://fonts.google.com"
  }
]

const featuredDevResourcesSortedByName = featuredDevResources.sort((a, b) => a.title.localeCompare(b.title));

export default function MainResources() {
  return (
    <div className="w-full resources-list">
      <H2SectionHeader text="Featured Dev Resources" />
      <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {featuredDevResourcesSortedByName.map((resource, index) => (
          <Link href={resource.url} key={index} className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
            <div className="flex justify-center p-4 max-md:w-1/3 max-md:border-r border-slate-700 resource-logo">
              <Image src={resource.logo} alt={resource.title} width={48} height={48} className="w-8 h-8" />
            </div>
            <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">{resource.title}</span>
          </Link>
        ))}  
      </div>
      <div className="flex justify-start mt-8 lg:mt-16">
        <Button label="See All" title="See More Resources" href="/dev-resources" />
      </div>
    </div>
  )
}