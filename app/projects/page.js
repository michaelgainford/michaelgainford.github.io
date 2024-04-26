import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";

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
    bg: "bg-sky-700",
    border: "border-sky-500",
    divider: "divide-sky-500",
    hover: "hover:bg-sky-800",
    description: "A collection of motivational and inspirational quotes to inspire you",
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
  },
  {
    name: "Everton",
    href: "/football/everton",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-blue-900",
    border: "border-blue-700",
    divider: "divide-blue-500",
    hover: "hover:bg-blue-700",
    description: "A page dedicated to Everton Football Club",
    category: "football",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: "/icon-template.svg",
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
  }
];

// Sort allProjects by name
allProjects.sort((a, b) => a.name.localeCompare(b.name));

export default function Home() {
  return (
    <div className="bg-neutral-400 text-slate-800">

      <MainHeader />

      <main className={mainStyles}>

        <H1 text="All Projects" />

        <div className="grid flex-wrap w-full grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {allProjects.map((project, index) => (
            <a key={index} href={project.href} className={`border ${project.border}  ${project.bg} ${project.hover} ${project.color} h-full p-4 rounded-lg space-y-4 divide-y ${project.divider}`}>
              <span className="flex items-center gap-3">

              <span className="flex items-center w-6 h-6 gap-4">
                <Image src={project.icon} alt="Hand Icon" className="w-full stroke-slate-300 fill-slate-300 text-slate-300" width={168} height={168} />
              </span>
               <h2 className="text-xs">{project.name}</h2>
              </span>
              <span className="flex justify-start pt-6 pb-2 text-xs tracking-wider text-left">
                <p>{project.description}</p>
              </span>
              <div className="flex items-end justify-start pt-4 category">
                <span className={`p-1 text-xs tracking-wider uppercase border ${project.border} rounded`}>{project.category}</span>
              </div>
            </a>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}