export const metadata = {
	title: "The MAG Premier League",
	description: "The MAG Premier League is an online eFootball mini league. Currently consisting of 3 teams, playing a 16 game season.",
}

import { 
	globalPageStyles, 
	globalWrapperFixedWidth, 
	magPLPageBg 
} from "@/variables/Styles";

import Header from "@/components/header/Header";
import LeaguePageHeader from "@/components/projects/mag-premier-league/LeaguePageHeader";
import CardForCurrentSeason from "@/components/projects/mag-premier-league/CardForCurrentSeason";
import CardForCurrentTeams from "@/components/projects/mag-premier-league/CardForCurrentTeams";
import CardForUpcomingFixtures from "@/components/projects/mag-premier-league/CardForUpcomingFixtures";
import CardForLeagueRules from "@/components/projects/mag-premier-league/CardForLeagueRules";
import CardForPastWinners from "@/components/projects/mag-premier-league/CardForPastWinners";
import CardForPastSeasons from "@/components/projects/mag-premier-league/CardForPastSeasons";
import Footer from "@/components/footer/Footer";

export default function PAGE_THE_MAG_PREMIER_LEAGUE () {
  return (
    <div className={`${globalPageStyles} ${magPLPageBg} text-slate-200`}>
      	<Header />
      	<main className={`${globalWrapperFixedWidth} gap-12`}>
			<LeaguePageHeader />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 w-full [&_h2]:items-center justify-center mx-auto">
				<CardForCurrentSeason />
				<CardForUpcomingFixtures />
				<CardForLeagueRules />
				<CardForCurrentTeams />
				<CardForPastWinners />
				<CardForPastSeasons />
			</div>
      	</main>
      	<Footer />
    </div>
  );
}
