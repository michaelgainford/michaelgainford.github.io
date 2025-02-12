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
  SITE STYLES  
*********************************/}
const globalPageStyles = "space-y-4 lg:space-y-8 xl:space-y-12 2xl:space-y-16 min-h-dvh";
const mainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalMainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalMainElementStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalConstrainedMainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const sharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-center transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";
const brandPageBackground = "bg-slate-900 bg-brand-background bg-repeat";
const brandTextColour = "text-slate-400";
const brandSharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";
const brandHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";


{/********************************
  SITE NAVIGATION  
*********************************/}
const navigation = [
  {
    label: "Home",
    href: "/",
    border: "border-slate-700",
    hover: "hover:bg-slate-950",
    category: "none",
    mainNav: true,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Projects",
    href: "/projects",
    border: "border-amber-500",
    hover: "hover:bg-amber-800",
    category: "none",
    mainNav: true,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "About",
    href: "/about",
    border: "none",
    hover: "none",
    category: "none",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "Contact",
    href: "/contact",
    border: "none",
    hover: "none",
    category: "none",
    mainNav: false,
    footerNav_1: false,
    footerNav_2: false,
  },
  {
    label: "Dev Resources",
    href: "/web-development/dev-resources",
    border: "none",
    hover: "none",
    category: "none",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Euro 2024",
    href: "/projects/football/competitions/euro-2024",
    border: "none",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Movies Database",
    href: "/projects/movies-database",
    border: "none",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Jokes",
    href: "/projects/jokes",
    border: "none",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Quotes",
    href: "/projects/quotes",
    border: "none",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Everton",
    href: "/projects/football/everton",
    border: "none",
    hover: "none",
    category: "projects",
    mainNav: false,
    footerNav_1: true,
    footerNav_2: false,
  },
  {
    label: "Boring 1",
    href: "/",
    mainNav: false,
    border: "none",
    category: "none",
    hover: "none",
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Boring 2",
    href: "/",
    mainNav: false,
    category: "none",
    border: "none",
    hover: "none",
    footerNav_1: false,
    footerNav_2: true,
  },
  {
    label: "Boring 3",
    href: "/",
    mainNav: false,
    category: "none",
    border: "none",
    hover: "none",
    footerNav_1: false,
    footerNav_2: true,
  },
];

{/********************************
  PREMIER LEAGUE  
*********************************/}

{/* Array of Premier League Seasons */}
const premierLeagueSeasons = [
	'92/93',
	'93/94', 
	'94/95', 
	'95/96', 
	'96/97', 
	'97/98', 
	'98/99', 
	'99/00', 
	'00/01', 
	'01/02', 
	'02/03', 
	'03/04', 
	'04/05', 
	'05/06', 
	'06/07', 
	'07/08', 
	'08/09', 
	'09/10', 
	'10/11', 
	'11/12', 
	'12/13', 
	'13/14', 
	'14/15', 
	'15/16', 
	'16/17', 
	'17/18', 
	'18/19', 
	'19/20', 
	'20/21', 
	'21/22', 
	'22/23', 
	'23/24', 
	'24/25'
];

const numberOfPremierLeagueSeasons = premierLeagueSeasons.length;

{/* map through the premier league seasons and create an array of season positions */}
const seasonPositions = Array.from({ length: numberOfPremierLeagueSeasons }, (_, i) => `season${i + 1}Pos`);

{/* paths */}
const clubLogosRoot = "/football/premier-league/club-logos";
const premierLeagueHubUrl = "/projects/football/competitions/english-premier-league";
const premierLeagueLogoSvgPath = "/football/competition-logos/premier-league-logo-white.svg";
const premierLeagueHubBlockImageRoot = "/football/premier-league/hub-blocks";

{/* MAG Premier League League Structure Setup */}
const leagueTableStructure = [
	{
		team: 'Alfie',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	},
	{
		team: 'Garcon',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	},
	{
		team: 'Michael',
		played: 0,
		won: 0,
		drawn: 0,
		lost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
		goalDifference: 0,
		points: 0
	}
];


{/********************************
  DEV RESOURCES
*********************************/}
const devResources = [
    {
        name: "Can I Use",
        slug: "can-i-use",
        url: "https://caniuse.com",
        description: "Can I Use is a tool that provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.",
        screenshot: "/dev-resources/screenshot-of--can-i-use.webp",
        home_icon_fill: "fill-transparent",
        icon_fill: "fill-transparent",
        icon: Icon_Resource,
        tags: ["web dev", "browsers"],
        featured: false
    },
    {
        name: "Codepen",
        slug: "codepen",
        url: "https://codepen.io",
        description: "CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
        screenshot: "/dev-resources/screenshot-of--codepen.webp",
        icon: Icon_Codepen,
        tags: ["code", "sandbox"],
        featured: true
    },
    {
		name: "Coolors",
		slug: "coolors",
		url: "https://coolors.co",
		description: "Coolors is a super fast colour scheme generator for designers and developers. Get your perfect palette at your fingertips.",
		screenshot: "/dev-resources/screenshot-of--coolors.webp",
		icon: Icon_ColourPalettes,
		tags: ["colours", "design"],
		featured: true
    },
    {
		name: "CSS Stats",
		slug: "css-stats",
		url: "https://cssstats.com",
		description: "CSS Stats provides analytics and visualizations for your stylesheets. This information can be used to improve consistency in your design, track performance of your app, and diagnose complex areas before it snowballs out of control.",
		screenshot: "/dev-resources/screenshot-of--css-stats.webp",
		icon: Icon_Resource,
		tags: ["css", "analytics"],
		featured: false
    },
    {
		name: "CSS Tricks",
		slug: "css-tricks",
		url: "https://css-tricks.com",
		description: "CSS-Tricks is a website about web design and development. It was created by Chris Coyier in 2007. It is a well-known site for web developers.",
		screenshot: "/dev-resources/screenshot-of--css-tricks.webp",
		icon: Icon_Resource,
		tags: ["css", "tutorials"],
		featured: false
    },
    {
		name: "Font Awesome",
		slug: "font-awesome",
		url: "https://fontawesome.com",
		description: "Font Awesome is a font and icon toolkit based on CSS and LESS. It was made by Dave Gandy for use with Bootstrap, and later was incorporated into the BootstrapCDN.",
		screenshot: "/dev-resources/screenshot-of--font-awesome.webp",
		icon: Icon_Font,
		tags: ["typography", "icons"],
		featured: false
    },
    {
		name: "GitHub",
		slug: "github",
		url: "https://github.com/",
		description: "GitHub is a web-based platform for version control using git. It is also where users can collaborate on or adopt open-source code projects, fork code, share ideas and more.",
		screenshot: "/dev-resources/screenshot-of--github.webp",
		icon: Icon_GitHub,
		tags: ["code", "dev tools"],
		featured: true
    },
    {
      name: "Google Analytics",
      slug: "google-analytics",
      url: "https://analytics.google.com",
      description: "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.",
      screenshot: "/dev-resources/screenshot-of--google-analytics.webp",
      icon: Icon_Resource,
      tags: ["analytics"],
      featured: false
    },
    {
      name: "Google Fonts",
      slug: "google-fonts",
      url: "https://fonts.google.com",
      description: "Google Fonts is a library of free licensed font families, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.",
      screenshot: "/dev-resources/screenshot-of--google-fonts.webp",
      icon: Icon_Font,
      tags: ["typography"],
      featured: true
    },
    {
      name: "HTML5 Doctor",
      slug: "html5-doctor",
      url: "http://html5doctor.com",
      description: "HTML5 Doctor is helping you implement HTML5 today. This site is packed with articles, web development tips, and all the code you need to get started.",
      screenshot: "/dev-resources/screenshot-of--html5-doctor.webp",
      icon: Icon_Resource,
      tags: ["html", "docs"],
      featured: false
    },
    {
      name: "Krystal UK",
      slug: "krystal",
      url: "https://krystal.uk",
      description: "Krystal is a UK-based hosting company that offers a range of hosting services, including shared hosting, VPS hosting, and dedicated servers.",
      screenshot: "/dev-resources/screenshot-of--krystal-uk.webp",
      icon: Icon_Resource,
      tags: ["hosting", "domains"],
      featured: false
    },
    {
      name: "LinkedIn",
      slug: "linkedin",
      url: "https://linkedin.com",
      description: "LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps. It is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs.",
      screenshot: "/dev-resources/screenshot-of--linkedin.webp",
      icon: Icon_LinkedIn,
      tags: ["networking", "social", "jobs"],
      featured: false
    },
    {
      name: "MDN Web Docs",
      slug: "mdn-docs",
      url: "https://developer.mozilla.org/en-US/",
      description: "MDN Web Docs is the ultimate resource for developers. It is a wiki that provides developers with information on how to use open web technologies including HTML, CSS, and JavaScript.",
      screenshot: "/dev-resources/screenshot-of--mdn-web-docs.webp",
      icon: Icon_Docs,
      tags: ["docs", "web dev"],
      featured: true
    },
    {
      name: "Next.js",
      slug: "nextjs",
      url: "https://nextjs.org",
      description: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      screenshot: "/dev-resources/screenshot-of--nextjs.webp",
      icon: Icon_NextJS,
      tags: ["js", "react"],
      featured: true
    },
    {
      name: "PageSpeed Insights",
      slug: "google-analytics",
      url: "https://developers.google.com/speed/pagespeed/insights/",
      description: "PageSpeed Insights is a tool that helps you identify ways to make your site faster and more mobile-friendly.",
      screenshot: "/dev-resources/screenshot-of--pagespeed-insights.webp",
      icon: Icon_Resource,
      tags: ["analytics"],
      featured: false
    },
    {
      name: "Shopify Cheat Sheets",
      slug: "shopify",
      url: "https://cheat.markdunkley.com/",
      description: "Shopify Cheat Sheets is a collection of cheat sheets for Shopify developers. It includes a Liquid cheat sheet, a Shopify cheat sheet, and a Shopify theme cheat sheet.",
      screenshot: "/dev-resources/screenshot-of--shopify-cheat-sheet.webp",
      icon: Icon_Resource,
      tags: ["cheat sheets", "shopify"],
      featured: false
    },
    {
      name: "SVG Repo",
      slug: "template",
      url: "https://svgrepo.com",
      description: "SVG Repo is a great resource for free SVG icons. It has a large collection of icons that you can use in your projects.",
      screenshot: "/dev-resources/screenshot-of--svg-repo.webp",
      icon: Icon_Resource,
      tags: ["icons", "svg"],
      featured: false
    },
    {
      name: "Tailwind CSS",
      slug: "tailwind-css",
      url: "https://tailwindcss.com",
      description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
      screenshot: "/dev-resources/screenshot-of--tailwind-css.webp",
      icon: Icon_TailwindSimple,
      tags: ["css"],
      featured: true
    },
    {
      name: "W3 Schools",
      slug: "w3-schools",
      url: "https://w3schools.com",
      description: "W3Schools is a web developer information website, with tutorials and references relating to web development topics such as HTML, CSS, JavaScript, PHP, SQL, and JQuery.",
      screenshot: "/dev-resources/screenshot-of--w3-schools.webp",
      icon: Icon_W3Schools,
      tags: ["docs", "tutorials"],
      featured: true
    },
    {
      name: "WebAIM",
      slug: "webaim",
      url: "https://webaim.org",
      description: "WebAIM is a non-profit organization that provides web accessibility solutions. It is a great resource for learning about web accessibility and how to make your websites more accessible.",
      screenshot: "/dev-resources/screenshot-of--web-aim.webp",
      icon: Icon_Resource,
      tags: ["accessibility", "web dev"],
      featured: false
    },
    {
      name: "YouTube",
      slug: "youtube",
      url: "https://youtube.com",
      description: "YouTube is a video-sharing platform that allows users to upload, view, rate, share, add to playlists, report, comment on videos, and subscribe to other users.",
      screenshot: "/dev-resources/screenshot-of--youtube.webp",
      icon: Icon_Resource,
      tags: ["social", "tutorials"],
      featured: false
    },
    {
      name: "Vector Logo Zone",
      slug: "vector-logo-zone",
      url: "https://vectorlogo.zone",
      description: "Vector Logo Zone is a site that provides high-quality vector logos in SVG format. It is a great resource for finding logos for your projects.",
      screenshot: "/dev-resources/screenshot-of--vector-logo-zone.webp",
      icon: Icon_Resource,
      tags: ["logos", "svg"],
      featured: false
    },
    {
      name: "GitHub Profile Generator",
      slug: "github-profile-generator",
      url: "https://rahuldkjain.github.io/gh-profile-readme-generator/",
      description: "GitHub Profile Generator is a tool that generates a GitHub profile README file for your GitHub profile. It is a great way to showcase your skills and projects on your GitHub profile.",
      screenshot: "/dev-resources/screenshot-of--github-profile-generator.webp",
      icon: Icon_GitHub,
      tags: ["github", "profile"],
      featured: false
    },
    {
      name: "Hero Patterns",
      slug: "hero-patterns",
      url: "https://heropatterns.com",
      description: "Hero Patterns is a collection of repeatable SVG background patterns for you to use on your digital projects.",
      screenshot: "/dev-resources/screenshot-of--hero-patterns.webp",
      icon: Icon_Resource,
      tags: ["patterns", "backgrounds"],
      featured: false
    },
    {
      name: "Tailwind Color",
      slug: "tailwind-color",
      url: "https://tailwindcolor.com",
      description: "Tailwind Color is a tool that helps you generate colour palettes for your Tailwind CSS projects.",
      screenshot: "/dev-resources/screenshot-of--tailwind-color.webp",
      icon: Icon_Resource,
      tags: ["colours", "tailwind"],
      featured: false
    },
    {
      name: "Shade Studio",
      slug: "shade-studio",
      url: "https://laura.media/shade-studio/",
      description: "Shade Studio is a tool that helps you generate colour palettes for your Tailwind CSS projects.",
      screenshot: "/dev-resources/screenshot-of--shade-studio.webp",
      icon: Icon_Resource,
      tags: ["tailwind", "colours"],
      featured: false
    }
];


{/********************************
  PROJECTS
*********************************/}
const dataForAllProjects = [
  	{
		name: "Dev Resources",
		href: "/web-development/dev-resources",
		featuredProject: false,
		icon: Icon_Laptop,
		color: "text-slate-300",
		bg: "bg-teal-900",
		border: "border-teal-700/50",
		divider: "divide-teal-700",
		hover: "hover:bg-teal-800",
		group: "group/resources",
		groupHover: "group-hover/resources:fill-slate-100 group-hover/resources:text-slate-100",
		description: "A collection of useful resources for web developers and designers.",
		category: "web dev",
		underConstruction: false,
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
		underConstruction: false,
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
		underConstruction: false,
		archived: false,
	},
	{
		name: "Fortnite",
		href: "/projects/gaming/fortnite",
		featuredProject: false,
		icon: Icon_Gamepad,
		color: "text-slate-200",
		bg: "bg-fn-dark-blue/90",
		border: "border-fn-dark-blue",
		divider: "divide-slate-700",
		hover: "hover:bg-fn-dark-blue",
		description: "A page dedicated to the video game Fortnite.",
		category: "gaming",
		underConstruction: false,
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
		description: "A collection of one-liner jokes. I bet (at least) one will make you laugh.",
		category: "fun",
		underConstruction: false,
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
		hover: "hover:bg-gray-900",
		group: "group/movies",
		groupHover: "group-hover/movies:fill-slate-100 group-hover/movies:text-slate-100",
		description: "A database of movies watched or to watch by the Pigeon & Parrot Movie Club (PPMC).",
		category: "fun",
		underConstruction: false,
		archived: false,
	},
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
		underConstruction: false,
		archived: false,
	},
	{
		name: "Premier League",
		href: "/projects/football/competitions/english-premier-league",
		featuredProject: true,
		icon: Icon_PremierLeagueSimple,
		color: "text-slate-200",
		bg: "bg-purple-900",
		border: "border-purple-700",
		hover: "hover:bg-purple-800 hover:border-purple-700",
		divider: "divide-purple-700",
		description: "A project about the English Premier League",
		category: "football",
		underConstruction: false,
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
		description: "A project about our solar system and it's 8 planets.",
		category: "space",
		underConstruction: false,
		archived: false,
	},
	{
		name: "The MAG Premier League",
		href: "/projects/gaming/the-mag-premier-league",
		featuredProject: true,
		icon: Icon_Football,
		color: "text-slate-800",
		bg: "bg-[#2BC9BC]",
		border: "border-magpl/20",
		divider: "divide-slate-800",
		hover: "hover:bg-[#2BC9BC]/80",
		description: "An online eFootball competition for the MAG community.",
		category: "gaming",
		underConstruction: false,
		archived: false,
	},
	{
		name: "Geography",
		href: "/projects/the-world",
		featuredProject: false,
		icon: Icon_Earth,
		color: "text-slate-700",
		bg: "bg-linear-to-br from-[#92FE9D] to-[#00C9FF]",
		border: "border-[#00C9FF]",
		divider: "divide-slate-500",
		hover: "hover:bg-linear-to-br from-[#92FE9D]/80 to-[#00C9FF]/80",
		description: "A project about the countries of the world.",
		category: "geography",
		underConstruction: true,
		archived: false,
	}
];


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
  EXPORTS
*********************************/}
export { 
	mainStyles, 
	globalPageStyles, 
	globalMainStyles, 
	globalMainElementStyles, 
	globalConstrainedMainStyles, 
	sharedHeadingStyles, 
	brandSharedHeadingStyles, 
  	brandHeadingStyles,
	brandPageBackground, 
	brandTextColour, 
	navigation, 
	premierLeagueSeasons, 
	seasonPositions, 
	clubLogosRoot, 
	premierLeagueHubUrl, 
	premierLeagueLogoSvgPath, 
	premierLeagueHubBlockImageRoot, 
	leagueTableStructure, 
	devResources, 
	dataForAllProjects, 
	socials, 
	mySites
};