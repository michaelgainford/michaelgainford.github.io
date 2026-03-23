import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import PremierLeagueDataJSON from "@/data/data_for__englishpremierleague.json";
import { globalPageStyles } from "@/variables/Styles";

// Required for static export: generate all possible clubSlug params
export async function generateStaticParams() {
	const ClubsData = PremierLeagueDataJSON.Clubs;
	return ClubsData.map((club) => ({ clubSlug: club.clubLogoSlug }));
}

export default async function ClubPage({ params }) {
	const resolvedParams = await params;
	const { clubSlug } = resolvedParams;
	const ClubsData = PremierLeagueDataJSON.Clubs;
	const club = ClubsData.find((c) => c.clubLogoSlug === clubSlug);

	if (!club) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<Header />
				<h1 className="text-2xl font-bold mt-8">Club not found</h1>
				<Footer customTextColour="text-epl" />
			</div>
		);
	}

	const clubsDir = "/football/premier-league/club-logos";
	const logoSrc = `${clubsDir}/${club.clubLogoSlug}.svg`;

	const splitSeasonObject = Array.isArray(club.premierLeagueSeasonsSplit) && club.premierLeagueSeasonsSplit.length > 0
		? club.premierLeagueSeasonsSplit[0]
		: null;
	const seasonEntries = splitSeasonObject
		? Object.entries(splitSeasonObject)
				.map(([key, season]) => {
					const seasonNumberMatch = key.match(/\d+/);
					const seasonNumber = seasonNumberMatch ? Number(seasonNumberMatch[0]) : null;
					const position = season?.Pos;
					return { seasonNumber, position };
				})
				.filter((entry) => typeof entry.seasonNumber === "number" && typeof entry.position === "number" && entry.position > 0)
		: [];
	const seasonPositions = seasonEntries.map((entry) => entry.position);
	const seasonsInPremierLeague =
		seasonPositions.length > 0
			? seasonPositions.length
			: club.numberOfSeasonsInPremierLeague ?? "N/A";
	const premierLeagueTitles = seasonPositions.filter((pos) => pos === 1).length;
	const bestPremierLeagueFinish = seasonPositions.length > 0 ? Math.min(...seasonPositions) : null;
	const bestPositionEntries = seasonEntries.filter((entry) => entry.position === bestPremierLeagueFinish);
	const lowestPremierLeaguePosition = seasonPositions.length > 0 ? Math.max(...seasonPositions) : null;
	const lowestPositionEntries = seasonEntries.filter((entry) => entry.position === lowestPremierLeaguePosition);
	const formatOrdinal = (n) => {
		if (typeof n !== "number") return "N/A";
		const suffixes = ["th", "st", "nd", "rd"];
		const modHundred = n % 100;
		return `${n}${suffixes[(modHundred - 20) % 10] || suffixes[modHundred] || suffixes[0]}`;
	};
	const formatSeasonRange = (seasonNumber) => {
		if (typeof seasonNumber !== "number") return "N/A";
		const startYear = 1991 + seasonNumber;
		const endYear = startYear + 1;
		return `${String(startYear).slice(-2)}-${String(endYear).slice(-2)}`;
	};
	const lowestPositionSeasons = lowestPositionEntries
		.map((entry) => formatSeasonRange(entry.seasonNumber))
		.filter((season) => season !== "N/A");
	const bestPositionSeasons = bestPositionEntries
		.map((entry) => formatSeasonRange(entry.seasonNumber))
		.filter((season) => season !== "N/A");
	const bestPositionDisplay =
		typeof bestPremierLeagueFinish === "number" ? (
			<>
				{formatOrdinal(bestPremierLeagueFinish)}
				{bestPositionSeasons.length > 0 ? (
					<span className="text-xs opacity-50"> ({bestPositionSeasons.join(", ")})</span>
				) : null}
			</>
		) : (
			"N/A"
		);
	const lowestPositionDisplay =
		typeof lowestPremierLeaguePosition === "number" ? (
			<>
				{formatOrdinal(lowestPremierLeaguePosition)}
				{lowestPositionSeasons.length > 0 ? (
					<span className="text-xs opacity-50"> ({lowestPositionSeasons.join(", ")})</span>
				) : null}
			</>
		) : (
			"N/A"
		);
	const cardClass =
		"rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm";
	const capacityValue = (() => {
		const rawCap =
			Array.isArray(club.stadiumDetails) &&
			club.stadiumDetails.length > 0 &&
			club.stadiumDetails[0].stadiumCapacity
				? club.stadiumDetails[0].stadiumCapacity
				: club.stadiumCapacity;
		if (typeof rawCap === "number") return rawCap.toLocaleString();
		if (typeof rawCap === "string" && !isNaN(Number(rawCap))) return Number(rawCap).toLocaleString();
		return rawCap || "N/A";
	})();
	const clubBlurb =
		Array.isArray(club.clubDetails) &&
		club.clubDetails.length > 0 &&
		club.clubDetails[0].clubBlurb
			? club.clubDetails[0].clubBlurb
			: club.clubBlurb;
	const clubInfoItems = [
		{
			label: "Nickname",
			value:
				Array.isArray(club.clubDetails) &&
				club.clubDetails.length > 0 &&
				club.clubDetails[0].clubNickname
					? club.clubDetails[0].clubNickname
					: club.teamNickname,
		},
		{
			label: "Founded",
			value:
				Array.isArray(club.clubDetails) &&
				club.clubDetails.length > 0 &&
				club.clubDetails[0].clubFounded
					? club.clubDetails[0].clubFounded
					: club.yearFounded,
		},
		{
			label: "Manager",
			value:
				Array.isArray(club.clubDetails) &&
				club.clubDetails.length > 0 &&
				club.clubDetails[0].clubManager
					? club.clubDetails[0].clubManager
					: club.manager || "N/A",
		},
	];
	const stadiumItems = [
		{
			label: "Stadium Name",
			value:
				Array.isArray(club.stadiumDetails) &&
				club.stadiumDetails.length > 0 &&
				club.stadiumDetails[0].stadiumName
					? club.stadiumDetails[0].stadiumName
					: club.stadium,
		},
		{
			label: "Stadium Opened",
			value:
				Array.isArray(club.stadiumDetails) &&
				club.stadiumDetails.length > 0 &&
				club.stadiumDetails[0].stadiumOpened
					? club.stadiumDetails[0].stadiumOpened
					: "N/A",
		},
		{ label: "Capacity", value: capacityValue },
	];
	const leaguePerformance =
		Array.isArray(club.leaguePerformanceDetails) && club.leaguePerformanceDetails.length > 0
			? club.leaguePerformanceDetails[0]
			: null;
	const formatResultWithSeason = (value) => {
		if (typeof value !== "string") return value ?? "N/A";
		const match = value.match(/^(.*)\s\(([^)]+)\)$/);
		if (!match) return value;
		const mainText = match[1]?.trim();
		const seasonText = match[2]?.trim();
		if (!mainText || !seasonText) return value;

		return (
			<>
				{mainText}
				<span className="text-xs opacity-50"> ({seasonText})</span>
			</>
		);
	};
	const biggestWinRaw = leaguePerformance?.biggestWin ?? club.biggestWin ?? "N/A";
	const biggestDefeatRaw = leaguePerformance?.biggestLoss ?? club.biggestLoss ?? "N/A";
	const premierItems = [
		{ label: "Seasons in Premier League", value: seasonsInPremierLeague },
		{ label: "Premier League Titles", value: premierLeagueTitles },
		{ label: "Best Premier League Finish", value: bestPositionDisplay },
		{ label: "Lowest Premier League Position", value: lowestPositionDisplay },
		{ label: "Relegations", value: club.relegationsFromPremierLeague ?? "N/A" },
		{ label: "Biggest Win", value: formatResultWithSeason(biggestWinRaw) },
		{ label: "Biggest Defeat", value: formatResultWithSeason(biggestDefeatRaw) },
		{ label: "Current Premier League Team", value: club.currentPrem ? "Yes" : "No" },
	];

	return (
		<div className={`${globalPageStyles} bg-gradient-to-b from-slate-100 via-slate-50 to-white text-epl [&>header]:bg-epl-500 [&>header]:text-white [&>footer]:bg-epl [&>footer]:text-white`}>
			<Header />
			<main className="w-full text-epl">
				<div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
					<div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-8">
						<div className="h-1.5 w-full bg-gradient-to-r from-epl-500 via-amber-400 to-teal-400" />
						<div className="flex flex-col items-center px-6 py-8 text-center">
							<div className="rounded-full border border-slate-200 bg-slate-50 p-4 shadow-sm">
								<Image
									src={logoSrc}
									alt={club.teamName}
									width={120}
									height={120}
									className="h-24 w-auto"
								/>
							</div>
							<h1 className="mt-4 text-3xl font-bold tracking-tight">{club.teamName}</h1>
							<p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
								{club.currentPrem ? "Current Premier League Club" : "Former Premier League Club"}
							</p>
						</div>
					</div>

					<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 mb-6">
						<h2 className="mb-4 text-lg font-bold text-epl-700">Club Information</h2>
						<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
							{clubInfoItems.map((item) => (
								<li key={item.label} className={cardClass}>
									<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
									<p className="mt-2 text-base font-semibold leading-snug">{item.value}</p>
								</li>
							))}
						</ul>
						<div className={`${cardClass} text-left mt-4`}>
							<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Club Blurb</p>
							<p className="mt-2 text-sm leading-relaxed">{clubBlurb || "N/A"}</p>
						</div>
					</section>

					<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 mb-6">
						<h2 className="mb-4 text-lg font-bold text-epl-700">Stadium Information</h2>
						<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-4">
							{stadiumItems.map((item) => (
								<li key={item.label} className={cardClass}>
									<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
									<p className="mt-2 text-base font-semibold leading-snug">{item.value}</p>
								</li>
							))}
						</ul>
					</section>

					<section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
						<h2 className="mb-4 text-lg font-bold text-epl-700">Premier League Information</h2>
						<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
							{premierItems.map((item) => (
								<li key={item.label} className={cardClass}>
									<p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
									<p className="mt-2 text-base font-semibold leading-snug">{item.value}</p>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
