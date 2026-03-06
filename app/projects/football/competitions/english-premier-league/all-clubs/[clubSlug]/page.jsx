import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PremierLeagueDataJSON from "@/data/data_for__englishpremierleague.json";
import {
	brandPageBackground,
	brandTextColour,
	globalPageStyles,
	globalWrapperFixedWidth,
} from "@/variables/Styles";

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

	return (
		<div className={`${globalPageStyles} ${brandPageBackground} ${brandTextColour}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<div className="club-header border-2 border-amber-500 flex flex-col items-center">
					<Image
						src={logoSrc}
						alt={club.teamName}
						width={120}
						height={120}
						className="mb-4"
					/>
					<h1 className="text-3xl font-bold mb-2">{club.teamName}</h1>
					<p className="text-lg mb-4">
						{club.currentPrem
							? "Current Premier League Club"
							: "Former Premier League Club"}
					</p>
				</div>
				{/* Add more club details here as needed */}
				<div className="club-information-area px-8 border-4 w-full border-emerald-500">
					<h2 className="mb-2 text-lg font-bold text-amber-500">Club Information</h2>
					<ul className="mb-4">
						<li>Nickname: {club.teamNickname}</li>
						<li>Founded: {club.yearFounded}</li>
					</ul>

					<h2 className="mb-2 text-lg font-bold text-amber-500">Stadium Information</h2>
					<ul>
						<li>
							Stadium Name:{" "}
							{Array.isArray(club.stadiumDetails) &&
							club.stadiumDetails.length > 0 &&
							club.stadiumDetails[0].stadiumName
								? club.stadiumDetails[0].stadiumName
								: club.stadium}
						</li>
						<li>
							Stadium Opened:{" "}
							{Array.isArray(club.stadiumDetails) &&
							club.stadiumDetails.length > 0 &&
							club.stadiumDetails[0].stadiumOpened
								? club.stadiumDetails[0].stadiumOpened
								: "N/A"}
						</li>
						<li>
							Capacity:{" "}
							{Array.isArray(club.stadiumDetails) &&
							club.stadiumDetails.length > 0 &&
							club.stadiumDetails[0].stadiumCapacity
								? club.stadiumDetails[0].stadiumCapacity
								: club.stadiumCapacity}
						</li>
						<li>Manager: {club.manager}</li>
						<li>Premier League Titles: {club.premierLeagueTitles}</li>
						<li>Best Premier League Finish: {club.bestPremierLeagueFinish}</li>
						<li>
							Relegations from Premier League:{" "}
							{club.relegationsFromPremierLeague}
						</li>
						<li>Biggest Win: {club.biggestWin}</li>
						<li>Biggest Defeat: {club.biggestLoss}</li>
						<li>Current Prem? {club.currentPrem ? "Yes" : "No"}</li>
						<li>Club Blurb: {club.clubBlurb}</li>
					</ul>
				</div>
			</main>
			<Footer customTextColour="text-epl" />
		</div>
	);
}
