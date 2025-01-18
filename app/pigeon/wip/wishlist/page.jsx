import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import WishlistGrid from "@/components/pigeon/WishlistGrid";
import Footer from "@/components/footer/_Footer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const pageIntroText = `A collection of projects that I have worked on, that are a part of this website. Some of these projects are still in progress, like my digital garden. Different plants needing tending to in different way. Each project has a brief description and a category that it belongs to. Click on a project to learn more about it.`;

export default function Page_Wishlist() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>
			<Header />
			<main className={globalWrapperFixedWidth}>
				<H1 text={`Wishlist`} />
				<PageIntro 
				  text={pageIntroText}
				  classes_text_colour={`font-current`}
				  classes_text_alignment={`text-center! text-balance!`}
				  classes_font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6`}
				  classes_font_styling={`font-medium tracking-wider`}
				  classes_width={`max-[80dvw] lg:max-w-[800px]!`}
				  classes_margin={`!md:-mt-4 mb-12`}
				  classes_other={``}
				/>
				<WishlistGrid />
			</main>
			<Footer />
		</div>
	);
}