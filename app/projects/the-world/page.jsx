import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import CountriesGrid from "@/components/projects/the-world/CountriesGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "relative overflow-hidden bg-linear-to-br from-[#083344] via-[#155e75] to-[#14532d] text-slate-100";
const pageIntroText = "Our planet has over 170 countries, over land, which covers approximately 29% of the Earth's surface. Each country has its own unique culture, history, and geography. Explore the countries of the world and learn more about the people and places that make up our diverse planet.";

export default function Page_TheWorld() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.22),transparent_70%)]" />
			<div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[280px] w-[280px] rounded-full bg-emerald-400/20 blur-3xl" />
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<section className="w-full max-w-[1700px] rounded-2xl border border-sky-100/20 bg-slate-950/65 p-4 shadow-2xl shadow-slate-950/35 backdrop-blur-sm md:p-6 lg:p-8">
					<H1 text={`Countries of the World`} other_classes="!pb-6" />
					<div className={`flex flex-col items-center w-full lg:gap-8 xl:gap-12 2xl:gap-16`}>
						<div className={`flex flex-col justify-center w-full gap-8 max-w-[95%] lg:max-w-[96%]`}>
							<PageIntro
								text={pageIntroText}
								text_colour="text-sky-100/90"
								classes_width="max-w-[960px]"
								classes_font_sizes="text-xs/6 lg:text-sm/7"
								classes_margin="!mb-8"
							/>
							<div className="mx-auto mb-2 max-w-[920px] rounded-xl border border-emerald-300/25 bg-emerald-400/10 px-4 py-3 text-center text-xs tracking-wide text-emerald-100 lg:text-sm">
								Use search, continent filters, sorting, and view mode to explore the dataset from different angles.
							</div>
						<CountriesGrid />
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
