import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import ClubOverview from "@/components/projects/everton/ClubOverview";
import PlayersGrid from "@/components/projects/everton/PlayersGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

export default function Page_Everton() {
  	return (
    	<div className={`${globalPageStyles} bg-linear-to-r from-blue-900 to-blue-700 text-white`}>
      		<Header />
			<main className={globalWrapperFixedWidth}>
				<H1 text={`Everton`} />
				<PageIntro text={ClubOverview.page_intro} />
				<div className={`mt-8 grid w-full gap-4 first-line:gap-4`}>   
					<ClubOverview />
					<PlayersGrid />
				</div>
			</main>
      		<Footer />
    	</div>
  	);
}