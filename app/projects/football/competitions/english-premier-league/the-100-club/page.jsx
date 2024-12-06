import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import TopScorersData from "@/data/to_replace_with_json/Data_For_PremierLeagueTopScorers";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { mainStyles, globalPageStyles } from "@/data/Variables";

export const metadata = {
	title: `The 100 Club`,
	description: `The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. Other members of the 100 Club include Wayne Rooney, Andy Cole, Frank Lampard, Thierry Henry, and Robbie Fowler.`
};

const sortedByGoals = [...TopScorersData].sort((a, b) =>
	b.playerGoals - a.playerGoals
);

const calculateDaysAgo = (date) => {
	const today = new Date();
	const lastGoalDate = new Date(date);
	const timeDifference = today - lastGoalDate;
	const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	return daysDifference;
  };
  
const pageIntroText = "The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. Other members of the 100 Club include Wayne Rooney, Andy Cole, Frank Lampard, Thierry Henry, and Robbie Fowler.";	

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
								<p className="flex flex-wrap justify-center gap-1 mb-4 gap-x-4">
								{Object.values(TopScorer.playerClubs).map((playerClub, index) => {
									let clubPageLink = clubsDir;
									return (
									<Link
										className="py-1 text-xs border-b-[2px] border-slate-200"
										key={index}
										href="/projects/football/competitions/english-premier-league/the-100-club"
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
								<div className={`absolute bottom-1 left-[4%] text-[10px] mx-auto w-[92%]`}>
									<p className="px-4 mx-auto italic text-slate-400 text-balance">Last scored in the Premier League for {TopScorer.playerLastGoalFor} on {new Date(TopScorer.playerLastGoalDate).toLocaleDateString('en-GB')} ({calculateDaysAgo(TopScorer.playerLastGoalDate)} days ago) vs {TopScorer.playerLastGoalOpponent}.</p>
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