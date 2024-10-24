import Icon_Laugh from "@/components/icons/IconLaugh";
import Icon_Football from "@/components/icons/IconFootball";
import Icon_Movies from "@/components/icons/IconMovies";
import Icon_Laptop from "@/components/icons/IconLaptop";
import Icon_Quote from "@/components/icons/IconQuote";
import Icon_Gamepad from "@/components/icons/IconGamepad";
import Icon_Template from "@/components/icons/IconTemplate";
import Icon_Planet from "@/components/icons/IconPlanet";

const DataForAllProjects = [
  {
    name: "Dev Resources",
    href: "/web-development/dev-resources",
    featuredProject: true,
    icon: Icon_Laptop,
    color: "text-slate-300",
    bg: "bg-teal-900",
    border: "border-teal-700",
    divider: "divide-teal-700",
    hover: "hover:bg-teal-800",
    group: "group/resources",
    groupHover: "group-hover/resources:fill-slate-100 group-hover/resources:text-slate-100",
    description: "A collection of useful resources for web developers and designers.",
    category: "web dev",
    archived: false,
  },
  {
    name: "Euro 2024",
    href: "/projects/football/competitions/euro-2024",
    featuredProject: false,
    icon: Icon_Football,
    color: "text-slate-300",
    bg: "bg-blue-900",
    border: "border-blue-700",
    divider: "divide-blue-700",
    hover: "hover:bg-blue-800",
    group: "group/euros",
    groupHover: "group-hover/euros:fill-slate-900 group-hover/euros:text-slate-100",
    description: "A page dedicated to the Euro 2024 football competition.",
    category: "football",
    archived: true,
  },
  {
    name: "Everton",
    href: "/projects/football/everton",
    featuredProject: false,
    icon: Icon_Football,
    color: "text-slate-200",
    bg: "bg-blue-900",
    border: "border-blue-700",
    divider: "divide-blue-500",
    hover: "hover:bg-blue-700",
    description: "A page dedicated to Everton Football Club",
    category: "football",
    archived: false,
  },
  {
    name: "Fortnite",
    href: "/projects/gaming/fortnite",
    featuredProject: false,
    icon: Icon_Gamepad,
    color: "text-slate-200",
    bg: "bg-black",
    border: "border-slate-700",
    divider: "divide-slate-700",
    hover: "hover:bg-black/40",
    description: "A page dedicated to Fortnite.",
    category: "gaming",
    archived: false,
  },
  {
    name: "Jokes",
    href: "/projects/jokes",
    featuredProject: false,
    icon: Icon_Laugh,
    color: "text-slate-300",
    bg: "bg-rose-900",
    border: "border-rose-700",
    divider: "divide-rose-700",
    hover: "hover:bg-rose-800",
    group: "group/jokes",
    groupHover: "group-hover/jokes:fill-slate-100 group-hover/jokes:text-slate-100",
    description: "A collection of random jokes to make you laugh.",
    category: "fun",
    archived: false,
  },
  {
    name: "Movies Database",
    href: "/projects/movies-database",
    featuredProject: true,
    icon: Icon_Movies,
    color: "text-slate-300",
    bg: "bg-black/30",
    border: "border-black/40",
    divider: "divide-gray-700",
    hover: "hover:bg-gray-800",
    group: "group/movies",
    groupHover: "group-hover/movies:fill-slate-100 group-hover/movies:text-slate-100",
    description: "A database of movies I have watched with my son.",
    category: "fun",
    archived: false,
  },
  /* 
  {
    name: "My Dev Dashboard",
    href: "/web-development/my-dashboard",
    featuredProject: false,
    icon: Icon_Laptop,
    color: "text-slate-200",
    bg: "bg-teal-900",
    border: "border-teal-700",
    divider: "divide-teal-700",
    hover: "hover:bg-teal-800",
    description: "A dashboard for my web development projects.",
    category: "web dev",
    archived: false,
  }, */
  {
    name: "Quotes",
    href: "/projects/quotes",
    featuredProject: false,
    icon: Icon_Quote,
    color: "text-slate-200",
    bg: "bg-sky-700",
    border: "border-sky-500",
    divider: "divide-sky-500",
    hover: "hover:bg-sky-800",
    description: "A collection of motivational and inspirational quotes to inspire you.",
    category: "fun",
    archived: false,
  },
  {
    name: "Premier League",
    href: "/projects/football/competitions/premier-league",
    featuredProject: true,
    icon: Icon_Football,
    color: "text-slate-200",
    bg: "bg-purple-900",
    border: "border-purple-700",
    hover: "hover:bg-purple-800",
    divider: "divide-purple-700",
    description: "A project about the Premier League",
    category: "football",
    archived: false,
  },
  {
    name: "Space",
    href: "/projects/space",
    featuredProject: true,
    icon: Icon_Planet,
    color: "text-slate-200",
    bg: "bg-slate-800",
    border: "border-slate-700/50",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A project about space",
    category: "space",
    archived: false,
  },
  {
    name: "The MAG Premier League",
    href: "/projects/gaming/the-mag-premier-league",
    featuredProject: false,
    icon: Icon_Football,
    color: "text-slate-800",
    bg: "bg-[#2BC9BC]",
    border: "border-slate-800",
    divider: "divide-slate-800",
    hover: "hover:bg-[#2BC9BC]/80",
    description: "A template for a project",
    category: "template",
    archived: false,
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: Icon_Template,
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
    archived: true,
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: Icon_Template,
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
    archived: true,
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: Icon_Template,
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
    archived: true,
  },
  {
    name: "Template",
    href: "/",
    featuredProject: false,
    icon: Icon_Template,
    color: "text-slate-200",
    bg: "bg-slate-500",
    border: "border-slate-700",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A template for a project",
    category: "template",
    archived: true,
  }
];

export default DataForAllProjects;
