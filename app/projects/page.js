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
    divider: "divide-rose-700",
    hover: "hover:bg-rose-800",
    description: "A collection of jokes to make you laugh",
    category: "fun",
  },
  {
    name: "Euro 2024",
    href: "/football/euro-2024",
    featuredProject: true,
    icon: "/icon-football.svg",
    color: "text-slate-300",
    bg: "bg-blue-900",
    border: "border-blue-700",
    divider: "divide-blue-700",
    hover: "hover:bg-blue-800",
    description: "All the teams and groups for Euro 2024",
    category: "football",
  },
  {
    name: "Movies Database",
    href: "/movies-database",
    featuredProject: true,
    icon: "/icon-movies.svg",
    color: "text-slate-300",
    bg: "bg-violet-900",
    border: "border-violet-700",
    divider: "divide-violet-700",
    hover: "hover:bg-violet-800",
    description: "A database of movies to search and find your favourites",
    category: "fun",
  },
  {
    name: "Dev Resources",
    href: "/dev-resources",
    featuredProject: false,
    icon: "/icon-laptop.svg",
    color: "text-slate-300",
    bg: "bg-teal-900",
    border: "border-teal-700",
    divider: "divide-teal-700",
    hover: "hover:bg-teal-800",
    description: "A collection of resources for developers",
    category: "web dev",
  },
  {
    name: "Quotes",
    href: "/quotes",
    featuredProject: false,
    icon: "/icon-quote.svg",
    color: "text-slate-200",
    bg: "bg-amber-700",
    border: "border-amber-700",
    divider: "divide-amber-700",
    hover: "hover:bg-amber-800",
    description: "A collection of quotes to inspire you",
    category: "fun",
  },
  {
    name: "Fortnite",
    href: "/gaming/fortnite",
    featuredProject: false,
    icon: "/icon-gamepad.svg",
    color: "text-slate-200",
    bg: "bg-black",
    border: "border-slate-700",
    divider: "divide-slate-700",
    hover: "hover:bg-black/40",
    description: "All the latest news and updates for Fortnite",
    category: "gaming",
  }
];

export default function Home() {
  return (
    <div className="bg-neutral-800 text-slate-300">

      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:w-[95%]] flex flex-col items-center min-h-screen gap-y-12 >*:bg-slate-200 mt-16">

        <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6">All Projects</h1>

        <div className="w-full gap-8 grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5">
          {allProjects.map((project, index) => (
            <a key={index} href={project.href} className={`border ${project.border} aspect-[3/2] ${project.bg} ${project.hover} ${project.color} p-4 rounded-lg space-y-4 divide-y ${project.divider}`}>
              <span className="flex gap-4 items-center">
                <Image src={project.icon} alt="Hand Icon" className="w-8 h-auto max-lg:w-16 max-lg:h-auto stroke-slate-300 fill-slate-300 text-slate-300" width={168} height={168} />
               <h2>{project.name}</h2>
              </span>
              <span className="flex justify-start text-xs text-left pt-4 tracking-wider">
                <p>{project.description}</p>
              </span>
              <div className="category flex justify-start pt-4">
                <span className="text-xs tracking-wider uppercase">{project.category}</span>
              </div>
            </a>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}