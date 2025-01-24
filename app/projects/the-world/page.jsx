import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import CountriesGrid from "@/components/projects/the-world/CountriesGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "bg-linear-to-br from-[#00C9FF] to-[#92FE9D] text-slate-700";
const pageIntroText = "Our planet has over 170 countries, over land, which covers approximately 29% of the Earth's surface. Each country has its own unique culture, history, and geography. Explore the countries of the world and learn more about the people and places that make up our diverse planet.";

export default function Page_TheWorld() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<H1 text={`Countries of the World`} />
				<div className={`flex flex-col items-center w-full lg:gap-8 xl:gap-12 2xl:gap-16`}>
					<div className={`flex flex-col justify-center w-full gap-8 max-w-[80vw]`}>
						<h3 className={`mt-8 mb-4 text-2xl text-center hidden`}>The Planets</h3>
						<PageIntro text={pageIntroText} text_colour="text-sky-900" />
						<CountriesGrid />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
