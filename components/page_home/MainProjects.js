import Link from "next/link"
import Icon_Football from '/components/icons/IconFootball'
import Icon_Jokes from '/components/icons/IconLaugh'
import Icon_Movies from '/components/icons/IconMovies'
import Icon_Resources from '/components/icons/IconResource'
import H2SectionHeader from '/components/typography/H2SectionHeader'
import Button from '/components/buttons/StandardButton'

// Create a variable to store featured projects
const featuredProjects = [
  { href: "/web-development/dev-resources", label: "Dev Resources", border: "border-teal-700", hover: "hover:bg-teal-800", group: "group/resources", fill: "fill-slate-100", groupHover: "group-hover/resources:fill-slate-100 group-hover/resources:text-slate-100", icon: Icon_Resources},
  { href: "/projects/movies-database", label: "Movies Database", border: "border-violet-700", hover: "hover:bg-violet-800", group: "group/movies", fill: "fill-slate-100", groupHover: "group-hover/movies:fill-slate-100 group-hover/movies:text-slate-100", icon: Icon_Movies},
  { href: "/projects/football/competitions/euro-2024", label: "Euro 2024", border: "border-blue-700", hover: "hover:bg-blue-800", group: "group/euros", fill: "fill-slate-100", groupHover: "group-hover/euros:fill-slate-900 group-hover/euros:text-slate-100", icon: Icon_Football},
  { href: "/projects/jokes", label: "Jokes", border: "border-rose-700", hover: "hover:bg-rose-800", group: "group/jokes", fill: "fill-slate-100", groupHover: "group-hover/jokes:fill-slate-100 group-hover/jokes:text-slate-100", icon: Icon_Jokes},
]

export default function MainProjects() {
  return (
    <div className="w-full projects-list">
      <H2SectionHeader text="Featured Projects" />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12 2xl:gap-20">
        {featuredProjects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={`flex flex-col items-center justify-center font-light tracking-wide transition border rounded-lg ${project.border} ${project.group} project ${project.hover} bg-slate-800 opacity-75 hover:opacity-100 sm:p-4 aspect-[3/2] 2xl:border-2`}>
            <span className={`flex w-[27%] md:w-[23%] xl:w-[20%] justify-center items-end ${project.groupHover} h-1/2`} >  
              <project.icon fill={project.fill} classes="size-8 lg:size-12 2xl:size-16 fill-slate-100"/>
            </span>
            <span className="text-[10px] uppercase sm:text-xs md:text-sm 2xl:text-lg tracking max-lg:text-slate-100 text-center h-1/2 flex items-center">
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