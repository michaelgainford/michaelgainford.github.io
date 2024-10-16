import Image from "next/image";
import { Fragment } from "react";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";
import DataForPremTeamsBySeason from "@/components/data/Data_For_PremTeamsBySeason";

const seasonPositions = Array.from({ length: 33 }, (_, i) => `season${i + 1}Pos`);

// create an array to store the premier league seasons
const Years = [
  '92/93',
  '93/94', 
  '94/95', 
  '95/96', 
  '96/97', 
  '97/98', 
  '98/99', 
  '99/00', 
  '00/01', 
  '01/02', 
  '02/03', 
  '03/04', 
  '04/05', 
  '05/06', 
  '06/07', 
  '07/08', 
  '08/09', 
  '09/10', 
  '10/11', 
  '11/12', 
  '12/13', 
  '13/14', 
  '14/15', 
  '15/16', 
  '16/17', 
  '17/18', 
  '18/19', 
  '19/20', 
  '20/21', 
  '21/22', 
  '22/23', 
  '23/24', 
  '24/25'
];

// sort by teamName
const sortedPremierLeagueSeasonData = [...DataForPremTeamsBySeason].sort((a, b) => {
	if (a.teamName > b.teamName) {
		return 1;
	} else if (a.teamName < b.teamName) {
		return -1;
	} else {
		return 0;
	}
});

export default function PAGE_PREMIER_LEAGUE () {
	return (
		<div className={`bg-white ${globalPageStyles} [&>header]:bg-epl-500 [&>footer]:bg-epl`}>
			<Header />
			<main className={`${mainStyles} text-epl`}>
				<H1 text={`Premier League`} />
				<div className={`flex flex-col items-center justify-center max-md:mt-4 lg:mb-4 w-full`}>
					<h2 className={`mb-4 mt-2 px-2 border-l-4 border-epl border-current w-full text-xs font-bold text-left leading-none uppercase md:text-sm: lg:text-lg`}>Teams by Season</h2>
				</div>
				<div className={`w-full overflow-x-auto by-season mb-8`}>
					<table className={`max-w-full overflow-x-auto overflow-y-scroll text-xs lg:text-sm text-center hover:cursor-pointer z-2 rounded-lg block max-h-[500px] [&>tr_td]:sticky z-2`}>
						<thead className={`font-light uppercase bg-epl/90 text-white [&>tr_th]:font-light top-0  !z-3`}>
							<tr className={`sticky top-0 left-0 z-[50]`}>
								<th className={`first:bg-epl py-3 pl-1 lg:pl-2 text-left left-0 z-[50] sticky top-0`}>Team</th>
								{Years.map((season, index) => (
								<th key={index} className={`relative px-1 z-[49] bg-epl`}>{season}</th>
								))}
							</tr>
						</thead>
						<tbody className={`bg-epl/20`}>
							{sortedPremierLeagueSeasonData.map((team, index) => (
							<tr key={index} className={`border-b border-epl/20`}>
								<td className={`sticky left-0 pl-1 lg:pl-2 text-left bg-gray-100 z-2 max-w-[100px] lg:min-w-[150px] py-1 md:py-2 lg:py-3 truncate`}>
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
									const totalPoints = (wins * 3) + draws;
									return (
									<td 
										key={i} 
										className={`cursor-pointer px-1 ${season[pos] === -1 ? `text-epl/20 cursor-default` : season[pos] === 1 ? `bg-yellow-500 text-slate-800` : ``}`} 
										{...(season[pos] !== -1 && {
										title: `Played: ${totalGames}, W: ${wins}, D: ${draws}, L: ${losses}, F: ${goalsFor}, A: ${goalsAgainst}, GD: ${goalDifference}, Pts: ${totalPoints}`
										})}
									>
										{season[pos] === -1 ? '-' : season[pos]}
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
			</main>
			<Footer customTextColour={`text-epl`} />
		</div>
	);
}