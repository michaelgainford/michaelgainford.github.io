import Image from "next/image";
import Header from "@/components/header/_Header";
import Button from "@/components/buttons/Button";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { premierLeagueHubBlockImageRoot } from "@/variables/ProjectPremierLeague";
import PremierLeagueDataJSON from "@/data/data_for__englishpremierleague.json";
const PremierLeagueData = PremierLeagueDataJSON.Clubs;

export const metadata = {
	title: `Premier League Hub`,
	description: `All past and present teams in the Premier League.`,
}

const numberOfUniqueClubs = PremierLeagueData.length;
const blockImagePlaceholderStyles = "w-full mb-8 image-holder aspect-video mt-4 rounded-t-xl";
const pageIntroText = "Welcome to the Premier League Hub. This is the place to find lots of information about the English Premier League, including the history of the competition, the clubs that have competed in the league, and the records that have been set and broken over the years. Whether you are a die-hard fan of a particular club or just a casual observer of the beautiful game, there is something here for everyone.";

// create an array to store the blocks of data to populate the page
const premierLeagueHubBlocks = [
	{
		title: "All Clubs",
		content: `Over the past 30 years of the Premier League, there have been ${numberOfUniqueClubs} different clubs that have competed in the competition. Some clubs have been ever-present in the Premier League since its inception, while others have come and gone. The most successful club in Premier League history is Manchester United, who have won the title 13 times. Other successful clubs include Chelsea, Arsenal, Manchester City, and Liverpool.`,
		button: "All Clubs",
		buttonHref: "/projects/football/competitions/english-premier-league/all-clubs",
		buttonTitle: "All Clubs",
		image: "premier-league-clubs.webp"
	},
	{
		title: "Season by Season History",
		content: "The Premier League is the top tier of English football and is the most watched football league in the world. The league was founded in 1992 when the clubs in the Football League First Division broke away from the Football League to form their own competition. The Premier League has 20 teams who play 38 matches each season (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship.",
		button: "PL History",
		buttonHref: "/projects/football/competitions/english-premier-league/history",
		buttonTitle: "English Premier League History",
		image: "premier-league-92-93.webp"
	},
	{
		title: "The 100 Club",
		content: "The 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. Other members of the 100 Club include Wayne Rooney, Andy Cole, Frank Lampard, Thierry Henry, and Robbie Fowler.",
		button: "The 100 Club",
		buttonHref: "/projects/football/competitions/english-premier-league/the-100-club",
		buttonTitle: "The 100 Club",
		image: "premier-league-100-club.webp"
	},
	{
		title: "Records",
		content: "Over the past 30+ years of the Premier League, there have been many records set and broken. Some of the most notable records include Alan Shearers record for the most goals scored in a single season (34), Manchester Citys record for the most points in a single season (100), and Arsenals record for the longest unbeaten run (49 games). Other notable records include the most goals scored in a single match (9), the most consecutive clean sheets (14), and the most consecutive wins (18).",
		button: "Records",
		buttonHref: "/",
		buttonTitle: "Records",
		image: "premier-league-season-records.webp"
	},
	{
		title: "Season by Season League Finishes",
		content: "The Premier League has been played over 30 seasons since its inception in 1992. Each season consists of 20 teams who play 38 matches each (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship. The Premier League season typically runs from August to May, with matches played on weekends and midweek.",
		button: "Seasons",
		buttonHref: "/projects/football/competitions/english-premier-league/seasons",
		buttonTitle: "Seasons",
		image: "premier-league-seasons.webp"
	},
];		

export default function Page_EnglishPremierLeague () {
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
				<div className={globalWrapperFixedWidth}>
					<H1 
					  text="The Premier League"
					  font_sizes="text-base lg:text-[24px]!"
					  other_classes="uppercase" 
					/>
					<PageIntro 
					  text={pageIntroText} 
					  font_sizes="text-xs/5 lg:text-base!"
					/>
				</div>
				<div className={`${globalWrapperFixedWidth} min-h-[300px] grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 [&>div]:border [&>div]:px-4 [&>div]:py-8 lg:[&>div]:p-8 [&>div]lg:p-12 [&_h2]:uppercase [&_h2]:font-bold`}>
					{premierLeagueHubBlocks.map((block, index) => {
						return (
							<div key={index} className="flex flex-col h-full lg:gap-3 rounded-lg">
								<h2 className="pl-2 text-sm leading-none border-l-4 lg:border-l-8 border-amber-500">{block.title}</h2>
								<div className="content">
									<div className={blockImagePlaceholderStyles}>
										<Image 
										  src={`${premierLeagueHubBlockImageRoot}/${block.image}`} 
										  alt={block.title} 
										  width={800}
										  height={450} 
										  className="object-cover rounded-lg aspect-video h-auto w-full" 
											loading={index < 2 ? "eager" : "lazy"}
										/>
									</div>
									<p className="text-xs tracking-wide lg:text-sm">{block.content}</p>
									<div className="flex justify-start mt-8 text-white">
										<Button 
										  label={block.button} 
										  href={block.buttonHref} 
										  title={block.buttonTitle} 
										  background_colour="bg-transparent"
										  border_colour="border-epl" 
										  text_colour="text-epl"
										  hover_background_colour="hover:bg-epl"
										  hover_text_colour="hover:text-white"
										/>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}