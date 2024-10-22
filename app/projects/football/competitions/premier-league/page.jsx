import Image from "next/image";
import { Fragment } from "react";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";
import DataForPremTeams from "@/components/data/Data_For_PremierLeagueTeams";

const seasonPositions = Array.from({ length: 33 }, (_, i) => `season${i + 1}Pos`);
const clubLogoRoot = "/football/premier-league/club-logos";

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
const sortedPremierLeagueSeasonData = [...DataForPremTeams].sort((a, b) => {
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
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl`}>
			<Header />
			<main className={`!w-full text-epl`}>
				<div className={`${mainStyles}`}>
					<H1 text={`Premier League`} />
				</div>

				{/* Introduction */}
				<div className={`${mainStyles}`}>
					<div className={`w-full mb-8 max-md:mt-4 lg:mb-12 xl:mb-16`}>
						<h2 className={`mb-4 mt-2 px-2 border-l-4 border-amber-500 w-full text-xs font-bold text-left leading-none uppercase md:text-sm: lg:text-lg lg:mb-8`}>All Past and Present Teams</h2>
						<div className={`badges-container flex gap-4 overflow-x-scroll snap-mandatoryno-scrollbar sm:gap-6 md:pb-4 md:gap-8 lg:gap-12`}>
							{sortedPremierLeagueSeasonData.map((team, index) => (
							<div key={index} className={`badge-box snap-center`}>
								<Image 
								  src={`${clubLogoRoot}/${team.clubLogoSlug}.svg`} 
								  alt={team.teamName} 
								  width={60} 
								  height={60} 
								  title={team.teamName}
								  className={`h-[40px] lg:h-[60px] w-auto max-w-[40px] lg:max-w-[60px]`} 
								/>
								<p className={`text-xs truncate hidden`}>{team.teamName}</p>
							</div>
							))}
						</div>
					</div>
				</div>

				{/* Teams by Season | Start */}
				<div className={`${mainStyles}`}>
					<div className={`flex flex-col w-full items-center justify-center max-md:mt-4 lg:mb-4`}>
						<h2 className={`mb-4 mt-2 px-2 border-l-4 border-amber-500 w-full text-xs font-bold text-left leading-none uppercase md:text-sm: lg:text-lg`}>Teams by Season</h2>
					</div>
				</div>
				<div className={`w-full overflow-x-auto by-season mb-8 lg:w-[92%] lg:items-center lg:flex-col mx-auto`}>
					<table className={`max-w-full overflow-x-auto overflow-y-scroll text-xs lg:text-sm text-center hover:cursor-pointer z-2 lg:rounded-lg block max-h-[500px] [&>tr_td]:sticky z-2`}>
						<thead className={`font-light uppercase bg-epl/90 text-white top-0 !z-3 [&>tr_th]:font-light`}>
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
								<td className={`sticky left-0 pl-1 lg:pl-2 text-left bg-gray-100 z-2 !max-w-[144px] lg:max-w-[150px] xl:max-w-[200px] py-1 md:py-2 lg:py-3 truncate`}>
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
										className={`cursor-pointer px-1 ${season[pos] === -1 ? `text-epl/20 cursor-default` : season[pos] === 1 ? `bg-amber-500 text-slate-800` : ``}`} 
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
				{/* Teams by Season | End */}
				
			</main>
			<Footer customTextColour={`text-epl`} />
		</div>
	);
}