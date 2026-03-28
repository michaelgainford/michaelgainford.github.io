import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import Page_Intro from "@/components/site_elements/Page_Intro";
import JokesGrid from "@/components/projects/jokes/JokesGrid";
import Footer from "@/components/footer/_Footer";

export default function Page_Jokes() {
	return (
		<div className={`${globalPageStyles} relative overflow-hidden bg-rose-950 bg-brick-wall-background text-white`}>
			<div className="stage-light" />
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.18),transparent_70%)]" />
			<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="w-full max-w-[1600px] rounded-2xl border border-rose-300/20 bg-black/35 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-6 lg:p-8">
					<div className="mx-auto mb-4 w-fit rounded-full border border-amber-300/40 bg-black/60 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-amber-200">
						Comedy Club
					</div>
					<H1 text="Jokes" other_classes="text-rose-50" />
					<Page_Intro 
						text="A collection of one-liner jokes. Some are dreadful, some are decent, and at least one should land."
						other_classes={`text-balance text-center text-rose-50/90`}
						classes_width="max-w-[900px]"
						classes_font_sizes="text-xs/6 lg:text-sm/7"
					/>
					<JokesGrid />
				</section>
			</main>
			<Footer />
		</div>
	)
}
