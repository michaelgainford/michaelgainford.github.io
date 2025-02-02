import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Prem100ClubScorerGrid from "@/components/projects/english-premier-league/EPL100ClubScorerData";
import { numberOfPlayersWithAtLeast100Goals } from "@/variables/Data";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import Footer from "@/components/footer/Footer";

const numberOfPlayers = numberOfPlayersWithAtLeast100Goals;

export const metadata = {
	title: "Premier League 100 Club",
	description:
		"The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. There are currently 34 players on the list, with only 4 players still actively playing.",
};

const pageIntroText = `The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. As of today, there are ${numberOfPlayers} players in the 100 Club.`;

export default function Page_PremierLeague100Club() {
	return (
		<div
			className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
		>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
				<NavForPremierLeagueHub />
				<div className={`${globalWrapperFixedWidth}`}>
					<H1
						text="The 100 Club"
						font_sizes="text-base lg:text-[24px]!"
						other_classes="uppercase"
					/>
					<PageIntro
						text={pageIntroText}
						classes_font_sizes=""
						classes_margin=""
						classes_text_alignment=""
						classes_text_colour=""
						classes_width=""
						classes_other=""
						other_classes=""
						text_colour=""
						font_sizes=""
					/>
				</div>
				<div
					className={`${globalWrapperFixedWidth} min-h-[300px] flex flex-col gap-4 lg:gap-8 xl:gap-12 [&>div]:p-4 [&>div]lg:p-12 [&_h2]:uppercase [&_h2]:font-bold`}
				>
					<Prem100ClubScorerGrid />
				</div>
				<div className={`${globalWrapperFixedWidth} mt-8`}>
					<p className="text-center text-[10px] text-epl-400/60 uppercase italic">
						* Correct as of 2nd February 2025 @ 18:44 (GMT)
					</p>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}