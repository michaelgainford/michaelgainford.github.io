import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Prem100ClubScorerGrid from "@/components/projects/english-premier-league/EPL100ClubScorerData";
import {
	epl100ScorerData,
	numberOfPlayersWithAtLeast100Goals,
} from "@/variables/ProjectPremierLeague";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import Footer from "@/components/footer/Footer";
import DataForMainNavJSON from "@/data/data_for__sitemap.json";


const numberOfPlayers = numberOfPlayersWithAtLeast100Goals;
const activePlayers = epl100ScorerData.filter((player) => player.playerCurrent).length;
const retiredPlayers = numberOfPlayers - activePlayers;
const totalGoals = epl100ScorerData.reduce(
	(total, player) => total + player.playerGoals,
	0
);
const topScorer = [...epl100ScorerData].sort(
	(a, b) => b.playerGoals - a.playerGoals
)[0];

// Get lastUpdated for EPL - 100 Club
const EPL100ClubPage = DataForMainNavJSON.Pages.find(
	(page) => page.href === "/projects/football/competitions/english-premier-league/the-100-club"
);
const lastUpdatedRaw = EPL100ClubPage?.lastUpdated;
// Format date as '14th February 2026'
function formatDate(dateString) {
	if (!dateString) return "";
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.toLocaleString("en-GB", { month: "long" });
	const year = date.getFullYear();
	// Add ordinal suffix
	function ordinal(n) {
		if (n > 3 && n < 21) return n + "th";
		switch (n % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
			default: return n + "th";
		}
	}
	return `${ordinal(day)} ${month} ${year}`;
}
const lastUpdatedFormatted = formatDate(lastUpdatedRaw);

export const metadata = {
	title: "Premier League 100 Club",
	description:
		"The Premier League 100 Club is an illustrious group of players who have scored 100 or more goals in the Premier League. The first player to reach this milestone was Alan Shearer, who scored 260 goals in the Premier League during his career. There are currently 34 players on the list, with only 4 players still actively playing.",
};

const pageIntroText = `The Premier League 100 Club celebrates players who have scored 100 or more goals in the competition. Explore the list, compare records, and filter active and retired scorers.`;

const stats = [
	{
		label: "Total Players",
		value: numberOfPlayers,
		helpText: "With 100+ Premier League goals"
	},
	{
		label: "Active",
		value: activePlayers,
		helpText: "Still playing professionally"
	},
	{
		label: "Retired",
		value: retiredPlayers,
		helpText: "No longer active players"
	},
	{
		label: "Total Goals",
		value: totalGoals.toLocaleString(),
		helpText: `${topScorer.playerName} leads with ${topScorer.playerGoals}`
	}
];

export default function Page_EnglishPremierLeague100Club() {
	return (
		<div
			className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
		>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
				<div className={`${globalWrapperFixedWidth} space-y-6`}>
					<H1
						text="The 100 Club"
						font_sizes="text-base lg:text-[24px]!"
						other_classes="uppercase"
					/>
					<PageIntro
						text={pageIntroText}
						classes_font_sizes="text-xs/6 sm:text-sm/7 lg:text-base/7"
						classes_margin="mb-0"
						classes_text_alignment="text-center"
						classes_text_colour="text-epl-500/90"
						classes_width="max-w-[90ch]"
						classes_other=""
						other_classes=""
						text_colour=""
						font_sizes=""
					/>
					<div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-4">
						{stats.map((stat) => (
							<div
								className="rounded-xl border border-epl-300/25 bg-white p-4 text-center sm:p-5"
								key={stat.label}
							>
								<p className="text-[10px] uppercase tracking-[0.28em] text-epl-500/70">
									{stat.label}
								</p>
								<p className="mt-2 text-2xl font-bold text-epl lg:text-3xl">{stat.value}</p>
								<p className="mt-2 text-xs text-epl-500/70 lg:text-sm">{stat.helpText}</p>
							</div>
						))}
					</div>
				</div>
				<div
					className={`${globalWrapperFixedWidth} min-h-[300px] flex flex-col gap-4 lg:gap-8 xl:gap-12 mt-4 lg:mt-6`}
				>
					<Prem100ClubScorerGrid />
				</div>
				<div className={`${globalWrapperFixedWidth} mt-2 pb-2`}>
					<p className="text-center text-[10px] uppercase tracking-[0.2em] text-epl-400/70 italic">
						* Correct as of {lastUpdatedFormatted} (GMT)
					</p>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}
