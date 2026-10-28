"use client";

import PremierLeagueBreadcrumbs from "@/components/projects/english-premier-league/PremierLeagueBreadcrumbs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/Header";
import HeroPremierLeague from "@/components/hero/Hero_PremierLeague";
import H1 from "@/components/typography/H1_Span";
import Footer from "@/components/footer/Footer";
import PremierLeagueDataJSON from "@/data/data_for__englishpremierleague.json";

const ClubsData = PremierLeagueDataJSON.Clubs;
const FILTER_STORAGE_KEY = "epl-all-clubs-filter";
const VALID_FILTERS = ["all", "current", "former"];
const sortedByName = [...ClubsData].sort((a,b) => a.teamName > b.teamName ? 1 : -1);

import { premierLeagueYears } from "@/variables/ProjectPremierLeague";
import { globalPageStyles, mainStyles } from "@/variables/Styles";

const getLastSeason = (club) => {
	const seasons = club.premierLeagueSeasonsSplit?.[0] ?? {};
	const played = Object.entries(seasons)
		.filter(([, season]) => season?.Pos > 0)
		.map(([key]) => Number(key.replace("season", "")));
	return played.length > 0 ? premierLeagueYears[Math.max(...played) - 1] : null;
};

export default function Page_PremierLeagueAllClubs () {
	const [filter, setFilter] = useState("all");

	// Restore the saved filter after mount (avoids hydration mismatch)
	useEffect(() => {
		const saved = sessionStorage.getItem(FILTER_STORAGE_KEY);
		if (VALID_FILTERS.includes(saved)) setFilter(saved);
	}, []);

	const updateFilter = (value) => {
		setFilter(value);
		sessionStorage.setItem(FILTER_STORAGE_KEY, value);
	};

	// Filtering logic
	const filteredClubs = sortedByName.filter((club) => {
		if (filter === "all") return true;
		if (filter === "current") return club.currentPrem;
		if (filter === "former") return !club.currentPrem;
		return true;
	});

	return (
		<div className={`${globalPageStyles} bg-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<HeroPremierLeague />
				<PremierLeagueBreadcrumbs current="All Clubs" />
				<div className={`${mainStyles}`}>
					<H1 
						text="All Clubs"
						font_sizes="text-base lg:text-2xl!" 
						other_classes="uppercase pt-0! mb-0! mt-8" 
					/>
				</div>

				{/* Filter Buttons */}
				<div className={`${mainStyles} flex flex-row flex-nowrap gap-2 justify-center items-center mt-4 mb-4`}>
					<button
						className={`px-3 py-1 rounded border text-xs font-semibold transition-colors duration-200 ${filter === "all" ? "bg-epl-500 text-white border-epl-500" : "bg-white text-epl border-epl-200 hover:bg-epl-100"}`}
						onClick={() => updateFilter("all")}
						aria-pressed={filter === "all"}
					>
						All
					</button>
					<button
						className={`px-3 py-1 rounded border text-xs font-semibold transition-colors duration-200 ${filter === "current" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-epl border-epl-200 hover:bg-emerald-50"}`}
						onClick={() => updateFilter("current")}
						aria-pressed={filter === "current"}
					>
						Current
					</button>
					<button
						className={`px-3 py-1 rounded border text-xs font-semibold transition-colors duration-200 ${filter === "former" ? "bg-gray-400 text-white border-gray-400" : "bg-white text-epl border-epl-200 hover:bg-gray-100"}`}
						onClick={() => updateFilter("former")}
						aria-pressed={filter === "former"}
					>
						Former
					</button>
				</div>

				<div className="min-h-75 w-full px-2 sm:px-4 md:px-8 py-2 sm:py-4">
					<div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 max-sm:px-1 gap-3 sm:gap-4 xl:gap-10 justify-center">
						{filteredClubs.map((Club) => {
							const clubsDir = "/football/premier-league/club-logos";
							let clubLogosDir = clubsDir + '/' + Club.clubLogoSlug + ".svg";
							// Link cards only when the club page should be displayed
							const hasDisplayPage = Club.displayPage === true;
							const cardContent = (
								<>
									<Image
										src={clubLogosDir}
										alt={Club.teamName}
										width={80}
										height={80}
										className={
											`${Club.currentPrem
												? "grayscale-0"
												: "lg:grayscale lg:hover:grayscale-0 lg:duration-500 lg:transition-all"}
											h-12! md:h-16! 2xl:h-30! max-h-unset! w-auto! max-w-auto`
										}
									/>
									<p className={`text-xxs md:text-sm lg:text-lg ${Club.currentPrem ? "text-brand-main font-bold" : "text-brand-main font-bold lg:text-gray-400 lg:font-normal"} text-center`}>
										{Club.teamShortName ? Club.teamShortName : Club.teamName}
									</p>
									<span className={`max-md:hidden absolute top-0 right-0 p-1 ${Club.currentPrem ? `bg-emerald-200/30` : `bg-transparent`} text-xxs font-bold tracking-wide`}>
										{Club.currentPrem ? `Current` : (getLastSeason(Club) ? (
											<>
												<span className="text-red-600" aria-hidden="true">▼</span>
												<span className="sr-only">Last season: </span> {getLastSeason(Club)}
											</>
										) : `Former`)}
									</span>
								</>
							);
							// Shared card classes for both a and div
							const cardClass = `club-card relative flex flex-col items-center gap-2 md:gap-3 px-3 py-4 sm:p-4 m-0 sm:m-2 border border-slate-200 rounded-xl shadow-sm bg-white ${Club.currentPrem ? "current-prem" : "bg-gray-50 former-prem"} ${hasDisplayPage ? "cursor-pointer" : "cursor-default"} transition-transform hover:scale-103 max-w-xs w-full mx-auto text-center`;
							if (hasDisplayPage) {
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