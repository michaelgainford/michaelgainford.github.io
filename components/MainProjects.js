import Link from "next/link"
import Image from 'next/image'
import Icon_Football from '../public/icon-football.svg'
import Icon_Jokes from '../public/icon-jokes.svg'
import Icon_Movies from '../public/icon-movies.svg'
import Icon_Resources from '../public/icon-laptop.svg'

// Create a variable to store featured projects
const featuredProjects = [
  { href: "/dev-resources", label: "Dev Resources", border: "border-teal-700", hover: "hover:bg-teal-800", group: "group/resources", fill: "fill-slate-100", groupHover: "group-hover/resources:fill-slate-100", icon: Icon_Resources},
  { href: "/movies-database", label: "Movies Database", border: "border-violet-700", hover: "hover:bg-violet-800", group: "group/movies", fill: "fill-slate-100", groupHover: "group-hover/movies:fill-slate-100", icon: Icon_Movies},
  { href: "/football/euro-2024", label: "Euro 2024", border: "border-blue-700", hover: "hover:bg-blue-800", group: "group/euros", fill: "fill-slate-100", groupHover: "group-hover/euros:fill-slate-900", icon: Icon_Football},
  { href: "/jokes", label: "Jokes", border: "border-rose-700", hover: "hover:bg-rose-800", group: "group/jokes", fill: "fill-slate-100", groupHover: "group-hover/jokes:fill-slate-100", icon: Icon_Jokes},
]

// Loop through the featured projects and display them
export default function MainProjects() {
  return (
    <div className="w-full projects-list">
      <h2 className="mb-6 text-md max-md:font-bold tracking-wide font-extralight lg:mb-8 lg:text-2xl text-slate-400">Featured Projects</h2>
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
        {featuredProjects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={`flex flex-col items-center justify-center gap-4 font-light tracking-wide transition border  lg:min-w-[250px] rounded-lg ${project.border} ${project.group} project ${project.hover} aspect-[3/2] bg-slate-800 opacity-75 hover:opacity-100`}>
            <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-100 ${project.groupHover}">  
              <Image src={project.icon} alt="Hand Icon" className="stroke-slate-300 fill-slate-300 text-slate-300" width={168} height={168} />
            </span>
            <span className="text-xs uppercase lg:text-base tracking max-lg:text-slate-100">
              {project.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-start mt-8 lg:mt-16">
        <Link href="/projects" aria-label="See More Projects" title="See More Projects"
          className="px-8 py-4 text-xs tracking-wider uppercase transition border rounded lg:text-sm main-btn bg-slate-800 border-slate-700 hover:bg-slate-700 mx-auto">See More</Link>
      </div>
  </div>
  )
}