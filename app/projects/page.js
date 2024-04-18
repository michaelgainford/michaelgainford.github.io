//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";

const allProjects = [
  {
    name: "Jokes",
    href: "/jokes",
    featuredProject: true,
    icon: "/icon-jokes.svg",
    color: "text-slate-300",
    bg: "bg-rose-900",
    border: "border-rose-700",
    hover: "hover:bg-rose-800",
    description: "A collection of jokes to make you laugh",
  },
  {
    name: "Euro 2024",
    href: "/euro-2024",
    featuredProject: true,
    icon: "/icon-football.svg",
    color: "text-slate-300",
    bg: "bg-blue-900",
    border: "border-blue-700",
    hover: "hover:bg-blue-800",
    description: "All the teams and groups for Euro 2024",
  },
  {
    name: "Movies Database",
    href: "/movies-database",
    featuredProject: true,
    icon: "/icon-movies.svg",
    color: "text-slate-300",
    bg: "bg-violet-900",
    border: "border-violet-700",
    hover: "hover:bg-violet-800",
    description: "A database of movies to search and find your favourites",
  },
  {
    name: "Dev Resources",
    href: "/dev-resources",
    featuredProject: false,
    icon: "/icon-laptop.svg",
    color: "text-slate-300",
    bg: "bg-teal-900",
    border: "border-teal-700",
    hover: "hover:bg-teal-800",
    description: "A collection of resources for developers",
  }
];

export default function Home() {
  return (
    <div className="bg-slate-400 text-slate-900">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:w-[95%]] flex flex-col items-center min-h-screen gap-y-12 >*:bg-slate-200 mt-16">

        <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6">All Projects</h1>

        <div className="w-full flex flex-wrap gap-8">
          {allProjects.map((project, index) => (
            <a key={index} href={project.href} className={`border ${project.border} w-[300px] ${project.bg} ${project.color} p-4 rounded-lg min-h-[200px] space-y-4 divide-y`}>
              <span className="flex gap-4 items-center">
                <Image src={project.icon} alt="Hand Icon" className="w-8 h-auto max-lg:w-16 max-lg:h-auto stroke-slate-300 fill-slate-300 text-slate-300" width={168} height={168} />
               <h2>{project.name}</h2>
              </span>
              <span className="flex justify-start text-xs text-left pt-4 tracking-wider">
                <p>{project.description}</p>
              </span>
            </a>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}