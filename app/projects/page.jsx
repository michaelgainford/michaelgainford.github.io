import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Footer from "@/components/footer/_Footer";
import {
	brandPageBackground,
	brandTextColour,
	globalPageStyles,
	globalWrapperFixedWidth,
} from "@/variables/Styles";

const pageIntroText = `A collection of projects that I have worked on, that make up the metaverse as part of this website. Some of these projects are still in progress and my intention is to continuously tend to all the pages. I see it as my digital garden. Different plants needing tending to in different way. Some are good for a few months, some need more regular attention. Each project has a brief description and a category that it belongs to. Click on a project to view the page.`;

export const metadata = {
	title: `Projects`,
	description: `A collection of different projects I have worked on covering a varying of interests and topics.`,
};

export default function Page_Projects() {
	return (
		<div className={`${globalPageStyles} ${brandPageBackground} ${brandTextColour}`}>
			<Header />
			<main className={`${globalWrapperFixedWidth}`}>
				<H1 text={`Projects`} />
				<PageIntro
					text={pageIntroText}
					classes_text_colour={`font-current`}
					classes_text_alignment={`text-center! text-balance!`}
					classes_font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6`}
					classes_font_styling={`font-medium tracking-wider`}
					classes_width={`max-[80dvw] lg:max-w-[800px]!`}
					classes_margin={`!md:-mt-4 mb-12`}
					classes_other={``}
				/>
				<ProjectsGrid />
			</main>
			<Footer />
		</div>
	);
}