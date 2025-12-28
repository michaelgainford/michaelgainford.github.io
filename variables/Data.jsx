{/********************************
  ICON IMPORTS
*********************************/}
import { 
	Icon_Codepen, 
	Icon_ColourPalettes, 
	Icon_Docs, 
	Icon_Earth, 
	Icon_Font, 
	Icon_Football, 
	Icon_Gamepad, 
	Icon_GitHub, 
	Icon_Laptop, 
	Icon_Laugh, 
	Icon_LinkedIn, 
	Icon_Movies, 
	Icon_NextJS, 
	Icon_Planet, 
	Icon_PremierLeagueSimple, 
	Icon_Quote, 
	Icon_Resource, 
	Icon_TailwindSimple, 
	Icon_Twitter, 
	Icon_W3Schools
} from "@/variables/Icons";


{/********************************
  PROJECTS
*********************************/}
const dataForAllProjects = [
  {
    name: "Dev Resources",
    href: "/web-development/dev-resources",
    icon: Icon_Laptop,
    color: "text-slate-300",
    bg: "bg-teal-900/80",
    border: "border-teal-700/50",
    divider: "divide-teal-700",
    hover: "hover:bg-teal-800",
    card_colour: "text-slate-300",
    group: "group/resources",
    groupHover: "group-hover/resources:fill-slate-100 group-hover/resources:text-slate-100",
    description: "A collection of useful resources for web developers and designers.",
    category: "web dev",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Euro 2024",
    href: "/projects/football/competitions/euro-2024",
    icon: Icon_Football,
    color: "text-slate-300",
    bg: "bg-blue-900",
    border: "border-blue-700",
    divider: "divide-blue-700",
    hover: "hover:bg-blue-800",
    card_colour: "text-slate-300",
    group: "group/euros",
    groupHover: "group-hover/euros:fill-slate-900 group-hover/euros:text-slate-100",
    description: "A page dedicated to the Euro 2024 football competition.",
    category: "football",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: true
    },
    projectsCard: {
      textColour: "text-slate-300"
    } 
  },
  {
    name: "Everton",
    href: "/projects/football/everton",
    icon: Icon_Football,
    color: "text-slate-200",
    bg: "bg-blue-900/90",
    border: "border-blue-700",
    divider: "divide-blue-500",
    hover: "hover:bg-blue-700",
    card_colour: "text-slate-300",
    description: "A page dedicated to Everton Football Club",
    category: "football",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Fortnite",
    href: "/projects/gaming/fortnite",
    icon: Icon_Gamepad,
    color: "text-slate-200",
    bg: "bg-fn-dark-blue/90",
    border: "border-fn-dark-blue",
    divider: "divide-slate-700",
    hover: "hover:bg-fn-dark-blue",
    card_colour: "text-slate-300",
    description: "A page dedicated to the video game Fortnite.",
    category: "gaming",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    } 
  },
  {
    name: "Jokes",
    href: "/projects/jokes",
    icon: Icon_Laugh,
    color: "text-slate-300",
    card_colour: "text-slate-300",
    bg: "bg-rose-900/90",
    border: "border-rose-700",
    divider: "divide-rose-700",
    hover: "hover:bg-rose-800",
    group: "group/jokes",
    groupHover: "group-hover/jokes:fill-slate-100 group-hover/jokes:text-slate-100",
    description: "A collection of one-liner jokes. I bet (at least) one will make you laugh.",
    category: "fun",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Movies Database",
    href: "/projects/movies-database",
    icon: Icon_Movies,
    color: "text-slate-300",
    card_colour: "text-slate-300",
    bg: "bg-black/30",
    border: "border-black/40",
    divider: "divide-gray-700",
    hover: "hover:bg-black/20",
    group: "group/movies",
    groupHover: "group-hover/movies:fill-slate-100 group-hover/movies:text-slate-100",
    description: "A database of movies watched or to watch by the Pigeon & Parrot Movie Club (PPMC).",
    category: "fun",
    projectStatus: {
      underConstruction: false,
      featuredProject: true,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Quotes",
    href: "/projects/quotes",
    icon: Icon_Quote,
    color: "text-slate-200",
    card_colour: "text-slate-300",
    bg: "bg-sky-700/90",
    border: "border-sky-500",
    divider: "divide-sky-500",
    hover: "hover:bg-sky-800",
    description: "A collection of motivational and inspirational quotes to inspire you.",
    category: "fun",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Premier League",
    href: "/projects/football/competitions/english-premier-league",
    icon: Icon_PremierLeagueSimple,
    color: "text-slate-200",
    card_colour: "text-slate-300",
    bg: "bg-purple-900/90",
    border: "border-purple-400/20",
    hover: "hover:bg-purple-800 hover:border-purple-700",
    divider: "divide-purple-700",
    description: "A project about the English Premier League",
    category: "football",
    projectStatus: {
      underConstruction: false,
      featuredProject: true,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "Space",
    href: "/projects/space",
    icon: Icon_Planet,
    color: "text-slate-200",
    card_colour: "text-slate-300",
    bg: "bg-slate-800/90",
    border: "border-slate-700/50",
    divider: "divide-slate-500",
    hover: "hover:bg-slate-700",
    description: "A project about our solar system and it's 8 planets.",
    category: "space",
    projectStatus: {
      underConstruction: false,
      featuredProject: true,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "The MAG Premier League",
    href: "/projects/gaming/the-mag-premier-league",
    icon: Icon_Football,
    color: "text-slate-800",
    card_colour: "text-slate-300",
    bg: "bg-[#2BC9BC]",
    border: "border-magpl/20",
    divider: "divide-slate-800",
    hover: "hover:bg-[#2BC9BC]/80",
    description: "An online eFootball competition for the MAG community.",
    category: "gaming",
    projectStatus: {
      underConstruction: false,
      featuredProject: false,
      archived: true
    },
    projectsCard: {
      textColour: "text-slate-300"
    }
  },
  {
    name: "The World",
    href: "/projects/the-world",
    icon: Icon_Earth,
    color: "text-slate-700",
    card_colour: "text-slate-700",
    bg: "bg-linear-to-br from-green-500 to-blue-500",
    border: "border-[#00C9FF]/20",
    divider: "divide-slate-500",
    hover: "hover:bg-[#00C9FF]/80 hover:border-[#00C9FF]/50",
    description: "A project about the countries of the world.",
    category: "geography",
    projectStatus: {
      underConstruction: true,
      featuredProject: true,
      archived: false
    },
    projectsCard: {
      textColour: "text-slate-700"
    }
  },
 /*  {
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
  }, */
];

const featuredProjects = dataForAllProjects.filter(project => project.projectStatus.featuredProject === true);


{/********************************
  SOCIALS
*********************************/}
const socials = [
  {
    name: "Codepen",
    href: "https://codepen.io/michaelgainford",
    icon: Icon_Codepen
  },
  {
    name: "GitHub",
    href: "https://github.com/michaelgainford",
    icon: Icon_GitHub
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-gainford/",
    icon: Icon_LinkedIn
  },
  {
    name: "Twitter",
    href: "https://twitter.com/m1cha3lgainford",
    icon: Icon_Twitter
  }
]

{/********************************
  MY SITE URLS
*********************************/}
const mySites = [
	{
		name: "Fairway Golf Holidays",
		image: "/my-sites/fairway-golf-holidays.webp",
		alt: "Fairway Golf Holidays",
		description: "Fairway Golf Group Holidays",
	},
	{
		name: "Michael Gainford Portfolio",
		image: "/my-sites/michael-gainford-portfolio.webp",
		alt: "Michael Gainford Portfolio",
		description: "Michael Gainford Portfolio",
	},
	{
		name: "Golf Membership",
		image: "/my-sites/golf-membership.webp",
		alt: "Golf Membership",
		description: "Golf Membership North West",
	},
];

{/********************************
  WORK IN PROGRESS ITEMS
*********************************/}
const wipItems = [
	{
		title: "Wishlist",
		content: "Making a wishlist.",
		href: "/wip/wishlist"
	},
	{
		title: "Batman",
		content: "Page about Batman. To add within sub directory of movies.",
		href: "/"
	},
	{
		title: "The Matrix",
		content: "Page about The Matrix. To add within sub directory of movies.",
		href: "/"
	},
	{
		title: "Hangman",
		content: "A project to create a hangman game.",
		href: "/"
	}
];

{/********************************
  EXPORTS
*********************************/}
export { 
	dataForAllProjects,
	featuredProjects,
	socials,
	mySites,
	wipItems
};