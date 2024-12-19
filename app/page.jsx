import { 
	brandPageBackground, 
	brandTextColour, 
	globalPageStyles, 
	globalWrapperFixedWidth 
} from "@/variables/Styles";

import Header from "@/components/header/Header";
import HomeResources from "@/components/page_home/Home_Resources";
import HomeProjects from "@/components/page_home/Home_Projects";
import Footer from "@/components/footer/Footer";

export default function PAGE_HOME() {
	return (
		<div className={`${brandPageBackground} ${brandTextColour} ${globalPageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<div className="flex w-full mt-8 gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
					<HomeProjects />
					<HomeResources />
				</div>
			</main>
			<Footer />
		</div>
	);
}