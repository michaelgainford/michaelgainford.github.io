import Link from "next/link"
import H2SectionHeader from '/components/typography/H2SectionHeader'
import Button from '/components/buttons/StandardButton'

// Data
import DataForAllProjects from "@/components/data/DataForProjects";
const featuredProjects = DataForAllProjects.filter(project => project.featuredProject === true);

export default function MainProjects() {
  return (
    <div className="w-full projects-list">
      <H2SectionHeader text="Featured Projects" />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-12">
        {featuredProjects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            className={`flex flex-col items-center justify-center font-light tracking-wide transition border rounded-lg ${project.border} ${project.group} project ${project.hover} bg-gradient-to-b from-slate-900/40 to-slate-900/60 hover:opacity-100 sm:p-4 aspect-[3/2] 2xl:border-2 group border-opacity-50`}>
            <span className={`flex w-[27%] md:w-[23%] xl:w-[20%] justify-center items-end ${project.groupHover} h-1/2`} >  
              <project.icon fill={`${project.fill}`} classes="size-8 lg:size-12 2xl:size-16 fill-slate-100 flex justify-center"/>
            </span>
            <span className="text-[10px] uppercase sm:text-xs md:text-sm tracking-wider max-lg:text-slate-100 text-center h-1/2 flex items-center group-hover:text-white">
              {project.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-start mt-8 lg:mt-12">
        <Button label="See More" title="See More Projects" href="/projects" />
      </div>
    </div>
  )
}