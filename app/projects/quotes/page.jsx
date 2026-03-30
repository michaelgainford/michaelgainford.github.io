import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import Page_Intro from "@/components/site_elements/Page_Intro";
import AllQuotes from "@/components/projects/quotes/AllQuotes";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "bg-sky-900 bg-hexagons-background text-sky-200 relative overflow-hidden";

export default function Page_Quotes() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(100,200,255,0.16),transparent_70%)]" />
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<section className="w-full max-w-[1600px] rounded-2xl border border-sky-300/20 bg-black/35 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-6 lg:p-8">
					<H1 
						text="Quotes" 
						other_classes="text-sky-100" 
					/>
					<Page_Intro 
						text="A curated collection of inspiring and thought-provoking quotes to motivate and guide you."
						other_classes={`text-balance text-center text-sky-100/90`}
						classes_width="max-w-[900px]"
						classes_font_sizes="text-xs/6 lg:text-sm/7"
					/>
					<AllQuotes />
				</section>
			</main>
			<Footer />
		</div>
	);
}