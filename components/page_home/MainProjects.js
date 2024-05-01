import Link from "next/link"
import Image from 'next/image'
import Icon_Football from '/public/icons/icon-football.svg'
import Icon_Jokes from '/public/icons/icon-jokes.svg'
import Icon_Movies from '/public/icons/icon-movies.svg'
import Icon_Resources from '/public/icons/icon-laptop.svg'
import H2SectionHeader from '/components/typography/H2SectionHeader'
import Button from '/components/buttons/StandardButton'

// Create a variable to store featured projects
const featuredProjects = [
  { href: "/web-development/dev-resources", label: "Dev Resources", border: "border-teal-700", hover: "hover:bg-teal-800", group: "group/resources", fill: "fill-slate-100", groupHover: "group-hover/resources:fill-slate-100", icon: Icon_Resources},
  { href: "/projects/movies-database", label: "Movies Database", border: "border-violet-700", hover: "hover:bg-violet-800", group: "group/movies", fill: "fill-slate-100", groupHover: "group-hover/movies:fill-slate-100", icon: Icon_Movies},
  { href: "/projects/football/competitions/euro-2024", label: "Euro 2024", border: "border-blue-700", hover: "hover:bg-blue-800", group: "group/euros", fill: "fill-slate-100", groupHover: "group-hover/euros:fill-slate-900", icon: Icon_Football},
  { href: "/projects/jokes", label: "Jokes", border: "border-rose-700", hover: "hover:bg-rose-800", group: "group/jokes", fill: "fill-slate-100", groupHover: "group-hover/jokes:fill-slate-100", icon: Icon_Jokes},
]

// Loop through the featured projects and display them
export default function MainProjects() {
  return (
    <div className="w-full projects-list">
      <H2SectionHeader text="Featured Projects" />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12">
        {featuredProjects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={`flex flex-col items-center justify-center font-light tracking-wide transition border xl:min-w-[250px] rounded-lg ${project.border} ${project.group} project ${project.hover} bg-slate-800 opacity-75 hover:opacity-100 sm:p-4 aspect-square`}>
            <span className="flex w-[27%] md:w-[23%] justify-center items-end ${project.groupHover} h-1/2">  
              <Image src={project.icon} alt="Hand Icon" width={168} height={168} className="size-12 sm:w-full stroke-slate-300 fill-slate-300 text-slate-300 items-center" />
            </span>
            <span className="text-[10px] uppercase sm:text-xs md:text-sm lg:text-base tracking max-lg:text-slate-100 text-center h-1/2 flex items-center">
              {project.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-start mt-8 lg:mt-16">
          <Button label="See More" title="See More Projects" href="/projects" />
      </div>
  </div>
  )
}