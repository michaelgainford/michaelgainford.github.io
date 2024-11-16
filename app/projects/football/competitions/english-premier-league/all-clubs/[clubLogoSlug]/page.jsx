"use client";

// import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useParams } from "next/navigation";

import Image from "next/image";
import Data from "@/data/Data_For_PremierLeagueTeams";
import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import Footer from "@/components/footer/Footer";
import { mainStyles, globalPageStyles } from "@/data/Variables";

export default function PAGE_FOR_INDIVIDUAL_CLUB () {
	const params = useParams();
	const clubLogoSlug = params.clubLogoSlug;
	const clubData = Data.filter((club) => club.clubLogoSlug === clubLogoSlug)[0];

	{/* loop through the premierLeagueSeasons array and count the number of times that anything containing 'Pos' is found where the value is not -1 for fields season1Pos, season2Pos, season3 Post etc up to 33 */}
	const numberOfSeasons = clubData.premierLeagueSeasons.reduce((acc, season) => {
		Object.keys(season).forEach((key) => {
			if (key.includes("Pos") && season[key] !== -1) {
				acc++;
			}
		});
		return acc;
	}
	, 0);

	{/* Take all the fields containing 'Pos' and put them into an array */}
	const allPositions = clubData.premierLeagueSeasons.map((season) => {
		return Object.keys(season).filter((key) => key.includes("Pos")).map((key) => season[key]);
	});

	// sort allPositions array in ascending order
	allPositions.sort((a, b) => a - b);

	{/* loop through the premierLeagueSeasons array checking anythhing that contains 'Pos' and find the lowest number that is higher than 0 */}
	const lowestFinish = clubData.premierLeagueSeasons.reduce((acc, season) => {
		Object.keys(season).forEach((key) => {
			if (key.includes("Pos") && season[key] > acc) {
				acc = season[key];
			}
		});
		return acc;
	}
	, 0);

	{/* loop through the premierLeagueSeasons array checking anything contains 'Pos' and find the lowest number i.e. 1 or 2, that is greater than 1 */}
/* 	const highestFinish = clubData.premierLeagueSeasons.reduce((acc, season) => {
		Object.keys(season).forEach((key) => {
			if (key.includes("Pos") && season[key] > 0) {
				acc = season[key];
			}
		});
		return acc;
	}
	, 0); */
	
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<PremierLeagueHero />
        		<div className={mainStyles}>
          			<div className="flex flex-col w-full gap-12 max-lg:pt-12 club-info">
            			<h1 className="mb-6 text-2xl font-bold text-center uppercase lg:text-4xl">{ clubData.teamName }</h1>
            			<div className="grid w-full grid-cols-1 lg:grid-cols-2">
              				<div className="flex justify-center max-lg:mb-12">
               					<Image src={`/football/premier-league/club-logos/${clubData.clubLogoSlug}.svg`} alt={clubData.teamName} width={200} height={200} />
              				</div>
              				<div className="">
                				<div className="grid content-center w-full h-full grid-cols-2 gap-4 text-sm text-center lg:text-left primary_info lg:pl-16 lg:text-base lg:gap-8 lg:border-l lg:border-slate-200">
									<div className="pair">
										<div className="font-bold">Nickname</div>
										<div>{ clubData.teamNickname }</div>
									</div>
									<div className="pair">
										<div className="font-bold">Founded:</div>
										<div>{ clubData.yearFounded }</div>
									</div>
									<div className="pair">
										<div className="font-bold">Stadium:</div>
										<div>{ clubData.stadium }</div>
									</div>
									<div className="pair">
										<div className="font-bold">Capacity:</div>
										<div>{ clubData.stadiumCapacity }</div>
									</div>
                				</div>
							</div>
						</div>

						<div className="pt-24 club-stats">
							<h2 className="text-2xl font-bold uppercase max-lg:text-center">Premier League Record</h2>
							<div className="grid grid-cols-2 gap-4 pt-12 lg:gap-8 lg:grid-cols-3 [&_.span-heading]:text-sm [&_.span-heading]:font-light [&_.span-heading]:underline [&_.span-heading]:uppercase [&_.span-heading]:underline-offset-2 [&_.stat]:text-sm [&_.stat]:lg:text-lg text-center lg:text-left">
								<div className="flex flex-col pair ">
									<div className="span-heading">Number of Seasons</div>
									<div className="stat">{numberOfSeasons}{ clubData.numberOfSeasons }<span className="text-sm">/ 33</span></div>
								</div>
								<div className="pair">
									<div className="span-heading">Highest Finish</div>
									<div className="stat">{ clubData.highestLeagueFinish }</div>
								</div>
								<div className="pair">
									<div className="span-heading">Lowest Finish</div>
									<div className="stat">{ lowestFinish }</div>
								</div>
								<div className="pair">
									<div className="span-heading">Biggest Win</div>
									<div className="stat">{ clubData.biggestWin }</div>
								</div>
								<div className="pair">
									<div className="span-heading">Biggest Loss</div>
									<div className="stat">{ clubData.biggestLoss }</div>
								</div>
							</div>
						</div>
						<div className="pb-16 mt-16 club-summary">
							<h3 className="mb-8 text-2xl font-bold uppercase max-lg:text-center">Overview</h3>
							<p className="text-sm max-lg:text-center lg:text-base">{ clubData.clubBlurb}</p>
						</div>
					</div>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}