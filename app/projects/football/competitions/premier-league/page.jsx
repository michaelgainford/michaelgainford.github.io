import Image from "next/image";
import { Fragment } from "react";
import { mainStyles, globalPageStyles, premierLeagueYears, clubLogosRoot, seasonPositions } from "@/data/Variables";
import DataForPremTeams from "@/data/Data_For_PremierLeagueTeams";
import Header from "@/components/header/Header";
import PremierLeagueHero from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";

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
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
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
								  src={`${clubLogosRoot}/${team.clubLogoSlug}.svg`} 
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
				
			</main>
			<Footer customTextColour={`text-epl`} />
		</div>
	);
}