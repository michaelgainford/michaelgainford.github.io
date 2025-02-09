import { Fragment } from "react";
import DataForPremTeamsImport from "@/data/data_for__englishpremierleague";
const DataForPremTeams = DataForPremTeamsImport.Clubs;
import { premierLeagueYears, seasonPositions } from "@/variables/Data";

{/* Sort by team name */}
const sortedPremierLeagueSeasonData = [...DataForPremTeams].sort((a, b) => {
	if (a.teamName > b.teamName) {
		return 1;
	}
	else if (a.teamName < b.teamName) {
		return -1;
	}
	else {
		return 0;
	}
});

export default function Component_EPLSeasonBySeasonTable() {
	return (
		<div className="flex w-full overflow-x-auto by-season mb-8 lg:w-[92%] lg:items-center lg:flex-col mx-auto">
			<table className="max-w-full overflow-x-auto overflow-y-scroll text-xs lg:text-sm text-center hover:cursor-pointer z-2 lg:rounded-lg block max-h-[500px] lg:max-h-full [&>tr_td]:sticky">
				<thead className="font-light uppercase bg-epl/90 text-white top-0 z-3! [&>tr_th]:font-light">
					<tr className="sticky top-0 left-0 z-50">
						<th className="first:bg-epl py-3 pl-1 lg:pl-2 text-left left-0 z-50 sticky top-0">
							Team
						</th>
						{premierLeagueYears.map((season, index) => (
						<th key={index} className="relative px-1 z-49 bg-epl">
							{season}
						</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-epl/20">
					{sortedPremierLeagueSeasonData.map((team, index) => (
					<tr key={index} className="border-b border-epl/20">
						<td className="sticky left-0 pl-1 lg:pl-2 text-left bg-gray-100 z-2 max-w-[144px]! lg:max-w-[150px] xl:max-w-[200px] py-1 md:py-2 lg:py-3 truncate">
								{team.teamName}
						</td>
						{team.premierLeagueSeasons.map((season, index) => (
						<Fragment key={index}>
							{seasonPositions.map((pos, i) => {
								const wins = season[`season${i + 1}W`];
								const draws = season[`season${i + 1}D`];
								const losses = season[`season${i + 1}L`];
								const goalsFor = season[`season${i + 1}F`];
								const goalsAgainst = season[`season${i + 1}A`];
								const goalDifference = goalsFor - goalsAgainst;
								const totalGames = wins + draws + losses;
								const totalPoints = wins * 3 + draws;
								return (
									<td
										key={i}
										className={`cursor-pointer px-1 ${
										season[pos] === -1
												? `text-epl/20 cursor-default`
												: season[pos] === 1
												? `bg-amber-500 text-slate-800`
												: ``
										}`}
										{...(season[pos] !== -1 && {
										title: `Played: ${totalGames}, W: ${wins}, D: ${draws}, L: ${losses}, F: ${goalsFor}, A: ${goalsAgainst}, GD: ${goalDifference}, Pts: ${totalPoints}`,
										})}
									>
										{season[pos] === -1 ? "-" : season[pos]}
									</td>
								);
							})}
						</Fragment>
						))}
					</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}