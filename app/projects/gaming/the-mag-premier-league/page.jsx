import Header from "@/components/header/Header";
import LeaguePageHeader from "@/components/projects/mag-premier-league/LeaguePageHeader";
import Footer from "@/components/footer/Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { magEPLCurrentSeason as currentSeason } from "@/variables/Data";
import { magEPL_CardStyles, magEPL_H2Styles} from "@/variables/Styles";

import Link from "next/link";
import CardForCurrentSeason from "@/components/projects/mag-premier-league/CardForCurrentSeason";
import CardForCurrentTeams from "@/components/projects/mag-premier-league/CardForCurrentTeams";
import CardForUpcomingFixtures from "@/components/projects/mag-premier-league/CardForUpcomingFixtures";
import CardForLeagueRules from "@/components/projects/mag-premier-league/CardForLeagueRules";
import CardForPastWinners from "@/components/projects/mag-premier-league/CardForPastWinners";
import CardForPastSeasons from "@/components/projects/mag-premier-league/CardForPastSeasons";

// Style for MAG Premier League Page
const magPageBg = `bg-linear-to-r from-[#030117] from-10% via-[#2B2659] via-50% to-[#030117] to-90%`;

// Style For Details/Summary
const detailsStyles = `border border-slate-800 rounded-lg p-4 bg-slate-900/50 group overflow-x-auto! open:[&_svg]:-rotate-180 w-full transition-all duration-300 md:max-w-[800px] xl:max-w-[1000px] lg:px-4 font-light!`;
const detailsContentStyles = `[&>p]:font-light [&>p]:pb-1 [&>p]:border-b [&>p]:border-slate-800 [&_>_p]:mb-4 [&>p]:mt-12`;
const detailsRulesGroupStyles = `mb-12 mt-8 [&>p]:mb-1 lg:mb-12 flex flex-col`;
const detailsAllHeadingsStyles = `text-sm lg:text-base`;
const summaryStyles = `flex justify-between md:py-4 cursor-pointer lg:text-lg font-light`;
const summaryHeaderSvgContainer = `flex flex-col justify-center`;
const summaryHeaderSvgStyles = `rotate-0 transform text-current transition-all duration-300 size-4 stroke-1 cursor-pointer group-hover:text-magpl lg:size-6 font-current`;
const summarySectionHeadingStyles = `border-b-[0.5px] pb-4 border-b-magpl border-b-magpl`;

export const metadata = {
	title: 'The MAG Premier League',
	description: 'The MAG Premier League is a 3 team league where each team plays each other 4 times.',
}

export default function PAGE_THE_MAG_PREMIER_LEAGUE () {
  return (
    <div className={`${globalPageStyles} ${magPageBg} text-slate-200`}>
      	<Header />
      	<main className={`${globalWrapperFixedWidth} gap-12`}>
			
			<LeaguePageHeader />

			{/* Cards */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:space-y-8 lg:gap-8 xl:gap-12 2xl:gap-16 w-full [&_h2]:items-center justify-center mx-auto">
				<CardForCurrentSeason />
				<CardForCurrentTeams />
				<CardForUpcomingFixtures />
				<CardForPastWinners />
				<CardForLeagueRules />
				<CardForPastSeasons />
			</div>
			
			<div className="w-full max-w-[920px] mx-auto lg:pt-16 motion motion-preset-slide-up motion-delay-[900ms]">
			{/* Rules | Start */}
			<details className={`flex flex-col pb-4 mt-12 w-auto! no-scrollbar ${detailsStyles} ${detailsContentStyles} `}>
				<summary className={`text-xs tracking-wide text-center max-md:min-w-[80dvw] md:max-w-[1000px] ${summaryStyles}`}>
					<span className={`text-magpl`}>The MAG Premier League Rules</span>					
					<span className={summaryHeaderSvgContainer}>
						<svg 
							className={`${summaryHeaderSvgStyles} text-magpl`} 
							fill={`none`} 
							height={`20`} 
							width={`20`} 
							stroke={`currentColor`} 
							strokeLinecap={`round`} 
							strokeLinejoin={`round`} 
							strokeWidth={`2`} 
							viewBox={`0 0 24 24`}>
							<polyline points={`6 9 12 15 18 9`}></polyline>
						</svg>
					</span>
				</summary>
				<div className={`flex flex-col gap-8 pt-8 details-content`}>
					<div className={detailsRulesGroupStyles}>
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Season {currentSeason} Competitors</p>
						<div className={`rounded-lg p-4 border-slate-900`}>
							<h2 className={`text-center mb-6`}>Teams</h2>
							<div className={`grid w-full grid-cols-3 gap-8 [&>.team]:border [&>.team]:rounded-full [&>.team]:border-slate-900 [&>.team]:min-w-[40px] lg:[&>.team]:min-w-[160px] [&>.team]:text-center [&>.team]:aspect-square [&>.team]:flex [&>.team]:justify-center [&>.team]:items-center justify-center content-center`}>
								<div className="text-white bg-red-800 team lg:max-w-[5dvw] mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300">
									<span className={`text-2xl lg:text-[48px]`}>A</span>
								</div>
								<div className="text-black bg-blue-800 team lg:max-w-[5dvw] mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300">
									<span className={`text-2xl lg:text-[48px]`}>G</span>
								</div>
								<div className="text-white bg-black team lg:max-w-[5dvw] mx-auto lg:opacity-50 lg:hover:opacity-100 lg:transition-all lg:duration-300">
									<span className={`text-2xl lg:text-[48px]`}>M</span>
								</div>
							</div>
						</div>
					</div>
					
					<div className={`rule-group mb-8 mt-8 lg:mb-12`}>
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Season Rules</p>
						<ul className={`text-sm flex flex-col gap-1`}>
							<li className={`pt-4`}>3 teams</li>
							<li>Each team to play 8 games per season (max. 24 points)</li>
							<li>Each team players each other 4 times at home and 4 times away from home</li>
							<li>Prize money: &pound;10</li>
						</ul>
					</div>

					<div className={`rule-group mb-8 mt-8 [&>p]:mb-1 lg:mb-12`}>
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Disciplinary Rules</p>
						<ul className={`text-sm flex flex-col gap-1`}>
							<li className={`pt-4`}>A red card for 2 yellows card = 1 match ban</li>
							<li>A straight red card = 3 match ban</li>
						</ul>
					</div>

					<div className={`rule-group mb-8 mt-8 [&>p]:mb-1`}>
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Game Settings</p>
						<ul className={`text-sm flex flex-col gap-1`}>
							<li className={`pt-4`}>13 minute matches</li>
							<li>Excellent Condition</li>
							<li>5 Subs</li>
							<li>No extra time/penalties</li>
						</ul>
					</div>

					<div className={`rule-group mb-8 mt-8 [&>p]:mb-1`}>
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Past Seasons</p>
						<ul className={`text-sm flex flex-col gap-1`}>
							<li className={`pt-4`}><Link href="/projects/gaming/the-mag-premier-league/past-seasons/season-1">Season 1</Link></li>
						</ul>
					</div>
				</div>
			</details>
			{/* Rules | End */}
			</div>

      	</main>
      	<Footer />
    </div>
  );
}
