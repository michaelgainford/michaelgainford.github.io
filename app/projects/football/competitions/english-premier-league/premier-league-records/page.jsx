import Link from "next/link";
import Header from "@/components/header/_Header";
import Footer from "@/components/footer/_Footer";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

export const metadata = {
	title: "Premier League Records",
	description:
		"A curated hub of notable Premier League records across team, player, and match categories.",
};

const pageIntroText =
	"From title runs and points totals to individual milestones and match-day extremes, these records capture some of the biggest achievements in Premier League history.";

const recordGroups = [
	{
		heading: "Team Records",
		records: [
			{ label: "Most Premier League Titles", value: "13", holder: "Manchester United" },
			{ label: "Most Points In A Season", value: "100", holder: "Manchester City (2017/18)" },
			{ label: "Longest Unbeaten Run", value: "49 Matches", holder: "Arsenal (2003-04)" },
			{ label: "Most Consecutive Wins", value: "18", holder: "Manchester City (2017)" },
		],
	},
	{
		heading: "Player Records",
		records: [
			{ label: "Most Premier League Goals", value: "260", holder: "Alan Shearer" },
			{ label: "Most Premier League Assists", value: "162", holder: "Ryan Giggs" },
			{ label: "Most Hat-Tricks", value: "8", holder: "Sergio Aguero" },
			{ label: "Most Clean Sheets", value: "202", holder: "Petr Cech" },
		],
	},
	{
		heading: "Match Records",
		records: [
			{ label: "Biggest Winning Margin", value: "9-0", holder: "Achieved multiple times" },
			{ label: "Most Goals In One Match", value: "11", holder: "Portsmouth 7-4 Reading (2007)" },
			{ label: "Highest Scoring Draw", value: "4-4", holder: "Recorded multiple times" },
			{ label: "Fastest Premier League Goal", value: "7.69 Seconds", holder: "Shane Long" },
		],
	},
];

export default function Page_PremierLeagueRecords() {
	return (
		<div
			className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}
		>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />

				<div className={`${globalWrapperFixedWidth} space-y-6`}>
					<H1
						text="Premier League Records"
						font_sizes="text-base lg:text-[24px]!"
						other_classes="uppercase"
					/>
					<PageIntro
						text={pageIntroText}
						font_sizes="text-xs/6 sm:text-sm/7 lg:text-base/7"
						classes_text_alignment="text-center"
						classes_text_colour="text-epl-500/90"
						classes_width="max-w-[90ch]"
					/>

					<div className="grid gap-4 lg:grid-cols-3">
						{recordGroups.map((group) => (
							<section
								key={group.heading}
								className="rounded-xl border border-epl-300/25 bg-white p-4 sm:p-5"
							>
								<h2 className="text-xs uppercase tracking-[0.24em] text-epl-500/80">{group.heading}</h2>
								<div className="mt-4 space-y-3">
									{group.records.map((record) => (
										<div
											key={`${group.heading}-${record.label}`}
											className="rounded-lg border border-slate-200 bg-slate-50 p-3"
										>
											<p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{record.label}</p>
											<p className="mt-1 text-xl font-bold text-epl">{record.value}</p>
											<p className="mt-1 text-sm text-epl-500/80">{record.holder}</p>
										</div>
									))}
								</div>
							</section>
						))}
					</div>

					<div className="rounded-xl border border-epl-300/25 bg-slate-50/60 p-4 text-sm text-epl-500/80 sm:p-5">
						<p>
							Records can change across seasons. This page is intended as an at-a-glance records summary for major Premier League milestones.
						</p>
						<Link
							href="/projects/football/competitions/english-premier-league"
							className="mt-3 inline-flex rounded-md border border-epl-400/40 bg-white px-3 py-2 text-xs uppercase tracking-[0.2em] text-epl transition duration-300 hover:border-epl hover:bg-epl hover:text-white"
						>
							Back To Premier League Hub
						</Link>
					</div>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}
