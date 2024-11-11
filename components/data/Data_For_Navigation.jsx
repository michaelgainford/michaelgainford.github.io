const DataForNavigation = [
  {
    label: "Home",
    href: "/",
    border_colour: "border-slate-700",
    before: "before:bg-slate-700",
    background_colour: "bg-slate-950",
    hover: "hover:bg-slate-950",
    category: "none",
    mainNav: true,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "All Projects",
    href: "/projects",
    border_colour: "border-amber-500",
    background_colour: "bg-amber-500",
    hover: "hover:bg-amber-800",
    category: "none",
    mainNav: true,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Contact",
    href: "/contact",
    border_colour: "none",
    background_colour: "bg-slate-950",
    hover: "none",
    category: "none",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "Dev Resources",
    // Colour: teal-600
    background_colour: "bg-teal-600",
    before: "before:bg-teal-600",
    border_colour: "border-teal-600",
    category: "none",
    footerNav_1: true,
    footerNav_2: false,
    hover: "hover:bg-teal-800",
    href: "/web-development/dev-resources",
    mainNav: true,
  },
  {
    label: "Euro 2024",
    href: "/projects/football/competitions/euro-2024",
    border_colour: "none",
    background_colour: "bg-euro-2024",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "Movies Database",
    href: "/projects/movies-database",
    before: "before:bg-black",
    border_colour: "none",
    background_colour: "bg-movies",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Jokes",
    href: "/projects/jokes",
    border_colour: "none",
    before: "before:bg-rose-500",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Quotes",
    href: "/projects/quotes",
    border_colour: "none",
    background_colour: "bg-quotes",
    before: "before:bg-blue-400",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Everton",
    href: "/projects/football/everton",
    border_colour: "none",
    background_colour: "bg-everton",
    before: "before:bg-blue-500",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Fortnite",
    href: "/projects/gaming/fortnite",
    border_colour: "none",
    background_colour: "bg-fortnite",
    before: "before:bg-fn-dark-blue",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "My Dashboard",
    href: "/web-development/my-dashboard",
    border_colour: "none",
    background_colour: "bg-slate-950",
    hover: "none",
    category: "web-development",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "About",
    href: "/",
    border_colour: "none",
    before: "before:bg-current",
    background_colour: "bg-slate-950",
    hover: "none",
    category: "none",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Premier League",
    href: "/projects/football/competitions/english-premier-league",
    border_colour: "border-epl-300/40",
    before: "before:bg-epl",
    background_colour: "bg-epl",
    hover: "hover:bg-epl",
    category: "none",
    mainNav: true,
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "The MAG PL",
    href: "/projects/gaming/the-mag-premier-league",
    mainNav: false,
    category: "gaming",
    border_colour: "border-magpl",
    background_colour: "bg-magpl",
    before: "before:bg-magpl",
    hover: "hover:bg-magpl",
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Space",
    href: "/projects/space",
    mainNav: false,
    category: "space",
    border_colour: "border-black",
    background_colour: "bg-black",
    before: "before:bg-black",
    hover: "hover:bg-black",
    footerNav_1: false,
    footerNav_2: true,
  },
  // Add Geography
  {
    label: "Geography",
    href: "/projects/the-world",
    mainNav: false,
    category: "geography",
    border_colour: "border-geography",
    background_colour: "bg-geography",
    before: "before:bg-geography",
    hover: "hover:bg-geography",
    footerNav_1: false,
    footerNav_2: true,
  },
];

export default DataForNavigation;
