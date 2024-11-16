import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import IconMagPremierLeague from "@/components/icons/IconMagPremierLeague";
import DataForMAGPremierLeague from "@/data/Data_For_MAGPremierLeague";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

////////////////////////////////////////
// DATA | START
////////////////////////////////////////

// Empty array to store the league table data
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

// sort the array by points
leagueTableStructure.sort((a, b) => b.points - a.points);

// Work out league table data
{DataForMAGPremierLeague.map((fixture) => {
	// If the game has been played
	if (fixture.homeScore !== -1 && fixture.awayScore !== -1) {
		// Games Played
		// Home
		if (fixture.homeTeam === 'Alfie') {
			leagueTableStructure[0].played++;
		} else if (fixture.homeTeam === 'Garcon') {
			leagueTableStructure[1].played++;
		} else if (fixture.homeTeam === 'Michael') {
			leagueTableStructure[2].played++;
		}

		// Games Played
		// Away
		if (fixture.awayTeam === 'Alfie') {
			leagueTableStructure[0].played++;
		} else if (fixture.awayTeam === 'Garcon') {
			leagueTableStructure[1].played++;
		} else if (fixture.awayTeam === 'Michael') {
			leagueTableStructure[2].played++;
		}

		// Games Won
		// Home
		if (fixture.homeScore > fixture.awayScore) {
			if (fixture.homeTeam === 'Alfie') {
				leagueTableStructure[0].won++;
			} else if (fixture.homeTeam === 'Garcon') {
				leagueTableStructure[1].won++;
			} else if (fixture.homeTeam === 'Michael') {
				leagueTableStructure[2].won++;
			}
		}

		// Games Won
		// Away
		if (fixture.awayScore > fixture.homeScore) {
			if (fixture.awayTeam === 'Alfie') {
				leagueTableStructure[0].won++;
			} else if (fixture.awayTeam === 'Garcon') {
				leagueTableStructure[1].won++;
			} else if (fixture.awayTeam === 'Michael') {
				leagueTableStructure[2].won++;
			}
		}

		// Games Drawn
		// Home
		if (fixture.homeScore === fixture.awayScore) {
			if (fixture.homeTeam === 'Alfie') {
				leagueTableStructure[0].drawn++;
			} else if (fixture.homeTeam === 'Garcon') {
				leagueTableStructure[1].drawn++;
			} else if (fixture.homeTeam === 'Michael') {
				leagueTableStructure[2].drawn++;
			}
		}

		// Games Drawn
		// Away
		if (fixture.awayScore === fixture.homeScore) {
			if (fixture.awayTeam === 'Alfie') {
				leagueTableStructure[0].drawn++;
			} else if (fixture.awayTeam === 'Garcon') {
				leagueTableStructure[1].drawn++;
			} else if (fixture.awayTeam === 'Michael') {
				leagueTableStructure[2].drawn++;
			}
		}

		// Games Lost
		// Home
		if (fixture.homeScore < fixture.awayScore) {
			if (fixture.homeTeam === 'Alfie') {
				leagueTableStructure[0].lost++;
			} else if (fixture.homeTeam === 'Garcon') {
				leagueTableStructure[1].lost++;
			} else if (fixture.homeTeam === 'Michael') {
				leagueTableStructure[2].lost++;
			}
		}

		// Games Lost
		// Away
		if (fixture.awayScore < fixture.homeScore) {
			if (fixture.awayTeam === 'Alfie') {
				leagueTableStructure[0].lost++;
			} else if (fixture.awayTeam === 'Garcon') {
				leagueTableStructure[1].lost++;
			} else if (fixture.awayTeam === 'Michael') {
				leagueTableStructure[2].lost++;
			}
		}

		// Goals For & Goals Against
		// Home
		if (fixture.homeTeam === 'Alfie') {
			leagueTableStructure[0].goalsFor += fixture.homeScore;
			leagueTableStructure[0].goalsAgainst += fixture.awayScore;
		}

		// Goals For & Goals Against
		// Away
		if (fixture.awayTeam === 'Alfie') {
			leagueTableStructure[0].goalsFor += fixture.awayScore;
			leagueTableStructure[0].goalsAgainst += fixture.homeScore;
		}

		// Goals For & Goals Against
		// Home
		if (fixture.homeTeam === 'Garcon') {
			leagueTableStructure[1].goalsFor += fixture.homeScore;
			leagueTableStructure[1].goalsAgainst += fixture.awayScore;
		}

		// Goals For & Goals Against
		// Away
		if (fixture.awayTeam === 'Garcon') {
			leagueTableStructure[1].goalsFor += fixture.awayScore;
			leagueTableStructure[1].goalsAgainst += fixture.homeScore;
		}

		// Goals For & Goals Against
		// Home
		if (fixture.homeTeam === 'Michael') {
			leagueTableStructure[2].goalsFor += fixture.homeScore;
			leagueTableStructure[2].goalsAgainst += fixture.awayScore;
		}

		// Goals For & Goals Against
		// Away
		if (fixture.awayTeam === 'Michael') {
			leagueTableStructure[2].goalsFor += fixture.awayScore;
			leagueTableStructure[2].goalsAgainst += fixture.homeScore;
		}
		
		// Goal Difference
		// Team 1
		leagueTableStructure[0].goalDifference = leagueTableStructure[0].goalsFor - leagueTableStructure[0].goalsAgainst;

		// Goal Difference
		// Team 2
		leagueTableStructure[1].goalDifference = leagueTableStructure[1].goalsFor - leagueTableStructure[1].goalsAgainst;

		// Goal Difference
		// Team 3
		leagueTableStructure[2].goalDifference = leagueTableStructure[2].goalsFor - leagueTableStructure[2].goalsAgainst;

		// Points
		// Team 1
		leagueTableStructure[0].points = (leagueTableStructure[0].won * 3) + leagueTableStructure[0].drawn;

		// Points
		// Team 2
		leagueTableStructure[1].points = (leagueTableStructure[1].won * 3) + leagueTableStructure[1].drawn;

		// Points
		// Team 3
		leagueTableStructure[2].points = (leagueTableStructure[2].won * 3) + leagueTableStructure[2].drawn;
	}
})
};

// sort the array by goal difference
leagueTableStructure.sort((a, b) => b.goalDifference - a.goalDifference);
// sort the array by points
leagueTableStructure.sort((a, b) => b.points - a.points);

////////////////////////////////////////
// DATA | END
////////////////////////////////////////


////////////////////////////////////////
// STYLES
////////////////////////////////////////

// Style for MAG Premier League Page
const magPageBg = `bg-gradient-to-r from-[#030117] from-10% via-[#2B2659] via-50% to-[#030117] to-90%`;

// Style For Details/Summary
const detailsStyles = `border border-slate-800 rounded-lg p-4 bg-slate-900/50 group !overflow-x-auto [&_svg]:open:-rotate-180 w-full transition-all duration-300 md:max-w-[800px] xl:max-w-[1000px] lg:px-4 !font-light`;
const detailsContentStyles = `[&>p]:font-light [&>p]:pb-1 [&>p]:border-b [&>p]:border-slate-800 [&_>_p]:mb-4 [&>p]:mt-12`;
const detailsRulesGroupStyles = `mb-12 mt-8 [&>p]:mb-1 lg:mb-12 flex flex-col`;
const detailsAllHeadingsStyles = `text-sm lg:text-base`;
const summaryStyles = `flex justify-between md:py-4 cursor-pointer lg:text-lg font-light`;
const summaryHeaderSvgContainer = `flex flex-col justify-center`;
const summaryHeaderSvgStyles = `rotate-0 transform text-slate-200 transition-all duration-300 size-4 stroke-1 cursor-pointer group-hover:text-magpl lg:size-6`;
const summarySectionHeadingStyles = `border-b-[0.5px] pb-4 border-b-magpl border-b-magpl`;


////////////////////////////////////////
// FUNCTION
////////////////////////////////////////
export default function PAGE_THE_MAG_PREMIER_LEAGUE () {
  return (
    <div className={`${globalPageStyles} ${magPageBg}`}>
      	<Header />
      	<main className={`${mainStyles} gap-12`}>
			
			{/* Page Header | Start */}
			<div className={`page-header motion motion-preset-slide-up motion-delay-100`}>
				<div className={`flex flex-col`}>
					<IconMagPremierLeague classes={`mx-auto size-12 sm:size-24 md:size-32 lg:size-48`} />
				</div>
				<H1 text={`The MAG Premier League`} className={`!max-lg:pt-0 text-balance`} />
			</div>
			{/* Page Header | End */}


			{/* Rules | Start */}
			<details className={`flex flex-col pb-4 ${detailsStyles} ${detailsContentStyles} motion motion-preset-slide-up motion-delay-[300ms]`}>
				<summary className={`text-xs tracking-wide text-center max-md:min-w-[80dvw] md:max-w-[1000px] ${summaryStyles}`}>
					<span>The MAG Premier League Rules</span>					
					<span className={summaryHeaderSvgContainer}>
						<svg 
							className={summaryHeaderSvgStyles} 
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
							<div className={`grid w-full grid-cols-3 gap-8 [&>.team]:border [&>.team]:rounded-full [&>.team]:border-slate-900 [&>.team]:min-w-[40px] [&>.team]:lg:min-w-[160px] [&>.team]:text-center [&>.team]:aspect-square [&>.team]:flex [&>.team]:justify-center [&>.team]:items-center justify-center content-center`}>
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


			{/* League Table */}
			<div className={`my-2 md:my-4 lg:my-8 motion motion-preset-slide-up motion-delay-[600ms]`}>
				<h2 className={`text-center font-light text-sm lg:text-base`}>League Table</h2>
				<div className={`flex mt-4`}>
					<table className={`lg:min-w-[1000px] text-center`}>
						<thead className={`border-b border-slate-900 text-xs md:text-sm xl:text-base text-magpl`}>
							<tr className={`grid grid-cols-10 py-3 uppercase [&>*]:font-light`}>
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
						{leagueTableStructure.map((team, index) => (
							<tr key={index} data-player={team.team} className={`grid grid-cols-10 py-3 [&>*]:font-light`}>
								<td data-league-position={index + 1} className={`pr-1 text-magpl`}>{index + 1}</td>
								<td data-league-team={team.team} className={`text-left max-sm:hidden`}>{team.team}</td>
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
			<div className={`!w-full px-4 lg:px-8 max-w-[1000px] motion motion-preset-slide-up motion-delay-[900ms]`}>
				<h3 className={`mb-6 text-center font-light text-sm lg:text-base`}>Fixtures</h3>
				<div className={`grid grid-cols-1 gap-6`}>
					{DataForMAGPremierLeague?.map((fixture, index) => (
						<div 
							key={index} 
							className={`bg-slate-900/50 hover:bg-slate-900/80 rounded-xl px-2 py-4 md:p-4 border-2 border-transparent max-lg:min-w-[80dvw] !max-w-[1000px] w-full mx-auto flex flex-col ${fixture.upcoming ? `text-white` : fixture.played ? `text-magpl uppercase` : 'opacity-50'}`}>
							<div className={`grid grid-cols-1 relative`}>
								<div className={`grid grid-cols-[1fr_30px_30px_30px_1fr] py-4 items-center text-sm [&>*]:text-sm [&>*]:md:text-xl [&>*]:lg:text-2xl ${fixture.played ? `text-magpl` : fixture.upcoming ? `text-white` : `text-slate-600`}`}>
									<p className={`text-right md:pr-1`}>{fixture.homeTeam}</p>
									<span className={`text-center`}>{fixture.played ? fixture.homeScore : ''}</span>
									<span className={`text-center !text-sm`}>{fixture.played ? '-' : 'vs'}</span>
									<span className={`text-center`}>{fixture.played ? fixture.awayScore : ''}</span>
									<p className={`text-left md:pl-1`}>{fixture.awayTeam}</p>
								</div>
								<div className={`text-center flex flex-col pb-4 text-xs justify-center ${fixture.played ? `text-magpl` : fixture.upcoming ? `text-white` : `text-slate-600`}`}>
									{fixture.date} @ {fixture.time}
								</div>
								<div className="">

								<span className={`text-xs text-center mx-auto grid grid-cols-1 lowercase absolute top-0 left-0 ${fixture.played ? 'text-magpl' : 'text-slate-600'}`}>{fixture.game}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

      	</main>
      	<Footer />
    </div>
  );
}
