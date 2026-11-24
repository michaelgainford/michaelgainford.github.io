import { 
	brandPageBackground, 
	brandTextColour, 
	globalPageStyles, 
	globalWrapperFixedWidth 
} from "@/variables/Styles";
import Header from "@/components/header/_Header";
import HomeIntro, { HomeSnapshot } from "@/components/page_specific/home/Home_Intro";
import HomeSpotlight from "@/components/page_specific/home/Home_Spotlight";
import HomeResources from "@/components/page_specific/home/Home_Resources";
import HomeProjects from "@/components/page_specific/home/Home_Projects";
import Footer from "@/components/footer/_Footer";
import { DataForMoviesList } from "@/variables/ProjectMovies";
import PremierLeagueData from "@/data/data_for__englishpremierleague.json";

const clubPageCount = PremierLeagueData.Clubs.filter((club) => club.displayPage === true).length;

export default function Page_Home() {
	return (
		<div className={`${brandPageBackground} ${globalPageStyles} ${brandTextColour}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<HomeIntro movieCount={DataForMoviesList.length} clubPageCount={clubPageCount} />
				<HomeSpotlight />
				<div className="flex w-full gap-12 pb-4 max-lg:flex-col max-lg:gap-10 lg:gap-20 lg:pb-14 xl:gap-24 xl:pb-16 2xl:gap-32">
					<HomeProjects />
					<HomeResources />
					<div className="w-full lg:hidden">
						<HomeSnapshot movieCount={DataForMoviesList.length} clubPageCount={clubPageCount} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}