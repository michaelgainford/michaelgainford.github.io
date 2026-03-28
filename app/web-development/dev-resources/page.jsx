import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import DevResourcesGrid from "@/components/dev_resources/DevResourcesGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

export const metadata = {
	title: "Dev Resources",
	description:
		"A collection of some of my favourite web development resources that I use in my standard workflow, for experimenting with new technologies and tools I would like to highlight and share with my fellow Developers.",
};

const customStyles = "relative overflow-hidden bg-graph-paper-background bg-teal-950 text-slate-300";
const pageIntroText =
	"This is a collection of some of my favourite web development resources that I use either in my standard workflow, or for experimenting with new technologies. The list is not exhaustive, but it is a good starting point for anyone looking to expand their toolkit.";

export default function Page_DevResources() {
	return (
		<div className={`${globalPageStyles} ${customStyles}`}>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.18),transparent_70%)]" />
			<Header />
			<main className={globalWrapperFixedWidth}>
				<section className="w-full max-w-[1800px] rounded-2xl border border-teal-400/20 bg-black/35 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-6 lg:p-8">
					<div className="mx-auto mb-4 w-fit rounded-full border border-teal-300/40 bg-black/60 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-teal-200">
						Developer Toolkit
					</div>
					<H1 
						text="Dev Resources" 
						other_classes="text-slate-100"
					/>
					<PageIntro
						text={pageIntroText}
						text_colour="font-current"
						font_sizes="text-xs/5 md:text-sm/6 lg:text-base/7 !xl:text-base/6"
						classes_other="max-w-[900px]! text-balance! text-center!"
					/>
					<DevResourcesGrid />
				</section>
			</main>
			<Footer />
		</div>
	);
}
