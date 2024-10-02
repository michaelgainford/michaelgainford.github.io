import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

import DataForProjects from "@/components/data/Data_For_Projects";
DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
// then sort DataForProjects by archived false first, then true
DataForProjects.sort((a, b) => a.archived - b.archived);

const pageStyles = "bg-slate-900 text-slate-400 bg-brand-background bg-repeat";


export default function PROJECTS() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text={`All Projects`} />
        <div className={`grid flex-wrap w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-5 2xl:gap-16`}>
          {DataForProjects.map((project, index) => (
            <a key={index} href={project.href} className={`border ${project.border} ${project.bg} ${project.hover} ${project.color} h-full p-4 rounded-lg space-y-4 divide-y ${project.divider} ${project.archived ? 'opacity-50' : ''}`}>
              <span className={`flex items-center gap-3`}>
                <span className={`flex items-center w-6 h-6 gap-4`}>
                  <project.icon fill="fff" className={`w-6 h-6 stroke-slate-300 fill-slate-300 text-slate-300`} />
                </span>
                <h2 className={`text-xs`}>{project.name}</h2>
              </span>
              <span className={`flex justify-start pt-6 pb-2 text-xs tracking-wider text-left`}>
                <p className={`line-clamp-2`}>{project.description}</p>
              </span>
              <div className={`flex items-end justify-start pt-4 category`}>
                <span className={`p-1 text-xs tracking-wider lowercase border ${project.border} rounded`}>{project.category}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
      <MainFooter />
    </div>
  );
}