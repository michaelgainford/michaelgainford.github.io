import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import PlanetsGrid from "@/components/projects/space/PlanetsGrid";
import SolarSystem from "@/components/projects/space/SolarSystem";
import Footer from "@/components/footer/_Footer";

import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "bg-black bg-topo-background text-sky-100";
const pageIntroText = "Our Solar System is a vast and fascinating place. It is made up of eight planets, each with its own unique characteristics and features. From the scorching heat of Mercury to the icy cold of Neptune, each planet has its own story to tell. Explore the wonders of our Solar System and learn more about the planets that call it home.";

export default function Page_Space() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<H1 text="Our Solar System" />
				<div className="flex flex-col items-center w-full lg:gap-8 xl:gap-12 2xl:gap-16">
					<div className="flex flex-col justify-center w-full gap-8 max-w-[80vw]">
						<h3 className="mt-8 mb-4 text-2xl text-center hidden">The Planets</h3>
						<PageIntro 
						  text={pageIntroText} 
						  text_colour="text-slate-100" 
						/>
						<PlanetsGrid />
					</div>
					<SolarSystem />
				</div>
			</main>
			<Footer />
		</div>
	);
}
