import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import NavForPremierLeagueHub from "@/components/navigation/Nav_For_PremierLeagueHub";
import H1 from "@/components/typography/H1_Span";
import Footer from "@/components/footer/Footer";
import PremierLeagueDataJSON from "@/data/data_for__englishpremierleague.json";
const ClubsData = PremierLeagueDataJSON.Clubs;
const sortedByName = [...ClubsData].sort((a,b) => a.teamName > b.teamName ? 1 : -1);
export const metadata = {
	title: "Premier League Clubs",
	description: "All the clubs that have played in the English Premier League since its inception in 1992.",
}

import { globalPageStyles, mainStyles } from "@/variables/Styles";

export default function Page_PremierLeagueAllClubs () {
	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<HeroPremierLeague />
				<div className={`${mainStyles} text-xs! py-4`}>
					<NavForPremierLeagueHub />
				</div>
				<div className={`${mainStyles}`}>
					<H1 
					  text="All Clubs"
						font_sizes="text-base lg:text-[24px]!" 
						other_classes="uppercase pt-0! mb-0!" 
          />
				</div>
				<div className="min-h-[300px] grid grid-cols-1 gap-4 lg:gap-8 xl:gap-12 [&>div]:px-4 [&>div]:py-6 [&>div]:md:p-8 [&>div]lg:p-12 [&_h2]:uppercase [&_h2]:font-bold">					
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 [&_p]:text-center">
						{Object.values(sortedByName).map((Club) => {
							const clubsDir = "/football/premier-league/club-logos";
							let clubLogosDir = clubsDir + '/' + Club.clubLogoSlug + ".svg";
							// Only Everton gets a link, others are static
							const isEverton = Club.clubLogoSlug === "everton";
								const cardContent = (
									<>
										<Image
											src={clubLogosDir}
											alt={Club.teamName}
											width={80}
											height={80}
											className={Club.currentPrem ? "grayscale-0 h-16! 2xl:h-[120px]! max-h-unset! w-auto! max-w-auto" : "grayscale hover:grayscale-0 h-16! 2xl:h-[120px]! max-h-unset! w-auto! max-w-auto duration-500 transition-all"}
										/>
										<p className={`text-xs md:text-sm ${Club.currentPrem ? "text-brand-main font-bold" : "text-gray-400"}`}>
											{Club.teamName}
										</p>
										<span className={`absolute top-0 right-0 p-1 ${Club.currentPrem ? `bg-emerald-200/30` : `bg-transparent`} text-[10px] font-bold tracking-wide`}>
											{Club.currentPrem ? `Current` : `Former`}
										</span>
									</>
								);
								// Shared card classes for both a and div
								const cardClass = `club-card relative flex flex-col items-center gap-2 md:gap-4 px-2 py-4 sm:p-4 m-2 sm:m-4 border border-slate-200 rounded-lg ${Club.currentPrem ? "current-prem" : "bg-gray-100 former-prem"} ${isEverton ? "cursor-pointer" : "cursor-default"}`;
								if (isEverton) {
									return (
										<Link
											key={Club.clubLogoSlug}
											href={`/projects/football/competitions/english-premier-league/all-clubs/${Club.clubLogoSlug}`}
											data-slug={Club.clubLogoSlug}
											className={cardClass}
											title={Club.teamName}
										>
											{cardContent}
										</Link>
									);
								} else {
									return (
										<div
											key={Club.clubLogoSlug}
											data-slug={Club.clubLogoSlug}
											className={cardClass}
											title={Club.teamName}
										>
											{cardContent}
										</div>
									);
								}
						})}
					</div>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}