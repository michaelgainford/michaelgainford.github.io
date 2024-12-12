import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import { Seasons } from "@/data/data_for__magpremierleague.json"
import { globalPageStyles, mainStyles, leagueTableStructure } from "@/data/Variables";
const currentSeason = 1;

// Get the current season's date from Seasons
const Season = Seasons.find(season => season.season === currentSeason);
console.log('MG, this is the season', Season);
////////////////////////////////////////
// DATA | START
////////////////////////////////////////

const leagueTable = leagueTableStructure
// sort the array by points
leagueTable.sort((a, b) => b.points - a.points);
// sort the array by goal difference
leagueTable.sort((a, b) => b.goalDifference - a.goalDifference);

// Work out league table data
leagueTable.forEach((team, index) => {
	team.played = 0;
	team.won = 0;
	team.drawn = 0;
	team.lost = 0;
	team.goalsFor = 0;
	team.goalsAgainst = 0;
	team.goalDifference = 0;
	team.points = 0;
});

// Work out the league table data based on fixtures that have been played
Season.fixtures.filter(fixture => fixture.played).forEach(fixture => {
	// Get the home team
	const homeTeam = leagueTable.find(team => team.team === fixture.homeTeam);
	// Get the away team
	const awayTeam = leagueTable.find(team => team.team === fixture.awayTeam);

	// Update the played games
	homeTeam.played++;
	awayTeam.played++;

	// Update the goals for and against
	homeTeam.goalsFor += fixture.homeScore;
	homeTeam.goalsAgainst += fixture.awayScore;
	awayTeam.goalsFor += fixture.awayScore;
	awayTeam.goalsAgainst += fixture.homeScore;

	// Update the goal difference
	homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
	awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;

	// Update the points
	if (fixture.homeScore > fixture.awayScore) {
		homeTeam.won++;
		awayTeam.lost++;
		homeTeam.points += 3;
	} else if (fixture.homeScore < fixture.awayScore) {
		awayTeam.won++;
		homeTeam.lost++;
		awayTeam.points += 3;
	} else {
		homeTeam.drawn++;
		awayTeam.drawn++;
		homeTeam.points++;
		awayTeam.points++;
	}
});

// Sort the league table
leagueTable.sort((a, b) => {
	if (a.points === b.points) {
		return b.goalDifference - a.goalDifference;
	}
	return b.points - a.points;
});


/* Season.forEach(season => {
	season.fixtures.forEach(fixture => {
		// Get the home team
		const homeTeam = leagueTable.find(team => team.team === fixture.homeTeam);
		// Get the away team
		const awayTeam = leagueTable.find(team => team.team === fixture.awayTeam);

		// Update the played games
		homeTeam.played++;
		awayTeam.played++;

		// Update the goals for and against
		homeTeam.goalsFor += fixture.homeScore;
		homeTeam.goalsAgainst += fixture.awayScore;
		awayTeam.goalsFor += fixture.awayScore;
		awayTeam.goalsAgainst += fixture.homeScore;

		// Update the goal difference
		homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
		awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;

		// Update the points
		if (fixture.homeScore > fixture.awayScore) {
			homeTeam.won++;
			awayTeam.lost++;
			homeTeam.points += 3;
		} else if (fixture.homeScore < fixture.awayScore) {
			awayTeam.won++;
			homeTeam.lost++;
			awayTeam.points += 3;
		} else {
			homeTeam.drawn++;
			awayTeam.drawn++;
			homeTeam.points++;
			awayTeam.points++;
		}
	});
}); */

////////////////////////////////////////
// DATA | END
////////////////////////////////////////


////////////////////////////////////////
// STYLES
////////////////////////////////////////

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
      	<main className={`${mainStyles} gap-12`}>
			
			{/* Page Header | Start */}
			<div className={`page-header motion motion-preset-slide-up motion-delay-100 max-lg:mt-4`}>
				<div className={`flex flex-col items-center gap-2 lg:gap-4`}>
					<IconMagPremierLeague classes={`mx-auto size-12 sm:size-24 md:size-32 lg:size-48`} />
					<H1 text={`The MAG Premier League`} font_sizes={``} other_classes={`text-balance font-light! text-balance uppercase font-bold! text-slate-300 max-w-[16ch] mb-0! pb-0! max-lg:pt-0`} />
					<span className="text-center pt-2 w-full border-t border-dashed border-magpl/20 lg:border-magpl/50 font-medium text-magpl tracking-wider">Season: {currentSeason}</span>
				</div>
			</div>
			{/* Page Header | End */}

			{/* League Table */}
			<div className="my-2 md:my-4 lg:my-8 motion motion-preset-slide-up motion-delay-[300ms] pt-12 lg:pt-20 lg:pb-12">
				<h2 className={`text-center font-bold text-sm lg:text-2xl lg:tracking-wider`}>League Table</h2>
				<div className={`flex mt-4`}>
					<table className={`lg:min-w-[1000px] text-center`}>
						<thead className={`border-b border-slate-900 text-xs md:text-sm xl:text-base text-magpl`}>
							<tr className={`grid grid-cols-10 py-3 lowercase *:font-light`}>
								<th data-league-position={`league-position pr-1`}>Pos</th>
								<th data-league-team={`league-team`} className={`text-left`}>Team</th>
								<th data-league-played={``}>P</th>
								<th data-league-won={``}>W</th>
								<th data-league-drawn={``}>D</th>
								<th data-league-lost={``}>L</th>
								<th data-league-scored={``}>F</th>
								<th data-league-against={``}>A</th>
								<th data-league-goal-diff={``}>GD</th>
								<th data-league-points={``}>PTS</th>
							</tr>
						</thead>
						<tbody className={`text-xs md:text-base lg:text-xl`}>
						{leagueTable.map((team, index) => (
							<tr key={index} data-player={team.team} className={`grid grid-cols-10 py-3 *:font-light`}>
								<td data-league-position={index + 1} className={`pr-1 text-magpl`}>{index + 1}</td>
								<td data-league-team={team.team} className={`text-left max-sm:hidden font-bold! text-slate-300`}>{team.team}</td>
								<td data-league-team-letter={team.team[0]} className={`sm:hidden`}>{team.team[0]}</td>
								<td data-league-played={``}>{team.played}</td>
								<td data-league-won={``}>{team.won}</td>
								<td data-league-drawn={``}>{team.drawn}</td>
								<td data-league-lost={``}>{team.lost}</td>
								<td data-league-scored={``}>{team.goalsFor}</td>
								<td data-league-against={``}>{team.goalsAgainst}</td>
								<td data-league-goal-diff={``}>{team.goalDifference}</td>
								<td data-league-point={``}>{team.points}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Fixtures */}
			<div className={`w-full! px-4 lg:px-8  motion motion-preset-slide-up motion-delay-[600ms] pt-12 lg:pt-20 lg:pb-12 max-w-[1000px] mx-auto`}>
				<h3 className={`mb-6 text-center font-bold text-sm lg:text-2xl lg:tracking-wider`}>Fixtures</h3>
				<div className={`grid grid-cols-1 gap-6`}>

					{Season.fixtures.map((fixture, index) => (
						<div
							key={index}
							className={`bg-slate-900/50 hover:bg-slate-900/80 rounded-xl px-2 py-4 md:p-4 border-2 border-transparent max-lg:min-w-[80dvw] max-w-[1000px]! w-full mx-auto flex flex-col duration-300 transition-all group/fixture ${fixture.upcoming ? `text-slate-200` : fixture.played ? `text-magpl uppercase` : 'opacity-50'}`}>
							<div className={`grid grid-cols-1 relative`}>
								<div className={`grid grid-cols-[1fr_16px_16px_16px_1fr] sm:grid-cols-[1fr_30px_30px_30px_1fr] py-4 items-center text-sm *:text-sm md:*:text-xl lg:*:text-2xl tracking-widest [&>span]:text-center font-bold ${fixture.played ? `text-magpl` : fixture.upcoming ? `text-white` : `text-slate-600`}`}>
									<p className={`text-right md:pr-1`}>{fixture.homeTeam}</p>
									<span className={`text-center`}>{fixture.played ? fixture.homeScore : ''}</span>
									<span className={`text-center text-sm!`}>{fixture.played ? '-' : 'vs'}</span>
									<span className={`text-center`}>{fixture.played ? fixture.awayScore : ''}</span>
									<p className={`text-left md:pl-1`}>{fixture.awayTeam}</p>
								</div>
								<div className={`text-center flex flex-col pb-4 text-xs justify-center duration-300 transition-all md:tracking-widest ${fixture.played ? `text-magpl/50 group-hover/fixture:text-magpl` : fixture.upcoming ? `text-slate-300/50 group-hover/fixture:text-slate-300` : `text-slate-600/50 group-hover/fixture:text-slate-600`}`}>
									{fixture.date} @ {fixture.time}
								</div>

								<span className={`text-xxs text-center mx-auto lowercase absolute flex justify-center items-center -top-4 md:top-0 -left-3 md:left-0 lg:border-2 w-7 h-7 rounded-full p-2 leading-none font-bold duration-300 transition-all ${fixture.played ? 'text-magpl/50 border-magpl/50 group-hover/fixture:text-magpl group-hover/fixture:border-magpl' : 'text-slate-200/50 border-slate-200/50 group-hover/fixture:text-slate-200 group-hover/fixture:border-slate-200'}`}>{fixture.game}</span>
							</div>
						</div>
					))}
				</div>
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
						<p className={`${summarySectionHeadingStyles} ${detailsAllHeadingsStyles}`}>Season 1 Competitors</p>
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
				</div>
			</details>
			{/* Rules | End */}
			</div>

      	</main>
      	<Footer />
    </div>
  );
}
