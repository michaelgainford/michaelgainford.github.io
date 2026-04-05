import { 
	brandPageBackground, 
	brandTextColour, 
	globalPageStyles, 
	globalWrapperFixedWidth 
} from "@/variables/Styles";
import Header from "@/components/header/_Header";
import HomeIntro from "@/components/page_specific/home/Home_Intro";
import HomeSpotlight from "@/components/page_specific/home/Home_Spotlight";
import HomeResources from "@/components/page_specific/home/Home_Resources";
import HomeProjects from "@/components/page_specific/home/Home_Projects";
import Footer from "@/components/footer/_Footer";

export default function Page_Home() {
	return (
		<div className={`${brandPageBackground} ${globalPageStyles} ${brandTextColour}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<HomeIntro />
				<HomeSpotlight />
				<div className="flex w-full gap-12 pb-10 max-lg:flex-col max-lg:gap-10 lg:gap-20 lg:pb-14 xl:gap-24 xl:pb-16 2xl:gap-32">
					<HomeProjects />
					<HomeResources />
				</div>
			</main>
			<Footer />
		</div>
	);
}