import Image from "next/image";
import Link from "next/link";
import Button from "@/components/buttons/Button_Global";
import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import TopScorersData from "@/data/Data_For_PremierLeagueTopScorers";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import { mainStyles, globalPageStyles, premierLeagueHubBlockImageRoot } from "@/data/Variables";

const sortedByGoals = [...TopScorersData].sort((a, b) =>
	b.playerGoals - a.playerGoals
);

const pageIntroText = "The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. Other members of the 100 Club include Wayne Rooney, Andy Cole, Frank Lampard, Thierry Henry, and Robbie Fowler.";

// create an array to store the blocks of data to populate the page
const premierLeagueHubBlocks = [
	{
		title: "History",
		content: "The Premier League is the top tier of English football and is the most watched football league in the world. The league was founded in 1992 when the clubs in the Football League First Division broke away from the Football League to form their own competition. The Premier League has 20 teams who play 38 matches each season (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship.",
		button: "PL History",
		buttonHref: "/",
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
		title: "Clubs in Focus",
		content: "Over the past 30 years of the Premier League, there have been 49 different clubs that have competed in the competition. Some clubs have been ever-present in the Premier League since its inception, while others have come and gone. The most successful club in Premier League history is Manchester United, who have won the title 13 times. Other successful clubs include Chelsea, Arsenal, Manchester City, and Liverpool.",
		button: "Clubs in Focus",
		buttonHref: "/",
		buttonTitle: "Clubs in Focus",
		image: "premier-league-92-93.webp"
	},
	{
		title: "Records",
		content: "Over the past 30+ years of the Premier League, there have been many records set and broken. Some of the most notable records include Alan Shearers record for the most goals scored in a single season (34), Manchester Citys record for the most points in a single season (100), and Arsenals record for the longest unbeaten run (49 games). Other notable records include the most goals scored in a single match (9), the most consecutive clean sheets (14), and the most consecutive wins (18).",
		button: "Records",
		buttonHref: "/",
		buttonTitle: "Records",
		image: "premier-league-92-93.webp"
	},
	{
		title: "Seasons",
		content: "The Premier League has been played over 30 seasons since its inception in 1992. Each season consists of 20 teams who play 38 matches each (19 home and 19 away). The team that finishes with the most points at the end of the season is crowned the Premier League champions. The bottom three teams are relegated to the EFL Championship. The Premier League season typically runs from August to May, with matches played on weekends and midweek.",
		button: "Seasons",
		buttonHref: "/projects/football/competitions/english-premier-league/seasons",
		buttonTitle: "Seasons",
		image: "premier-league-92-93.webp"
	},
];		

export default function PAGE_PREMIER_LEAGUE_100_CLUB () {
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
				<NavForPremierLeagueHub />

				<div className={`${mainStyles}`}>
					<H1 
					  text="The 100 Club"
					  font_sizes="text-base lg:!text-[24px]"
					  other_classes="uppercase" 
					/>
					<PageIntro 
					  text={pageIntroText} 
					/>
				</div>
				<div className={`${mainStyles} min-h-[300px] flex flex-col gap-4 lg:gap-8 xl:gap-12 [&>div]:p-4 [&>div]lg:p-12 [&_h2]:uppercase [&_h2]:font-bold`}>

				<div className="grid w-full grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 motion motion-preset-slide-up motion-delay-700">
					{Object.values(sortedByGoals).map((TopScorer, index) => {
						let clubsDir = "/clubs/";
						let playerImageExt = ".webp";
						let playerImageDir = "/football/premier-league/players/";
						let playerImage = playerImageDir + TopScorer.playerSlug + playerImageExt;
						return (
							<div className="relative flex flex-col gap-4 px-4 py-8 border rounded-lg lg:py-12" key={TopScorer.playerId}>
								<h3 className="font-bold uppercase">{TopScorer.playerName}</h3>
								<Image
									className="w-full my-4 border-8 border-slate-100"
									src={playerImage}
									alt={TopScorer.playerName}
									width={300}
									height={150}
								/>
								<p className="font-bold">{TopScorer.playerGoals} goals</p>
								<p className="flex flex-wrap justify-center gap-1 gap-x-4">
								{Object.values(TopScorer.playerClubs).map((playerClub, index) => {
									let clubPageLink = clubsDir;
									return (
									<Link
										className="py-1 text-xs border-b-[2px] border-slate-200"
										key={index}
										href={clubPageLink}
									>
										{playerClub}
									</Link>
									);
								})}
								</p>
								<div className="absolute flex items-center justify-center p-1 text-xs leading-none border rounded-lg size-6 top-1 left-1 aspect-square order">
									{index + 1}
								</div>
								<div className={`absolute top-1 right-1 p-1 text-xs player-status rounded-lg lowercase ${TopScorer.playerCurrent ? "bg-emerald-300" : "bg-rose-100"}`}>
									{TopScorer.playerCurrent ? "Active" : "Retired"}
								</div>
							</div>
						);
					})}
        		</div>
					

				</div>

				
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}