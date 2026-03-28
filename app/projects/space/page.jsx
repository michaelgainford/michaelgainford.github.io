import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import PlanetsGrid from "@/components/projects/space/PlanetsGrid";
import SolarSystem from "@/components/projects/space/SolarSystem";
import Footer from "@/components/footer/_Footer";

import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = "relative overflow-hidden bg-slate-950 bg-topo-background text-sky-100";
const pageIntroText = "Our Solar System is a vast and fascinating place. It is made up of eight planets, each with its own unique characteristics and features. From the scorching heat of Mercury to the icy cold of Neptune, each planet has its own story to tell. Explore the wonders of our Solar System and learn more about the planets that call it home.";

const quickFacts = [
	{ label: "Star", value: "The Sun" },
	{ label: "Planets", value: "8" },
	{ label: "Largest", value: "Jupiter" },
	{ label: "Smallest", value: "Mercury" },
];

export default function Page_Space() {
	return (
		<div className={`${globalPageStyles} ${pageStyles} text-slate-300`}>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.24),transparent_70%)]" />
			<div className="pointer-events-none absolute -top-24 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
			<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="w-full max-w-[1500px] rounded-2xl border border-sky-200/15 bg-slate-950/70 px-4 py-8 backdrop-blur-sm md:px-8 lg:px-10">
					<H1 text="Our Solar System" other_classes="!pb-6 lg:!pb-8" />
					<PageIntro
						text={pageIntroText}
						text_colour="text-sky-100/90"
						classes_width="max-w-[960px]"
						classes_font_sizes="text-xs/6 lg:text-sm/7"
						classes_margin="!mb-10"
					/>
					<div className="mb-6 grid w-full grid-cols-2 gap-3 md:grid-cols-4">
						{quickFacts.map((fact) => (
							<div key={fact.label} className="rounded-xl border border-sky-200/20 bg-slate-900/80 px-4 py-3 text-center shadow-lg shadow-black/20">
								<p className="text-xxs uppercase tracking-[0.14em] text-sky-200/80">{fact.label}</p>
								<p className="mt-1 text-xs font-semibold text-slate-100 lg:text-sm">{fact.value}</p>
							</div>
						))}
					</div>
				</section>

				<div className="flex w-full max-w-[1500px] flex-col gap-10 lg:gap-14 xl:gap-16">
					<section className="w-full rounded-2xl border border-sky-200/15 bg-slate-950/60 p-4 md:p-6 lg:p-8">
						<h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-sky-200 lg:text-base">The Planets</h2>
						<PlanetsGrid />
					</section>
					<section className="w-full rounded-2xl border border-sky-200/15 bg-slate-950/60 p-4 md:p-6 lg:p-8">
						<SolarSystem />
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
