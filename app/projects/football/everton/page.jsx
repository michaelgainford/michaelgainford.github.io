import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import Page_Intro from "@/components/site_elements/Page_Intro";
import ClubOverview from "@/components/projects/everton/ClubOverview";
import PlayersGrid from "@/components/projects/everton/PlayersGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import EvertonData from "@/data/data_for__everton";

const ClubData = EvertonData.ClubOverview;

export default function Page_Everton() {
  	return (
    	<div className={`${globalPageStyles} relative overflow-hidden bg-blue-950 text-white`}>
      		<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
      		<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="w-full max-w-[1600px] rounded-2xl border border-blue-400/20 bg-black/35 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-6 lg:p-8">
					<H1 text={ClubData.name} other_classes="text-blue-100" />
					<Page_Intro 
						text={ClubData.page_intro}
						other_classes={`text-balance text-center text-blue-100/90`}
						classes_width="max-w-[900px]"
						classes_font_sizes="text-xs/6 lg:text-sm/7"
					/>
					<ClubOverview />
					<PlayersGrid />
				</section>
			</main>
      		<Footer />
    	</div>
  	);
}