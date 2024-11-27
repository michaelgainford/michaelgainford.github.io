{/* Site Wide Variables */}
const globalPageStyles = "space-y-4 lg:space-y-8 2xl:space-y-16 min-h-dvh";
const mainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const sharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";

{/* Navigation */}
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

{/* Array of Premier League Seasons */}
const premierLeagueYears = [
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

{/* map through the premier league seasons and create an array of season positions */}
const seasonPositions = Array.from({ length: 33 }, (_, i) => `season${i + 1}Pos`);

{/* paths */}
const clubLogosRoot = "/football/premier-league/club-logos";
const premierLeagueHubUrl = "/projects/football/competitions/english-premier-league";
const premierLeagueLogoSvgPath = "/football/competition-logos/premier-league-logo-white.svg";
const premierLeagueHubBlockImageRoot = "/football/premier-league/hub-blocks";

{/* List Of My Sites */}
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

{/* exports */}
export { mainStyles };
export { globalPageStyles };
export { sharedHeadingStyles };
export { navigation };
export { premierLeagueYears };
export { seasonPositions };
export { clubLogosRoot };
export { premierLeagueHubUrl };
export { premierLeagueLogoSvgPath };
export { premierLeagueHubBlockImageRoot };
export { mySites };